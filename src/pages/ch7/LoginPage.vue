<template>
    <q-page class="flex flex-center bg-grey-2 q-pa-md">
        <q-card class="q-pa-lg shadow-5" style="width: 100%; max-width: 400px; 
border-radius: 12px;">
            <div v-if="authStore.loading" class="q-mt-md">
                <q-spinner-dots color="primary" size="40px" />
            </div>
            <div v-else>
                <q-card-section class="text-center q-pb-none">
                    <q-avatar size="64px" color="primary" text-color="white" icon="lock" class="q-mb-md" />
                    <div class="text-h5 text-weight-bold text-grey-9">Welcome Back</div>
                    <div class="text-caption text-grey-6 q-mt-xs">
                        Please sign in to continue</div>
                </q-card-section>

                <q-card-section class="q-pt-md">
                    <q-input v-model="username" label="Username" outlined dense lazy-rules
                        :rules="[val => !!val || 'Please enter your username']" @keyup.enter="onLogin">
                        <template v-slot:prepend>
                            <q-icon name="person" color="primary" />
                        </template>
                    </q-input>

                    <q-input v-model="password" type="password" label="Password" outlined dense lazy-rules
                        :rules="[val => !!val || 'Please enter your password']" @keyup.enter="onLogin">
                        <template v-slot:prepend>
                            <q-icon name="lock" color="primary" />
                        </template>
                    </q-input>

                    <div class="q-mt-lg">
                        <q-btn type="submit" color="primary" label="Login" class="full-width text-weight-bold" size="lg"
                            unelevated @click="onLogin" :loading="authStore.loading"
                            :disable="!username || !password" />
                    </div>
                </q-card-section>

                <q-banner v-if="authStore.errorMessage" class="bg-red-1 
text-negative q-mb-md">{{ authStore.errorMessage }}
                </q-banner>
            </div>
        </q-card>
    </q-page>
</template>


<script setup>
import { ref } from 'vue'
// import { login } from '@/services/auth.service'
import { useAuthStore } from '@/stores/auth-store'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const errorMessage = ref('')
const roleName = {
    student: 'Student',
    teacher: 'Teacher',
    admin: 'Administrator'
}
const router = useRouter()

const onLogin = async () => {
    try {
        await authStore.login(username.value, password.value)
        $q.notify({
            type: 'positive',
            position: 'top-right',
            icon: 'check_circle',
            message: `Welcome back, ${authStore.user.username}!`,
            caption: `Role: ${roleName[authStore.user.role]}`
        })
        username.value = ''
        password.value = ''
        errorMessage.value = ''
        const role = authStore.user.role
        switch (role) {
            case 'admin':
                router.push({ name: 'admin' })
                break
            case 'teacher':
                router.push({ name: 'teacher' })
                break
            default:
                router.push({ name: 'profile' })
        }
    }
    catch (error) {
        console.error(error)
    }
}

</script>
