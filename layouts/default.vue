<template>
  <div>
    <nuxt/>
    <my-footer/>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style>
.page-container
{
  margin: 0;
  width: 100%;
  padding: 25px 0;
  text-align: center;
}

.page-sub-container {
  margin: 0;
  width: 100%;
  padding: 25px 0;
  text-align: center;
}

.flexContainer {
  display: flex;
}

.firstThird {
  flex: 1 1 20px;
}

.secondThird {
  flex: 3 1 auto;
  font-size: 0.9em;
  font-style: oblique;
  text-align: justify;
  padding: 5px;
  max-width: 300px;
  min-height: 4em;
  box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
}

.thirdThird {
  flex: 1 1 20px;
}

.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

@media (min-width: 321px) {

  .page-container {
    margin: 0;
    width: 100%;
    padding: 50px 0;
    text-align: center;
  }

  .flexContainer {
    display: flex;
  }

  .firstThird {
    flex: 1 1 20px;
  }

  .secondThird {
    flex: 3 1 auto;
    font-size: 0.9em;
    font-style: oblique;
    text-align: justify;
    padding: 10px;
    max-width: 400px;
    min-height: 4em;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
  }

  .thirdThird {
    flex: 1 1 20px;
  }
}

@media (min-width: 600px) {

  .page-container {
    margin: 0;
    width: 100%;
    padding: 100px 0;
    text-align: center;
  }

  .flexContainer {
    display: flex;
  }

  .firstThird {
    flex: 1 1 20px;
  }

  .secondThird {
    flex: 3 1 auto;
    font-size: 0.9em;
    font-style: oblique;
    text-align: justify;
    padding: 15px;
    max-width: 600px;
    min-height: 4em;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
  }

  .thirdThird {
    flex: 1 1 20px;
  }
}

</style>
