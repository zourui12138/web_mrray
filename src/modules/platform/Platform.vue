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
                    <li class="fl" :class="currentNav === 'case' ? 'current' : ''">
                        <h1>客户案例</h1>
                        <h2>Solution</h2>
                        <SubNav class="subNav" :nav-list="caseNav"/>
                    </li>
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
    import product_bass from '../../assets/img/subNav/products/bass.png'
    import product_bass_hover from '../../assets/img/subNav/products/bass_hover.png'

    export default {
        name: "platform",
        components: {VuePerfectScrollbar,SubNav},
        data() {
            return{
                productNav: [
                    {
                        name: '迅鳐BASS平台',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
                        child: [
                            {name: '政务区块链平台',router: '/product_governmentBlockChain',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '运力共享区块链平台',router: '/product_capacityShareBlockChain',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '仓储区块链平台',router: '/product_storageBlockChain',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '医疗区块链平台',router: '/product_medicalBlockChain',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '大数据安全网关',router: '/product_dataSecurity',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '数据资产防护系统',router: '/product_dataAssets',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '数字水印系统',router: '/product_watermark',src: product_bass,hoverSrc: product_bass_hover},
                            {name: 'RayShield',router: '/product_rayShield',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '敏感数据与免泄漏',router: '/product_sensitive',src: product_bass,hoverSrc: product_bass_hover},
                        ]
                    },
                    {
                        name: '数据流通平台',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
                        router: '/product_dataCirculation'
                    }
                ],
                solutionNav: [
                    {
                        name: '迅鳐BASS平台',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
                        child: [
                            {name: '数据资产',router: '/solution_dataAssets',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '汽车行业',router: '/solution_carIndustry',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '供应链、生鲜',router: '/solution_supplyChain',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '个人/机构征信',router: '/solution_credit',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '物流货运',router: '/solution_logistics',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '金融信贷',router: '/solution_financial',src: product_bass,hoverSrc: product_bass_hover},
                        ]
                    },
                    {
                        name: '数据流通平台',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
                        router: '/solution_circulation'
                    }
                ],
                caseNav: [
                    {
                        name: '积微仓储区块链',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
                        router: '/case_storageBlockChain'
                    },
                    {
                        name: '运力共享区块链',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
                        router: '/case_capacityShareBlockChain'
                    },
                    {
                        name: '政务区块链',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
                        router: '/case_governmentBlockChain'
                    }
                ],
                aboutUsNav: [
                    {
                        name: '企业介绍',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
                        router: '/aboutUs_introduce'
                    },
                    {
                        name: '招贤纳士',
                        src: product_bass,
                        hoverSrc: product_bass_hover,
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
