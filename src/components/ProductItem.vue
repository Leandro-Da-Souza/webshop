<template>
  <div>
    <li>
      <img :src="product.img" alt @click="handleClick(product)" />
      <h3>{{product.name}}</h3>
      <p></p>
    </li>
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
      this.$emit("showSingleProduct", product);
    },
  },
};
</script>

<style  scoped>
img {
  cursor: pointer;
}
</style>