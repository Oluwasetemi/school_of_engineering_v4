<template>
    <div>
      <TodoList />
    </div>
  </template>
  
  <script>
  import TodoList from './components/TodoList.vue'
  
  export default {
    components: {
      TodoList
    }
  }
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }
  </style>
  