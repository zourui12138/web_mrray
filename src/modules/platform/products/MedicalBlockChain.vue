<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/medicalBlockChain/overview.png" alt="">
                <p class="fr">医疗区块链平台可以实现医疗机构间安全、可控的数据互联互通，解决长期困扰医疗机构的“信息孤岛”和数据安全问题。电子病历的建设可以利于为患者提供全面、不可篡改的数据信息，也避免了医生在就诊时过多的对患者隐私的询问，和患者的不方便。同时更有利于对患者的隐私保护。</p>
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>产品功能</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section class="clear">
                    <div class="fl">
                        <button type="button">电子病历</button>
                        <p>迅鳐医疗区块链平台将搭建基于区块链技术的分布式电子病历管理系统，为患者提供全面、不可篡改的数据记录，同时实现跨机构、跨地域地访问他们自己的医疗健康数据，对敏感的医疗信息保证其真实、隐私、问责。 在电子病历解决方案的基础上，迅鳐区块链网络可被扩展应用于医疗记录、临床试验、基因组数据、可穿戴设备、物联网健康数据等多种医疗应用场景。</p>
                    </div>
                    <div class="fr">
                        <button type="button">隐私保护</button>
                        <p>医疗数据是一个人最隐私的数据，但由于网络操作错误或者黑客攻击等问题，在过去这些个人隐私数据却存在着大规模泄露的情况。区块链能够建立一个数据记录和身份管理的公开标准。一个全球化的医疗健康区块链能够将每个病人包含本地医院和医生的记录信息关联匹配一个ID。基于区块链技术的通用医疗健康ID能够减少患者诊疗过程中的医疗错误并保护病人隐私。</p>
                    </div>
                </section>
            </div>
        </div>
        <div class="commonWidth scenario">
            <header class="title">
                <h1>产品功能</h1>
                <h2>Application&nbsp;Scenarios</h2>
            </header>
            <ul class="clear">
                <li class="fl">
                    <img src="../../../assets/img/products/medicalBlockChain/scenario1.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/medicalBlockChain/scenario_icon1.png" alt="">
                        <p>政务数据</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/medicalBlockChain/scenario2.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/medicalBlockChain/scenario_icon2.png" alt="">
                        <p>租赁服务</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/medicalBlockChain/scenario3.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/medicalBlockChain/scenario_icon3.png" alt="">
                        <p>金融信贷</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/medicalBlockChain/product_logo.png'

    export default {
        name: "medical-block-chain",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '迅鳐Baas平台-医疗区块链平台',
                bannerContent : '医疗区块链平台可以实现医疗机构间安全、可控的数据互联互通，解决长期困扰医疗机构的“信息孤岛”和数据安全问题。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/medicalBlockChain/'+$path;
    }
    .function{
        background-color: #fcfcfc;
        section{
            position: relative;
            padding: 20px 0;
            background: url(imgUrl('function.png')) no-repeat center;
            div{
                width:330px;
                text-align: left;
                padding: 90px 0;
                button{
                    width:160px;
                    height:40px;
                    background-color: #2e95ee;
                    color: #fff;
                    margin-bottom: 50px;
                    border-radius: 4px;
                }
                p{
                    text-align: justify;
                    text-indent: 2em;
                    line-height: 20px;
                }
            }
        }
    }
</style>
