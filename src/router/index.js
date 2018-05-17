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
import Solution_CarIndustry from '../modules/platform/solution/CarIndustry'
import Solution_Circulation from '../modules/platform/solution/Circulation'
import Solution_Credit from '../modules/platform/solution/Credit'
import Solution_Financial from '../modules/platform/solution/Financial'
import Solution_Logistics from '../modules/platform/solution/Logistics'
import Solution_SupplyChain from '../modules/platform/solution/SupplyChain'
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
                {
                    path: '/solution_carIndustry',
                    name: 'solution_carIndustry',
                    component: Solution_CarIndustry
                },
                {
                    path: '/solution_circulation',
                    name: 'solution_circulation',
                    component: Solution_Circulation
                },
                {
                    path: '/solution_credit',
                    name: 'solution_credit',
                    component: Solution_Credit
                },
                {
                    path: '/solution_financial',
                    name: 'solution_financial',
                    component: Solution_Financial
                },
                {
                    path: '/solution_logistics',
                    name: 'solution_logistics',
                    component: Solution_Logistics
                },
                {
                    path: '/solution_supplyChain',
                    name: 'solution_supplyChain',
                    component: Solution_SupplyChain
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
