<template>
  <section class="container">
    <img src="../assets/img/red-house.png" alt="Nobody's Home" class="logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
export default {
  props: ['error']
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}

.logo {
  width: 150px;
  height: auto;
}
</style>
