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
      @deleteItem="itemDelete"
      @clearCart="cartClear"
    ></router-view>

    <Footer />
  </div>
</template>

<script>
// import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default {
  name: "App",
  components: {
    // Navigation,
    Header,
    Footer
  },
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Analog Camera",
          img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: "108",
        },
      
        {
          id: 3,
          name: "A polaroid",
          img: "https://images.unsplash.com/photo-1533590557569-bab3f88368d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&h=634",
          price: "108",
        },
         {
          id: 4,
          name: "The Hipster Bike",
          img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&h=634",
          price: "4000",
        },
            {
          id: 2,
          name: "Old Gameboy",
          img: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&h=640",
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
    itemDelete(id) {
      console.log(id);
      console.log(this.cartItems);
      // this.cartItems = this.cartItems.filter((item) => item.id !== id);
      let index = this.cartItems.findIndex((item) => item.id === id);
      this.cartItems.splice(index, 1);
    },
    cartClear() {
      this.cartItems = [];
      this.$router.push("/checkout");
    },
  },
};
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: quicksand, sans-serif;
  font-style: normal;
}
</style>
