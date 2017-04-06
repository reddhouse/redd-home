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

.page-container {
  padding: 8vh 0;
}
.page-sub-container {
  padding: 8vh 0;
}
a {
  /* These are technically the same, but use both */
   overflow-wrap: break-word;
   word-wrap: break-word;
   -ms-word-break: break-all;
   word-break: break-word;
   /* Adds a hyphen where the word breaks, if supported (No Blink) */
   -ms-hyphens: auto;
   -moz-hyphens: auto;
   -webkit-hyphens: auto;
   hyphens: auto;
}
.button, .button:visited {
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}
.button:hover, .button:focus {
  color: #fff;
  background-color: #3B8070;
}
.title {
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

/* Copied over from SureVote */
.center {
  text-align: center;
}

/* Spc */
.spcX {
  margin: 0 auto;
  flex: 1000 1000 auto;
}
.spc05 {
  margin: 0 auto;
  flex: 1 1000 .5vh;
}
.spc1 {
  margin: 0 auto;
  flex: 1 1000 1vh;
}
.spc2 {
  margin: 0 auto;
  flex: 1 1000 2vh;
}
.spc3 {
  margin: 0 auto;
  flex: 1 1000 3vh;
}
.spc4 {
  margin: 0 auto;
  flex: 1 1000 4vh;
}
.spc5 {
  margin: 0 auto;
  flex: 1 1000 5vh;
}
.spc6 {
  margin: 0 auto;
  flex: 1 1000 6vh;
}
.spc8 {
  margin: 0 auto;
  flex: 1 1000 8vh;
}
.spc10 {
  margin: 0 auto;
  flex: 1 1000 10vh;
}
.spc15 {
  margin: 0 auto;
  flex: 1 1000 15vh;
}
.spc20 {
  margin: 0 auto;
  flex: 1 1000 20vh;
}
.spc25 {
  margin: 0 auto;
  flex: 1 1000 25vh;
}

/* Row */
.row {
  margin: 0 auto;
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
}
.rowJustify {
  justify-content: space-between;
}

/* Col */
.col {
  flex: 1 1 auto;
}
.colShrink {
  flex: 0 1000 auto;
}
.colSpc {
  flex: 1000 1000 auto;
}

/* Icc */
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 0 auto;
}

/* Nfr */
.nfr {
  margin: 0 auto;
}

</style>
