<template>
  <div>
    <i id="toggle" @click="showNav = !showNav">MENU</i>
      <nav  v-show="showNav">
            <i id="toggle"
             @click="showNav = !showNav"><img src='@/assets/close.svg' /> </i>
        <router-link @click.native='showNav = !showNav' 
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
        >{{routes.text}}
        </router-link>
      </nav>
  </div>
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "About",
          page: "/About",
        },
             {
          id: 1,
          text: "Products",
          page: "/",
        },
      ],
      showNav: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

* {
  box-sizing: border-box;
  margin:0;
  padding:0;
}
img,
#toggle {
  cursor: pointer;
}

nav {
position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $red;
  z-index: 2; 
     
    a {
      text-decoration: none;
      color: $yellow;
      flex-direction: column;
      justify-content: space-around;
      display:flex;
      padding: 1rem;
      font-size: 2em;
      font-weight: bold;
    }

    i {
      display: flex;
      align-items: flex-end;
      padding: 1rem;
    }
    img {
      width: 30px;
      
    }
}



</style>