import { ref, computed } from 'vue'

const cartItems = ref([])

export function useCart() {
    const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))

    const totalPrice = computed(() =>
        cartItems.value.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/[^\d]/g, ''))
            return sum + price * item.quantity
        }, 0)
    )

    function addToCart(product) {
        const existing = cartItems.value.find(i => i.name === product.name)
        if (existing) {
            existing.quantity++
        } else {
            cartItems.value.push({ ...product, quantity: 1 })
        }
    }

    return { cartItems, totalItems, totalPrice, addToCart }
}