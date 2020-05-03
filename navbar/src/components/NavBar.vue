<template>
  <aside
          class="aside-wrapper"
          :class="{ 'aside-wrapper__mini': mini}"
  >
    <div>
      <div class="aside-wrapper__top">
        <div
                class="aside-wrapper__picture"
                @click="openNav"
        >
          <img src="https://source.unsplash.com/random/80x80" alt="random image">
        </div>
        <span class="aside-wrapper__main-text">Lorem ipsum</span>
        <button
                class="aside-wrapper__btn"
                @click="closeNav"
        >&lt;</button>
      </div>
      <nav class="aside-wrapper__nav">
        <ul>
          <li class="aside-wrapper__nav-item" @click="goTo('list')">
            <svg @click="openNav" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve" width="30px" height="30px"><g><g><g><path d="M362.667,42.667h-89.28C264.64,17.92,241.173,0,213.333,0s-51.307,17.92-60.053,42.667H64    c-23.573,0-42.667,19.093-42.667,42.667V384c0,23.573,19.093,42.667,42.667,42.667h298.667c23.573,0,42.667-19.093,42.667-42.667    V85.333C405.333,61.76,386.24,42.667,362.667,42.667z M213.333,42.667c11.733,0,21.333,9.493,21.333,21.333    c0,11.84-9.6,21.333-21.333,21.333S192,75.84,192,64C192,52.16,201.6,42.667,213.333,42.667z M256,341.333H106.667v-42.667H256    V341.333z M320,256H106.667v-42.667H320V256z M320,170.667H106.667V128H320V170.667z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#0000008A"/></g></g></g></svg>
            <span>list</span>
          </li>
          <li class="aside-wrapper__nav-item" @click="goTo('image')">
            <svg @click="openNav" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -36 512.001 512" width="28px"><g><path d="m8.785156 336.820312 115.558594-115.558593c2.980469-2.980469 6.941406-4.621094 11.15625-4.621094 4.21875 0 8.183594 1.644531 11.164062 4.628906l85.238282 85.234375 133.441406-133.441406c6.148438-6.148438 16.152344-6.152344 22.304688-.011719l115.566406 115.566407h8.785156v-269.921876c0-10.308593-8.386719-18.695312-18.695312-18.695312h-474.609376c-10.308593 0-18.695312 8.386719-18.695312 18.695312v318.125zm223.113282-241.003906c28.203124 0 51.152343 22.949219 51.152343 51.152344s-22.949219 51.148438-51.152343 51.148438c-28.203126 0-51.148438-22.945313-51.148438-51.148438s22.945312-51.152344 51.148438-51.152344zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#0000008A"/><path d="m231.898438 168.117188c11.664062 0 21.152343-9.488282 21.152343-21.148438 0-11.664062-9.488281-21.152344-21.152343-21.152344-11.660157 0-21.148438 9.488282-21.148438 21.152344 0 11.660156 9.488281 21.148438 21.148438 21.148438zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#0000008A"/><path d="m497 318.617188c-4.140625 0-7.894531-1.679688-10.609375-4.394532l-109.890625-109.894531-133.445312 133.445313c-2.980469 2.980468-6.941407 4.621093-11.15625 4.621093-4.21875 0-8.183594-1.644531-11.164063-4.628906l-85.234375-85.234375-109.890625 109.890625c-2.714844 2.714844-6.46875 4.394531-10.609375 4.394531h-15v53.605469c0 10.308594 8.386719 18.695313 18.695312 18.695313h474.609376c10.308593 0 18.695312-8.386719 18.695312-18.695313v-101.804687zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#0000008A"/></g> </svg>
            <span>image</span>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      msg: String
    },
    components: {
    },
    data () {
      return {
        mini: false
      }
    },
      computed: {
      },
      methods: {
        openNav() {
          this.mini = false;
        },
        closeNav() {
          this.mini = true;
        },
        goTo(item) {
          console.log('goTo')
          this.$emit('goTo', item)
        }
      },
  }
</script>


<style lang="scss">
  html, body, ul {
    margin: 0;
    padding: 0;
  }
  .aside-wrapper {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: var(--general-blue);*/
    color: #2c3e50;
    height: 100%;
    min-height: 100vh;
    transform: translateX(0%);
    width: 238px;
    display: flex;
    flex-direction: column;
    left: 0;
    max-width: 100%;
    overflow: hidden;
    pointer-events: auto;
    top: 0;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    will-change: transform;
    background: white;
    transition-property: transform,visibility,width;
    border-right: 1px solid rgba(0,0,0,.12);
    &__mini {
      transform: translateX(0%);
      width: 62px;
      overflow: hidden;
    }
    &__top {
      align-items: center;
      display: flex;
      flex: 1 1 100%;
      letter-spacing: normal;
      outline: none;
      padding: 0 5px;
      position: relative;
      text-decoration: none;
      min-height: 84px;
      border-bottom: 1px solid rgba(0,0,0,.12);
    }
    &__picture {
      width: 50px;
      min-width: 50px;
      height: 50px;
      align-items: center;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      line-height: normal;
      position: relative;
      text-align: center;
      vertical-align: middle;
      overflow: hidden;
      margin-right: 5px;
      cursor: pointer;
    }
    &__main-text {
      align-self: center;
      font-size: 1.2rem;
      line-height: 1.2;
      padding: 0 10px;
      white-space: nowrap;
    }
    &__btn {
      color: rgba(0, 0, 0, .54);
      height: 40px;
      width: 40px;
      border-radius: 50%;
      border-color: transparent;
      background-color: transparent;
      position: relative;
      cursor: pointer;
      font-size: 1.2rem;
    }
    &__btn:before {
      border-radius: inherit;
      bottom: 0;
      color: inherit;
      content: "";
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      transition: opacity .2s cubic-bezier(.4,0,.6,1);
      background-color: currentColor;
    }
    &__btn:hover:before {
      opacity: .08;
    }
    &__nav-item {
      list-style: none;
      display: flex;
      align-items: center;
      padding: 0.5em 0;
      color: rgba(0, 0, 0, .54);
      position: relative;
      cursor: pointer;
      svg {
        min-width: 30px;
        padding-left: 6px;
        padding-right: 15px;
      }
      span {
        font-size: 1rem;
        text-transform: capitalize;
        color: #2c3e50;
      }
    }
    &__nav-item:before {
      border-radius: inherit;
      bottom: 0;
      color: inherit;
      content: "";
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      transition: opacity .2s cubic-bezier(.4,0,.6,1);
      background-color: currentColor;
    }
    &__nav-item:hover:before {
      opacity: .08;
    }
    &__nav {
      padding: 15px 10px;
    }
  }
</style>
