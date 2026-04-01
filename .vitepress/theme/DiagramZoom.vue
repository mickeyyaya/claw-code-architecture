<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const overlay = ref(false)
const zoomedSvg = ref('')
const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragStartY = ref(0)
const lastTranslateX = ref(0)
const lastTranslateY = ref(0)

const MIN_SCALE = 0.3
const MAX_SCALE = 5
const ZOOM_STEP = 0.25

function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement

  // Don't intercept clicks on links inside mermaid (clickable nodes)
  if (target.closest('a')) return

  const mermaidContainer = target.closest('.mermaid-diagram, .mermaid')
  if (!mermaidContainer) return

  const svg = mermaidContainer.querySelector('svg')
  if (!svg) return

  zoomedSvg.value = svg.outerHTML
  scale.value = 1
  translateX.value = 0
  translateY.value = 0
  overlay.value = true
  document.body.style.overflow = 'hidden'
}

function close() {
  overlay.value = false
  zoomedSvg.value = ''
  document.body.style.overflow = ''
}

function zoomIn() {
  scale.value = Math.min(MAX_SCALE, scale.value + ZOOM_STEP)
}

function zoomOut() {
  scale.value = Math.max(MIN_SCALE, scale.value - ZOOM_STEP)
}

function resetZoom() {
  scale.value = 1
  translateX.value = 0
  translateY.value = 0
}

function handleWheel(e: WheelEvent) {
  e.preventDefault()
  const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP
  scale.value = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale.value + delta))
}

function handleMouseDown(e: MouseEvent) {
  if ((e.target as HTMLElement).closest('.zoom-controls')) return
  isDragging.value = true
  dragStartX.value = e.clientX
  dragStartY.value = e.clientY
  lastTranslateX.value = translateX.value
  lastTranslateY.value = translateY.value
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  translateX.value = lastTranslateX.value + (e.clientX - dragStartX.value)
  translateY.value = lastTranslateY.value + (e.clientY - dragStartY.value)
}

function handleMouseUp() {
  isDragging.value = false
}

function handleKeydown(e: KeyboardEvent) {
  if (!overlay.value) return
  if (e.key === 'Escape') close()
  if (e.key === '+' || e.key === '=') zoomIn()
  if (e.key === '-') zoomOut()
  if (e.key === '0') resetZoom()
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
    <div
      v-if="overlay"
      class="diagram-overlay"
      @click.self="close"
      @wheel.prevent="handleWheel"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp"
    >
      <button class="diagram-close" @click="close" aria-label="Close">&times;</button>

      <div class="zoom-controls">
        <button @click="zoomIn" title="Zoom in (+)">+</button>
        <span class="zoom-level">{{ Math.round(scale * 100) }}%</span>
        <button @click="zoomOut" title="Zoom out (-)">−</button>
        <button @click="resetZoom" class="reset-btn" title="Reset (0)">Reset</button>
      </div>

      <div class="diagram-hint">Scroll to zoom &middot; Drag to pan &middot; Esc to close</div>

      <div
        class="diagram-zoomed"
        :class="{ dragging: isDragging }"
        :style="{
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
          transformOrigin: 'center center',
        }"
        v-html="zoomedSvg"
      ></div>
    </div>
  </Teleport>
</template>

<style scoped>
.diagram-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  animation: fadeIn 0.15s ease;
  overflow: hidden;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.diagram-close {
  position: absolute;
  top: 12px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s;
  line-height: 1;
  z-index: 10;
}

.diagram-close:hover {
  opacity: 1;
}

.zoom-controls {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  padding: 4px 8px;
  z-index: 10;
}

.zoom-controls button {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.zoom-controls button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.zoom-level {
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 600;
  min-width: 48px;
  text-align: center;
}

.reset-btn {
  font-size: 12px !important;
  width: auto !important;
  padding: 0 10px !important;
}

.diagram-hint {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.45);
  font-size: 12px;
  z-index: 10;
  white-space: nowrap;
}

.diagram-zoomed {
  background: white;
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.1s ease-out;
  cursor: grab;
  user-select: none;
}

.diagram-zoomed.dragging {
  cursor: grabbing;
  transition: none;
}

.diagram-zoomed :deep(svg) {
  max-width: 100%;
  height: auto;
  min-width: 500px;
  pointer-events: none;
}

.dark .diagram-zoomed {
  background: #1e1e2e;
}
</style>
