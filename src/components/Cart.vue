<template>
    <div>
        <!-- Cart Item start  should this be a component instead ? -->
        <img src="" alt="" />
        <ul>
            <li v-for="item in cartItem" :key="item.id">
                <h3>{{ item.name }}</h3>
                <p>{{ item.desc }}</p>
                <p>{{ item.price }} $</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos, qui eligendi blanditiis sed provident excepturi
                    esse nihil, iste ullam, voluptatibus odit totam itaque.
                    Autem quas perferendis facilis alias id nobis!
                </p>
                <button @click="deleteItem(item.id)">X</button>
            </li>
        </ul>
        <!-- cart item end -->

        <p>Order value:</p>
        <p>Delivery:</p>
        <p>Total:</p>

        <button class="btn">Proceed to checkout</button>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    props: ['cartItem'],
    methods: {
        deleteItem(id) {
            this.$emit('deleteItem', id);
        },
    },
};
</script>

<style></style>
