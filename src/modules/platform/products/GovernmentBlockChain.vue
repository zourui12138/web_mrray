<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/governmentBlockChain/overview.png" alt="">
                <p class="fr">       迅鳐Baas平台-政务区块链平台，通过区块链技术解决数据交易过程中数据确权、追踪溯源，数据违规使用过程中难以取证和维权问题。打造基于区块链的智能化高效、低成本、可信任的政务管理模式，增强政府、企业和民众之间的信任。</p>
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
                        <p>政务区块链数据使用包含两个合约，一个合约是法律合约，线下要签订一个合同，还有一个就是智能合约。在数据共享过程中进行实时监控并加密处理，保证数据流通的安全和不被滥用。同时支持多种加密方式，可以随时更换链下数据的加密算法。其中成员管理负责管理用户标示、可审计性，将公钥基础设施和共识机制进行整合。参与者需要获取证书管理者发放的证书，证书保存在区块链上。交易时通过证书来对身份进行认证，保证对数据交易的可追溯性和安全性。</p>
                    </div>
                    <div>
                        <button type="button">身份认证更安全</button>
                        <p>通过指纹、人脸、虹膜等生物信息将账户和行为主体绑定。同时将身份信息进行强度安全保护后，置于身份链上。身份信息分为公开信息、可选择公开信息、私密信息，公开信息方便数据交易时买卖双方增加对方的认同。</p>
                    </div>
                    <div>
                        <button type="button">数据可追溯</button>
                        <p>政务区块链分链上和链下，链上管理用户身份信息、数据区块描述信息、电子合约；实际数据保存在链上。数据共享时通过生物识别和CA方式对身份进行认证，把数字签名、时间戳等信息共享信息实时记录在链上，保证对数据交易的可追溯性。</p>
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
                    <img src="../../../assets/img/products/governmentBlockChain/scenario1.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/governmentBlockChain/scenario_icon1.png" alt="">
                        <p>税务机关</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/governmentBlockChain/scenario2.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/governmentBlockChain/scenario_icon2.png" alt="">
                        <p>不动产登记机关</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/governmentBlockChain/scenario3.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/governmentBlockChain/scenario_icon3.png" alt="">
                        <p>社保中心</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/governmentBlockChain/product_logo.png'

    export default {
        name: "government-block-chain",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '迅鳐Baas平台-政务区块链平台',
                bannerContent : '通过区块链技术解决数据交易过程中数据确权、追踪溯源，数据违规使用过程中难以取证和维权问题。打造基于区块链的智能化高效、低成本、可信任的政务管理模式，增强政府、企业和民众之间的信任。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/governmentBlockChain/'+$path;
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
