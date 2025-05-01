<template>
  <div class="todo-app">
    <h1>📝 My Todo List</h1>
    
    <div class="input-group">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        placeholder="Add a new task"
      />
      <button @click="addTodo">Add</button>
    </div>

    <ul class="todo-list">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        :class="{ completed: todo.completed }"
      >
        <span @click="toggleComplete(todo)">
          {{ todo.text }}
        </span>
        <button class="delete" @click="removeTodo(index)">✖</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo.trim(), completed: false });
        this.newTodo = "";
      }
    },
    toggleComplete(todo) {
      todo.completed = !todo.completed;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Layout and container */
.todo-app {
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
}

/* Title */
.todo-app h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #2c3e50;
}

/* Input and button */
.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.input-group input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.input-group button {
  padding: 0.75rem 1.2rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.input-group button:hover {
  background: #2980b9;
}

/* Todo list */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
}

.todo-list li:hover {
  background: #f9f9f9;
}

.todo-list li.completed span {
  text-decoration: line-through;
  color: #999;
}

/* Delete button */
.delete {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #e74c3c;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 5px;
}

.delete:hover {
  background-color: #ffe6e6;
}
</style>
