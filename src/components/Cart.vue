<template>
<div>

    <!-- Cart Item start  should this be a component instead ? -->
	<img src="" alt="">
	<h3>{{cartItem}}</h3>
	<p></p>
	<p></p>
    <!-- cart item end -->

    <p>Order value:  </p>
    <p>Delivery:  </p>
    <p>Total:  </p>

<button>Proceed to checkout</button>
	
</div>


</template>

<script>
export default {
  name: 'Cart',
  props: ["cartItem"]
 
};
</script>

<style></style>