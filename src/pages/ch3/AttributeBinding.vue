<template>
    <q-img :src="imageUrl" style="height: 140px; max-width: 150px" />
    <a :href="url">ClickHere</a>
    <q-btn color="primary" icon="check" :label="label" />
    <q-img :src="imageCDN" :ratio="16 / 9" spinner-color="primary" spinner-size="82px" />
</template>

<script setup>
import { ref } from 'vue'

// Static Assets (public folder)
const imageUrl = ref('/images/cap.avif')
const imageCDN = ref('https://cdn.quasar.dev/img/parallax1.jpg')
const url = ref('https://vuejs.org')
const label = ref('My Button')
</script>
