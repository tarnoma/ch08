<template>
    <div class="q-ma-md">
        <div>Count: {{ count }}</div>
        <q-btn color="primary" icon="add" label="Click for update (onUpdated)" @click="increment" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';

const count = ref(0);
const timer = ref(null);

onMounted(() => {
    console.log('onMounted: Component loaded.');

    timer.value = setInterval(() => {
        console.log('Timer working...');
    }, 5000);
});

onUpdated(() => {
    console.log('onUpdated: ', count.value);
});

onUnmounted(() => {
    console.log('onUnmounted: remove component');

    // Stop interval prevent Memory Leak
    clearInterval(timer.value);
});

const increment = () => { count.value++; };
</script>
