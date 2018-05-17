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
                        <p class="fr">传统贷款具有五大痛点：手续繁、审批时间长、期限调整难、反复申请累和还贷负担重。</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">2</strong>
                        <p class="fr">“一人多贷”的背后其实是征信市场的尴尬现状，各征信机构之间数据“孤岛化”倾向明显。</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">3</strong>
                        <p class="fr">信息不共享，信贷机构多，用户信任危机，诈骗行为丛生</p>
                    </li>
                </ul>
                <img class="fr" src="../../../assets/img/solution/financial/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Solution&nbsp;Function</h2>
                </header>
                <h1>互联网金融平台交易过程的电子数据实时地同步到第三方的安全云环境，以第三方身份记录事实，明确交易方的权利和义务，防范电子数据毁损或丢失造成的法律风险，使金融平台信息透明，参与方的权益得到保障。</h1>
                <section>
                    <div>
                        <button type="button">确权证书</button>
                        <p>数据作为受保护的虚拟资产，每份符合标准且有效的数 据和交易都有对应的确权证书。</p>
                    </div>
                    <div>
                        <button type="button">节点授权</button>
                        <p>通过可视化界面观察节点服务器数量、运行状态等情况，随时观察区块链网络运行状态，和区块生成记录。</p>
                    </div>
                    <div>
                        <button type="button">主权监控</button>
                        <p>为了方便数据监管，采用双密钥对模式实现。签名用途的密钥由用户保存，确保无法伪造签名，因此无法伪造交易。</p>
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
    import solutionLogo from '~/assets/img/solution/financial/solution_logo.png'

    export default {
        name: "financial",
        components: {Banner},
        data() {
            return{
                solutionLogo : solutionLogo,
                bannerTitle : '金融信贷行业解决方案',
                bannerContent : '迅鳐金融信贷区块链解决方案，通过与仓储链、生产链、物流链、供应链相互关联，实现数据资源能力开放，资金流、信息流更加安全。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/solution";
    @function imgUrl($path) {
        @return '../../../assets/img/solution/financial/'+$path;
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
