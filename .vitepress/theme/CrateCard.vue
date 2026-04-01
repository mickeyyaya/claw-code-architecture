<script setup lang="ts">
defineProps<{
  name: string
  analogy: string
  color?: string
  description: string
  files?: string[]
}>()
</script>

<template>
  <div class="crate-card" :style="{ '--crate-color': color ?? '#6b7280' }">
    <div class="crate-header">
      <code class="crate-name">{{ name }}</code>
      <span class="crate-analogy">{{ analogy }}</span>
    </div>
    <p class="crate-desc">{{ description }}</p>
    <div v-if="files?.length" class="crate-files">
      <code v-for="f in files" :key="f" class="crate-file">{{ f }}</code>
    </div>
  </div>
</template>

<style scoped>
.crate-card {
  padding: 16px 20px;
  margin: 12px 0;
  border-radius: 10px;
  border-left: 4px solid var(--crate-color);
  background: var(--vp-c-bg-soft);
  transition: transform 0.15s;
}

.crate-card:hover {
  transform: translateX(4px);
}

.crate-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
}

.crate-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--crate-color);
}

.crate-analogy {
  font-size: 13px;
  color: var(--vp-c-text-3);
  font-style: italic;
}

.crate-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
}

.crate-files {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.crate-file {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-3);
}
</style>
