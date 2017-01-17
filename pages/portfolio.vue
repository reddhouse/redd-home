<template>
  <section class="container">
    <div class="hello-component">
      <p> Message: {{ message }}</p>
    </div>
  </section>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'portfolio-component',
  props: ['propsIn'],
  data () {
    return {
      message: "Here's data from the Portfolio Component",
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
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<style scoped>

</style>
