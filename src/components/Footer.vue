<template>
  <footer>
      <section class="flex-wrapper">

      
    <div>
      <h3>Contact</h3>
      <p>Work with us</p>
      <p>Affiliate</p>
    </div>
    <div>
      <h3>About us</h3>
      <p>Hi</p>
    </div>

      </section> <!--- Flex wrapper ends here -->
      <div class="social-media">
 <i class="fab fa-instagram"></i>

 <i class="fab fa-facebook-square"></i>

 <i class="fab fa-twitter"></i>

 <i class="fab fa-snapchat-ghost"></i>


      </div>
      <p class="small">All pictures are from Pexels and Unsplash. The icons are from fontawesome.</p>
      <p>&#169; Basic Bitch Company 2020</p>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";

footer {
  background-color: #3CDECF;
  color: #222;
  height: 50vh;
  padding: 1rem;
  text-align: center;

  h3 {
          color: #222;
  }

    .flex-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    }

}


.social-media {

    display:flex;
    justify-content: center;

    i {
        font-size: 1.4em;
            margin:1rem;
                color: #222;
    }
}

.small {
    font-size: 0.8em;
}
</style>