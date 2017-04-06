<template>
  <div class="super-container">

    <div class="nfr">
      <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
    </div>

    <div class="spc2"></div>
    <div class="row">
      <div class="col colFix link-heading">Site:</div>
      <div class="col colShrink"><a href="http://surevote.org" target="_blank">http://surevote.org</a></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col colFix link-heading">Source:</div>
      <div class="col colShrink"></span><a href="https://github.com/reddhouse/surevote" target="_blank">https://github.com/reddhouse/surevote</a></div>
      <div class="col"></div>
    </div>

    <div class="spc05"></div>
    <div class="nfr">
      <div class="details">
        A launchpad for weapons of mass democracy, SureVote helps American citizens find common ground and remove political roadblocks. We are as different as night and day, but we agree on this: We're done with fake news, false choices, and finger pointing, and it's time to get to work.
      </div>
    </div>

    <div class="spc2"></div>
    <div class="nfr">
      <div class="heading">Under the Hood:</div>
      <div>
        A Vue.js client-side, serverless, static web app.
        <br>- Webpack bundled, and hosted in an AWS S3 bucket.
        <br>- Redux style state management a la Vuex.
        <br>- Firebase authentication and real-time database.
        <br>- Reusable stateless components with "props down, events up" architecture.
        <br>- ES2015 compliant javascript.
        <br>- Mobile first, responsive CSS with a custom Flexbox grid/scaling system.
        <br>- Minimal reliance on 3rd party libraries, with the exception of Lodash, Moment, Axios, and UUID.
      </div>
    </div>

    <div class="spc2"></div>
    <div class="nfr">
      <div class="heading">Lessons Learned:</div>
      <div class="faux-link" v-on:click="toggleLessons" v-if="isLessons">Click to Expand [+]</div>
      <div v-else>
        <div class="faux-link" v-on:click="toggleLessons">Hide Lessons [&ndash;]</div>
        <div>
          1. Programming the web is simultaneously the most most frustrating and rewarding thing I've ever done.
          <br>2. I probably should have practiced with a CSS framework instead of re-inventing the wheel. My wheel rolls, but I definitely see the value in learning a "universal" CSS abstraction layer.
          <br>3. Firebase is pretty slick, but in future version of this app I'm going to need more robust data-querying ability, so I probably wouldn't go the NoSQL route again. Then again, rapid iteration is worth something, and I hear that Algolia plays nicely with Firebase...
          <br>4. Vue is simply awesome. Thanks Evan. I never had this much fun writing React apps.
          <br>5. Good design is very hard, and very time consuming relative to the JS parts.
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
  name: 'surevote-component',
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

.logo-sure {
  font-family: 'Arimo', Helvetica, Arial, sans-serif;
  color: firebrick;
  font-size: 1.5em;
  font-weight: 500;
}
.logo-vote {
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
