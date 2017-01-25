<template>
  <div class="two-slots-component">
    <h4>Two slot elements live here (in the child component).</h4>
    <div>
      <slot name="upper_slot">
        Upper Slot! This will only be displayed if there is no content distributed down from the parent component
      </slot>
      <slot name="lower_slot">
        Lower Slot! This will only be displayed if there is no content distributed down from the parent component
      </slot>
    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.two-slots-component {
  max-width: 500px;
  width: 95%;
  margin: 0 auto;
}

</style>
