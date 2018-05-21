// 作者：小丶张学友
import Vue from 'vue'
import Router from 'vue-router'
// 官网展示
import Platform from '../modules/platform/Platform'
// 官网展示-->首页
import Home from '../modules/platform/home/Home'
// 官网展示-->产品
import Product_Watermark from '../modules/platform/products/Watermark'
import Product_Sensitive from '../modules/platform/products/Sensitive'
import Product_RayShield from '../modules/platform/products/RayShield'
import Product_DataSecurity from '../modules/platform/products/DataSecurity'
import Product_DataAssets from '../modules/platform/products/DataAssets'
import Product_CapacityShareBlockChain from '../modules/platform/products/CapacityShareBlockChain'
import Product_GovernmentBlockChain from '../modules/platform/products/GovernmentBlockChain'
import Product_MedicalBlockChain from '../modules/platform/products/MedicalBlockChain'
import Product_StorageBlockChain from '../modules/platform/products/StorageBlockChain'
import Product_DataCirculation from '../modules/platform/products/DataCirculation'
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
        // 重定向
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            name: 'platform',
            component: Platform,
            children: [
                // 首页
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                // 产品
                {
                    path: '/product_watermark',
                    name: 'product_watermark',
                    component: Product_Watermark
                },
                {
                    path: '/product_sensitive',
                    name: 'product_sensitive',
                    component: Product_Sensitive
                },
                {
                    path: '/product_rayShield',
                    name: 'product_rayShield',
                    component: Product_RayShield
                },
                {
                    path: '/product_dataSecurity',
                    name: 'product_dataSecurity',
                    component: Product_DataSecurity
                },
                {
                    path: '/product_dataAssets',
                    name: 'product_dataAssets',
                    component: Product_DataAssets
                },
                {
                    path: '/product_capacityShareBlockChain',
                    name: 'product_capacityShareBlockChain',
                    component: Product_CapacityShareBlockChain
                },
                {
                    path: '/product_governmentBlockChain',
                    name: 'product_governmentBlockChain',
                    component: Product_GovernmentBlockChain
                },
                {
                    path: '/product_medicalBlockChain',
                    name: 'product_medicalBlockChain',
                    component: Product_MedicalBlockChain
                },
                {
                    path: '/product_storageBlockChain',
                    name: 'product_storageBlockChain',
                    component: Product_StorageBlockChain
                },
                {
                    path: '/product_dataCirculation',
                    name: 'product_dataCirculation',
                    component: Product_DataCirculation
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
                    path: '/aboutUs_jobs',
                    name: 'aboutUs_jobs',
                    component: AboutUs_Jobs
                },
                {
                    path: '/aboutUs_introduce',
                    name: 'aboutUs_introduce',
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
