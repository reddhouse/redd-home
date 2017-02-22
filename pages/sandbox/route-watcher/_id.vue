<template>
  <section class="container">
    <div class="route-one-page">
      <div>
        Here, we're inside of the '_id.vue' component, which displays <br>
        the (dynamic) value of '$route.params.id'...
      </div>
      <div class="results">
        <!-- Interesting, no 'this' used before $route -->
        <div v-if="$route.params.id">
          {{ routeID }}
        </div>
        <div v-else>
          Click on 'Route One' or 'Route Two' just above
        </div>
      </div>
      <div>
        ...as dictated by the number at the end of the URI (see address bar).
      </div>

      <br>
      <!--
      The following example would be much cooler except that Nuxt, unlike Vue,
      appears to be re-rendering our component when we navigate to a new route.
      Normally, setting up a watcher on our route change would be a good way
      to re-capture the value of params.id (assuming some other method needed
      this data), since normally, vue would not re-render our component, nor
      re-execute our component's methods, etc.
      -->
      <div>
        Bonus. If you just changed routes, you'll see the same<br>
        value delayed by three seconds, here:
        <span class="results">{{ delayedRouteID }}</span>
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

.results {
  padding: 10px;
  color: red;
}

</style>
