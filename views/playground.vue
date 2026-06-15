<template>
  <div class="flex flex-col h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans">
    <header class="flex items-center justify-between px-5 py-2.5 bg-[#1a1a1a] border-b border-[#333] shrink-0">
      <div class="flex items-center gap-4">
        <button
          class="px-3.5 py-1.5 bg-[#2a2a2a] text-[#ccc] border border-[#444] rounded-md cursor-pointer text-sm transition-colors duration-150 hover:bg-[#333] hover:text-[#eee]"
          @click="router.push('/')"
        >
          ← Back to slides
        </button>
        <h1 class="m-0 text-base font-semibold text-[#e5e5e5]">JS / TS Playground</h1>
      </div>
      <a
        class="px-3.5 py-1.5 bg-blue-500 text-white rounded-md no-underline text-sm font-medium transition-opacity duration-150 hover:opacity-85"
        href="https://js-playground-alpha.vercel.app/playground/js-ts"
        target="_blank"
        rel="noopener noreferrer"
      >
        ↗ Open in new tab
      </a>
    </header>

    <div class="relative flex-1 overflow-hidden">
      <div v-if="!isLoaded" class="absolute inset-0 flex items-center justify-center bg-[#111]">
        <div v-if="isLoading" class="w-10 h-10 border-4 border-[#333] border-t-blue-500 rounded-full animate-spin" />
        <div v-else class="flex flex-col items-center gap-4">
          <p class="m-0 text-[#666] text-sm">js-playground-alpha.vercel.app</p>
          <button
            class="px-8 py-3 bg-blue-500 text-white border-0 rounded-lg text-base font-semibold cursor-pointer transition-opacity duration-150 hover:opacity-85"
            @click="load"
          >
            ▶ Launch Playground
          </button>
        </div>
      </div>
      <iframe
        v-if="isLoaded"
        src="https://js-playground-alpha.vercel.app/playground/js-ts"
        title="JS / TS Playground"
        allow="cross-origin-isolated"
        class="w-full h-full border-0 block"
        @load="isLoading = false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoaded = ref(false)
const isLoading = ref(false)

const load = () => {
  isLoading.value = true
  isLoaded.value = true
}
</script>
