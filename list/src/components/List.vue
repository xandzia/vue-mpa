<template>
  <section class="list" v-if="items.length">
    <ul
            class="list__container"
            v-for="(item, key) in items" v-bind:key="key"
            :style="{'border-left-color': colors[key]}"
    >
      <li class="list__item">{{ item.name }}</li>
    </ul>
  </section>
</template>

<script>
const axios = require('axios');
export default {
  name: 'List',
  data () {
    return {
      items: [],
      colors: ['#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#ff9896', '#e377c2', '#f7b6d2',  '#9edae5', '#9467bd', '#c5b0d5', '#8c564b', '#9591C2', '#A1DDFF', '#98df8a', '#d62728',  '#c49c94']
    }
  },
  mounted() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
            .then(res => this.items = res.data.results)
            .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
  .list {
    margin: 2em;
    &__container {
      border-left-width: 5px;
      border-left-style: solid;
      margin: 0;
    }
    &__item {
      color: #60605b;
      padding: 0.6em 0;
    }
  }
</style>
