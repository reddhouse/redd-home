<template>
  <section class="page-container">
    <div class="super-container">

      <!-- Standard flex row containing 5 flex columns -->
      <div class="spc5"></div>
      <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
        <div class="col">4</div>
        <div class="col">5</div>
      </div>

      <!-- Flex row containing 5 flex columns with center column containing 3 inner flex rows -->
      <div class="spc5"></div>
      <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="icc">
          <div class="icr">3</div>
          <div class="icr">4</div>
          <div class="icr">5</div>
        </div>
        <div class="col">6</div>
        <div class="col">7</div>
      </div>

      <!-- Non flex row -->
      <div class="spcX"></div>
      <div class="nfr">
        <div class="nfc">
          Some Text
        </div>
      </div>

      <div class="spc5"></div>

    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'example-component',
  head: { title: 'grid-template' },
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
    // HelloChild
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

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
.col1 {
  max-width: 1vw;
}

</style>
