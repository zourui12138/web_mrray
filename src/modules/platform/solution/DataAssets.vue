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
                        <p class="fr">确权、维权难：数据提供方卖出的数据面临被无限次盗卖、市场价值不断损减的风险，严重制约了数据市场的规模与发展；</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">2</strong>
                        <p class="fr">数据造假：某些数据提供方为获得利益提供造假的数据，根据真实数据扩充伪造的数据量，保证模型拟合性不变，但是伪造的数据会导致数据挖掘的结果错误；</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">3</strong>
                        <p class="fr">需求无法满足：数据价值在企业升级转型中的作用愈加凸显，企业对于专业数据的需求越来越强烈，但企业的这些需求无法得到及时的相应和满足。</p>
                    </li>
                </ul>
                <img class="fr" src="../../../assets/img/solution/dataAssets/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Solution&nbsp;Function</h2>
                </header>
                <h1>迅鳐数据资产解决方案提供了可追溯路径，能有效破解数据确权难题。通过网络中多个参与计算的节点来共同参与数据的计算和记录，并且互相验证其信息的有效，既可以进行信息防伪，又提供了可追溯路径。</h1>
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
                        <p>对于迅鳐数据，验证者可以利用写入区块链的 hash值对其原始数据进行验证保证数据真实没 被篡改。</p>
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
                    <header>金融信贷</header>
                    <section><div>结合金融信贷行业特点，对各项协议和交易凭证进行存储。</div></section>
                </li>
                <li class="fl">
                    <header>众筹业务</header>
                    <section><div>提供登记资料第三方存证、出资证明及权益证明、合同协议第三方存证。</div></section>
                </li>
                <li class="fl">
                    <header>医疗业务</header>
                    <section><div>迅鳐区块链严格权限管理，信息流通全生命周期跟踪，医疗数据更加安全可信</div></section>
                </li>
                <li class="fl">
                    <header>钢铁行业</header>
                    <section><div>传统钢铁行业数据量庞大，信息传递尤其重要，钢铁数据资产得到保障，必定加速整个行业进程</div></section>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import solutionLogo from '~/assets/img/solution/dataAssets/solution_logo.png'

    export default {
        name: "DataAssets",
        components: {Banner},
        data() {
            return{
                solutionLogo : solutionLogo,
                bannerTitle : '数据资产解决方案',
                bannerContent : '交易数据全部记录在区块链上，解决数据交易的易泄露，易篡改等问题，保证数据安全和数据分析结果的正确性。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/solution";
    @function imgUrl($path) {
        @return '../../../assets/img/solution/dataAssets/'+$path;
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
