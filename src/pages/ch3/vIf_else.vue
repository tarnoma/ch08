<template>
    <p v-if="isLoggedIn">Welcome Back!</p>
    <p v-else>Please Login</p>

    <div v-if="score >= 80">Excellent</div>
    <div v-else-if="score >= 60">Pass</div>
    <div v-else>Fail</div>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const score = ref(75)
</script>
