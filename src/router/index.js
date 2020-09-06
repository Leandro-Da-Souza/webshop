import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";
import Cart from "../components/Cart"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/singleProduct",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
