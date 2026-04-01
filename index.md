---
layout: home
hero:
  name: Claw Code
  text: Architecture Guide
  tagline: Learn how an AI agent CLI harness works, step by step — even if you're just starting out.
  actions:
    - theme: brand
      text: Start Learning
      link: /architecture/session-01-big-picture
    - theme: alt
      text: View Learning Path
      link: /architecture/
features:
  - icon: 🔭
    title: Beginner Friendly
    details: Every concept is explained with everyday analogies before diving into code. No prior Rust knowledge needed.
  - icon: 📊
    title: Interactive Diagrams
    details: Mermaid diagrams with clickable nodes, flowcharts showing data flow, and architecture maps you can explore.
  - icon: 🧩
    title: 10 Learning Sessions
    details: From "What is this?" to "How do I test it?" — structured sessions that build on each other.
  - icon: 🦞
    title: Real Codebase
    details: Based on Claw Code, a 20,000-line Rust project with 9 crates. Learn by studying real architecture.
---

<script setup>
import ArchitectureHero from './.vitepress/theme/ArchitectureHero.vue'
</script>

## Jump to a Session

<ArchitectureHero />

## What You'll Learn

This guide walks you through the architecture of **Claw Code** — a Rust-based AI agent CLI harness (similar to Claude Code). By the end, you'll understand:

- How an AI agent decides to call tools and processes the results
- How streaming responses work under the hood
- How permissions protect you from dangerous operations
- How the configuration system layers project, user, and machine settings
- How trait-based design makes the whole system testable

Each session takes about **10-15 minutes** to read and includes interactive diagrams you can explore.
