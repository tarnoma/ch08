<template>
  <q-page padding>
    <q-btn color="primary" label="Load Albums" @click="loadAlbums" />
    <!-- Loading -->
    <div v-if="loading" class="q-mt-md">
      <q-spinner-dots color="primary" size="40px" />
    </div>

    <!-- Error -->
    <q-banner v-else-if="errorMessage" class="bg-red-1 text-negative q-mt-md" rounded>
      <template #avatar>
        <q-icon name="error" color="negative" />
      </template>
      {{ errorMessage }}
    </q-banner>

    <!-- Data -->
    <q-list v-else bordered separator class="q-mt-md">
      <q-item v-for="album in albums" :key="album.id">
        <q-item-section>
          <q-item-label>{{ album.title }}</q-item-label>
          <q-item-label caption>Album ID : {{ album.id }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '@/boot/axios'

const albums = ref([])
const loading = ref(false)
const errorMessage = ref('')

async function loadAlbums() {
  loading.value = true
  errorMessage.value = ''
  try {
    // Change baseURL in axios.js
    const response = await api.get('/albums')
    albums.value = response.data
  } catch (error) {
    if (error.response) {
      errorMessage.value = `Server Error (${error.response.status})`
    }
    else if (error.request) {
      errorMessage.value = 'Unable to connect to the server.'
    }
    else {
      errorMessage.value = error.message
    }
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>


