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
                        <p class="fr">行业分工明细、协同参与方众多导致了汽车行业的数字化进程相对缓慢。汽车行业交易繁多，成交量大，导致业务数据庞大</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">2</strong>
                        <p class="fr">汽车行业数据分类多，数量庞大，统计和信息同步效率低，人工记录容易产生错误，留下数据漏洞，给企业和客户带来巨大损失</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">3</strong>
                        <p class="fr">零件造假很难溯源，二手车市场混乱</p>
                    </li>
                </ul>
                <img class="fr" src="../../../assets/img/solution/carIndustry/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Solution&nbsp;Function</h2>
                </header>
                <h1>迅鳐区块链为每一辆汽车建立一个数字档案，并且围绕不同阶段的汽车所有权建立不同的档案权限， 以应对不同的业务场景。用ID来表示汽车，用关联数据来描述汽车的相关档案，用智能合约来描述针对汽车档案的不同操作。</h1>
                <section>
                    <div>
                        <button type="button">共识算法</button>
                        <p>迅鳐区块链采用可拔插的共识算法，用户可根据业务场景选择不同的算法。保证数据的统一性，防止双花和恶意系统破坏。</p>
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
                    <header>零售行业</header>
                    <section><div>提高货品同步数据速率，减少人工错误</div></section>
                </li>
                <li class="fl">
                    <header>航空行业</header>
                    <section><div>保障数据的真实性和隐私，使其不被篡改和泄露</div></section>
                </li>
                <li class="fl">
                    <header>地产行业</header>
                    <section><div>保障大数据的安全，保证财务和隐私安全</div></section>
                </li>
                <li class="fl">
                    <header>零部件行业</header>
                    <section><div>用区块链服务解决种类繁多的零部件 生产和销售问题</div></section>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import solutionLogo from '~/assets/img/solution/carIndustry/solution_logo.png'

    export default {
        name: "car-industry",
        components: {Banner},
        data() {
            return{
                solutionLogo : solutionLogo,
                bannerTitle : '汽车行业解决方案',
                bannerContent : '利用区块链技术对汽车行业进行数字化、提高协同工作效率。将每辆汽车的信息存入区块链，用智能合约来描述针对汽车档案的不同操作。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/solution";
    @function imgUrl($path) {
        @return '../../../assets/img/solution/carIndustry/'+$path;
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
