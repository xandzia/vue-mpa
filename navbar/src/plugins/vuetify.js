// Vue.use(Vuetify, {
//     components: {
//         VApp
//     },
//     theme: {
//         primary: '#516696',
//         secondary: '#d54747',
//         accent: '#f6b83d',
//         redradio: '#d54747',
//         ground: '#e8e9eb',
//         disabled: '#f6f7f9',
//         link: '#5476c2',
//         autosum: '#6dbae4',
//         info: '#7e98d1',
//         // info: '#6685c8'
//     },
// });
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        primary: '#516696',
        secondary: '#d54747',
        accent: '#f6b83d',
        redradio: '#d54747',
        ground: '#e8e9eb',
        disabled: '#f6f7f9',
        link: '#5476c2',
        autosum: '#6dbae4',
        info: '#7e98d1',
        // info: '#6685c8'
    },
}

export default new Vuetify(opts)
