// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
