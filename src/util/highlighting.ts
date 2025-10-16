import { HLJSApi, Language } from 'highlight.js';

export const languages = {
  text: ['plain', 'log'],
  config: ['yaml', 'json', 'xml', 'ini'],
  code: [
    'java',
    'javascript',
    'typescript',
    'python',
    'kotlin',
    'scala',
    'cpp',
    'csharp',
    'shell',
    'ruby',
    'rust',
    'sql',
    'go',
    'lua',
    'swift',
    'c',
  ],
  web: ['html', 'css', 'scss', 'php', 'graphql'],
  misc: ['diff', 'dockerfile', 'markdown', 'proto'],
};

export const languageIds = Object.values(languages).flat(1);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function minecraftLogs(_: HLJSApi): Language {
  return {
    name: 'Minecraft Log',
    case_insensitive: true,
    contains: [
      {
        className: "meta",
        begin: /\[\d+:\d+:\d+( INFO|WARN|ERROR|DEBUG|FATAL)?]( \[(.*?)\/(?:INFO|WARN|ERROR|DEBUG|FATAL)])?:/,
        end: /:/,
        excludeEnd: false,
        relevance: 200
      },
      {
        className: "keyword",
        begin: /\[\w+(?:\.\w+)*]/,
        relevance: 5
      },
      {
        className: "symbol",
        begin: /^\s+at\s+[\w$.]+\(.*?\)/,
        relevance: 10
      },
      {
        className: "title",
        begin: /^\s*[A-Za-z0-9_.]+(?:Exception|Error)(?=:|\s|$)/,
        relevance: 10
      },
      {
        className: "comment",
        begin: /^\s+\.{3}.*$/,
        relevance: 5
      },
      {
        className: "string",
        begin: /.+/,
        relevance: 0
      }
    ]
  };
}
