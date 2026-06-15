<template>
  <div class="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans py-10 px-5">
    <div class="max-w-4xl mx-auto">
      <div class="mb-10">
        <button
          class="bg-transparent border border-[#444] text-[#999] px-3.5 py-1.5 rounded-md cursor-pointer text-sm mb-5 transition-colors duration-150 hover:border-[#666] hover:text-[#ccc]"
          @click="router.push('/')"
        >
          ← Back to slides
        </button>
        <h1 class="m-0 text-4xl font-bold mb-2">
          <span class="text-gradient">Sections</span>
        </h1>
        <p class="m-0 text-[#666] text-sm">School of Engineering — AltSchool Africa</p>
      </div>

      <div v-for="group in groups" :key="group.label" class="mb-8">
        <h2 class="text-xs font-bold uppercase tracking-widest text-[#555] mb-3">{{ group.label }}</h2>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3">
          <button
            v-for="section in group.sections"
            :key="section.slug"
            class="flex flex-col items-center gap-2 py-5 px-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl cursor-pointer transition-colors duration-150 text-[#e5e5e5] font-sans hover:bg-[#222] hover:border-blue-500"
            @click="router.push(`/#/${section.slug}`)"
          >
            <span class="text-2xl">{{ section.icon }}</span>
            <span class="text-sm font-medium text-center leading-tight">{{ section.name }}</span>
          </button>
        </div>
      </div>

      <div class="flex gap-4 pt-6 border-t border-[#2a2a2a]">
        <button class="bg-transparent border-0 p-0 text-blue-500 text-sm cursor-pointer transition-opacity duration-150 hover:opacity-75" @click="router.push('/changelog')">📋 Changelog</button>
        <button class="bg-transparent border-0 p-0 text-blue-500 text-sm cursor-pointer transition-opacity duration-150 hover:opacity-75" @click="router.push('/playground')">▶ JS/TS Playground</button>
        <button class="bg-transparent border-0 p-0 text-blue-500 text-sm cursor-pointer transition-opacity duration-150 hover:opacity-75" @click="router.push('/html-playground')">🌐 HTML Playground</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const groups = [
  {
    label: 'Programming Fundamentals',
    sections: [
      { slug: 'what-is-software-engineering', name: 'Software Engineering', icon: '🏗️' },
      { slug: 'algorithms-and-flow-charts', name: 'Algorithms & Flowcharts', icon: '📊' },
      { slug: 'problem-solving', name: 'Problem Solving', icon: '🧩' },
      { slug: 'programming-paradigms', name: 'Programming Paradigms', icon: '🔀' },
      { slug: 'programming-concepts', name: 'Programming Concepts', icon: '💡' },
      { slug: 'variables', name: 'Variables', icon: '📦' },
      { slug: 'data-types', name: 'Data Types', icon: '🔢' },
      { slug: 'control-structures', name: 'Control Structures', icon: '🔁' },
      { slug: 'functions-or-methods', name: 'Functions', icon: '⚙️' },
      { slug: 'data-structures', name: 'Data Structures', icon: '🗂️' },
      { slug: 'algorithms', name: 'Algorithms', icon: '🔍' },
      { slug: 'object-oriented-concepts', name: 'OOP Concepts', icon: '🧱' },
      { slug: 'recursion', name: 'Recursion', icon: '🔄' },
      { slug: 'error-handling', name: 'Error Handling', icon: '🚨' },
    ],
  },
  {
    label: 'HTML',
    sections: [
      { slug: 'getting-started-with-html', name: 'Getting Started', icon: '🌐' },
      { slug: 'html-element-structure', name: 'Element Structure', icon: '🏷️' },
      { slug: 'block-and-inline-element', name: 'Block & Inline', icon: '📐' },
      { slug: 'working-with-head', name: 'Head & Meta', icon: '🧠' },
      { slug: 'understanding-semantic-html', name: 'Semantic HTML', icon: '📖' },
      { slug: 'attributes', name: 'Attributes', icon: '🔧' },
      { slug: 'text-basics', name: 'Text Basics', icon: '✍️' },
      { slug: 'link', name: 'Links', icon: '🔗' },
      { slug: 'html-tables', name: 'Tables', icon: '📊' },
      { slug: 'form', name: 'Forms', icon: '📝' },
      { slug: 'html-images-syntax', name: 'Images & Media', icon: '🖼️' },
      { slug: 'html-api', name: 'HTML API', icon: '⚡' },
      { slug: 'details-and-summary', name: 'Details & Summary', icon: '🗂️' },
      { slug: 'dialogs-and-popovers', name: 'Dialogs & Popovers', icon: '💬' },
      { slug: 'what-are-web-components', name: 'Web Components', icon: '🧩' },
    ],
  },
  {
    label: 'Tools',
    sections: [
      { slug: 'terminal', name: 'Terminal', icon: '💻' },
      { slug: 'git', name: 'Git', icon: '🌿' },
      { slug: 'github', name: 'GitHub', icon: '🐙' },
    ],
  },
]
</script>
