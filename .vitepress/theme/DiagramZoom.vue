<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const overlay = ref(false)
const zoomedSvg = ref('')

function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  const mermaidContainer = target.closest('.mermaid-diagram, .mermaid')
  if (!mermaidContainer) return

  const svg = mermaidContainer.querySelector('svg')
  if (!svg) return

  zoomedSvg.value = svg.outerHTML
  overlay.value = true
  document.body.style.overflow = 'hidden'
}

function close() {
  overlay.value = false
  zoomedSvg.value = ''
  document.body.style.overflow = ''
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && overlay.value) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClick)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="overlay" class="diagram-overlay" @click.self="close">
      <button class="diagram-close" @click="close" aria-label="Close">&times;</button>
      <div class="diagram-hint">Click outside or press Esc to close</div>
      <div class="diagram-zoomed" v-html="zoomedSvg"></div>
    </div>
  </Teleport>
</template>

<style scoped>
.diagram-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: zoom-out;
  animation: fadeIn 0.15s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.diagram-close {
  position: absolute;
  top: 16px;
  right: 24px;
  background: none;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s;
  line-height: 1;
}

.diagram-close:hover {
  opacity: 1;
}

.diagram-hint {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

.diagram-zoomed {
  max-width: 95vw;
  max-height: 90vh;
  overflow: auto;
  background: white;
  border-radius: 12px;
  padding: 24px;
  cursor: default;
}

.diagram-zoomed :deep(svg) {
  max-width: 100%;
  height: auto;
  min-width: 600px;
}

.dark .diagram-zoomed {
  background: #1a1a2e;
}
</style>
