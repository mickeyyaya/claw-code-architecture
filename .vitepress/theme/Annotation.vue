<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  type?: 'info' | 'tip' | 'warning' | 'detail' | 'analogy'
  title?: string
}>()

const expanded = ref(false)

const icons: Record<string, string> = {
  info: 'i',
  tip: '!',
  warning: '!',
  detail: '+',
  analogy: '~',
}

const labels: Record<string, string> = {
  info: 'Side Note',
  tip: 'Pro Tip',
  warning: 'Watch Out',
  detail: 'Deep Dive',
  analogy: 'Think of it like...',
}

const type = props.type ?? 'info'
</script>

<template>
  <div :class="['annotation', `annotation-${type}`, { expanded }]">
    <button class="annotation-header" @click="expanded = !expanded">
      <span class="annotation-icon">{{ icons[type] }}</span>
      <span class="annotation-title">{{ title ?? labels[type] }}</span>
      <span class="annotation-toggle">{{ expanded ? '−' : '+' }}</span>
    </button>
    <div v-show="expanded" class="annotation-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.annotation {
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  transition: all 0.2s ease;
}

.annotation:hover {
  border-color: var(--vp-c-brand-1);
}

.annotation-header {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-align: left;
}

.annotation-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.annotation-toggle {
  margin-left: auto;
  font-size: 18px;
  color: var(--vp-c-text-3);
}

.annotation-body {
  padding: 0 16px 16px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.annotation-body :deep(p) {
  margin: 8px 0;
}

.annotation-body :deep(code) {
  font-size: 13px;
}

/* Type colors */
.annotation-info { background: rgba(59, 130, 246, 0.05); }
.annotation-info .annotation-icon { background: #3b82f6; color: white; }

.annotation-tip { background: rgba(34, 197, 94, 0.05); }
.annotation-tip .annotation-icon { background: #22c55e; color: white; }

.annotation-warning { background: rgba(245, 158, 11, 0.05); }
.annotation-warning .annotation-icon { background: #f59e0b; color: white; }

.annotation-detail { background: rgba(139, 92, 246, 0.05); }
.annotation-detail .annotation-icon { background: #8b5cf6; color: white; }

.annotation-analogy { background: rgba(236, 72, 153, 0.05); }
.annotation-analogy .annotation-icon { background: #ec4899; color: white; }
</style>
