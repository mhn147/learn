<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["add"])

let todo = ref("");

const add = () => {
    emit("add", todo.value);
    todo.value = "";
}
</script>

<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="todo" @keyup.enter="add">
        <button class="btn btn-primary" type="button" @click="add">Add</button>
    </div>
</template>

<style>
textarea {
    max-width: 400px;
}
</style>