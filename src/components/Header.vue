<template>
  <header>
    <Navigation />
    <h1 @click="goHome">Basic Bitch Shop &#128536;</h1>
    <img src="@/assets/bagicon.svg" class="carticon" alt="Cart icon" @click="goToCart" />
  </header>
</template>
<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
  methods: {
    goToCart() {
      return this.$router.push("cart");
    },
    goHome() {
      return this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";

header {
  display: flex;
  justify-content: space-between;
  width:100%;

  h1 {
    font-family: "playfair display", serif;
    color: $red;
    cursor: pointer;
  }
}

img {
  width: 20px;
  cursor: pointer;
}

a {
  display: inline;
}

.carticon {
  margin: 1rem;
}
</style>