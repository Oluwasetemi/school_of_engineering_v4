<script setup>
import { ref, watch, onMounted } from 'vue'

const currentIndex = ref(0)
const codeContainer = ref(null)
const canScrollUp = ref(false)
const canScrollDown = ref(false)
const ready = ref(false)

const examples = [
  {
    title: 'HTML Code For The Popover',
    description:
      '',
    code: `<div>
    <button class="menu-btn" popovertarget="menu">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="">
    <span class="sr-only">Open menu</span>
  </button>

  <nav popover id="menu">
    <button class="close-btn" popovertarget="menu" popovertargetaction="hide">
      <span aria-hidden="true">❌</span>
      <span class="sr-only">Close menu</span>
    </button>
    <ul>
      <li><a href="#">Typography</a></li>
      <li><a href="#">Foundations</a></li>
      <li><a href="#">Color</a></li>
      <li><a href="#">Interactions</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Responsive</a></li>
    </ul>
  </nav>

  <h1>JS-Free hamburger menu demo</h1>
  <h2>With the Popover API</h2>
  <p>Click open the hamburger menu to see a demo of JavaScript-free interaction handling! By using the
    <code>popover</code> attribute, you can allow the browser to handle the keyboard management (including navigation
    via <code>esc</code>, <code>spacebar</code>, and <code>enter</code>), optional light-dismiss (clicking outside the
    boundaries of the popover), and click handlers such as on the open and close buttons.
  </p>
    </div>`,
    lang: 'html',
  },
  {
    title: 'CSS Code For The Popover',
    description:
      '',
    code: `
    @import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@800&display=swap");

/* Animation */

#menu {
  width: 250px;
  height: 100%;

  /*  undo popover styles  */
  border: none;
  padding: 0;
  margin: 0;
  left: auto;

  /*  animate  */
  transition: translate 0.5s ease-out, display 0.5s ease-out allow-discrete,
    overlay 0.5s ease-out allow-discrete;
  translate: 250px 0;

  &::backdrop {
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s;
  }

  &:popover-open {
    translate: 0 0;

    &::backdrop {
      opacity: 1;
    }

    @starting-style {
      translate: 250px 0;

      &::backdrop {
        opacity: 0;
      }
    }
  }
}

/* Other styles */

@property --col-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: #5f1dff;
}

@property --col-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: #ff20a3;
}

.menu-btn {
  position: fixed;
  top: 50px;
  right: 250px;
  background: none;
  border: none;
  filter: drop-shadow(2px 2px 0 #ff6dee);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  filter: grayscale(1) drop-shadow(2px 2px 0 #ff6dee);
}

ul {
  display: grid;
  gap: 1rem;
  padding: 0;
  margin: 3.5rem 0 0 2rem;
}

li {
  list-style: none;
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

code,
kbd {
  background: lavender;
  border: 1px solid #7f1afc;
  border-radius: 0.5rem;
  padding: 0 0.25rem;
}

h1,
h2,
a {
  font-family: "Alegreya Sans SC";
  margin: 0;
}

h1,
a {
  background: linear-gradient(45deg in oklch, var(--col-2), var(--col-1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a {
  transition: --col-2 0.25s;

  &:hover {
    --col-2: var(--col-1);
  }
}

h2 {
  color: #7f1afc;
}

p {
  max-width: 40ch;
  line-height: 1.5;
  font-size: 1.25rem;
}

body {
  font-size: 1.5rem;
  font-family: system-ui;
  overflow-x: hidden;
  padding: 2rem;
}`,
    lang: 'html',
  },
]

// Navigation functions
const nextExample = () => {
  currentIndex.value = (currentIndex.value + 1) % examples.length
}

const prevExample = () => {
  currentIndex.value =
    (currentIndex.value - 1 + examples.length) % examples.length
}

// Check scroll position
const checkScroll = () => {
  if (!codeContainer.value) return

  const { scrollTop, scrollHeight, clientHeight } = codeContainer.value
  canScrollUp.value = scrollTop > 0
  canScrollDown.value = scrollTop + clientHeight < scrollHeight
}

// Watch for changes and check scroll
watch(currentIndex, async () => {
  await formatCode()

  if (codeContainer.value) {
    codeContainer.value.scrollTop = 0
  }
  setTimeout(checkScroll, 100)
})

onMounted(async () => {
  checkScroll()
  if (codeContainer.value) {
    codeContainer.value.addEventListener('scroll', checkScroll)
  }
  await formatCode()
  ready.value = true
})

async function formatCode() {
  // Format code
  const { default: prettier } = await import(
    'prettier'
  )
  const prettierPluginHtml = await import('https://unpkg.com/prettier@3.4.2/plugins/html.mjs')

  const prettierPluginCss = await import('https://unpkg.com/prettier@3.4.2/plugins/postcss.mjs')

  const code = examples[currentIndex.value].code
  const options = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
  }

  const formattedCode = await prettier.format(code, {
    parser: currentIndex.value === 0 ? 'html' : 'css',
    plugins: currentIndex.value === 0 ? [prettierPluginHtml]: [prettierPluginCss],
    ...options,
  })

  examples[currentIndex.value].code = formattedCode

  // highlight code
  const { codeToHtml } = await import('https://esm.sh/shiki@1.0.0')

  examples[currentIndex.value].code = await codeToHtml(formattedCode, {
    lang: currentIndex.value === 0 ? 'html' : 'css',
    theme: 'vitesse-dark',
  })
}
</script>
<template>
  <div
    class="w-full max-w-4xl mx-auto p-6 space-y-4 bg-white rounded-xl shadow-lg"
  >
    <div
      class="flex justify-between items-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-white"
    >
      <button
        @click="prevExample"
        class="p-2 rounded-full hover:bg-white/20 disabled:opacity-50 transition-all"
        :disabled="currentIndex === 0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <div class="text-center">
        <h2 class="text-2xl font-bold">{{ examples[currentIndex].title }}</h2>
        <p class="text-white/80">{{ examples[currentIndex].description }}</p>
      </div>
      <button
        @click="nextExample"
        class="p-2 rounded-full hover:bg-white/20 disabled:opacity-50 transition-all"
        :disabled="currentIndex === examples.length - 1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>

    <!-- Code Display Section -->
    <div class="relative bg-gray-900 rounded-lg shadow-inner">
      <!-- Toolbar -->
      <div
        class="flex items-center justify-between px-4 py-2 border-b border-gray-700"
      >
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="text-gray-400 text-sm">
          Example {{ currentIndex + 1 }} of {{ examples.length }}
        </div>
      </div>

      <!-- Code Content -->
      <div class="relative">
        <div
          ref="codeContainer"
          v-if="ready"
          v-html="examples[currentIndex]?.code"
          class="max-h-[300px] overflow-y-auto p-6 text-sm font-mono leading-relaxed text-gray-100 whitespace-pre-wrap break-words scrollbar-custom"
        ></div>

        <!-- Scroll Indicators -->
        <div
          v-show="canScrollUp"
          class="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"
        ></div>
        <div
          v-show="canScrollDown"
          class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
        ></div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="flex justify-center space-x-3 mt-6">
      <button
        v-for="(_, index) in examples"
        :key="index"
        @click="currentIndex = index"
        class="group relative"
      >
        <span
          :class="[
            'block w-4 h-4 rounded-full transition-all duration-300',
            index === currentIndex
              ? 'bg-blue-500 scale-125'
              : 'bg-gray-300 hover:bg-blue-300',
          ]"
        ></span>
        <span
          class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
        >
          Example {{ index + 1 }}
        </span>
      </button>
    </div>
  </div>
</template>


<style scoped>
.scrollbar-custom {
  scrollbar-width: thin;
  scrollbar-color: #4b5563 #1f2937;
}

.scrollbar-custom::-webkit-scrollbar {
  width: 8px;
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 4px;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
