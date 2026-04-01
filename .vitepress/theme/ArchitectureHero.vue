<script setup lang="ts">
const sessions = [
  { num: 1, title: 'The Big Picture', emoji: '🔭', color: '#8b5cf6', link: '/architecture/session-01-big-picture' },
  { num: 2, title: 'The Crate Map', emoji: '🗺️', color: '#7c3aed', link: '/architecture/session-02-crate-map' },
  { num: 3, title: 'Conversation Loop', emoji: '🔄', color: '#22c55e', link: '/architecture/session-03-conversation-loop' },
  { num: 4, title: 'Tools & Registry', emoji: '🔧', color: '#f97316', link: '/architecture/session-04-tools-and-registry' },
  { num: 5, title: 'Permissions', emoji: '🔐', color: '#22c55e', link: '/architecture/session-05-permissions' },
  { num: 6, title: 'Config & Prompts', emoji: '⚙️', color: '#22c55e', link: '/architecture/session-06-config-and-prompts' },
  { num: 7, title: 'Streaming & API', emoji: '📡', color: '#3b82f6', link: '/architecture/session-07-streaming' },
  { num: 8, title: 'CLI & Rendering', emoji: '🖥️', color: '#8b5cf6', link: '/architecture/session-08-cli-and-rendering' },
  { num: 9, title: 'Hooks & Plugins', emoji: '🔌', color: '#ef4444', link: '/architecture/session-09-hooks-plugins-mcp' },
  { num: 10, title: 'Testing', emoji: '🧪', color: '#22c55e', link: '/architecture/session-10-testing-patterns' },
]
</script>

<template>
  <div class="hero-grid">
    <a v-for="s in sessions" :key="s.num" :href="s.link" class="session-card" :style="{ '--card-color': s.color }">
      <div class="card-number">{{ s.num }}</div>
      <div class="card-emoji">{{ s.emoji }}</div>
      <div class="card-title">{{ s.title }}</div>
    </a>
  </div>
</template>

<style scoped>
.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin: 24px 0;
}

.session-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 2px solid transparent;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.session-card:hover {
  border-color: var(--card-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-number {
  font-size: 11px;
  font-weight: 700;
  color: var(--card-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.card-emoji {
  font-size: 32px;
  margin-bottom: 8px;
}

.card-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-align: center;
}
</style>
