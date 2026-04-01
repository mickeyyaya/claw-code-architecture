<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  technique: string
  title?: string
}>()

const expanded = ref(false)
</script>

<template>
  <div :class="['why-it-works', { expanded }]">
    <button class="why-header" @click="expanded = !expanded">
      <div class="why-badge">WHY THIS WORKS</div>
      <span class="why-title">{{ title ?? technique }}</span>
      <span class="why-toggle">{{ expanded ? '▾' : '▸' }}</span>
    </button>
    <div v-show="expanded" class="why-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.why-it-works {
  margin: 20px 0;
  border-radius: 12px;
  border: 2px solid transparent;
  background: linear-gradient(var(--vp-c-bg), var(--vp-c-bg)) padding-box,
              linear-gradient(135deg, #8b5cf6, #3b82f6, #22c55e) border-box;
  overflow: hidden;
  transition: all 0.3s ease;
}

.why-it-works:hover {
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.15);
}

.why-it-works.expanded {
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
}

.why-header {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px 18px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.why-badge {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 3px 10px;
  border-radius: 4px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  color: white;
  white-space: nowrap;
  flex-shrink: 0;
}

.why-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  flex: 1;
}

.why-toggle {
  font-size: 16px;
  color: var(--vp-c-text-3);
  transition: transform 0.2s;
}

.why-body {
  padding: 0 18px 18px;
  font-size: 14px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.why-body :deep(h4) {
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 16px 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.why-body :deep(p) {
  margin: 8px 0;
}

.why-body :deep(.analogy) {
  padding: 10px 14px;
  margin: 10px 0;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.06);
  border-left: 3px solid #8b5cf6;
  font-style: italic;
}

.why-body :deep(.without-it) {
  padding: 10px 14px;
  margin: 10px 0;
  border-radius: 8px;
  background: rgba(239, 68, 68, 0.06);
  border-left: 3px solid #ef4444;
}

.why-body :deep(.fun-fact) {
  padding: 10px 14px;
  margin: 10px 0;
  border-radius: 8px;
  background: rgba(34, 197, 94, 0.06);
  border-left: 3px solid #22c55e;
}
</style>
