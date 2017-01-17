<template>
  <div class="hello-child-component">
    <div>This is your hello {{ message }}</div>
  </div>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'hello-child-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      },
      message: 'child component'
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
