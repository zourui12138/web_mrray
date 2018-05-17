// 作者：小丶张学友
import Vue from 'vue'
import Router from 'vue-router'
// 官网展示
import Platform from '../modules/platform/Platform'
// 官网展示-->产品
import Watermark from '../modules/platform/products/Watermark'
import Sensitive from '../modules/platform/products/Sensitive'
import RayShield from '../modules/platform/products/RayShield'
import DataSecurity from '../modules/platform/products/DataSecurity'
import DataAssets from '../modules/platform/products/DataAssets'
import CapacityShareBlockChain from '../modules/platform/products/CapacityShareBlockChain'
import GovernmentBlockChain from '../modules/platform/products/GovernmentBlockChain'
import MedicalBlockChain from '../modules/platform/products/MedicalBlockChain'
import StorageBlockChain from '../modules/platform/products/StorageBlockChain'
import DataCirculation from '../modules/platform/products/DataCirculation'
//官网解决方案
import f_DataAssets from '../modules/platform/solution/DataAssets'
import Credit from '../modules/platform/solution/credit'
import Supply from '../modules/platform/solution/supply'
import Fnance from '../modules/platform/solution/fnance'
import Automobile from '../modules/platform/solution/automobile'
import Circulation from '../modules/platform/solution/circulation'
import Logistics from '../modules/platform/solution/logistics'
// 官网展示-->新闻咨询
import News from '../modules/platform/news/News'
// 官网展示-->关于我们
import Jobs from '../modules/platform/aboutUs/Jobs'
import Introduce from '../modules/platform/aboutUs/Introduce'
// 后台官网网站
import Admin from '../modules/admin/Admin'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'platform',
            component: Platform,
            children: [
                // 产品
                {
                    path: '/watermark',
                    name: 'watermark',
                    component: Watermark
                },
                {
                    path: '/sensitive',
                    name: 'sensitive',
                    component: Sensitive
                },
                {
                    path: '/rayShield',
                    name: 'rayShield',
                    component: RayShield
                },
                {
                    path: '/dataSecurity',
                    name: 'dataSecurity',
                    component: DataSecurity
                },
                {
                    path: '/dataAssets',
                    name: 'dataAssets',
                    component: DataAssets
                },
                {
                    path: '/capacityShareBlockChain',
                    name: 'capacityShareBlockChain',
                    component: CapacityShareBlockChain
                },
                {
                    path: '/governmentBlockChain',
                    name: 'governmentBlockChain',
                    component: GovernmentBlockChain
                },
                {
                    path: '/medicalBlockChain',
                    name: 'medicalBlockChain',
                    component: MedicalBlockChain
                },
                {
                    path: '/storageBlockChain',
                    name: 'storageBlockChain',
                    component: StorageBlockChain
                },
                {
                    path: '/dataCirculation',
                    name: 'dataCirculation',
                    component: DataCirculation
                },
				//解决方案
                {
                    path: '/f_DataAssets',
                    name: 'f_DataAssets',
                    component: f_DataAssets
                },
                {
                    path: '/f_credit',
                    name: 'f_credit',
                    component: Credit
                },
                {
                    path: '/f_supply',
                    name: 'f_supply',
                    component: Supply
                },
                {
                    path: '/f_fnance',
                    name: 'f_fnance',
                    component: Fnance
                },
                {
                    path: '/f_automobile',
                    name: 'f_automobile',
                    component: Automobile
                },
                {
                    path: '/f_circulation',
                    name: 'f_circulation',
                    component: Circulation
                },
                {
                    path: '/f_logistics',
                    name: 'f_logistics',
                    component: Logistics
                },
                // 新闻咨询
                {
                    path: '/news',
                    name: 'news',
                    component: News
                },
                // 关于我们
                {
                    path: '/jobs',
                    name: 'jobs',
                    component: Jobs
                },
                {
                    path: '/introduce',
                    name: 'introduce',
                    component: Introduce
                }
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        }
    ]
});
