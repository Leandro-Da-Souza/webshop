<template>
  <div>
    <p>{{ msg }}</p>

    <ul>
      <ProductItem
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:product="product"
        @passing="passing"
      />
    </ul>
    <p></p>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      /*testData: [
                  {id:1 , name: 'Coffee',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
                 {id:2 , name: 'Baby Yoda',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
                  {id:3 , name: 'Bulbasaur',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
             ]*/
    };
  },
  props: ["msg", "products"],
  methods: {
    passing(product) {
      this.$emit("sending", product);
    },
  },
};
</script>

<style></style>