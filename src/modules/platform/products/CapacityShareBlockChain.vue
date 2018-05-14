<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/capacityShareBlockChain/overview.png" alt="">
                <p class="fr">通过先进的数据主权区块链技术，将运力资源进行贯通、融合、内部结算、数据挖掘等工作，强力解决运力资源浪费大，信用危机，业务手续繁复、税收高，处理纠纷周期长、成本高、仲裁困难的痛点。使数据不会滥用，保证数据流通的安全。实现去中心化的绿色电动运力的可靠可信的共享，提高运力的的利用率，提高运输的的效率，收获更好的社会效益。</p>
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
                        <button type="button">效率提升</button>
                        <p>实现了去中介化的绿色电动运力的可信可靠的共享，提升了运力利用率，提高了运输效率，创造了良好的社会效益。利用区块链的安全多方信任机制，实现将跨机构、跨公司、跨业务领域、跨系统的认证和信息业务权限控制，统一到区块链当中，最大化平台的可用性。吸纳各种大小级别的物流公司加入到联盟当中，同时进行联盟链的租赁业务上线，可以将零散时间内的物流汽车等运力资源，通过分时租赁实现与供销商的订单匹配，最大化物流资源利用率。</p>
                    </div>
                    <div>
                        <button type="button">节税增收</button>
                        <p>在联盟链系统当中，可以通过区块链的去中心化能力、公信力，实现联盟结算，最大程度地减少了因为不信任而导致的各种开销（税费、中介费、手续费等）。同时使用运力币方式，实现了运力报酬的节税、高效对冲等，具有优秀的经济效益与价值。</p>
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
                    <img src="../../../assets/img/products/capacityShareBlockChain/scenario1.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/capacityShareBlockChain/scenario_icon1.png" alt="">
                        <p>政务数据</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/capacityShareBlockChain/scenario2.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/capacityShareBlockChain/scenario_icon2.png" alt="">
                        <p>租赁服务</p>
                    </div>
                </li>
                <li class="fl">
                    <img src="../../../assets/img/products/capacityShareBlockChain/scenario3.png" alt="">
                    <div>
                        <img src="../../../assets/img/products/capacityShareBlockChain/scenario_icon3.png" alt="">
                        <p>金融信贷</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/capacityShareBlockChain/product_logo.png'

    export default {
        name: "capacity-share-block-chain",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '迅鳐Baas平台-运力共享区块链平台',
                bannerContent : '通过先进的数据主权区块链技术，将运力资源进行贯通、融合、内部结算、数据挖掘等工作，强力解决运力资源浪费大，信用危机，业务手续繁复、税收高，处理纠纷周期长、成本高、仲裁困难的痛点。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/capacityShareBlockChain/'+$path;
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
