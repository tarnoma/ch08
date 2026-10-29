<template>
    <p>{{ message }}</p>

    <!-- JavaScript Expression  -->
    <p>{{ 5 + 3 }}</p>
    <p>{{ message.toUpperCase() }}</p>
    <p>{{ isActive ? 'Open' : 'Close' }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { useMeta } from 'quasar'

useMeta({
    title: 'หน้าหลัก'
})

const message = ref('Hello World')
const isActive = ref(true)
</script>
