<template>
  <section class="page-sub-container">
    <div class="hello-vuex-page">
      <div class="introText">
        <h4>This is the {{ message }} component</h4>
      </div>

      <div class="flexContainer">
        <div class="firstThird"></div>
        <div class="secondThird">
          Vuex encourages a central source of app state and a uni-directional data flow similar to Redux.
          Events "dispatch" actions which may "commit" mutations to our store, resulting in reactive updates to the DOM.
        </div>
        <div class="thirdThird"></div>
      </div>
      <counter></counter>
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
        v-else>Loading ...
      </div>
    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import Counter from '~components/sandbox/Counter.vue'
import ArtistSearch from '~components/sandbox/ArtistSearch.vue'

export default {
  name: 'hello-vuex-page',
  data () {
    return {
      message: 'Hello Vuex'
    }
  },
  computed: {
    ...mapGetters(['artists', 'isBusy'])
  },
  components: {
    Counter,
    ArtistSearch
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

</style>
