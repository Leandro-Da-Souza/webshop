<template>
  <div>
    <i id="toggle" @click="showNav = !showNav"><img class="navicon" src='@/assets/navicon.svg' alt="Menu icon"></i>
      <nav  v-show="showNav">
            <i id="toggle"
             @click="showNav = !showNav"><img src='@/assets/close.svg' alt='Close the menu icon' /> </i>
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
position: fixed; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $red;
  z-index: 2; 
  text-align: center;
  animation: fadein 0.4s;
  
    // animation: fadeout 0.4s;


  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

//   @keyframes fadeout {
//     from { opacity: 1; }
//     to   { opacity: 0; }
// }


     
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
.navicon {
  padding:1rem;
}

</style>