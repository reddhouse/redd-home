<template>
  <section class="page-sub-container">
    <div class="slot-switcher-page">

      <div class="introText">
        <h4>"slot-switcher.vue" - parent component</h4>
      </div>

      <div class="flexContainer">
        <div class="firstThird"></div>
        <div class="secondThird">
          Vue utilizes &lt;slot&gt; elements to interweave a parent component's content
          with the child component's own template - a process called "content distribution."
          Here we're using named slots to dynamically adjust the order in which the slots
          are rendered. Click the button to toggle the order.
        </div>
        <div class="thirdThird"></div>
      </div>

      <two-slots>
        <div v-bind:slot="slot_1">
          <p>Yada yada, Slot <strong>1</strong> content from parent...</p>
        </div>
        <div v-bind:slot="slot_2">
          <p>Yada yada, Slot <strong>2</strong> content from parent...</p>
        </div>
      </two-slots>

      <button v-on:click="toggleSwitch()">Click Me</button>

    </div>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import TwoSlots from '~/components/sandbox/TwoSlots.vue'
export default {
  name: 'slot-switcher-page',
  data () {
    return {
      switched: false
    }
  },
  computed: {
    slot_1 () {
      return this.switched ? 'lower_slot' : 'upper_slot'
    },
    slot_2 () {
      return this.switched ? 'upper_slot' : 'lower_slot'
    }
  },
  methods: {
    toggleSwitch () {
      this.switched ? this.switched = false : this.switched = true
    }
  },
  components: {
    'two-slots': TwoSlots
  },
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.introText {
  max-width: 500px;
  width: 95%;
  margin: 0 auto;
}

</style>
