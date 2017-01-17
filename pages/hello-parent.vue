<template>
  <section class="container">
    <div class="hello-parent-component">
      <h2>This is {{ message }}</h2>
      <hello-child></hello-child>
    </div>
  </section>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
// import { mapGetters, mapActions } from 'vuex'
import HelloChild from '~components/HelloChild.vue'

export default {
  name: 'hello-parent-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      },

      message: 'Hello Parent'
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
    HelloChild
  }
}
</script>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<style scoped>

</style>
