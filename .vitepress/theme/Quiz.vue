<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  question: string
  options: string[]
  correct: number
  explanation: string
}>()

const selected = ref<number | null>(null)
const revealed = ref(false)

function select(index: number) {
  if (revealed.value) return
  selected.value = index
  revealed.value = true
}
</script>

<template>
  <div class="quiz">
    <div class="quiz-header">
      <span class="quiz-icon">?</span>
      <span class="quiz-label">Quick Check</span>
    </div>
    <p class="quiz-question">{{ question }}</p>
    <div class="quiz-options">
      <button
        v-for="(option, i) in options"
        :key="i"
        :class="[
          'quiz-option',
          {
            selected: selected === i,
            correct: revealed && i === correct,
            wrong: revealed && selected === i && i !== correct,
          },
        ]"
        @click="select(i)"
      >
        <span class="option-letter">{{ String.fromCharCode(65 + i) }}</span>
        <span class="option-text">{{ option }}</span>
        <span v-if="revealed && i === correct" class="option-check">&#10003;</span>
        <span v-if="revealed && selected === i && i !== correct" class="option-x">&#10007;</span>
      </button>
    </div>
    <div v-if="revealed" class="quiz-explanation" :class="{ success: selected === correct }">
      <strong>{{ selected === correct ? 'Correct!' : 'Not quite.' }}</strong>
      {{ explanation }}
    </div>
  </div>
</template>

<style scoped>
.quiz {
  margin: 24px 0;
  padding: 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.quiz-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.quiz-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #8b5cf6;
  color: white;
  font-size: 14px;
  font-weight: 700;
}

.quiz-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #8b5cf6;
}

.quiz-question {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 14px;
  line-height: 1.5;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1.5px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  color: var(--vp-c-text-1);
  transition: all 0.15s;
}

.quiz-option:hover:not(.correct):not(.wrong) {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.05);
}

.option-letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}

.option-text {
  flex: 1;
}

.option-check, .option-x {
  font-size: 18px;
  font-weight: 700;
}

.option-check { color: #22c55e; }
.option-x { color: #ef4444; }

.quiz-option.correct {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
}

.quiz-option.correct .option-letter {
  background: #22c55e;
  color: white;
}

.quiz-option.wrong {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
}

.quiz-option.wrong .option-letter {
  background: #ef4444;
  color: white;
}

.quiz-explanation {
  margin-top: 14px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  background: rgba(239, 68, 68, 0.06);
  color: var(--vp-c-text-2);
}

.quiz-explanation.success {
  background: rgba(34, 197, 94, 0.06);
}
</style>
