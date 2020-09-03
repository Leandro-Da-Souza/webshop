<template>
  <div id="app">
      <Navigation />
    <router-view msg="Hello" :products="data" @showSingleProduct="sendProduct"></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
      Navigation
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
    };
  },
  methods: {
    sendProduct(product) {
      console.log(12222);
      console.log(product);
    },
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
