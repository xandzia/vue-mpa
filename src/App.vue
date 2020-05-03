<template>
  <div id="app">
    <NavBar @goTo="onGoTo"></NavBar>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from 'navbar'

  export default {
    name: 'App',
    components: {
      NavBar
    },
    methods: {
      onGoTo(item) {
        this.$router.push({ path: item })
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  position: relative;
}
</style>
