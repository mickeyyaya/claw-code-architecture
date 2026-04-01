import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Annotation from './Annotation.vue'
import SessionNav from './SessionNav.vue'
import ArchitectureHero from './ArchitectureHero.vue'
import CrateCard from './CrateCard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Annotation', Annotation)
    app.component('SessionNav', SessionNav)
    app.component('ArchitectureHero', ArchitectureHero)
    app.component('CrateCard', CrateCard)
  }
} satisfies Theme
