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
                    <p class="fl need_content">各行业对数据的需求越来越大，但是数据流通的安全非常堪忧</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">2</div>
                    <p class="fl need_content">机密数据的使用过程，费时费力，给双方都造成不便</p>
                </div>
                <div class="clear m_t20">
                    <div class="left_number fl">3</div>
                    <p class="fl need_content">企业自身各部门数据难汇总，整体数据量大，造成数据更新不及时，影响企业自身发展</p>
                </div>
            </div>
                <img class="fr img_f1" src="../../../assets/img/Solution/circulation/middle.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>方案概述</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <p class="p_t20">迅鳐数据流通行业解决方案，利用区块链底层服务，搭建一个数据流通的可信平台，数据拥有者和数据使用者可以无忧使用平台解决自身的</p>
                    <p>数据流通需求。大型企业也可以使用迅鳐数据流通平台整理自己的数据流通，改善数据不通造成的糟糕现状。</p>
                    <div class="middle_box">
                        <img src="../../../assets/img/Solution/circulation/ms.png" alt="">
                        <div class="left_content">
                            <div>
                                <button class="m_l165">确权证书</button>
                                <p class="t_r">数据作为受保护的虚拟资产，每份符合标准且有效的数据和交易都有对应的确权证书。</p>
                            </div>
                            <div class="m_t155">
                                <button class="m_l165">数据流转追溯</button>
                                <p class="t_r">数据拥有者对数据的使用进行授权，并将授权内容进行
                                    在区块链，只有获得数据使用授权才能够使用该数据。</p>
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
                    <dt>数据流通</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/circulation/bottom1.png" alt="">
                        <div>
                            <p>
                                用区块链服务解决大数据流通 的信任危机
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>企业内部数据交互</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/circulation/bottom2.png" alt="">
                        <div>
                            <p>
                                解决企业内部数据流通不<br>及时的问题
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>尖端数据共享</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/circulation/bottom3.png" alt="">
                        <div>
                            <p>
                                让数据流通更快，省时省力<br>促进科技的发展
                            </p>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>行业数据流通</dt>
                    <dd>
                        <img src="../../../assets/img/Solution/circulation/bottom4.png" alt="">
                        <div>
                            <p>
                                解决行业数据流通不<br>信任的危机
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
    import productLogo from '~/assets/img/Solution/circulation/icon.png'
    import THREE from '~/lib/three.js'
    export default {
        name: "watermark",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '数据流通行业解决方案',
                bannerContent : '迅鳐数据流通平台，打造安全的数据流通模式，让数据双方的权益都得到保障，真正实现数据资源能力开放。 '
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
        @return '../../../assets/img/Solution/circulation/'+$path;
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
