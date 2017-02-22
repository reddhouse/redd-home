<template>
  <section class="container">
    <div class="route-one-page">
      <div style="text-align: justify;">
        This is the <span class="bold">'_id.vue' component</span>,
        which displays the dynamic value of '$route.params.id', as dictated by
        the number at the end of the URI (see address bar).
      </div>
      <div class="results">
        <!-- Interesting, no 'this' used before $route -->
        <div v-if="$route.params.id">
          params.id = <span class="bold">{{ routeID }}</span>
        </div>
        <div v-else>
          click either of the blue links above
        </div>
      </div>

      <!--
      The following example would be much cooler except that Nuxt, unlike Vue,
      appears to be re-rendering our component when we navigate to a new route.
      Normally, setting up a watcher on our route change would be a good way
      to re-capture the value of params.id (assuming some other method needed
      this data), since normally, vue would not re-render our component, nor
      re-execute our component's methods, etc.
      -->
      <div style="text-align: justify;">
        Bonus! If you just changed routes, you'll see the same value delayed by
        three seconds, here:
        <span v-bind:class="classObject">{{ delayedRouteID }}</span>
      </div>

    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'route-one-page',
  data () {
    return {
      delayedRouteID: "wait for it ..."
    }
  },
  // Set up a watcher with Vue's watch property
  // Note, the enclosed function is only enclosed in quotations because the
  // dollar sign is typically off limits for property/method names.
  watch: {
    '$route' (to, from) {
      if (to.params.id) {
        // alert("Hold on! You are headed to route: " + to.params.id)
        setTimeout(() => { this.delayedRouteID = to.params.id }, 3000)

      }
    }
  },
  computed: {
    // ...mapGetters(['titleState'])
    routeID () {
      return this.$route.params.id
    },
    classObject () {
      return {
        results: true,
        bold: this.delayedRouteID != "wait for it ..."
      }
    }
  },
  methods: {
    // ...mapActions(['setTitle'])
  },
  filters: {

  },
  components: {
    // HelloChild
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.route-one-page {
  border-style: solid;
  border-width: 2px;
  border-color: #F0F0F0;
  max-width: 500px;
  width: 90%;
  padding: 10px;
  margin: 0 auto;
}

.results {
  padding-top: 8px;
  padding-bottom: 15px;
  color: #1a53ff;
}

.bold {
  font-weight: 600;
}

</style>
