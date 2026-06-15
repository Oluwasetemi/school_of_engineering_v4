<template>
  <div class="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans py-10 px-5">
    <div class="max-w-2xl mx-auto">
      <div class="mb-10">
        <button
          class="bg-transparent border border-[#444] text-[#999] px-3.5 py-1.5 rounded-md cursor-pointer text-sm mb-4 transition-colors duration-150 hover:border-[#666] hover:text-[#ccc]"
          @click="router.push('/#/2')"
        >
          ← Back to slides
        </button>
        <h1 class="m-0 text-4xl font-bold flex flex-col gap-1">
          Changelog
          <span class="text-base font-normal text-[#666]">School of Engineering — HTML Class Notes</span>
        </h1>
      </div>

      <ul
        class="relative list-none p-0 m-0 pl-7 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#2a2a2a]"
      >
        <li v-for="entry in entries" :key="entry.version" class="relative mb-8">
          <div class="absolute left-[-24px] top-[14px] w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0f0f0f]" />
          <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-6 py-5">
            <div class="flex items-center gap-3 mb-3.5">
              <span class="bg-blue-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full tracking-wide">
                {{ entry.version }}
              </span>
              <span class="text-[#666] text-sm">{{ entry.date }}</span>
            </div>
            <ul class="m-0 pl-4.5 flex flex-col gap-1.5">
              <li v-for="(change, i) in entry.changes" :key="i" class="text-[#bbb] text-sm leading-relaxed">
                {{ change }}
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <div class="flex gap-4 mt-10 pt-6 border-t border-[#2a2a2a]">
        <button class="bg-transparent border-0 p-0 text-blue-500 text-sm cursor-pointer transition-opacity duration-150 hover:opacity-75" @click="router.push('/playground')">▶ JS/TS Playground</button>
        <button class="bg-transparent border-0 p-0 text-blue-500 text-sm cursor-pointer transition-opacity duration-150 hover:opacity-75" @click="router.push('/html-playground')">🌐 HTML Playground</button>
        <button class="bg-transparent border-0 p-0 text-blue-500 text-sm cursor-pointer transition-opacity duration-150 hover:opacity-75" @click="router.push('/routes')">📋 Course Sections</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { entries } from '../changelog'

const router = useRouter()
</script>
