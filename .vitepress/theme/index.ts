import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import Layout from "./Layout.vue";
import Annotation from "./Annotation.vue";
import SessionNav from "./SessionNav.vue";
import ArchitectureHero from "./ArchitectureHero.vue";
import CrateCard from "./CrateCard.vue";
import WhyItWorks from "./WhyItWorks.vue";
import Quiz from "./Quiz.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("Annotation", Annotation);
    app.component("SessionNav", SessionNav);
    app.component("ArchitectureHero", ArchitectureHero);
    app.component("CrateCard", CrateCard);
    app.component("WhyItWorks", WhyItWorks);
    app.component("Quiz", Quiz);
  },
} satisfies Theme;
