<!-- global-bottom.vue -->
<script setup>
import { ref, computed, watch } from 'vue'
import GitHub from '~icons/mdi/github'
import { useWebSocket } from '@vueuse/core'

// Basic WebSocket connection
const { data } = useWebSocket('wss://api.oluwasetemi.dev/ws/visitors', {
  immediate: true
});

// Reactive visitor count
const visitorCount = ref(0);

// Watch for new data and update count
watch(data, (newData) => {
  if (newData) {
    try {
      const parsed = JSON.parse(newData);
      if (parsed.type === 'visitor_count' && typeof parsed.count === 'number') {
        visitorCount.value = parsed.count;
      }
    } catch (error) {
      console.error('Error parsing WebSocket data:', error);
    }
  }
}, { immediate: true });

// Computed property for display
const displayCount = computed(() => {
  return visitorCount.value || 0;
});
</script>
<template>
  <footer
    class="select-none abs-tr p-2 mb-9 mr-9 hover:underline hover:underline-offset-8 focus:ring active:text-red-500"
  >
    <span>👀 {{ displayCount }}</span>
    <a
      href="https://github.com/Oluwasetemi"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHub style="font-size: 1em" />
      @Oluwasetemi
    </a>
  </footer>
</template>
