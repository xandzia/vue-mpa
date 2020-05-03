<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NavBar></NavBar>
    <List></List>
    <ImageItem></ImageItem>
  </div>
</template>

<script>
  import NavBar from 'navbar'
  import List from 'list'
  import ImageItem from 'image-item'

  export default {
    name: 'App',
    components: {
      NavBar, List, ImageItem
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
  margin-top: 60px;
}
</style>
