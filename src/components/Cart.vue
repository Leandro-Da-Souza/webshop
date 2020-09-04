<template>
  <div>
    <!-- Cart Item start  should this be a component instead ? -->

{{cartItem}}
    <section class="cart" v-for="cartItem in cartItem" v-bind:key='cartItem.id'>
      <img src alt />
      <h3>{{cartItem.name}}</h3>
      <p>{{cartItem.price}}</p>
      <p></p>
      <!-- cart item end -->

      <p>Order value:</p>
      <p>Delivery:</p>
      <p>Total:</p>

      <button>Proceed to checkout</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["cartItem"],
};
</script>

<style></style>