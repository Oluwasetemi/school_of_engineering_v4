<template>
  <aside
    class="flex flex-col pl-3 py-3 pr-4 rounded border-l-5 mb-4 items-start"
    :class="[typeClass.bg, typeClass.border, fullWidth ? 'max-w-full' : 'max-w-[600px]']"
    :role="role"
    :style="fullWidth ? { maxWidth: '100%' } : {}"
  >
    <section class="flex items-center gap-3 mb-2">
      <div class="flex items-center shrink-0 text-xl" :class="typeClass.icon">
        <slot name="icon">
          <div v-if="type === 'tip'" class="i-carbon-idea" />
          <div v-else-if="type === 'info'" class="i-carbon-information" />
          <div v-else-if="type === 'success'" class="i-carbon-checkmark" />
          <div v-else-if="type === 'danger'" class="i-carbon-warning-alt" />
        </slot>
      </div>
      <div class="font-medium" :class="typeClass.icon">{{ capitalizedType }}</div>
    </section>
    <section class="grow [&_p]:text-white [&_p]:m-0 [&_code]:bg-white/20 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono">
      <slot>Default tip content</slot>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'tip' | 'info' | 'success' | 'danger'>,
    default: 'info',
    validator: (value: string) => ['tip', 'info', 'success', 'danger'].includes(value),
  },
  fullWidth: { type: Boolean, default: false },
})

const typeClass = computed(() => {
  const map = {
    tip:     { bg: 'bg-[#66079270] dark:bg-[#660792]', border: 'border-l-[#660792]', icon: 'text-[#660792] dark:text-white' },
    info:    { bg: 'bg-[#2196f370] dark:bg-[#111a2b]', border: 'border-l-[#2196f3]', icon: 'text-[#2196f3]' },
    success: { bg: 'bg-[#4caf5070] dark:bg-[#132a1a]', border: 'border-l-[#4caf50]', icon: 'text-[#4caf50]' },
    danger:  { bg: 'bg-[#ff4d4f70] dark:bg-[#2b1518]', border: 'border-l-[#ff4d4f]', icon: 'text-[#ff4d4f]' },
  }
  return map[props.type] ?? map.info
})

const capitalizedType = computed(() => props.type.charAt(0).toUpperCase() + props.type.slice(1))
const role = computed(() => (props.type === 'danger' ? 'alert' : 'status'))
</script>
