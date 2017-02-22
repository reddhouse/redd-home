<template>
  <section class="page-sub-container">
    <div class="route-watcher-page">

      <div class="introText">
        <h4>This is the Route Watcher component</h4>
      </div>

      <div class="flexContainer">
        <div class="firstThird"></div>
        <div class="secondThird">
          Routing in Vue is often handled by the vue-router plugin, which makes
          it easy to grab $route object properties such as path, query, or
          params. In the example below, our links dictate the value of the
          param, and our component reacts to it.
        </div>
        <div class="thirdThird"></div>
      </div>

      <div class="linkList">
        <div>
          <nuxt-link class="subLink" to="/sandbox/route-watcher/1">Route One</nuxt-link>
        </div>

        <div>
          <nuxt-link class="subLink" to="/sandbox/route-watcher/2">Route Two</nuxt-link>
        </div>
      </div>

      <nuxt-child></nuxt-child>

    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
export default {
  name: 'route-watcher-page',
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  components: {

  },
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
  margin: 24px auto;
}

.linkList div {
  display: inline;
  padding: 6px;
}

/*a, a:hover, a:focus, a:visited {
  color: red;
}*/

.subLink {
  color: blue;
}

</style>
