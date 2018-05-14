<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/storageBlockChain/overview.png" alt="">
                <p class="fr">解决了仓储行业货权信息不通、金融信息共享不畅、电商大宗交易安全支撑不足的痛点，以仓储链为核心打通金融链、生产链、物流链、供应链，实现数据资源能力开放。</p>
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>产品功能</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <div>
                        <button type="button">数据安全</button>
                        <p>利用区块链技术追溯供应链的每一个环节，数据共享过程中进行实时监控并加密处理，保证数据流通的安全和不被滥用。支持多种加密方式，可以随时更换链下数据的加密算法。成员管理负责管理用户标示、可审计性，将公钥基础设施和共识机制进行整合。参与者需要获取证书管理者发放的证书，证书保存在区块链上。交易时通过证书来对身份进行认证，保证对数据交易的可追溯性。</p>
                    </div>
                    <div>
                        <button type="button">货权保障</button>
                        <p>解决安全可靠的网络远程发货、实时库存、货权智能管理等实际业务问题；在搭建去中心化平台的同时，可以保障仓储企业、运输部门等各机构数据资产安全、各方互信的基础性平台；在实施仓单、货权、物流等业务流程过程中，将货品、仓库、客户、金融相互打通保障货权信息流通及时。</p>
                    </div>
                    <div>
                        <button type="button">效率提升</button>
                        <p>资产一旦在区块链上发行，后续流通环节可不再依赖发行方系统，在流通中，资产由单中心控制变成社会化传播，任何有资源的渠道都可能成为资产流通的催化剂。因此，极大地提升了数字资产流通效率，真正达到“多方发行、自由流通”。</p>
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
                    <img src="../../../assets/img/products/storageBlockChain/scenario1.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/storageBlockChain/scenario_icon1.png" alt="">
                        <p>仓储供应链</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/storageBlockChain/scenario2.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/storageBlockChain/scenario_icon2.png" alt="">
                        <p>物流服务</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/storageBlockChain/scenario3.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/storageBlockChain/scenario_icon3.png" alt="">
                        <p>金融信贷</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/storageBlockChain/product_logo.png'

    export default {
        name: "storage-block-chain",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '迅鳐Baas平台-仓储区块链平台',
                bannerContent : '解决了仓储行业货权信息不通、金融信息共享不畅、电商大宗交易安全支撑不足的痛点，以仓储链为核心打通金融链、生产链、物流链、供应链，实现数据资源能力开放。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/storageBlockChain/'+$path;
    }
    .function{
        background-color: #fcfcfc;
        section{
            position: relative;
            padding: 20px 0;
            background: url(imgUrl('function.png')) no-repeat right center;
            div{
                width:700px;
                text-align: left;
                padding: 20px 0;
                button{
                    width:160px;
                    height:40px;
                    background-color: #2e95ee;
                    color: #fff;
                    margin-bottom: 6px;
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
