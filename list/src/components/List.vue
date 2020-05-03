<template>
  <section class="list">
    <ul
            class="list__container"
            v-for="(item, key) in items" v-bind:key="key"
            :style="{'border-left-color': colors[key]}"
    >
      <li class="list__item">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => [1,2,3]
    }
  },
  data () {
    return {
      colors: ['#2AC9D4', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#9591C2', '#A1DDFF', '#98df8a', '#d62728',  '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    }
  },
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
