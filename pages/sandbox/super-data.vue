<template>
  <section class="page-sub-container">
    <div class="super-data-page">

      <div class="introText">
        <h4>This is the Super Data component</h4>
      </div>

      <div class="flexContainer">
        <div class="firstThird"></div>
        <div class="secondThird">
          Nuxt allows us to ansynchronously resolve this component's data before
          displaying the page. You can verify this in dev tools.
          If you reload your browser at this endpoint, you will NOT see a network
          request to '/films' (as our api was queried and our html was rendered on/by the server). Conversely, if
          you navigate away, and then back to this page, you will then see the client-side request.
          <br>
          Source: <a href="https://egghead.io/lessons/javascript-preload-data-using-promises-with-vue-js-and-nuxt-js#/" target="_blank">Egghead.io</a>
          w/API data from <a href="http://swapi.co/" target="_blank">The Star Wars API</a>
        </div>
        <div class="thirdThird"></div>
      </div>
      <div class="query-container">
        <div v-for="film in films">{{ film.title }}</div>
      </div>
    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import axios from 'axios'

const api = `http://swapi.co/api/films/`

export default {
  name: 'super-data-page',
  data () {
    return axios.get(api)
    // Put the returned data on the films property of our data object
    .then(res => ({
      films: res.data.results
    }))
  },
  computed: {
    // ...mapGetters(['titleState'])
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

.introText {
  max-width: 500px;
  width: 95%;
  margin: 0 auto;
}

.query-container {
  margin-top: 25px;
}

</style>
