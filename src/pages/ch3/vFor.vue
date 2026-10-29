<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.name }} - {{ item.price }} Baht
        </li>
    </ul>

    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{ index + 1 }}. {{ item.name }}
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
const items = ref([
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
])
</script>
