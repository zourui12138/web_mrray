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
                    <p class="fl need_content">确权、维权难：数据提供方卖出的数据面临被无限次盗卖、市场价值不断损减的风险，严重制约了数据市场的规模与发展；</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">2</div>
                    <p class="fl need_content">数据造假：某些数据提供方为获得利益提供造假的数据，根据真实数据扩充伪造的数据量，保证模型拟合性不变，但是伪造的数据会导致数据挖</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">3</div>
                    <p class="fl need_content">需求无法满足：数据价值在企业升级转型中的作用愈加凸显，企业对于专业数据的需求越来越强烈，但企业的这些需求无法得到及时的相应和满</p>
                </div>
            </div>
                <img class="fr img_f1" src="../../../assets/img/Solution/DataAssets/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <p class="p_t20">迅鳐数据资产解决方案提供了可追溯路径，能有效破解数据确权难题。</p>
                    <p>通过网络中多个参与计算的节点来共同参与数据的计算和记录，并且互相验证其信息的有效，既可以进行信息防伪，又提供了可追溯路径。</p>
                    <div class="middle_box">
                        <img src="../../../assets/img/Solution/DataAssets/middle.png" alt="">
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
                    <dt>金融信贷</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/DataAssets/bottom.png" alt="">
                        <div>
                            <p>
                                结合金融信贷行业特点，对各项协议和交易凭证进行存储。
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>众筹业务</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/DataAssets/bottom2.png" alt="">
                        <div>
                            <p>
                                提供登记资料第三方存证、出资<br>证明及权益证明、合同协议<br>第三方存证。
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>医疗业务</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/DataAssets/bottom3.png" alt="">
                        <div>
                            <p>
                                迅鳐区块链严格权限管理，信息流<br>通全生命周期跟踪，医疗数<br>据更加安全可信
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>钢铁行业</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/DataAssets/bottom4.png" alt="">
                        <div>
                            <p>
                                传统钢铁行业数据量庞大，信息传递尤其重要，钢铁数据资产得到保障，必定加速整个行业进程
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
    import productLogo from '~/assets/img/Solution/DataAssets/data.png'
    import THREE from '~/lib/three.js'
    export default {
        name: "watermark",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '数据资产解决方案',
                bannerContent : '交易数据全部记录在区块链上，解决数据交易的易泄露，易篡改等问题，保证数据安全和数据分析结果的正确性。'
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
        @return '../../../assets/img/Solution/DataAssets/'+$path;
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
        margin-top: -90px;
    }
    .m_l165{
        margin-left: 165px;
    }
</style>
