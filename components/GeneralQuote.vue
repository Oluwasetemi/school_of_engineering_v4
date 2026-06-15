<script setup lang="ts">
defineProps({
  quote: { type: String, required: true },
  url: { type: String, required: false },
})
</script>

<template>
  <div>
    <blockquote
      class="gq-block font-hand text-2xl italic border-l-5 border-l-blue-500 px-5 py-2.5 my-5 bg-gray-50 text-gray-800"
    >
      <p class="m-0">{{ quote }}</p>
      <footer v-if="url">
        <a :href="url">Source</a>
      </footer>
    </blockquote>
  </div>
</template>

<style scoped>
/* Curly quote pseudo-elements — string content cannot be expressed as UnoCSS utilities inside HTML attributes */
.gq-block::before {
  content: '\201C';
  font-size: 1.5em;
  color: #3b82f6;
  vertical-align: -0.4em;
  margin-right: 0.625rem;
}
.gq-block::after {
  content: '\201D';
  font-size: 1.5em;
  color: #3b82f6;
  vertical-align: -0.4em;
  margin-left: 0.625rem;
}
</style>
