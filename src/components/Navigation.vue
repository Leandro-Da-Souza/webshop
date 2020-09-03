<template>
  <div>
    <p id="toggle" @click="showNav = !showNav">MENU</p>
    <div v-show="showNav">
      <nav>
        <router-link
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
        >{{routes.text}}</router-link>
      </nav>
    </div>
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
          text: "TEST LINK",
          page: "/#",
        },
      ],
      showNav: true,
    };
  },
};
</script>

<style  scoped>
img,
#toggle {
  cursor: pointer;
}

</style>