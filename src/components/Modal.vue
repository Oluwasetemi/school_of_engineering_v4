<template>
    <div class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2 class="modal-title">Add New Todo</h2>
        <input
          type="text"
          class="modal-input"
          v-model="todoText"
          placeholder="Enter your todo item"
          autofocus
        />
        <div class="modal-buttons">
          <button class="modal-button modal-button-primary" @click="handleSubmit">
            Add
          </button>
          <button class="modal-button modal-button-secondary" @click="closeModal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  export default {
    props: {
      closeModal: Function,
      onAdd: Function
    },
    setup(props) {
      const todoText = ref('')
  
      const handleSubmit = () => {
        props.onAdd(todoText.value)
        todoText.value = ''
      }
  
      const handleEscape = (e) => {
        if (e.key === 'Escape') props.closeModal()
      }
  
      onMounted(() => {
        document.addEventListener('keydown', handleEscape)
      })
  
      onBeforeUnmount(() => {
        document.removeEventListener('keydown', handleEscape)
      })
  
      return { todoText, handleSubmit }
    }
  }
  </script>
  
  <style scoped>
  @import "../css/modal.css";
  </style>
  