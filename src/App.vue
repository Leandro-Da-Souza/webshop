<template>
  <div id="app">
    <router-view msg="Hello" :products="data" @showSingleProduct="sendProduct"></router-view>
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
          img: "https://images.pexels.com/photos/189268/pexels-photo-189268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: "108",
        },
        {
          id: 2,
          name: "Baby Yoda",
          img: "https://images.pexels.com/photos/590663/pexels-photo-590663.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


img {

}
</style>
