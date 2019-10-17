import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'S o n i a',
                metaTags: [{
                        name: 'description',
                        content: 'A graphical user interface for telemetry.'
                    },
                    {
                        property: 'og:description',
                        content: 'SONIA UI : A graphical user interface for telemetry.'
                    }
                ]
            }
        },
        {
            path: '/topics',
            name: 'topics',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Topics.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/settings',
            name: 'settings',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Settings.vue')
        }
    ]
})