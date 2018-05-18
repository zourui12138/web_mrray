<template>
    <div id="platform">
        <header class="header">
            <div class="commonWidth clear">
                <img src="../../assets/img/logo.png" alt="" class="fl">
                <ul class="fr">
                    <li class="fl"><h1>首页</h1><h2>Home</h2></li>
                    <li class="fl products">
                        <h1>产品服务</h1>
                        <h2>Products</h2>
                        <SubNav class="subNav" :nav-list="productNav" :has-child="true"/>
                    </li>
                    <li class="fl"><h1>解决方案</h1><h2>Solution</h2></li>
                    <li class="fl"><h1>客户案例</h1><h2>Solution</h2></li>
                    <li class="fl"><h1>演示平台</h1><h2>Solution</h2></li>
                    <li class="fl"><h1>新闻资讯</h1><h2>News</h2></li>
                    <li class="fl">
                        <h1>关于我们</h1>
                        <h2>About&nbsp;Us</h2>
                        <SubNav class="subNav" :nav-list="aboutUsNav" :has-child="false"/>
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
                        child: [
                            {name: '大数据安全网关',router: '/product_dataSecurity',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '数据资产防护系统',router: '/product_dataAssets',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '数字水印系统',router: '/product_watermark',src: product_bass,hoverSrc: product_bass_hover},
                            {name: 'RayShield',router: '/product_rayShield',src: product_bass,hoverSrc: product_bass_hover},
                            {name: '敏感数据与免泄漏',router: '/product_sensitive',src: product_bass,hoverSrc: product_bass_hover},
                        ]
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
