<template>
  <section class="container">
    <div class="sandbox-component">
      <p> Message: {{ message }}</p>
      <div>
        <nuxt-link to="/hello-parent">Hello Child/Parent</nuxt-link>
      </div>
    </div>
  </section>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'sandbox-component',
  props: ['propsIn'],
  data () {
    return {
      message: "Here's data from the Sandbox Component",
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
