<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <!-- <h1>Welcome</h1>
      <p>My Web</p> -->
      <q-btn unelevated rounded icon="shopping_cart" color="blue" text-color="yellow" size="xl" label="ปุ่มของฉัน" />
      <q-btn color="primary" icon="check" label="OK" class="q-mt-xl" />

      <!-- <img alt="Quasar logo" src="~@/assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px" /> -->

      <!-- <q-btn class="q-mt-md" color="primary" to="/second" label="Go to Second Page" no-caps /> -->
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref(2569)
console.log(msg.value)

const items = ref(['Apple', 'Banana', 100])
items.value.push(2555)
console.log(items.value)

const products = ref({
  id: 1,
  name: 'Notebook',
  price: 25000
})
console.log(products.value)
products.value.price = 30000
console.log(products.value)
products.value = {
  id: 2,
  name: 'Mouse',
  price: 250
}
console.log(products.value)
</script>
