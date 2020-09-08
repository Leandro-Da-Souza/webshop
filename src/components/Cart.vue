<template>
  <div>
    <!-- Cart Item start  should this be a component instead ? -->
    <section v-if="cartItem.length > 0">
      <ul>
        <li v-for="item in cartItem" :key="item.id">
          <img :src="item.img" alt />
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
      <p>Order value:</p>
      <p>Delivery:</p>
      <p>Total: {{total}} $</p>
      <button class="btn" @click="clear">Proceed to checkout</button>
    </section>
    <h2 v-else>Please Make Some Orders :D</h2>
    <!-- cart item end -->
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["cartItem"],
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    clear() {
      this.$emit("clearCart");
    },
    reducer(acc, currentVal) {
      return acc + currentVal;
    },
  },
  computed: {
    total() {
      let itemSum = this.cartItem.map((item) => {
        return Number(item.price);
      });
      let total = itemSum.reduce(this.reducer);
      return total;
    },
  },
};
</script>

<style></style>
