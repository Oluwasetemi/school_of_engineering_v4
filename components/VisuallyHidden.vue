<template>
  <span class="sr-only" v-bind="$attrs">
    <slot />
  </span>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>
