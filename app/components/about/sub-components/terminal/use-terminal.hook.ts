import { useCallback, useEffect, useRef, useState } from 'react';
import { TERMINAL_COMMANDS } from './terminal.config';
import { TerminalLine } from './Terminal.interface';

const CHAR_DELAY = 18;
const BLANK_DELAY = 60;
const LINE_DELAY = 10;
const KV_DELAY = 40;
const SKILL_DELAY = 40;
const SKILL_BAR_DELAY = 50;

export const useTerminal = () => {
  const [activeCmd, setActiveCmd] = useState('about');
  const [outputHtml, setOutputHtml] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const typingRef = useRef(false);
  const hasAutoRun = useRef(false);

  const runCommand = useCallback((key: string) => {
    if (typingRef.current) return;
    typingRef.current = true;
    setActiveCmd(key);
    setOutputHtml('');
    setCursorVisible(true);

    const cmd = TERMINAL_COMMANDS[key];
    const fullPrompt = cmd.prompt;
    let charIdx = 0;
    let html = '';

    const typePrompt = () => {
      if (charIdx < fullPrompt.length) {
        charIdx++;
        const typed = fullPrompt.slice(0, charIdx);
        html = `<span class="tPrompt">&gt; </span><span class="tCommand">${typed}</span>`;
        setOutputHtml(html);
        setTimeout(typePrompt, CHAR_DELAY);
      } else {
        renderLines(cmd.lines, 0);
      }
    };

    const renderLines = (lines: TerminalLine[], idx: number) => {
      if (idx >= lines.length) {
        setCursorVisible(false);
        typingRef.current = false;
        setTimeout(() => {
          document.querySelectorAll('[data-skill-fill]').forEach((bar) => {
            const el = bar as HTMLElement;
            el.style.width = el.dataset.skillFill + '%';
          });
        }, SKILL_BAR_DELAY);
        return;
      }

      const line = lines[idx];

      if (line.type === 'blank') {
        html += '<span class="tLine tBlank"></span>';
        setOutputHtml(html);
        setTimeout(() => renderLines(lines, idx + 1), BLANK_DELAY);
      } else if (line.type === 'text') {
        let i = 0;
        const lineStart = html.length;
        html += '<span class="tLine"></span>';

        const typeText = () => {
          if (i <= line.content.length) {
            const before = html.slice(0, lineStart);
            const text = line.content.slice(0, i);
            html = before + `<span class="tLine">${text}</span>`;
            setOutputHtml(html);
            i++;
            setTimeout(typeText, CHAR_DELAY);
          } else {
            setTimeout(() => renderLines(lines, idx + 1), LINE_DELAY);
          }
        };
        typeText();
      } else if (line.type === 'kv') {
        html += `<span class="tLine"><span class="tLabel">${line.key}</span><span class="tValue">${line.val}</span></span>`;
        setOutputHtml(html);
        setTimeout(() => renderLines(lines, idx + 1), KV_DELAY);
      } else if (line.type === 'skill') {
        html += `<span class="tLine"><span class="tLabel">${line.label}</span><span class="skillBarBg"><span class="skillBarFill" data-skill-fill="${line.pct}"></span></span> <span class="tValue tPct">${line.pct}%</span></span>`;
        setOutputHtml(html);
        setTimeout(() => renderLines(lines, idx + 1), SKILL_DELAY);
      }
    };

    typePrompt();
  }, []);

  const handleInView = useCallback(() => {
    if (!hasAutoRun.current) {
      hasAutoRun.current = true;
      runCommand('about');
    }
  }, [runCommand]);

  useEffect(() => {
    return () => {
      typingRef.current = false;
    };
  }, []);

  return {
    activeCmd,
    outputHtml,
    cursorVisible,
    isTyping: typingRef,
    runCommand,
    handleInView,
  };
};
