// 作者：小丶张学友
import Vue from 'vue'
import Router from 'vue-router'
// 官网展示
import Platform from '../modules/platform/Platform'
// 官网展示-->产品
import Products_Watermark from '../modules/platform/products/Watermark'
import Products_Sensitive from '../modules/platform/products/Sensitive'
import Products_RayShield from '../modules/platform/products/RayShield'
import Products_DataSecurity from '../modules/platform/products/DataSecurity'
import Products_DataAssets from '../modules/platform/products/DataAssets'
import Products_CapacityShareBlockChain from '../modules/platform/products/CapacityShareBlockChain'
import Products_GovernmentBlockChain from '../modules/platform/products/GovernmentBlockChain'
import Products_MedicalBlockChain from '../modules/platform/products/MedicalBlockChain'
import Products_StorageBlockChain from '../modules/platform/products/StorageBlockChain'
import Products_DataCirculation from '../modules/platform/products/DataCirculation'
//官网解决方案
import Solution_DataAssets from '../modules/platform/solution/DataAssets'
// 官网展示-->新闻咨询
import News from '../modules/platform/news/News'
// 官网展示-->关于我们
import AboutUs_Jobs from '../modules/platform/aboutUs/Jobs'
import AboutUs_Introduce from '../modules/platform/aboutUs/Introduce'
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
                    path: '/products_watermark',
                    name: 'products_watermark',
                    component: Products_Watermark
                },
                {
                    path: '/products_sensitive',
                    name: 'products_sensitive',
                    component: Products_Sensitive
                },
                {
                    path: '/products_rayShield',
                    name: 'products_rayShield',
                    component: Products_RayShield
                },
                {
                    path: '/products_dataSecurity',
                    name: 'products_dataSecurity',
                    component: Products_DataSecurity
                },
                {
                    path: '/products_dataAssets',
                    name: 'products_dataAssets',
                    component: Products_DataAssets
                },
                {
                    path: '/products_capacityShareBlockChain',
                    name: 'products_capacityShareBlockChain',
                    component: Products_CapacityShareBlockChain
                },
                {
                    path: '/products_governmentBlockChain',
                    name: 'products_governmentBlockChain',
                    component: Products_GovernmentBlockChain
                },
                {
                    path: '/products_medicalBlockChain',
                    name: 'products_medicalBlockChain',
                    component: Products_MedicalBlockChain
                },
                {
                    path: '/products_storageBlockChain',
                    name: 'products_storageBlockChain',
                    component: Products_StorageBlockChain
                },
                {
                    path: '/products_dataCirculation',
                    name: 'products_dataCirculation',
                    component: Products_DataCirculation
                },
				//解决方案
                {
                    path: '/solution_dataAssets',
                    name: 'solution_dataAssets',
                    component: Solution_DataAssets
                },
                // 新闻咨询
                {
                    path: '/news',
                    name: 'news',
                    component: News
                },
                // 关于我们
                {
                    path: '/about_jobs',
                    name: 'about_jobs',
                    component: AboutUs_Jobs
                },
                {
                    path: '/about_introduce',
                    name: 'about_introduce',
                    component: AboutUs_Introduce
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
