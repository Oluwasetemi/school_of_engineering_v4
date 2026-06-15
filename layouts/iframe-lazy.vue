<template>
  <div ref="containerRef" class="relative w-full h-full min-h-[400px]">
    <div
      v-if="!isLoaded"
      class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg"
    >
      <div class="text-center text-gray-500 dark:text-gray-400">
        <div v-if="isLoading" class="flex items-center justify-center">
          <div
            class="w-10 h-10 border-4 border-gray-200 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin"
          />
        </div>
        <div v-else class="flex flex-col items-center gap-3">
          <p
            class="text-xs text-gray-400 max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap m-0"
          >
            {{ url }}
          </p>
          <div class="flex gap-3">
            <button
              class="px-5 py-2 rounded-md text-base font-semibold cursor-pointer no-underline border-0 bg-blue-500 text-white transition-opacity duration-200 hover:opacity-75"
              @click="loadIframe"
            >
              ▶ Run
            </button>
            <a
              class="px-5 py-2 rounded-md text-base font-semibold cursor-pointer no-underline border-0 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-opacity duration-200 hover:opacity-75"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ Open
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isLoaded" class="relative w-full h-full">
      <a
        class="absolute top-2 right-2 z-10 bg-black/55 text-white px-[10px] py-1 rounded text-sm no-underline transition-colors duration-200 hover:bg-black/80"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
        title="Open in browser"
        >↗</a
      >
      <iframe
        ref="iframeRef"
        :src="url"
        :title="title || 'Embedded content'"
        class="w-full h-full border-0 rounded-lg block"
        frameborder="0"
        allowfullscreen
        @load="onIframeLoad"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  url: string
  title?: string
  autoLoad?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoLoad: false,
})

const iframeRef = ref<HTMLIFrameElement>()
const containerRef = ref<HTMLElement>()
const isLoaded = ref(false)
const isLoading = ref(false)

const loadIframe = async () => {
  if (isLoaded.value || isLoading.value) return
  isLoading.value = true
  await new Promise((resolve) => setTimeout(resolve, 100))
  isLoaded.value = true
  isLoading.value = false
}

const onIframeLoad = () => {
  isLoading.value = false
}

onMounted(() => {
  if (props.autoLoad) {
    const { stop } = useIntersectionObserver(
      containerRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting && !isLoaded.value) {
          loadIframe()
          stop()
        }
      },
      { threshold: 0.1 },
    )
  }
})
</script>
