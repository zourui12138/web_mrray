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
