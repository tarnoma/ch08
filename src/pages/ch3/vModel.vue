<template>
    <q-btn color="primary" label="Click" @click="handleClick" />

    <form @submit.prevent="submitForm" @reset="OnReset">
        <div class="q-gutter-md">
            <q-input v-model="username" type="text" label="Your Username" @keyup.enter="submitForm" />
            <q-input v-model="email" type="email" label="Your Email" @keyup.alt.enter="OnReset" />
            <q-select outlined v-model="role" :options="roleOptions" label="Role" />
            <q-btn color="primary" label="Submit" type="submit" />
            <q-btn color="primary" flat label="reset" type="reset" />
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'
const username = ref('')
const email = ref('')
const role = ref(null)
const roleOptions = ['Student', 'Teacher', 'Staff']

const handleClick = () => { alert('Button Clicked') }

const submitForm = () => {
    if (!username.value || !email.value) {
        alert('Username or Email is empty')
        return
    }
    console.log('Form was submitted:', {
        username: username.value,
        email: email.value,
        role: role.value
    })
    alert('Data saved')
}

const OnReset = () => {
    username.value = ""
    email.value = ""
    role.value = null
}
</script>
