<template>
  <AppTodo @add="(todo: string) => todos.push(todo)"/>
  <TodoList :todos="todos" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AppTodo from "./components/AppTodo.vue";
import TodoList from "./components/TodoList.vue";

const todos = ref([]);

</script>

<style>
body {
  background: #eee;
  font-family: sans-serif;
  font-size: 1.2rem;
  padding: 1rem;
}
</style>
