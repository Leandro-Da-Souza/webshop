<template>
  <div>
    <!-- Cart Item start  should this be a component instead ? -->
    <section v-if="cartItem.length > 0" class="container">
      <div class="items">
        <ul>
          <li v-for="item in cartItem" :key="item.id">
            <img :src="item.img" alt />
            <div class="wrapper">
              <div class="left">
                <h2>{{ item.name }}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="right">
                <button @click="deleteItem(item.id)">X</button>
                <p>${{ item.price }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="info">
        <h3>Order value:${{total}}</h3>
        <h3>Delivery: ${{delivery}}</h3>
        <h3>Total: ${{total + this.delivery}}</h3>
        <button class="btn" @click="clear">Proceed to checkout</button>
      </div>
    </section>
    <h2 v-else>Please Make Some Orders :D</h2>
    <!-- cart item end -->
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["cartItem"],
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    clear() {
      this.$emit("clearCart");
    },
    reducer(acc, currentVal) {
      return acc + currentVal;
    },
  },
  data() {
    return {
      delivery: 40,
    };
  },
  computed: {
    total() {
      let itemSum = this.cartItem.map((item) => {
        return Number(item.price);
      });
      let total = itemSum.reduce(this.reducer);
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.items {
  margin: 0 auto;
}

.items {
  button {
    right: 20px;
    top: 20px;
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    font-size: 18px;
    color: #666;
  }

  button:hover {
    cursor: pointer;
    color: #333;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 25px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
  }

  li {
    display: flex;
    margin: 20px;
  }
  p {
    padding-top: 10px;
  }
}

.wrapper {
  margin: 0 auto;
  padding: 30px;
  display: flex;
  border-bottom: 2px solid grey;
  height: 100%;
  width: 80%;
  justify-content: space-between;
}

// .left {
//   flex: 1;
// }

// .right {
//   flex: 1;
// }

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  h3 {
    padding: 5px;
  }
  .btn {
    padding: 5px;
  }
}
</style>
