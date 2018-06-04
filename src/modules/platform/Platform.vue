<template>
    <div id="platform">
        <header class="header">
            <div class="commonWidth clear">
                <img src="../../assets/img/logo.png" alt="" class="fl">
                <ul class="fr">
                    <li class="fl" :class="currentNav === 'home' ? 'current' : ''" @click="href('/home')"><h1>首页</h1><h2>Home</h2></li>
                    <li class="fl" :class="currentNav === 'product' ? 'current' : ''">
                        <h1>产品服务</h1>
                        <h2>Products</h2>
                        <SubNav class="subNav" :nav-list="productNav"/>
                    </li>
                    <li class="fl" :class="currentNav === 'solution' ? 'current' : ''">
                        <h1>解决方案</h1>
                        <h2>Solution</h2>
                        <SubNav class="subNav" :nav-list="solutionNav"/>
                    </li>
                    <li class="fl" :class="currentNav === 'case' ? 'current' : ''"><h1>客户案例</h1><h2>Solution</h2></li>
                    <li class="fl" @click="href()"><h1>演示平台</h1><h2>Solution</h2></li>
                    <li class="fl" :class="currentNav === 'news' ? 'current' : ''" @click="href('/news')"><h1>新闻资讯</h1><h2>News</h2></li>
                    <li class="fl" :class="currentNav === 'aboutUs' ? 'current' : ''">
                        <h1>关于我们</h1>
                        <h2>About&nbsp;Us</h2>
                        <SubNav class="subNav" :nav-list="aboutUsNav"/>
                    </li>
                </ul>
            </div>
        </header>
        <VuePerfectScrollbar v-scroll class="main">
            <router-view/>
            <footer class="footer">
                <div class="commonWidth clear">
                    <ul class="fl">
                        <li>迅鳐成都科技有限公司</li>
                        <li>公司网址：www.mrray.cn</li>
                        <li>公司电话：028—87827621</li>
                        <li>数据哨兵研发办公地址：四川省成都市郫都区菁蓉镇静园东路28号优易数据大厦5F</li>
                        <li>区块链研发办公地址：四川省成都市高新区菁蓉国际广场1栋A区3楼</li>
                        <li>服务咨询邮箱：Service@MrRay.cn</li>
                        <li>简历投递邮箱：hr@mrray.cn</li>
                        <li>Copyright&nbsp;&copy;&nbsp;2015-2035&nbsp;迅鳐成都科技有限公司&nbsp;版权所有&nbsp;蜀ICP备16007868号</li>
                    </ul>
                    <div class="fr">
                        <img src="../../assets/img/QrCode.png" alt="">
                        <h1>扫码关注迅鳐公众号</h1>
                    </div>
                </div>
            </footer>
        </VuePerfectScrollbar>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import SubNav from '../../components/SubNav'
    import product_government from '../../assets/img/subnav/products/government.png'
    import product_government_hover from '../../assets/img/subnav/products/government_hover.png'
    import product_share from '../../assets/img/subnav/products/share.png'
    import product_share_hover from '../../assets/img/subnav/products/share_hover.png'
    import product_storage from '../../assets/img/subnav/products/storage.png'
    import product_storage_hover from '../../assets/img/subnav/products/storage_hover.png'
    import product_medical from '../../assets/img/subnav/products/medical.png'
    import product_medical_hover from '../../assets/img/subnav/products/medical_hover.png'
    import product_dataSecurity from '../../assets/img/subnav/products/dataSecurity.png'
    import product_dataSecurity_hover from '../../assets/img/subnav/products/dataSecurity_hover.png'
    import product_dataAssets from '../../assets/img/subnav/products/dataAssets.png'
    import product_dataAssets_hover from '../../assets/img/subnav/products/dataAssets_hover.png'
    import product_watermark from '../../assets/img/subnav/products/watermark.png'
    import product_watermark_hover from '../../assets/img/subnav/products/watermark_hover.png'
    import product_rayShield from '../../assets/img/subnav/products/rayShield.png'
    import product_rayShield_hover from '../../assets/img/subnav/products/rayShield_hover.png'
    import product_sensitive from '../../assets/img/subnav/products/sensitive.png'
    import product_sensitive_hover from '../../assets/img/subnav/products/sensitive_hover.png'
    import product_circulation from '../../assets/img/subnav/products/circulation.png'
    import product_circulation_hover from '../../assets/img/subnav/products/circulation_hover.png'
    import solution_dataAssets from '../../assets/img/subnav/solution/dataAssets.png'
    import solution_dataAssets_hover from '../../assets/img/subnav/solution/dataAssets_hover.png'
    import solution_car from '../../assets/img/subnav/solution/car.png'
    import solution_car_hover from '../../assets/img/subnav/solution/car_hover.png'
    import solution_supply from '../../assets/img/subnav/solution/supply.png'
    import solution_supply_hover from '../../assets/img/subnav/solution/supply_hover.png'
    import solution_idcard from '../../assets/img/subnav/solution/idcard.png'
    import solution_idcard_hover from '../../assets/img/subnav/solution/idcard_hover.png'
    import solution_logistics from '../../assets/img/subnav/solution/logistics.png'
    import solution_logistics_hover from '../../assets/img/subnav/solution/logistics_hover.png'
    import solution_circulation from '../../assets/img/subnav/solution/circulation.png'
    import solution_circulation_hover from '../../assets/img/subnav/solution/circulation_hover.png'
    import about_jobs from '../../assets/img/subnav/aboutUs/jobs.png'
    import about_jobs_hover from '../../assets/img/subnav/aboutUs/jobs_hover.png'
    import about_introduce from '../../assets/img/subnav/aboutUs/introduce.png'
    import about_introduce_hover from '../../assets/img/subnav/aboutUs/introduce_hover.png'

    export default {
        name: "platform",
        components: {VuePerfectScrollbar,SubNav},
        data() {
            return{
                productNav: [
                    {
                        name: '政务区块链平台',
                        router: '/product_governmentBlockChain',
                        src: product_government,
                        hoverSrc: product_government_hover
                    },
                    {
                        name: '运力共享区块链平台',
                        router: '/product_capacityShareBlockChain',
                        src: product_share,
                        hoverSrc: product_share_hover
                    },
                    {
                        name: '仓储区块链平台',
                        router: '/product_storageBlockChain',
                        src: product_storage,
                        hoverSrc: product_storage_hover
                    },
                    {
                        name: '医疗区块链平台',
                        router: '/product_medicalBlockChain',
                        src: product_medical,
                        hoverSrc: product_medical_hover
                    },
                    {
                        name: '大数据安全网关',
                        router: '/product_dataSecurity',
                        src: product_dataSecurity,
                        hoverSrc: product_dataSecurity_hover
                    },
                    {
                        name: '数据资产防护系统',
                        router: '/product_dataAssets',
                        src: product_dataAssets,
                        hoverSrc: product_dataAssets_hover
                    },
                    {
                        name: '数字水印系统',
                        router: '/product_watermark',
                        src: product_watermark,
                        hoverSrc: product_watermark_hover
                    },
                    {
                        name: 'RayShield',
                        router: '/product_rayShield',
                        src: product_rayShield,
                        hoverSrc: product_rayShield_hover
                    },
                    {
                        name: '敏感数据与免泄漏',
                        router: '/product_sensitive',
                        src: product_sensitive,
                        hoverSrc: product_sensitive_hover
                    },
                    {
                        name: '数据流通平台',
                        src: product_circulation,
                        hoverSrc: product_circulation_hover,
                        router: '/product_dataCirculation'
                    }
                ],
                solutionNav: [
                    {
                        name: '数据资产',
                        router: '/solution_dataAssets',
                        src: solution_dataAssets,
                        hoverSrc: solution_dataAssets_hover
                    },
                    {
                        name: '汽车行业',
                        router: '/solution_carIndustry',
                        src: solution_car,
                        hoverSrc: solution_car_hover
                    },
                    {
                        name: '供应链、生鲜',
                        router: '/solution_supplyChain',
                        src: solution_supply,
                        hoverSrc: solution_supply_hover
                    },
                    {
                        name: '个人/机构征信',
                        router: '/solution_credit',
                        src: solution_idcard,
                        hoverSrc: solution_idcard_hover
                    },
                    {
                        name: '物流货运',
                        router: '/solution_logistics',
                        src: solution_logistics,
                        hoverSrc: solution_logistics_hover
                    },
                    {
                        name: '金融信贷',
                        router: '/solution_financial',
                        src: solution_idcard,
                        hoverSrc: solution_idcard_hover
                    },
                    {
                        name: '数据流通平台',
                        src: solution_circulation,
                        hoverSrc: solution_circulation_hover,
                        router: '/solution_circulation'
                    }
                ],
                aboutUsNav: [
                    {
                        name: '企业介绍',
                        src: about_introduce,
                        hoverSrc: about_introduce_hover,
                        router: '/aboutUs_introduce'
                    },
                    {
                        name: '招贤纳士',
                        src: about_jobs,
                        hoverSrc: about_jobs_hover,
                        router: '/aboutUs_jobs'
                    }
                ]
            }
        },
        computed: {
            currentNav() {
                let navName;
                switch (this.$route.name){
                    case 'home' : navName = 'home';break;
                    case 'product_watermark' : navName = 'home';break;
                    case 'product_sensitive' : navName = 'product';break;
                    case 'product_rayShield' : navName = 'product';break;
                    case 'product_dataSecurity' : navName = 'product';break;
                    case 'product_dataAssets' : navName = 'product';break;
                    case 'product_capacityShareBlockChain' : navName = 'product';break;
                    case 'product_governmentBlockChain' : navName = 'product';break;
                    case 'product_medicalBlockChain' : navName = 'product';break;
                    case 'product_storageBlockChain' : navName = 'product';break;
                    case 'product_dataCirculation' : navName = 'product';break;
                    case 'solution_dataAssets' : navName = 'solution';break;
                    case 'solution_carIndustry' : navName = 'solution';break;
                    case 'solution_circulation' : navName = 'solution';break;
                    case 'solution_credit' : navName = 'solution';break;
                    case 'solution_financial' : navName = 'solution';break;
                    case 'solution_logistics' : navName = 'solution';break;
                    case 'solution_supplyChain' : navName = 'solution';break;
                    case 'case_capacityShareBlockChain' : navName = 'case';break;
                    case 'case_governmentBlockChain' : navName = 'case';break;
                    case 'case_storageBlockChain' : navName = 'case';break;
                    case 'news' : navName = 'news';break;
                    case 'aboutUs_jobs' : navName = 'aboutUs';break;
                    case 'aboutUs_introduce' : navName = 'aboutUs';break;
                }
                return navName;
            }
        },
        methods: {
            href(path) {
                path ? this.$router.push({path: path}) :
                    window.open('http://210.13.50.98:10145/app/mrray/blockChainApp/#!/home');
            }
        }
    }
</script>

<style lang="scss" scoped>
    #platform{
        height: 100%;
        .header {
            border-bottom: 1px solid #d7d7d7;
            img {
                margin-top: 20px;
            }
            ul {
                li {
                    padding: 22px 0;
                    width: 123px;
                    text-align: center;
                    transition: color .2s;
                    position: relative;
                    h1 {
                        height: 20px;
                        line-height: 20px;
                        cursor: pointer;
                    }
                    h2 {
                        height: 16px;
                        line-height: 16px;
                        font-size: 12px;
                        cursor: pointer;
                    }
                    .subNav{
                        display: none;
                    }
                    &:hover{
                        .subNav{
                            display: block;
                        }
                    }
                    &:hover,&.current{
                        h1,h2{
                            color: #2e95ee;
                        }
                    }
                }
            }
        }
        .main{
            height: calc(100% - 81px);
            .footer {
                background-color: #333;
                color: #fff;
                font-size: 12px;
                padding: 15px 0;
                li {
                    line-height: 30px;
                }
                div {
                    div{
                        text-align: center;
                        margin-top: 32px;
                        h1 {
                            font-size: 12px;
                            height: 50px;
                            line-height: 50px;
                        }
                        img {
                            vertical-align: top;
                        }
                    }
                }
            }
        }
    }
</style>
