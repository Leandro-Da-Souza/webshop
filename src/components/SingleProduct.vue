<template>
  <div class="page">
    <router-link to="/">Go Back</router-link>
    <img :src="single.img" alt />
    <h3>{{ single.name }}</h3>
    <p>{{ single.price }}</p>
    <p class="desc">Lorem ipdasfsfdfsum dolor sit amet consectetur, adipisicing elit. Porro, error ducimus. Excepturi laboriosam nostrum odio debitis ullam, nam facere doloribus?</p>
    <button class="btn" @click="addCart(single)">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: ["single"],
  methods: {
    addCart(single) {
      this.$emit("addtocart", single);
    },
  },
};
</script>

<style lang="scss">

.page {
  display: block;
  position: relative;
  place-items: center;
  text-align: center;
}

.btn {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #de3c4b;
  border-radius: 5px;
  text-indent: 0;
  display: inline-block;
  color: #ffc857;
  font-family: quicksand, sans-serif;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  height: 50px;
  line-height: 50px;
  width: 300px;
  text-decoration: none;
  text-align: center;
  text-shadow: 0px 1px 0px #b23e35;
  border:none;
}

.btn:hover {
  background-color: #bd2433;
}

.btn:active {
  position: relative;
  top: 1px;
}
</style>
