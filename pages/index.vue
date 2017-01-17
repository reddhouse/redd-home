<template>
  <section class="container">
    <img src="../assets/img/red-house.png" alt="reddhouse" class="logo" />
    <h1 class="title">justin builds stuff on the web</h1>
    <p>Shout out to Vue, Nuxt, and Zeit.co</p>

    <nuxt-link class="button" to="/portfolio">
      Portfolio
    </nuxt-link>
    <nuxt-link class="button" to="/sandbox">
      Sandbox
    </nuxt-link>
    <div>
      <br>
      <nuxt-link to="/about-nuxt">Nuxt Does SSR!</nuxt-link>
    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
export default {
  // Nuxt uses vue-meta to set this (among other meta options).
  head: {
    title: 'redd-home'
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
