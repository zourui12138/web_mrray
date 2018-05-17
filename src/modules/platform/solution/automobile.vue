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
                    <p class="fl need_content">行业分工明细、协同参与方众多导致了汽车行业的数字化进程相对缓慢。汽车行业交易繁多，成交量大，导致业务数据庞大</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">2</div>
                    <p class="fl need_content">汽车行业数据分类多，数量庞大，统计和信息同步效率低，人工记录容易产生错误，留下数据漏洞，给企业和客户带来巨大损失</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">3</div>
                    <p class="fl need_content">零件造假很难溯源，二手车市场混乱</p>
                </div>
            </div>
                <img class="fr img_f1" src="../../../assets/img/Solution/automobile/middle.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <p class="p_t20">迅鳐区块链为每一辆汽车建立一个数字档案，并且围绕不同阶段的汽车所有权建立不同的档案权限，</p>
                    <p>以应对不同的业务场景。用ID来表示汽车，用关联数据来描述汽车的相关档案，用智能合约来描述针对汽车档案的不同操作。</p>
                    <div class="middle_box">
                        <img src="../../../assets/img/Solution/automobile/ms.png" alt="">
                        <div class="left_content">
                            <div>
                                <button class="m_l165">共识算法</button>
                                <p class="t_r">迅鳐区块链采用可拔插的共识算法，用户可根据业务场景选择不同的算法。保证数据的统一性，防止双花和恶意系统破坏。</p>
                            </div>
                            <div class="m_t155">
                                <button class="m_l165">数据流转追溯</button>
                                <p class="t_r">将数据的来源、流向和使用等信 息均写入区块链，可以完成数据流转溯源问题。</p>
                            </div>
                        </div>
                        <div class="right_content">
                            <div class="m_l10">
                                <button >数据授权记录</button>
                                <p>数据作为受保护的虚拟资产，每份符合标准且 有效的数据和交易都有对应的确权证书。</p>
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
                <h1>零售行业</h1>
                <h2>Product&nbsp;Features</h2>
            </header>
            <section class="clear">
                <dl>
                    <dt>仓储业务</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/automobile/bottom1.png" alt="">
                        <div>
                            <p>
                                提高货品同步数据速率，<br>减少人工错误
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>航空行业</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/automobile/bottom2.png" alt="">
                        <div>
                            <p>
                                保障数据的真实性和隐私，使其<br>不被篡改和泄露
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>地产行业</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/automobile/bottom3.png" alt="">
                        <div>
                            <p>
                                保障大数据的安全，保证<br>财务和隐私安全
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>零部件行业</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/automobile/bottom4.png" alt="">
                        <div>
                            <p>
                                用区块链服务解决种类繁多的零部件<br>生产和销售问题
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
    import productLogo from '~/assets/img/Solution/automobile/icon.png'
    import THREE from '~/lib/three.js'
    export default {
        name: "watermark",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '汽车行业解决方案',
                bannerContent : '利用区块链技术对汽车行业进行数字化、提高协同工作效率。将每辆汽车的信息存入区块链，用智能合约来描述针对汽车档案的不同操作。'
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
