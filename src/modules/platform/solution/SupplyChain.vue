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
                        <p class="fr">传统供应链行业不能支撑如今复杂和地理分散的供应周期的需求。新起的网络供应，问题也繁多，造假难以避免，可信机制不可信</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">2</strong>
                        <p class="fr">信息共享不畅导致服务质量差,并且存在中间商，让产品无法保证品质和价格，市场价格混乱，让消费者无法体验价廉物美</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">3</strong>
                        <p class="fr">很难追踪运输过程中出现得事故，不能高效解决问题。</p>
                    </li>
                </ul>
                <img class="fr" src="../../../assets/img/solution/supplyChain/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Solution&nbsp;Function</h2>
                </header>
                <h1>迅鳐区块链将信息同时与整个网络共享，整个平台增强的安全性，更大的透明度，更好的可扩展性，快速的交易，降低成本，和创新。</h1>
                <section>
                    <div>
                        <button type="button">确权证书</button>
                        <p>数据作为受保护的虚拟资产，每份符合标准且有效的数 据和交易都有对应的确权证书。</p>
                    </div>
                    <div>
                        <button type="button">数据授权记录</button>
                        <p>数据作为受保护的虚拟资产，每份符合标准且 有效的数据和交易都有对应的确权证书。</p>
                    </div>
                    <div>
                        <button type="button">数据流转追溯</button>
                        <p>智能合约自动运行在区块链上，安装在所有节点，所有 节点都可以通过运行智能合约来校验交易的有效性，以达到抗破坏性。</p>
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
                    <header>仓储业务</header>
                    <section><div>以仓储链为核心打通金融链、生产链、物流链、供应链，实现数据资源能力开放</div></section>
                </li>
                <li class="fl">
                    <header>供应链</header>
                    <section><div>以供应链为核心打通金融链、生产链、物流链、供应链，实现数据资源能力开放</div></section>
                </li>
                <li class="fl">
                    <header>生鲜销售</header>
                    <section><div>保证生鲜销售的及时性，整个流程可追溯</div></section>
                </li>
                <li class="fl">
                    <header>电商行业</header>
                    <section><div>用区块链溯源的技术解决电商造假难追究的问题</div></section>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import solutionLogo from '~/assets/img/solution/supplyChain/solution_logo.png'

    export default {
        name: "supply-chain",
        components: {Banner},
        data() {
            return{
                solutionLogo : solutionLogo,
                bannerTitle : '供应链行业解决方案',
                bannerContent : '迅鳐供应链区块链解决方案，通过以供应链为核心打通打通金融链、生产链、物流链、仓储链，实现数据资源能力开放，消除中间商，让供应链服务更快，更安全，更有价格优势。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/solution";
    @function imgUrl($path) {
        @return '../../../assets/img/solution/supplyChain/'+$path;
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
