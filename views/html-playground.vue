<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: #f0f4ff;
    }
    h1 { color: #3b82f6; }
  </style>
</head>
<body>
  <h1>Hello, HTML! 🌐</h1>
  <script>
    console.log('Playground ready!')
  <\/script>
</body>
</html>`

const code = ref(DEFAULT_HTML)
const logs = ref<{ type: string; message: string }[]>([])
const iframeEl = ref<HTMLIFrameElement | null>(null)
const autoRun = ref(true)
const srcdoc = ref(DEFAULT_HTML)

function run() {
  logs.value = []
  srcdoc.value = code.value
}

function clearConsole() {
  logs.value = []
}

function reset() {
  code.value = DEFAULT_HTML
  run()
}

function onIframeLoad() {
  const win = iframeEl.value?.contentWindow as any
  if (!win) return

  const addLog = (type: string, args: unknown[]) => {
    const fmt = (v: unknown) => {
      if (v === null) return 'null'
      if (v === undefined) return 'undefined'
      if (typeof v === 'string') return `"${v}"`
      if (typeof v === 'object') {
        try { return JSON.stringify(v, null, 2) } catch { return String(v) }
      }
      return String(v)
    }
    logs.value.push({ type, message: args.map(fmt).join(' ') })
  }

  const orig = {
    log: win.console.log.bind(win.console),
    warn: win.console.warn.bind(win.console),
    error: win.console.error.bind(win.console),
    info: win.console.info.bind(win.console),
  }

  win.console.log = (...args: unknown[]) => { orig.log(...args); addLog('log', args) }
  win.console.warn = (...args: unknown[]) => { orig.warn(...args); addLog('warn', args) }
  win.console.error = (...args: unknown[]) => { orig.error(...args); addLog('error', args) }
  win.console.info = (...args: unknown[]) => { orig.info(...args); addLog('log', args) }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Tab') {
    e.preventDefault()
    const el = e.target as HTMLTextAreaElement
    const start = el.selectionStart
    const end = el.selectionEnd
    code.value = code.value.slice(0, start) + '  ' + code.value.slice(end)
    setTimeout(() => { el.selectionStart = el.selectionEnd = start + 2 })
  }
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault()
    run()
  }
}

watch(code, () => { if (autoRun.value) run() })
run()
</script>

<template>
  <div class="flex flex-col h-screen bg-[#0f0f0f] text-[#e5e5e5] font-mono">
    <header class="flex items-center justify-between px-5 py-[10px] bg-[#1a1a1a] border-b border-[#333] flex-shrink-0">
      <div class="flex items-center gap-4">
        <button
          class="px-[14px] py-[6px] bg-[#2a2a2a] text-[#ccc] border border-[#444] rounded-md cursor-pointer text-sm transition-colors duration-150 hover:bg-[#333]"
          @click="router.push('/')"
        >
          ← Back to slides
        </button>
        <h1 class="m-0 text-base font-semibold text-[#e5e5e5]">HTML Playground</h1>
      </div>
      <div class="flex items-center gap-3">
        <label class="flex items-center gap-2 text-sm text-[#aaa] cursor-pointer select-none">
          <input v-model="autoRun" type="checkbox" class="accent-blue-500" />
          Auto-run
        </label>
        <button
          class="px-[14px] py-[6px] bg-[#2a2a2a] text-[#ccc] border border-[#444] rounded-md cursor-pointer text-sm transition-colors duration-150 hover:bg-[#333]"
          @click="reset"
        >
          Reset
        </button>
        <button
          class="px-[14px] py-[6px] bg-blue-500 text-white rounded-md cursor-pointer text-sm font-medium transition-opacity duration-150 hover:opacity-85"
          @click="run"
        >
          ▶ Run
        </button>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden">
      <div class="flex flex-col w-1/2 border-r border-[#333]">
        <div class="px-3 py-1 bg-[#1a1a1a] border-b border-[#333] text-xs text-[#666]">
          HTML · Ctrl+Enter to run · Tab to indent
        </div>
        <textarea
          v-model="code"
          spellcheck="false"
          class="flex-1 w-full resize-none bg-[#0d0d0d] text-[#d4d4d4] p-4 text-sm leading-relaxed outline-none border-none font-mono"
          @keydown="onKeydown"
        />
      </div>

      <div class="flex flex-col w-1/2 overflow-hidden">
        <div class="flex-1 overflow-hidden border-b border-[#333]">
          <div class="px-3 py-1 bg-[#1a1a1a] border-b border-[#333] text-xs text-[#666]">Preview</div>
          <iframe
            ref="iframeEl"
            :srcdoc="srcdoc"
            sandbox="allow-scripts"
            class="w-full h-[calc(100%-28px)] border-0 bg-white"
            @load="onIframeLoad"
          />
        </div>

        <div class="flex flex-col h-[180px] bg-[#1e1e1e]">
          <div class="flex items-center justify-between px-3 py-1 bg-[#2d2d2d] border-b border-[#444] flex-shrink-0">
            <span class="text-xs font-bold text-[#d4d4d4] font-mono">Console</span>
            <button class="text-xs text-[#888] hover:text-[#ccc] cursor-pointer bg-transparent border-none" @click="clearConsole">Clear</button>
          </div>
          <div class="flex-1 overflow-y-auto p-3 text-xs font-mono">
            <div v-for="(log, i) in logs" :key="i" class="mb-1 pb-1 border-b border-[#333] flex gap-2">
              <span :class="{ 'text-[#60a5fa]': log.type === 'log', 'text-[#fbbf24]': log.type === 'warn', 'text-[#f87171]': log.type === 'error' }">
                {{ log.type === 'error' ? '❌' : log.type === 'warn' ? '⚠️' : '▶' }}
              </span>
              <span class="text-[#d4d4d4] whitespace-pre-wrap break-all">{{ log.message }}</span>
            </div>
            <div v-if="logs.length === 0" class="text-[#555] italic">No output</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
