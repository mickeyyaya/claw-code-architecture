<script setup>
import DefaultTheme from 'vitepress/theme'
import DiagramZoom from './DiagramZoom.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <DiagramZoom />
    </template>
  </Layout>
</template>
