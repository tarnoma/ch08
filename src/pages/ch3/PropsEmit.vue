<template>
    <div>
        <ProductCard v-for="p in products" :key="p.id" :product="p" @add-to-cart="handleAddToCart" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

const products = ref([
    { id: 1, name: 'Product A', price: 150, image: '/images/a.jpg' },
    { id: 2, name: 'Product B', price: 250, image: '/images/b.jpg' },
])

const handleAddToCart = (product) => {
    console.log('Add:', product.name, product.price, " Baht")
}
</script>
