<template>
  <section class="container">
    <div class="hello-vuex-component">
      <h4>We're inside of the {{ message }} component</h4>
      <p>Vuex encourages a central source of app state and a uni-directional data flow</p>
      <counter></counter>
      <h4>Our Artist Search component will let us query Spotify</h4>
      <artist-search></artist-search>
      <br>
      <div
        v-if="!isBusy">
        <div
          v-for="artist in artists">
          {{ artist.name }}
        </div>
      </div>
      <div
        v-else>Loading ...</div>
    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import Counter from '~components/Counter.vue'
import ArtistSearch from '~components/ArtistSearch.vue'

export default {
  name: 'hello-vuex-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      },

      message: 'Hello Vuex'
    }
  },
  computed: {
    ...mapGetters(['artists', 'isBusy'])
  },
  methods: {

  },
  filters: {

  },
  components: {
    Counter,
    ArtistSearch
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

</style>
