<template>
  <div class="container">
        <ProductItem
          v-for="product in products"
          v-bind:key="product.id"
          v-bind:product="product"
          @passing="passing"
        />
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

<style lang="scss" scoped >
* {
  box-sizing: border-box;
}
  .container {
    padding:1rem;
    display: grid;
    // height: 100vh;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    
      div {
    display: grid;
    place-items: center;
    }
  
  }
</style>