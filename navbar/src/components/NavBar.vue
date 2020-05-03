<template>
  <v-app>
    <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
    >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>John Leider</v-list-item-title>

          <v-btn
                  icon
                  @click.stop="mini = !mini"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
    import {
        VApp,
        VNavigationDrawer,
        VDivider,
        VIcon,
        VBtn,
        VImg,
        VList, VListItem, VListItemIcon, VListItemTitle, VListItemContent, VListItemAvatar
    } from 'vuetify/lib'
  import vuetify from '.././plugins/vuetify'
  export default {
    vuetify,
    name: 'NavBar',
    props: {
      msg: String
    },
    components: {
        VApp,
        VNavigationDrawer,
        VDivider,
        VIcon,
        VList,
        VListItem,
        VListItemIcon,
        VListItemTitle,
        VListItemContent,
        VListItemAvatar,
        VBtn,
        VImg
    },
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h3 {
    margin: 40px 0 0;
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
</style>
