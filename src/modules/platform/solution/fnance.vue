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
                    <p class="fl need_content">传统贷款具有五大痛点：手续繁、审批时间长、期限调整难、反复申请累和还贷负担重。</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">2</div>
                    <p class="fl need_content">“一人多贷”的背后其实是征信市场的尴尬现状，各征信机构之间数据“孤岛化”倾向明显。</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">3</div>
                    <p class="fl need_content">信息不共享，信贷机构多，用户信任危机，诈骗行为丛生</p>
                </div>
            </div>
                <img class="fr m_tf80" src="../../../assets/img/Solution/fnance/middle.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <p class="p_t20">互联网金融平台交易过程的电子数据实时地同步到第三方的安全云环境，以第三方身份记录事实，明确交易方的权利和义务，防</p>
                    <p>范电子数据毁损或丢失造成的法律风险，使金融平台信息透明，参与方的权益得到保障。</p>
                    <div class="middle_box">
                        <img src="../../../assets/img/Solution/fnance/ms.png" alt="">
                        <div class="left_content">
                            <div>
                                <button class="m_l165">确权证书</button>
                                <p class="t_r">数据作为受保护的虚拟资产，每份符合标准且有效的数据和交易都有对应的确权证书。</p>
                            </div>
                            <div class="m_t155">
                                <button class="m_l165">数据流转追溯</button>
                                <p class="t_r">为了方便数据监管，采用双密钥对模式实现。签名用途
                                    的密钥由用户保存，确保无法伪造签名，因此无法伪造
                                    交易。</p>
                            </div>
                        </div>
                        <div class="right_content">
                            <div class="m_l10">
                                <button >数据授权记录</button>
                                <p>通过可视化界面观察节点服务器数量、运行状态等情
                                    况，随时观察区块链网络运行状态，和区块生成记录。</p>
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
                    <dt>银行业务</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/fnance/bottom1.png" alt="">
                        <div>
                            <p>
                                结合银行的行业特点，对各项协议和交易凭证进行存储。
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>供应链</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/fnance/bottom2.png" alt="">
                        <div>
                            <p>
                                提供登记资料第三方存证、出资<br>证明及权益证明、合同协议第三方存证。
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>生鲜销售</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/fnance/bottom3.png" alt="">
                        <div>
                            <p>
                                全远程开户数据、尽职调查数据、<br>风险提示数据、投资过<br>程数据等。
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>金融产品</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/fnance/bottom4.png" alt="">
                        <div>
                            <p>
                                解决金融产品信任危机<br>交易更加明确
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
    import productLogo from '~/assets/img/Solution/fnance/icon.png'
    import THREE from '~/lib/three.js'
    export default {
        name: "watermark",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '金融信贷行业解决方案',
                bannerContent : '迅鳐金融信贷区块链解决方案，通过与仓储链、生产链、物流链、供应链相互关联，实现数据资源能力开放，资金流、信息流更加安全。'
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
        @return '../../../assets/img/Solution/fnance/'+$path;
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
    .m_tf80{
        margin-top:-80px; 
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
