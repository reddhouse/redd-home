<template>
  <div class="super-container">

    <div class="nfr">
      <span class="logo-spades">
        Strebor
        <i class="fa fa-suitcase"></i>
        Spades
      </span>
    </div>

    <div class="spc2"></div>
    <div class="row">
      <div class="col colFix link-heading">Site:</div>
      <div class="col colShrink"><a href="https://strebor-spades.herokuapp.com/#/" target="_blank">https://strebor-spades.herokuapp.com/#/</a></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col colFix link-heading">Source:</div>
      <div class="col colShrink"></span><a href="https://github.com/reddhouse/strebor-spades" target="_blank">https://github.com/reddhouse/strebor-spades</a></div>
      <div class="col"></div>
    </div>

    <div class="spc05"></div>
    <div class="nfr">
      <div class="details">
        Growing up, my friends and I played the card game Spades pretty
        regularly. On the way to school, we'd sneak in a quick game
        in the aisle of the school bus, using my trumpet case as a table. This
        simple web app provides a virtual card table, where today, we can all play a live
        game from different locations. It can be run alongside a Google Hangout
        (in a separate browser window), or, if two teammates share the same physical
        space, the "Mobile" link allows them to discreetly view their hands on their mobile phone.
      </div>
    </div>

    <div class="spc2"></div>
    <div class="nfr">
      <div class="heading">Under the Hood:</div>
      <div>
        Vue.js front end, JSON-Server back end.
        <br>- Built on the Vue Webpack Template.
        <br>- REST API access to data stored in a single JSON document.
        <br>- Redux style state management via Vuex.
        <br>- Routing by Vue-Router
        <br>- Deployed to Heroku
      </div>
    </div>

    <div class="spc2"></div>
    <div class="nfr">
      <div class="heading">Lessons Learned:</div>
      <div class="faux-link" v-on:click="toggleLessons" v-if="isLessons">Click to Expand [+]</div>
      <div v-else>
        <div class="faux-link" v-on:click="toggleLessons">Hide Lessons [&ndash;]</div>
        <div>
          1. This app continually polls the server for changes to the hands and table. WebSockets would have saved a lot of network traffic.
          <br>2. I created more complexity than was probably necessary by using Vuex. A real-time database like Firebase would have been much faster.
          <br>3. Javascript is not as pretty as Elixir or Python, but it is growing on me, especially with ES6 improvements.
        </div>
      </div>

    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'strebor-spades-component',
  props: ['propsIn'],
  data () {
    return {
      isLessons: true
    }
  },
  computed: {
    // ...mapGetters(['titleState'])
  },
  methods: {
    // ...mapActions(['setTitle'])
    toggleLessons () {
      this.isLessons ? this.isLessons = false : this.isLessons = true
    }
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

.logo-spades {
  font-family: 'Arimo', Helvetica, Arial, sans-serif;
  color: #262626;
  font-size: 1.5em;
  font-weight: 500;
}
.heading {
  font-size: .9em;
  font-weight: 600;
}
.link-heading {
  font-size: .9em;
  font-weight: 600;
  padding-top: 2px;
}
.details {
  font-size: .9em;
  font-style: italic;
}
.faux-link {
  color: #41B883;
  cursor: pointer;
}

/* Custom grid setup */
.super-container {
  --width-percent-for-margin: 100%;
  display: flex;
  flex-direction: column;
}
.row {
  width: var(--width-percent-for-margin);
}
div[class^="spc"] {
  width: var(--width-percent-for-margin);
  /*border: 1px solid yellow;*/
}
.col {
  /*border: 1px solid #262626;*/
}
.icr {
  /*border: 1px solid #262626;*/
}
.nfr {
  width: var(--width-percent-for-margin);
}

/* Individual col or row styliing */
.colFix {
  min-width: 60px;
  max-width: 60px;
}

</style>
