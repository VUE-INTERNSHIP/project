import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../components/Authentication/login.vue'
import HomeView from '../views/HomeView.vue'
import Bookmarked from '../views/Bookmarked.vue'
import MoviesView from '../views/MoviesView.vue'
import SeriesView from '../views/SeriesView.vue'
import signup from '../components/Authentication/signup.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
  // },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
  },
  {
    name: 'signup',
    path: '/signup',
    component:signup                   
  },
  {
    name: 'MoviesView',
    path: '/moviesview',
    component: MoviesView
  },
  {
    name: 'SeriesView',
    path: '/seriesview',
    component: SeriesView
  },
  {
    name: 'homeview',
    path: '/seriesview',
    component: HomeView
  },
  {
    name: 'Bookmarked',
    path: '/Bookmarked',
    component: Bookmarked
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
