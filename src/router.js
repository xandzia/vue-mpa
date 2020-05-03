import Vue from "vue";
import Router from "vue-router";
import PageNotFound from './components/PageNotFound.vue'
import ImageItem from 'image-item'
import List from 'list'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/list",
            name: "List",
            component: List
        },
        {
            path: "/image",
            name: "Image",
            component: ImageItem,
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "*",
            component: PageNotFound
        }
    ],
    mode: 'history'
});

export default router;
