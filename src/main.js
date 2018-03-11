// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex/store.js';
import router from './router/router.js';

import './common/stylus/index.styl';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false;

// 全局导航钩子
router.beforeEach((to, from, next) => {
  // 监测是否有 requireAuth 属性
  if (to.meta.requireAuth) {
    if (!isEmptyObject(store.state.user)) {
      next();
    } else {
      // 未登录过账号时
      alert('您还未登录账号，无法进入用户中心，请先登录账号');
      next({
        // 将跳转的路由 path作为参数，登录成功后跳转到该路由
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

// 判断object是否为空
function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
