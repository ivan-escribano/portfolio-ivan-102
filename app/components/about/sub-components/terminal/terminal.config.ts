import { TerminalCommand } from './Terminal.interface';

export const TERMINAL_COPY = {
  title: 'ivan@portfolio ~ %',
  buttons: [
    { key: 'about', label: '--about' },
    { key: 'skills', label: '--skills' },
    { key: 'stack', label: '--stack' },
  ],
};

export const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
  about: {
    prompt: 'ivan --about',
    lines: [
      { type: 'blank' },
      { type: 'text', content: "Hey, I'm Ivan. AI Engineer & Software Engineer" },
      { type: 'text', content: 'based in Barcelona.' },
      { type: 'blank' },
      { type: 'text', content: 'I build software that integrates real AI to solve' },
      { type: 'text', content: 'everyday problems not demos, not prototypes,' },
      { type: 'text', content: 'products people rely on.' },
      { type: 'blank' },
      { type: 'text', content: 'From designing AI agents to shipping SaaS platforms' },
      { type: 'text', content: 'used by 500+ companies, I focus on building the' },
      { type: 'text', content: 'software of tomorrow to solve the problems of today.' },
      { type: 'blank' },
      { type: 'text', content: 'I believe the best engineers understand both' },
      { type: 'text', content: 'the code and the user behind it.' },
    ],
  },
  skills: {
    prompt: 'ivan --skills',
    lines: [
      { type: 'blank' },
      { type: 'kv', key: 'Problem Solving  ', val: 'Turning complex problems into simple solutions' },
      { type: 'kv', key: 'AI Integration   ', val: 'Agents, RAG systems, LLMs in production' },
      { type: 'kv', key: 'Full Stack Dev   ', val: 'React, Next.js, Node.js, Python' },
      { type: 'kv', key: 'System Design    ', val: 'Scalable architectures, APIs, databases' },
      { type: 'kv', key: 'Product Thinking ', val: 'User-first approach, business-aware decisions' },
    ],
  },
  stack: {
    prompt: 'ivan --stack',
    lines: [
      { type: 'blank' },
      { type: 'kv', key: 'Frontend  ', val: 'React · Next.js · TypeScript · CSS' },
      { type: 'kv', key: 'Backend   ', val: 'Node.js · Python · REST · Express' },
      { type: 'kv', key: 'AI / ML   ', val: 'LLM Integration · LangGraph · RAG · MCP · AI Agents' },
      { type: 'kv', key: 'Database  ', val: 'PostgreSQL · MongoDB · Redis · Vector DBs' },
      { type: 'kv', key: 'DevOps    ', val: 'Docker · Vercel · Azure · CI/CD' },
      { type: 'kv', key: 'Tools     ', val: 'Git · Cursor · Claude Code · GH Copilot' },
    ],
  },
};
