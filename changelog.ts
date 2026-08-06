export interface ChangelogEntry {
  version: string
  date: string
  changes: string[]
}

export const entries: ChangelogEntry[] = [
  {
    version: 'v2.2',
    date: '2026-08-05',
    changes: [
      'Added the software engineering lifecycle and a practical engineering workflow',
      'Added Web foundations covering URLs, DNS, HTTPS, HTTP, clients, servers, and browser rendering',
      'Added full-stack and AI application architecture with responsible AI and API-key safety guidance',
      'Added DOM, Developer Tools, web paths, metadata, HTML validation, testing, and progressive enhancement lessons',
      'Added declarative UI notes for command invokers, dialog dismissal, popover anchoring, and interest invokers',
      'Expanded form coverage with textarea and select controls',
      'Updated the Sections overview with the new Web, AI, and HTML foundation pages',
      'Improved scrolling and responsive footer navigation on long custom pages',
    ],
  },
  {
    version: 'v2.1',
    date: '2026-06-11',
    changes: [
      'Added /playground, /html-playground, /routes, and /changelog custom pages',
      'Added setup/code-runners.ts with HTML, Vue SFC, and JSX live runners',
      'Added setup/routes.ts and setup/shiki.ts with light/dark theme support',
      'Added TocIcon, GeneralQuote, VisuallyHidden components',
      'Added layouts/iframe-lazy.vue for embedded demos',
      'Added global-top.vue for persistent TOC navigation button',
      'Upgraded Tips.vue to UnoCSS-utility-based implementation',
      'Added prettier config with slidev parser support',
    ],
  },
  {
    version: 'v2.0',
    date: '2025-09-01',
    changes: [
      'Added Web Components section (template, shadow DOM, custom elements, slots)',
      'Added Dialogs and Popovers section',
      'Added Details and Summary (accordion) section',
      'Added HTML API section',
      'Added WebSocket-based visitor counter in footer',
    ],
  },
  {
    version: 'v1.0',
    date: '2024-01-01',
    changes: [
      'Initial School of Engineering course notes for AltSchool Africa',
      'Covers Software Engineering fundamentals, programming concepts, algorithms',
      'HTML: elements, semantics, attributes, forms, tables, media',
      'Git, GitHub, and Terminal basics',
    ],
  },
]
