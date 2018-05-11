<template>
    <div id="product-watermark">
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/watermark/overview.png" alt="">
                <p class="fr">迅鳐水印与追溯服务系统，采用基于人类视觉系统（HGWF）的数字水印框架，内置自主研制的FluxLabel海量数据高速标记引擎，解决了大数据环境下数据频繁使用所面临的版权问题、数据泄露后的追责问题、数据质量以及完整性等数据传播使用中的诸多问题。</p>
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>产品功能</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <div class="clear">
                        <button class="fl" type="button">可视化界面</button>
                        <p class="fl two">经过大量用户调研，系统页面设计符合易用性、规范性、合理性、美观与协调性，大大方便用户快捷地使用系统。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">支持多种格式文件</button>
                        <p class="fl one">支持多种办公软件、视频、图片、音频格式文件。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">普通信息水印</button>
                        <p class="fl one">能携带普通文本信息的无视觉感知水印。 </p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">物理轨迹跟踪水印</button>
                        <p class="fl one">能识别文件传播路径，并绘制出传播路径图的无视觉感知水印。 </p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">文件完整性水印</button>
                        <p class="fl one">能根据用户设置的完整性阈值判断该文件是否完整的无视觉感知水印。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">官方认证水印</button>
                        <p class="fl one">能携带官方唯一认证信息的无视觉感知水印</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">多类型水印共存</button>
                        <p class="fl two">同一文件可同时打上多种类型水印，如某一文件可同时携带普通文本信息亦可进行传播路径追踪。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">水印溯源</button>
                        <p class="fl one">能对打上水印的文件进行溯源，展示其中包含的水印信息。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">云存储、云处理</button>
                        <p class="fl two">所有数据全部采用云存储，所有任务采用云处理，用户可根据企业自身使用情况，选择升级存储空间与处理主机性能，大大节省企业成本。</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/watermark/product_logo.png'

    export default {
        name: "watermark",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '数字水印系统',
                bannerContent : '迅鳐水印标记与溯源系统的基本应用领域是防伪溯源、版权保护、隐藏标识、认证，其具备不可感知性、隐藏位置安全性、鲁棒性、隐藏信息量大等特点。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/watermark/'+$path;
    }
    .function{
        background-color: #fcfcfc;
        .commonWidth{
            height:730px;
            background: url(imgUrl('function.png')) no-repeat left center;
            section{
                div{
                    margin-top: 20px;
                    margin-left: 450px;
                    button{
                        width:160px;
                        height:40px;
                        color: #fff;
                        background-color: #3096ee;
                        border-radius: 4px;
                        font-size: 16px;
                    }
                    p{
                        width:570px;
                        margin-left: 20px;
                        height:40px;
                        &.one{
                            line-height: 40px;
                        }
                        &.two{
                            line-height: 20px;
                        }
                    }
                }
            }
        }
    }
</style>
