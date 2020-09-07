<template>
  <div id="app">

    <Header />
    <Navigation />

    <router-view
      msg="Hello"
      :cartItem="cartItems"
      @addtocart="sendtocart"
      :products="data"
      @sending="sendProduct"
      :single="singleProduct"
    ></router-view>
  </div>
</template>

<script>
// import Navigation from "./components/Navigation";
import Header from "./components/Header";


export default {
  name: "App",
  components: {
    // Navigation,
    Header
  },
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
      cartItems: [],
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
      this.cartItems.push(single);
      console.log(this.cartItems);
      this.$router.push("/cart");
    },
  },
};
</script>

<style>

* {
  box-sizing: border-box;
  margin:0;
  padding:0;
}
#app {
  font-family: quicksand, sans-serif;
  font-style: normal;

}
</style>
