<template>
  <section class="page-container">
    <div class="super-container">

      <div class="nfr">
        <sure-vote></sure-vote>
      </div>

      <div class="spc5"></div>
      <div class="nfr">
        <strebor-spades></strebor-spades>
      </div>

    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
import SureVote from '~/components/portfolio/SureVote.vue'
import StreborSpades from '~/components/portfolio/StreborSpades.vue'

export default {
  name: 'portfolio-page',
  head: { title: 'Reddhouse\'s Portfolio' },
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
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
    SureVote,
    StreborSpades
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

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
.col1 {
  max-width: 1vw;
}

</style>
