<template>
  <div id="app">
    <router-view msg="Hello" :cartItem="cartItems" @addtocart="sendtocart" :products="data" @sending="sendProduct" :single="singleProduct"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Coffee",
          img: "https://placeimg.com/640/480/any",
          price: "108",
        },
        {
          id: 2,
          name: "Baby Yoda",
          img: "https://placeimg.com/640/480/any",
          price: "108",
        },
        {
          id: 3,
          name: "Bulbasaur",
          img: "https://placeimg.com/640/480/any",
          price: "108",
        },
      ],
      singleProduct: "",
      cartItems: []
    };
  },
  methods: {
    sendProduct(product) {
      console.log(12222);
      console.log(product);
      this.singleProduct = product;
      this.$router.push("/singleProduct");
    },
    sendtocart(single) {
      this.cartItems.push(single)
      console.log(this.cartItems)
      this.$router.push('/cart')
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
