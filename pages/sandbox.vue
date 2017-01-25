<template>
  <section class="page-container">
    <div class="sandbox-component">
      <h4>We're inside of the Sandbox Page/Component</h4>
      <div class="introText">
        The links/components below are intended to showcase individual
        tools and techniques that I've picked up around the web.
      </div>

      <div class="linkList">

        <div>
          <nuxt-link to="/sandbox/hello-vuex">Hello Vuex</nuxt-link>
        </div>

        <div>
          <!-- nuxt-link is the same as router-link. See docs at
          https://router.vuejs.org/en/api/router-link.html -->
          <nuxt-link v-bind:to="dynamicLink">Howdy (Nuxt-Child) Test</nuxt-link>
        </div>

        <div>
          <nuxt-link to="/sandbox/super-data">Supercharged Nuxt Data</nuxt-link>
        </div>

        <div>
          <nuxt-link to="/sandbox/slot-switcher">Dynamic Slot Switcher</nuxt-link>
        </div>

      </div>

      <nuxt-child></nuxt-child>

    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
export default {
  name: 'sandbox-page',
  data () {
    return {
      dynamicLink: '/sandbox/howdy-test'
    }
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.introText {
  max-width: 500px;
  width: 95%;
  margin: 0 auto;
}

.linkList {
  margin-top: 15px;
}

</style>
