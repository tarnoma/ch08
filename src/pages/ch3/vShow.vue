<template>
    <div v-show="isVisible">Show/Hide</div>
    <q-btn color="primary" :label="isVisible ? 'Show' : 'Hide'" @click="isVisible = !isVisible" />
</template>

<script setup>
import { ref } from 'vue'
const isVisible = ref(true)
</script>
