/* eslint-disable no-new-func */
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    html(code) {
      const container = document.createElement('div')
      container.style.display = 'flex'
      container.style.flexDirection = 'row'
      container.style.gap = '12px'
      container.style.height = '200px'

      const iframeWrapper = document.createElement('div')
      iframeWrapper.style.flex = '1'
      iframeWrapper.style.minWidth = '0'
      iframeWrapper.style.overflow = 'auto'
      iframeWrapper.style.border = '1px solid #e5e7eb'
      iframeWrapper.style.borderRadius = '8px'
      iframeWrapper.style.backgroundColor = 'white'

      const iframe = document.createElement('iframe')
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.border = 'none'
      iframe.style.backgroundColor = 'white'

      const consoleContainer = document.createElement('div')
      consoleContainer.style.flex = '1'
      consoleContainer.style.minWidth = '0'
      consoleContainer.style.display = 'none'
      consoleContainer.style.flexDirection = 'column'
      consoleContainer.style.backgroundColor = '#1e1e1e'
      consoleContainer.style.borderRadius = '8px'
      consoleContainer.style.overflow = 'hidden'

      const consoleHeader = document.createElement('div')
      consoleHeader.style.padding = '8px 12px'
      consoleHeader.style.backgroundColor = '#2d2d2d'
      consoleHeader.style.borderBottom = '1px solid #444'
      consoleHeader.style.display = 'flex'
      consoleHeader.style.justifyContent = 'space-between'
      consoleHeader.style.alignItems = 'center'

      const consoleTitle = document.createElement('span')
      consoleTitle.textContent = 'Console'
      consoleTitle.style.color = '#d4d4d4'
      consoleTitle.style.fontFamily = 'monospace'
      consoleTitle.style.fontSize = '12px'
      consoleTitle.style.fontWeight = 'bold'

      const clearButton = document.createElement('button')
      clearButton.textContent = 'Clear'
      clearButton.style.padding = '4px 12px'
      clearButton.style.backgroundColor = '#444'
      clearButton.style.color = '#d4d4d4'
      clearButton.style.border = 'none'
      clearButton.style.borderRadius = '4px'
      clearButton.style.cursor = 'pointer'
      clearButton.style.fontSize = '11px'
      clearButton.style.fontFamily = 'monospace'
      clearButton.onmouseover = () => (clearButton.style.backgroundColor = '#555')
      clearButton.onmouseout = () => (clearButton.style.backgroundColor = '#444')

      consoleHeader.appendChild(consoleTitle)
      consoleHeader.appendChild(clearButton)

      const consoleOutput = document.createElement('div')
      consoleOutput.style.padding = '12px'
      consoleOutput.style.color = '#d4d4d4'
      consoleOutput.style.fontFamily = 'monospace'
      consoleOutput.style.fontSize = '11px'
      consoleOutput.style.overflowY = 'auto'
      consoleOutput.style.flex = '1'

      clearButton.onclick = () => {
        consoleOutput.innerHTML = ''
      }

      const formatValue = (value: string | null | object | undefined) => {
        if (value === null) return 'null'
        if (value === undefined) return 'undefined'
        if (typeof value === 'string') return `"${value}"`
        if (typeof value === 'object') {
          try {
            return JSON.stringify(value, null, 2)
          } catch {
            return String(value)
          }
        }
        return String(value)
      }

      const addLog = (type: string, args: unknown[]) => {
        const logEntry = document.createElement('div')
        logEntry.style.marginBottom = '4px'
        logEntry.style.paddingBottom = '4px'
        logEntry.style.borderBottom = '1px solid #333'

        const typeSpan = document.createElement('span')
        typeSpan.style.marginRight = '8px'
        typeSpan.style.fontWeight = 'bold'

        if (type === 'error') {
          typeSpan.style.color = '#f87171'
          typeSpan.textContent = '❌'
        } else if (type === 'warn') {
          typeSpan.style.color = '#fbbf24'
          typeSpan.textContent = '⚠️'
        } else {
          typeSpan.style.color = '#60a5fa'
          typeSpan.textContent = '▶'
        }

        const message = (args as string[]).map((v) => formatValue(v)).join(' ')
        logEntry.appendChild(typeSpan)
        logEntry.appendChild(document.createTextNode(message))

        consoleOutput.appendChild(logEntry)
        consoleContainer.style.display = 'flex'
      }

      iframe.onload = () => {
        const iframeWindow = iframe.contentWindow as any
        if (iframeWindow) {
          const orig = {
            log: iframeWindow.console.log,
            error: iframeWindow.console.error,
            warn: iframeWindow.console.warn,
            info: iframeWindow.console.info,
          }
          iframeWindow.console.log = (...args: unknown[]) => {
            orig.log.apply(iframeWindow.console, args)
            addLog('log', args)
          }
          iframeWindow.console.error = (...args: unknown[]) => {
            orig.error.apply(iframeWindow.console, args)
            addLog('error', args)
          }
          iframeWindow.console.warn = (...args: unknown[]) => {
            orig.warn.apply(iframeWindow.console, args)
            addLog('warn', args)
          }
          iframeWindow.console.info = (...args: unknown[]) => {
            orig.info.apply(iframeWindow.console, args)
            addLog('log', args)
          }
        }
      }

      iframe.srcdoc = code

      iframeWrapper.appendChild(iframe)
      consoleContainer.appendChild(consoleHeader)
      consoleContainer.appendChild(consoleOutput)
      container.appendChild(iframeWrapper)
      container.appendChild(consoleContainer)

      return { element: container }
    },

    async vue(code) {
      const Vue = await import('vue')
      const { parse, compileScript } = await import('@vue/compiler-sfc')

      const sfc = parse(code)
      let scripts = compileScript(sfc.descriptor, {
        id: sfc.descriptor.filename,
        genDefaultAs: '__Component',
        inlineTemplate: true,
      }).content

      scripts = scripts.replace(
        /import (\{[^}]+\}) from ['"]vue['"]/g,
        (_, imports) => `const ${imports.replace(/\sas\s/g, ':')} = Vue`,
      )
      scripts += '\nreturn __Component'

      const component = new Function(`return (Vue) => {${scripts}}`)()(Vue)
      const app = Vue.createApp(component)
      const el = document.createElement('div')
      app.mount(el)

      return { element: el }
    },

    async jsx(code) {
      const React = await import('react')
      const ReactDOM = await import('react-dom/client')
      const Babel = await import('@babel/standalone')

      const result = Babel.transform(code, { presets: ['react'] })

      const Component = new Function(`return (React) => ${result.code}`)()(React)
      const el = document.createElement('div')
      el.style.width = '100%'
      el.style.height = '50vh'
      el.style.overflow = 'auto'

      ReactDOM.createRoot(el).render(React.createElement(Component))

      return { element: el }
    },
  }
})
