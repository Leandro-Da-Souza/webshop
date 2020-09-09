<template>
  <div>
    <h1>Your Order Is On The Way</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_typography.scss";

div {
  width: 100vw;
  height: 100vh;
  background-color: $red;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: $yellow;
  }
}
</style>