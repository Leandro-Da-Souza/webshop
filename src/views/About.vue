<template>
<div>


  <main>
    <h2>Hey this is an about page</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto magni placeat laborum accusantium inventore officiis alias velit harum suscipit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas sapiente assumenda excepturi explicabo unde provident voluptas reiciendis amet deserunt deleniti saepe dolorum culpa eius omnis dignissimos aliquam, obcaecati eum.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a quidem possimus accusamus perspiciatis enim beatae omnis suscipit autem nisi!</p>

    <img
      src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      alt="Serious Pug"
    />
  </main>
  </div>
</template>
<script>


</script>
<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_typography.scss";


main {
  padding: 1rem;
}

img {
  width: 50%;
  border-radius: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

h2 {
  font-family: "playfair display", serif;
  color: $almostBlack;
  cursor: pointer;
}

p:first-of-type {
  font-weight: bold;
}

p {
  margin-bottom: 10px;
}

// img {
//   width: 20px;
//   cursor: pointer;
// }

a {
  display: inline;
}

.carticon {
  margin: 1rem;
}
</style>