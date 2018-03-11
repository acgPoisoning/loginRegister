import Vue from 'vue';
import Router from 'vue-router';

import home from '../components/home/home.vue';
import login from '../components/login/login.vue';
import register from '../components/register/register.vue';
import user from '../components/user/user.vue';
import transfer from '../components/transfer/transfer.vue';
import charge from '../components/charge/charge.vue';
import bill from '../components/bill/bill.vue';

Vue.use(Router);

const routes = [{
  path: '/',
  redirect: '/login' // 重定向是通过routes配置来完成，进入页面首先展示用户中心页
}, {
  path: '/login',
  component: login
}, {
  path: '/register',
  component: register
}, {
  path: '/home',
  component: home,
  meta: {
    requireAuth: true
  },
  children: [{
    path: 'user',
    component: user
  }, {
    path: 'transfer',
    component: transfer
  }, {
    path: 'charge',
    component: charge
  }, {
    path: 'bill',
    component: bill
  }]
}];

export default new Router({
  linkActiveClass: 'active',
  routes
});
