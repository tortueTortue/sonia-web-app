import Vue from 'vue';
import VueRouter from 'vue-router';
import Telemetry from '../views/Telemetry.vue';
import Settings from '../views/Settings.vue';
import Topics from '../views/Topics.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Telemetry,
  },
  {
    path: '/topics',
    component: Topics,
  },
  {
    path: '/settings',
    component: Settings,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
