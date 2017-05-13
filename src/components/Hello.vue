<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Button type="primary" @click="getData">Primary</Button>
    <div class="csshub-scale">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {

  },
  methods: {
    getData () {
      this.$axios.get('topics').then((res) => {
        return res.data
      }).then(data => console.log(data))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


@keyframes csshub-scale-multiple {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.csshub-scale {
  margin: 0 auto;
  width: 100px;
  position: relative;
  transform: translateY(-30px); }

.csshub-scale > div:nth-child(2) {
  animation-delay: -0.4s;
}

.csshub-scale > div:nth-child(3) {
  animation-delay: -0.2s;
}

.csshub-scale > div {
  background-color: #b128e9;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  position: absolute;
  left: -30px;
  top: 0px;
  opacity: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  animation: csshub-scale-multiple 1s 0s linear infinite;
}


</style>
