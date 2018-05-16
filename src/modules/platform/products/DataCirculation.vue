<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/dataCirculation/overview.png" alt="">
                <p class="fr">将数字资产流通应用落地接入平台。引导数据去中心的零风险、快速结算创新业务。通过块链式数据结构实现环环相扣的历史交易信息，通过非对称密码学技术实现公私钥的加解密，有助于数据交易之前的数据确权和数据上链等操作。在智能合约层，依靠智能合约在隔离沙箱中的独立执行和相互校对能力，可以通过代码编写精确表达、实现数据分级分类管理的权限控制，有助于实现多个政府委办局之间的层级映射，也有助于跨层级、跨部门、跨区域、跨平台、跨行业的多机构协作联动。</p>
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
                        <button type="button">隐私保护</button>
                        <p>通过智能合约的自动执行衍生出数据的自动交易，有助于解决数据定价难、精准计费难、交易撮合难等诸多问题。在数据流通层，依托网络交换层、共识机制层、数据存储层、智能合约层等相关机制，数据提供方相较于传统的数据流通平台，更容易对自己的数据进行加密后传输，方便实现数据的确权管理。数据流通平台面对加密后的数据，更容易自证清白，避免流通数据的泛滥复制。</p>
                    </div>
                    <div>
                        <button type="button">数据溯源</button>
                        <p>依托区块链系统的溯源功能，数据所有方可以跟踪数据的流通现状，并且数据的每次使用都需要数据所有方的授权验证，实现数据提供方对拥有数据的自主管控，数据需求方可以追溯数据的源头，确保数据分析的真实性，提升数据分析的精准性和有效性。</p>
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
                    <img src="../../../assets/img/products/dataCirculation/scenario1.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/dataCirculation/scenario_icon1.png" alt="">
                        <p>政务服务</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/dataCirculation/scenario2.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/dataCirculation/scenario_icon2.png" alt="">
                        <p>电商服务</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/dataCirculation/scenario3.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/dataCirculation/scenario_icon3.png" alt="">
                        <p>企业服务</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/dataCirculation/product_logo.png'

    export default {
        name: "data-circulation",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '数据流通',
                bannerContent : '将数字资产流通应用落地接入平台。引导数据去中心的零风险、快速结算创新业务。在区块链技术的保护作用下，是数据可以有效并避免外泄的情况下进行流通与交易，是利益得到最大化，也保障了数据拥有者的利益与安全。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/dataCirculation/'+$path;
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
