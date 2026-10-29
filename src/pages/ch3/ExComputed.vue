<template>
    <div class="q-ma-md">
        <q-input v-model="searchText" filled type="text" label="Type to search" color="teal">
            <template v-slot:prepend><q-icon name="search" /></template>
        </q-input>
        <ul>
            <li v-for="item in filteredItems" :key="item.name">
                {{ item.name }} Price: {{ item.price }} Baht
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = ref([
    { name: 'Banana cake', price: 100 },
    { name: 'Cheese cake', price: 200 },
])
const searchText = ref('')

const filteredItems = computed(() => {
    return items.value.filter(item => item.name.toLocaleLowerCase().includes(searchText.value))
})
</script>
