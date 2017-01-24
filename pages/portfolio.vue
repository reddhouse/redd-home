<template>
  <section class="page-container">
    <div class="hello-component">
      <h4>We're inside of the {{ message }} component</h4>
      <p>Coming soon...</p>
    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'portfolio-component',
  props: ['propsIn'],
  data () {
    return {
      message: "Portfolio",
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

</style>
