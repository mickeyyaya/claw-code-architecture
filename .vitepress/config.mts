import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default withMermaid(
  defineConfig({
    title: 'Claw Code Architecture',
    vite: {
      plugins: [basicSsl()],
    },
    description: 'Interactive guide to the Claw Code project architecture',
    base: '/',
    head: [
      ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🦞</text></svg>' }]
    ],
    themeConfig: {
      logo: { light: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🦞</text></svg>', dark: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🦞</text></svg>' },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Start Learning', link: '/architecture/session-01-big-picture' },
        { text: 'Crate Map', link: '/architecture/session-02-crate-map' }
      ],
      sidebar: {
        '/architecture/': [
          {
            text: 'Getting Started',
            items: [
              { text: 'Learning Path', link: '/architecture/' },
            ]
          },
          {
            text: 'Foundations',
            items: [
              { text: '1. The Big Picture', link: '/architecture/session-01-big-picture' },
              { text: '2. The Crate Map', link: '/architecture/session-02-crate-map' },
            ]
          },
          {
            text: 'Core Internals',
            items: [
              { text: '3. Conversation Loop', link: '/architecture/session-03-conversation-loop' },
              { text: '4. Tools & Registry', link: '/architecture/session-04-tools-and-registry' },
              { text: '5. Permissions', link: '/architecture/session-05-permissions' },
              { text: '6. Config & Prompts', link: '/architecture/session-06-config-and-prompts' },
            ]
          },
          {
            text: 'Deep Dives',
            items: [
              { text: '7. Streaming & API', link: '/architecture/session-07-streaming' },
              { text: '8. CLI & Rendering', link: '/architecture/session-08-cli-and-rendering' },
              { text: '9. Hooks, Plugins, MCP', link: '/architecture/session-09-hooks-plugins-mcp' },
              { text: '10. Testing Patterns', link: '/architecture/session-10-testing-patterns' },
            ]
          }
        ]
      },
      outline: {
        level: [2, 3],
        label: 'On this page'
      },
      search: {
        provider: 'local'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/instructkr/claw-code' }
      ],
      footer: {
        message: 'Interactive Architecture Guide',
        copyright: 'Built with VitePress'
      }
    },
    mermaid: {
      theme: 'default',
      securityLevel: 'loose',
    },
    mermaidPlugin: {
      class: 'mermaid-diagram',
    },
  })
)
