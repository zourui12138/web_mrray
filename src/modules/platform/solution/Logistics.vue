<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :solution-logo="solutionLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>业务需求及痛点</h1>
                <h2>Solution&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <ul class="fl">
                    <li class="clear">
                        <strong class="fl">1</strong>
                        <p class="fr">物流行业成本越来越高，物流企业多、小、散、弱，行业信息同步不及时。</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">2</strong>
                        <p class="fr">物流格局陈旧，人工易出错，途中故障难以实时追踪</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">3</strong>
                        <p class="fr">信任危机严重，货物流失难追责。</p>
                    </li>
                </ul>
                <img class="fr" src="../../../assets/img/solution/logistics/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Solution&nbsp;Function</h2>
                </header>
                <h1>物流货运区块链让所有物流链条中的商品可追溯、可证伪、不可篡改，实现物流商品的资产化。利用区块链基础平台，可使资金有效、快速地接入到物流行业，从而改善中小企业的营商环境。</h1>
                <section>
                    <div>
                        <button type="button">确权证书</button>
                        <p>数据作为受保护的虚拟资产，每份符合标准且有效的数 据和交易都有对应的确权证书。</p>
                    </div>
                    <div>
                        <button type="button">数据流转追溯</button>
                        <p>将数据的来源、流向和使用等信息均写入区块链，可以完成数据流转溯源问题。</p>
                    </div>
                    <div>
                        <button type="button">数据授权记录</button>
                        <p>数据拥有者对数据的使用进行授权，并将授权内容进行在区块链，只有获得数据使用授权才能够使用该数据。</p>
                    </div>
                    <div>
                        <button type="button">数据真实可验</button>
                        <p>对于迅鳐数据，验证者可以利用写入区块链的 hash值对其原始数据进行验证保证数据真实没被篡改。</p>
                    </div>
                </section>
            </div>
        </div>
        <div class="commonWidth feature">
            <header class="title">
                <h1>适用领域</h1>
                <h2>Solution&nbsp;Features</h2>
            </header>
            <ul class="clear">
                <li class="fl">
                    <header>重工业交易</header>
                    <section><div>用区块链服务解决大宗交易的信任危机</div></section>
                </li>
                <li class="fl">
                    <header>物流货运</header>
                    <section><div>解决货运中丢失件多，难追踪的问题</div></section>
                </li>
                <li class="fl">
                    <header>生鲜行业</header>
                    <section><div>提高货品同步数据速率，减少人工错误</div></section>
                </li>
                <li class="fl">
                    <header>医药行业</header>
                    <section><div>解决药物不能溯源的问题让病患更放心</div></section>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import solutionLogo from '~/assets/img/solution/logistics/solution_logo.png'

    export default {
        name: "logistics",
        components: {Banner},
        data() {
            return{
                solutionLogo : solutionLogo,
                bannerTitle : '物流货运行业解决方案',
                bannerContent : '迅鳐供物流货运区块链解决方案，通过以物流链为核心打通打通金融链、生产链、仓储链、供应链，实现数据资源能力开放。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/solution";
    @function imgUrl($path) {
        @return '../../../assets/img/solution/logistics/'+$path;
    }
    .function section {
        background: url(imgUrl('function.png')) no-repeat center;
    }
    .feature ul li{
        &:nth-child(1) section{
            background: url(imgUrl('feature1.png')) no-repeat center;
        }
        &:nth-child(2) section{
            background: url(imgUrl('feature2.png')) no-repeat center;
        }
        &:nth-child(3) section{
            background: url(imgUrl('feature3.png')) no-repeat center;
        }
        &:nth-child(4) section{
            background: url(imgUrl('feature4.png')) no-repeat center;
        }
    }
</style>
