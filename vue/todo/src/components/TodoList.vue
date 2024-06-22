<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    todos: { type: Object, required: true }
})
</script>

<template>
    <template v-for="(todo, index) in todos" :key="index">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                {{ todo }}
            </label>
        </div>
        <hr>
    </template>
</template>

<style></style>