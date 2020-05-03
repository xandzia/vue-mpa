<template>
  <section>
    <picture class="image__item">
      <source srcset="https://picsum.photos/1360/800" media="(min-width: 1400px)"/>
      <source srcset="https://placeimg.com/1000/800/nature" media="(min-width: 1200px)"/>
      <source srcset="https://placeimg.com/800/800/nature" media="(min-width: 960px)"/>
      <source srcset="https://placeimg.com/600/600/nature" media="(min-width: 640px)"/>
      <img src="https://placeimg.com/200/200/nature" alt="example"/>
    </picture>
  </section>
</template>

<script>
export default {
  name: 'ImageItem',
}
</script>

<style lang="scss" scoped>
  .image__item {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    .img {
      height: 100px;
      width: 100px;
    }
  }
</style>
