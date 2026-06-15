<template>
  <div class="absolute top-4 left-4 z-10">
    <button
      @click="go(2)"
      class="p-2 rounded-full bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm border dark:border-white border-opacity-20"
      title="Go to Table of Contents"
    >
      <VisuallyHidden>
        Go to Table of Contents
      </VisuallyHidden>
      <div class="i-mdi-format-list-bulleted text-2xl"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useNav } from '@slidev/client'

const { go } = useNav()
</script>
