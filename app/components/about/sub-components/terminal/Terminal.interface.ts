export interface TerminalBlankLine {
  type: 'blank';
}

export interface TerminalTextLine {
  type: 'text';
  content: string;
}

export interface TerminalKvLine {
  type: 'kv';
  key: string;
  val: string;
}

export interface TerminalSkillLine {
  type: 'skill';
  label: string;
  pct: number;
}

export type TerminalLine = TerminalBlankLine | TerminalTextLine | TerminalKvLine | TerminalSkillLine;

export interface TerminalCommand {
  prompt: string;
  lines: TerminalLine[];
}
