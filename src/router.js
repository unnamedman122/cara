import {createRouter,createWebHashHistory} from 'vue-router'

import About from "./views/About.vue"
import Basket from "./views/Basket.vue"
import Blog from "./views/Blog.vue"
import Contact from "./views/Contact.vue"
import Home from "./views/Home.vue"
import Market from "./views/Market.vue"

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        { path: '/', component: Home,alias:'/' },
        { path: '/Basket', component: Basket },
        { path: '/Blog', component: Blog },
        { path: '/Contact', component: Contact },
        { path: '/Market', component: Market },    
        { path: '/about', component: About }
    ]
})