<template>
    <aside class="tip pl-3 b-l-5 b-l-type" :class="type" :role="role">
        <section class="flex items-center gap-3 mb-2">
            <div class="tip__icon">
                <slot name="icon">
                    <div v-if="type === 'tip'" class="slidev-icon i-carbon-idea" />
                    <div v-else-if="type === 'info'" class="slidev-icon i-carbon-information" />
                    <div v-else-if="type === 'success'" class="slidev-icon i-carbon-checkmark" />
                    <div v-else-if="type === 'danger'" class="slidev-icon i-carbon-warning-alt" />
                </slot>
            </div>
            <div class="tip__type">{{ capitalizedType }}</div>
        </section>
        <section class="tip__body">
            <div class="tip__content">
                <slot>Default tip content</slot>
            </div>
        </section>
    </aside>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
    type: {
        type: String as PropType<'tip' | 'info' | 'success' | 'danger'>,
        default: 'info',
        validator: (value) =>
            ['tip', 'info', 'success', 'danger'].includes(value as string),
    },
})

const capitalizedType = computed(() => {
    return props.type.charAt(0).toUpperCase() + props.type.slice(1)
})

const role = computed(() => {
    return props.type === 'danger' ? 'alert' : 'status'
})
</script>

<style scoped>
.tip {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    border-radius: 4px;
    margin-bottom: 16px;
    align-items: flex-start;
    max-width: 600px;
}

.tip__icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
}

.tip__body {
    flex-grow: 1;
}

.tip__type {
    font-weight: medium;
}

.slidev-icon {
    font-size: 1.25em;
}

.tip {
    background-color: var(--tip-bg, #660792);
    --uno: b-l-[#660792] light: bg-[#66079270];
}

.tip__icon,
.tip__type {
    color: var(--tip-icon, #660792);
    /* --uno: dark: color-white ; */
}

.dark .tip__icon,
.dark .tip__type {
    --tip-icon: #fff;
}

/* Dynamic background colors */
.info {
    --tip-bg: #111a2b;
    --tip-icon: #2196f3;
    --uno: b-l-[#2196f3] light: bg-[#2196f370];
}

.success {
    --tip-bg: #132a1a;
    --tip-icon: #4caf50;
    --uno: b-l-[#4caf50] light: bg-[#4caf5070];
}

.danger {
    --tip-bg: #2b1518;
    --tip-icon: #ff4d4f;
    --uno: b-l-[#ff4d4f] light: bg-[#ff4d4f70];
}

/* Deep styling */
.tip :deep(p) {
    color: #ffffff;
    margin: 0;
}

.tip :deep(code) {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 2px 4px;
    border-radius: 3px;
    font-family: monospace;
}
</style>
