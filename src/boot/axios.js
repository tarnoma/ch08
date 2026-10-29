import { defineBoot } from '#q-app'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth-store'

// const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })
// const api = axios.create({ baseURL: 'http://localhost:3000' })
// const api = axios.create({ baseURL: 'http://172.26.117.16:3007/api/v1' })
const api = axios.create({ baseURL: import.meta.env.QCLI_API_URL || 'http://localhost:3000' })

api.interceptors.request.use((config) => {
  config.headers['Content-type'] = 'application/json; charset=UTF-8'
  // const token = 'your_mock_token'
  // if (token) {
  //   config.headers['Authorization'] = `Bearer ${token}`
  // }
  const authStore = useAuthStore()
  if (authStore.accessToken) {
    config.headers['Authorization'] = `Bearer ${authStore.accessToken}`
  }
  return config
}, (error) => { return Promise.reject(error) })

export default defineBoot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }