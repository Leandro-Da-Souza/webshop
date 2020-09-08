<template>
  <section>
      <img :src="product.img" alt @click="handleClick(product)" />
      <h2>{{product.name}}</h2>
      <p>{{product.price}}</p>
      <button @click="handleClick(product)">Shop now</button>
    
  </section>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    handleClick(product) {
      this.$emit("passing", product);
    },
  },
};
</script>

<style lang="scss" scoped >
@import "@/scss/_variables.scss";


img {
  cursor: pointer;
 
  max-width: 100%;
}

button {
  width:100%;
  border:none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor:pointer;
  background-color: #222;
  color: #fff;
  font-family: quicksand, sans-serif;
  font-size: 1em;
  font-weight: 500;

}


h2 {
  font-size: 1.3em;
}

</style>