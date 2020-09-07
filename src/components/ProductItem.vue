<template>
  <div>
      <img :src="product.img" alt @click="handleClick(product)" />
      <h2>{{product.name}}</h2>
      <p>{{product.price}}</p>
  </div>
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

<style scoped >


img {
  cursor: pointer;
  width: 100%;
}


</style>