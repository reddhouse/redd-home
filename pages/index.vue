<template>
  <section class="page-container center">

    <img src="../assets/img/red-house.png" alt="reddhouse" class="logo" />
    <h1 class="title">justin builds stuff on the web</h1>
    <p>Shout out to Vue, Nuxt, and Heroku!</p>

    <nuxt-link class="button" to="/portfolio">
      Portfolio
    </nuxt-link>
    <nuxt-link class="button" to="/sandbox">
      Sandbox
    </nuxt-link>

    <div>
      <br>
      <a href="https://github.com/reddhouse/redd-home" target="_blank">See the Code!</a>
      <!-- <nuxt-link to="/about-nuxt">Nuxt Does SSR!</nuxt-link> -->
    </div>

  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
export default {
  // Nuxt uses vue-meta to set this (among other meta options).
  head: {
    title: 'Redd.house'
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.title
{
  margin: 50px 0px 10px 0px;
}
.logo {
  width: 150px;
  height: auto;
}
.button {
  margin: 10px;
}

</style>
