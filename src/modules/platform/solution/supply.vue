<template>
    <div id="product-watermark">
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>业务需求痛点</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
            <div class="fl">
                <div class="clear m_t20">
                    <div class="left_number fl">1</div>
                    <p class="fl need_content">传统供应链行业不能支撑如今复杂和地理分散的供应周期的需求。新起的网络供应，问题也繁多，造假难以避免，可信机制不可信</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">2</div>
                    <p class="fl need_content">信息共享不畅导致服务质量差,并且存在中间商，让产品无法保证品质和价格，市场价格混乱，让消费者无法体验价廉物美</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">3</div>
                    <p class="fl need_content">很难追踪运输过程中出现得事故，不能高效解决问题。</p>
                </div>
            </div>
                <img class="fr img_f1" src="../../../assets/img/Solution/supply/middle.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <p class="p_t20">迅鳐区块链将信息同时与整个网络共享，整个平台增强的安全性，更大的透明度，更好的可扩展性，快速的交易，降低成本，和创新。</p>
                    <div class="middle_box">
                        <img src="../../../assets/img/Solution/supply/ms.png" alt="">
                        <div class="left_content">
                            <div>
                                <button class="m_l165">确权证书</button>
                                <p class="t_r">数据作为受保护的虚拟资产，每份符合标准且有效的数据和交易都有对应的确权证书。</p>
                            </div>
                            <div class="m_t155">
                                <button class="m_l165">数据流转追溯</button>
                                <p class="t_r">智能合约自动运行在区块链上，安装在所有节点，所有
                                    节点都可以通过运行智能合约来校验交易的有效性，以
                                    达到抗破坏性。</p>
                            </div>
                        </div>
                        <div class="right_content">
                            <div class="m_l10">
                                <button >数据授权记录</button>
                                <p>数据作为受保护的虚拟资产，每份符合标准且有效的数据和交易都有对应的确权证书。</p>
                            </div>
                            <div class="m_t155 m_l10">
                                <button >数据真实可验</button>
                                <p >对于迅鳐数据，验证者可以利用写入区块链的hash值对其原始数据进行验证保证数据真实没被篡改。</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="commonWidth application">
            <header class="title">
                <h1>适用领域</h1>
                <h2>Product&nbsp;Features</h2>
            </header>
            <section class="clear">
                <dl>
                    <dt>仓储业务</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/supply/bottom1.png" alt="">
                        <div>
                            <p>
                                以仓储链为核心打通金融链、生产链、物流链、供应链，实现数据资<br/>源能力开放
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>供应链</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/supply/bottom2.png" alt="">
                        <div>
                            <p>
                                以供应链为核心打通金融链、生产<br/>链、物流链、供应链，实现数据资<br/>源能力开放
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>生鲜销售</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/supply/bottom3.png" alt="">
                        <div>
                            <p>
                                证生鲜销售的及时性，整个<br>流程可追溯
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>金融产品</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/supply/bottom4.png" alt="">
                        <div>
                            <p>
                                用区块链溯源的技术解决电商<br>
                                造假难追究的问题
                            </p>
                        </div>
                    </dd>
                </dl>
            </section>
        </div>
    </div>
    
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/Solution/supply/icon.png'
    import THREE from '~/lib/three.js'
    export default {
        name: "watermark",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '供应链行业解决方案',
                bannerContent : '迅鳐供应链区块链解决方案，通过以供应链为核心打通打通金融链、生产链、物流链、仓储链，实现数据资源能力开放，消除中间商，让供应链服务更快，更安全，更有价格优势。'
            }
        },
        methods:{  
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/Solution/supply/'+$path;
    }
    .banner{
        background: url(imgUrl('bj.png')) no-repeat center !important;
    }
    .function{
        background-color: #fcfcfc;
        .commonWidth{
            height:730px;
            section{
                button{
                    width:160px;
                    height:40px;
                    color: #fff;
                    background-color: #3096ee;
                    border-radius: 4px;
                    font-size: 16px;
                }
                .middle_box{
                    width: 100%;
                    overflow: hidden;
                    height: 484px;
                    padding-top:50px;
                    position: relative;
                    >img{
                        margin-left:345px;
                    }
                    .left_content{
                        width: 345px;
                        overflow: hidden;
                        position: absolute;
                        top:70px;
                        left: 0;
                        p{
                            width: 95%;
                            margin-top: 10px;
                        }
                        .t_r{
                            text-align: right;
                        }
                    }
                    .right_content{
                        width: 345px;
                        overflow: hidden;
                        position: absolute;
                        top:70px;
                        right: 0;
                        p{
                            width: 95%;
                            margin-top: 10px;
                        }
                        .t_r{
                            text-align: right;
                        }
                    }
                }

            }
        }
    }
    .application{
        section{
            padding-bottom:30px;
            dl{
                float: left;
                width: 25%;
                box-sizing: border-box;
                overflow: hidden;
                dt{
                    text-align: center;
                    margin-bottom:10px;
                    line-height: 90px; 
                    font-size: 22px;
                    font-weight: 600;
                    color: #000;
                }
                dd{
                    position: relative;
                    margin-left:8px; 
                    div{
                        position: absolute;
                        top:0;
                        left:0;
                        width: 284px;
                        height: 152px;
                        background: rgba($color: #000000, $alpha:0.5);
                        p{
                            color: #fff;
                            text-align: center;
                            padding-top:50px;
                            font-size: 14px;
                            width: 80%;
                            margin:0 auto;
                            line-height: 24px;
                        }
                    }
                }
            }
        }
    }
    .left_number{
        width: 40px;
        height: 40px;
        background: #3096ee;
        font-size: 18px;
        color:#fff;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
    }
    .overview .need_content{
        text-indent:0;
        width: 700px;
        padding-left:20px;
    }
    .m_t20{
        margin-top:20px; 
    }
    .m_t40{
        margin-top:40px; 
    }
    .m_l10{
        margin-left: 10px;
    }
    .m_t155{
        margin-top:155px; 
    }
    .p_t20{
        padding-top:20px;
    }
    .img_f1{
        margin-top: 0px;
    }
    .m_l165{
        margin-left: 165px;
    }
</style>
