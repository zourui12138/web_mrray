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
                        <p class="fr">O2O的征信方式导致成本过高。正规市场化数据采集渠道有限，数据源争夺战耗费大量成本。</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">2</strong>
                        <p class="fr">数据缺乏共享，征信机构与用户信息不对称。征信机构与征信机构、征信机构与其他机构等缺乏有效的共享合作，信息孤岛问题严重，无法实现征信业内高质量的数据流通及交易，造成征信机构与用户信息不对称。过度授信，重复借贷、坏账率居高不下。</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">3</strong>
                        <p class="fr">数据隐私保护问题突出，传统技术架构难以满足新要求。大数据时代下的征信业对隐私保护和数据安全的要求更高。正规市场化数据采集渠道有限，数据源争夺战耗费大量成本。</p>
                    </li>
                </ul>
                <img class="fr" src="../../../assets/img/solution/credit/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Solution&nbsp;Function</h2>
                </header>
                <h1>征信行业信息孤岛问题严重，无法实现征信业内高质量的数据流通及交易，造成征信机构与用户信息不对称。迅鳐区块链将通过以征 信链为核心打通打通金融链、生产链、物流链、供应链、仓储链，实现数据资源能力开放。</h1>
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
                        <p>将数据的来源、流向和使用等信息均写入区块链，可以 完成数据流转溯源问题。</p>
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
                    <header>银行业务</header>
                    <section><div>结合银行的行业特点，对各项协议和交易凭证进行存储。</div></section>
                </li>
                <li class="fl">
                    <header>众筹业务</header>
                    <section><div>提供登记资料第三方存证、出资、证明及权益证明、合同协议 第三方存证。</div></section>
                </li>
                <li class="fl">
                    <header>劵商业务</header>
                    <section><div>保全远程开户数据、尽职调查数据、风险提示数据、投资过程数据等。</div></section>
                </li>
                <li class="fl">
                    <header>金融产品</header>
                    <section><div>解决金融产品信任危机交易更加明确</div></section>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import solutionLogo from '~/assets/img/solution/credit/solution_logo.png'

    export default {
        name: "credit",
        components: {Banner},
        data() {
            return{
                solutionLogo : solutionLogo,
                bannerTitle : '个人/机构征信',
                bannerContent : '征信机构信息孤岛问题严重，无法实现征信业内高质量的数据流通及交易，造成征信机构与用户信息不对称。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/solution";
    @function imgUrl($path) {
        @return '../../../assets/img/solution/credit/'+$path;
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
