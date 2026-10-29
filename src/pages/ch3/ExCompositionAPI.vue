<template>
    <q-page padding></q-page>
</template>

<script setup>
// import { ref, reactive, toRefs } from 'vue'

// const message = ref('Hello')
// console.log(message.value) 

// const user = reactive({ name: 'Jame', age: 25 })
// console.log(user.name) 

// const { name, age } = toRefs(user)
// console.log(name.value, age.value)


import { ref } from 'vue'

// ref with Object
const product = ref({
    id: 1,
    name: 'Notebook',
    price: 25000
})
product.value.price = 27000 // change only property
console.log(product.value)
product.value = { id: 2, name: 'Mouse', price: 500 }
console.log(product.value)

// ref with Array
const items = ref(['Apple', 'Banana'])
items.value.push('Cherry')
console.log(items.value)

</script>