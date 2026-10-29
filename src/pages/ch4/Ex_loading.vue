<template>
    <div class="q-pa-md">
        <q-btn color="primary" label="Load Data" icon="cloud_download" @click="loadData" />
    </div>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()
const loadData = () => {
    $q.loading.show()

    setTimeout(() => {
        $q.loading.hide()
        $q.notify({
            type: 'positive',
            message: 'Data loaded successfully!'
        })
    }, 3000)
}
</script>

