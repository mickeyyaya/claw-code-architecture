<script setup lang="ts">
const props = defineProps<{
  file: string
  line?: number
  lines?: string
}>()

const GITHUB_BASE = 'https://github.com/ultraworkers/claw-code/blob/main'

const fullPath = props.file.startsWith('rust/') || props.file.startsWith('src/')
  ? props.file
  : props.file

const href = (() => {
  let url = `${GITHUB_BASE}/${fullPath}`
  if (props.line) {
    url += `#L${props.line}`
  } else if (props.lines) {
    url += `#L${props.lines}`
  }
  return url
})()

const fileName = fullPath.split('/').pop() || fullPath

const ext = fileName.split('.').pop() || ''
const langIcons: Record<string, string> = {
  rs: '🦀',
  toml: '📦',
  json: '{}',
  md: '📄',
  ts: 'TS',
  js: 'JS',
  py: '🐍',
}
const icon = langIcons[ext] || '📄'
</script>

<template>
  <a :href="href" target="_blank" rel="noopener" class="source-link" :title="fullPath">
    <span class="source-icon">{{ icon }}</span>
    <span class="source-path"><slot>{{ fullPath }}</slot></span>
    <span v-if="line" class="source-line">:{{ line }}</span>
    <span v-else-if="lines" class="source-line">:{{ lines }}</span>
    <svg class="source-external" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  </a>
</template>

<style scoped>
.source-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 10px 2px 8px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.6;
  transition: all 0.15s;
  white-space: nowrap;
}

.source-link:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.source-icon {
  font-size: 12px;
  flex-shrink: 0;
}

.source-path {
  font-weight: 500;
}

.source-line {
  color: var(--vp-c-text-3);
  font-weight: 400;
}

.source-external {
  opacity: 0.4;
  flex-shrink: 0;
  margin-left: 2px;
}

.source-link:hover .source-external {
  opacity: 0.8;
}
</style>
