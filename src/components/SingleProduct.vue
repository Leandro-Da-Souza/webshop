<template>
  <div>
    <router-link to="/">Go Back</router-link>
    <img :src="single.img" alt />
    <h3>{{single.name}}</h3>
    <p>{{single.price}}</p>
    <p></p>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  props: ["single"],
};
</script>

<style lang="scss" scoped>
</style>