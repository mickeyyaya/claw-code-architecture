<script setup lang="ts">
const props = defineProps<{
  prev?: { text: string; link: string }
  next?: { text: string; link: string }
  current: number
}>()
</script>

<template>
  <div class="session-nav">
    <div class="session-progress">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${(current / 10) * 100}%` }"></div>
      </div>
      <span class="progress-label">Session {{ current }} of 10</span>
    </div>
    <div class="session-links">
      <a v-if="prev" :href="prev.link" class="nav-link prev">
        <span class="nav-arrow">&larr;</span>
        <span class="nav-text">{{ prev.text }}</span>
      </a>
      <div v-else class="nav-spacer"></div>
      <a v-if="next" :href="next.link" class="nav-link next">
        <span class="nav-text">{{ next.text }}</span>
        <span class="nav-arrow">&rarr;</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.session-nav {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.session-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #8b5cf6, #3b82f6);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-label {
  font-size: 13px;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

.session-links {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s;
}

.nav-link:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.nav-arrow {
  font-size: 18px;
}

.nav-spacer {
  flex: 1;
}

.next {
  margin-left: auto;
}
</style>
