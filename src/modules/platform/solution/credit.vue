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
                    <p class="fl need_content">O2O的征信方式导致成本过高。正规市场化数据采集渠道有限，数据源争夺战耗费大量成本。</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl m_t20">2</div>
                    <p class="fl need_content">数据缺乏共享，征信机构与用户信息不对称。征信机构与征信机构、征信机构与其他机构等缺乏有效的共享合作，信息孤岛问题严重，无法实现征信业内高质量的数据流通及交易，造成征信机构与用户信息不对称。过度授信，重复借贷、坏账率居高不下。</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">3</div>
                    <p class="fl need_content">数据隐私保护问题突出，传统技术架构难以满足新要求。大数据时代下的征信业对隐私保护和数据安全的要求更高。正规市场化数据采集渠道有限，数据源争夺战耗费大量成本。</p>
                </div>
            </div>
                <img class="fr img_f1" src="../../../assets/img/Solution/credit/credit_middle.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <p class="p_t20">征信行业信息孤岛问题严重，无法实现征信业内高质量的数据流通及交易，造成征信机构与用户信息不对称。迅鳐区块链将通过以征</p>
                    <p>信链为核心打通打通金融链、生产链、物流链、供应链、仓储链，实现数据资源能力开放。</p>
                    <div class="middle_box">
                        <img src="../../../assets/img/Solution/credit/credit_person.png" alt="">
                        <div class="left_content">
                            <div>
                                <button class="m_l165">确权证书</button>
                                <p class="t_r">数据作为受保护的虚拟资产，每份符合标准且有效的数据和交易都有对应的确权证书。</p>
                            </div>
                            <div class="m_t155">
                                <button class="m_l165">数据流转追溯</button>
                                <p class="t_r">将数据的来源、流向和使用等信息均写入区块链，可以完成数据流转溯源问题。</p>
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
                    <dt>银行业务</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/credit/bottom1.png" alt="">
                        <div>
                            <p>
                                结合银行的行业特点，对各项协议和交易凭证进行存储。
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>众筹业务</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/credit/bottom2.png" alt="">
                        <div>
                            <p>
                                提供登记资料第三方存证、出资<br/>证明及权益证明、合同协议<br/>第三方存证。
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>券商</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/credit/bottom3.png" alt="">
                        <div>
                            <p>
                                保全远程开户数据、尽职调查数据、<br/>风险提示数据、投资过<br/>程数据等。
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>金融产品</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/credit/bottom4.png" alt="">
                        <div>
                            <p>
                                解决金融产品信任危机<br/>交易更加明确
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
    import productLogo from '~/assets/img/Solution/credit/credit_icon.png'
    import THREE from '~/lib/three.js'
    export default {
        name: "watermark",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '个人/机构征信',
                bannerContent : '征信机构信息孤岛问题严重，无法实现征信业内高质量的数据流通及交易，造成征信机构与用户信息不对称。'
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
        @return '../../../assets/img/Solution/credit/'+$path;
    }
    .banner{
        background: url(imgUrl('credit_bj.png')) no-repeat center !important;
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
