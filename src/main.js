// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 引入Menu组件
import {
    Menu, MenuItem,
    Table, TableColumn,
    Button, Input, Select, Option,
    Form, FormItem,
    Pagination,
    Upload,
    MessageBox,
    Message
} from 'element-ui';
Vue.use(Menu);
Vue.use(MenuItem);
// 引入Table
Vue.use(Table);
Vue.use(TableColumn);
// 引入Button
Vue.use(Button);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
// 引入Pagination
Vue.use(Pagination);
// 引入From表单
Vue.use(Form);
Vue.use(FormItem);
// 引入图片上传
Vue.use(Upload);
// 引入消息弹出框和消息提醒
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

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
