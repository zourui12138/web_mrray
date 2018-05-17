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
                        <p class="fr">各行业对数据的需求越来越大，但是数据流通的安全非常堪忧</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">2</strong>
                        <p class="fr">机密数据的使用过程，费时费力，给双方都造成不便</p>
                    </li>
                    <li class="clear">
                        <strong class="fl">3</strong>
                        <p class="fr">企业自身各部门数据难汇总，整体数据量大，造成数据更新不及时，影响企业自身发展</p>
                    </li>
                </ul>
                <img class="fr" src="../../../assets/img/solution/circulation/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Solution&nbsp;Function</h2>
                </header>
                <h1>迅鳐数据流通行业解决方案，利用区块链底层服务，搭建一个数据流通的可信平台，数据拥有者和数据使用者可以无忧使用平台解决自身的数据流通需求。大型企业也可以使用迅鳐数据流通平台整理自己的数据流通，改善数据不通造成的糟糕现状。</h1>
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
                    <header>数据流通</header>
                    <section><div>用区块链服务解决大数据流通的信任危机</div></section>
                </li>
                <li class="fl">
                    <header>企业内部数据交换</header>
                    <section><div>解决企业内部数据流通不及时的问题</div></section>
                </li>
                <li class="fl">
                    <header>尖端数据共享</header>
                    <section><div>让数据流通更快，省时省力促进科技的发展</div></section>
                </li>
                <li class="fl">
                    <header>行业数据流通</header>
                    <section><div>解决行业数据流通不信任的危机</div></section>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import solutionLogo from '~/assets/img/solution/circulation/solution_logo.png'

    export default {
        name: "circulation",
        components: {Banner},
        data() {
            return{
                solutionLogo : solutionLogo,
                bannerTitle : '数据流通行业解决方案',
                bannerContent : '迅鳐数据流通平台，打造安全的数据流通模式，让数据双方的权益都得到保障，真正实现数据资源能力开放。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/solution";
    @function imgUrl($path) {
        @return '../../../assets/img/solution/circulation/'+$path;
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
