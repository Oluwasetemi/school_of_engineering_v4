<!-- global-top.vue -->
<script setup>
import { useNav } from '@slidev/client'

const { currentSlideNo } = useNav()
</script>

<template>
  <TocIcon v-if="currentSlideNo > 1" />
</template>
