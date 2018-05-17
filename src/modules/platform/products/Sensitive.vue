<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/sensitive/overview.png" alt="">
                <p class="fr">迅鳐敏感信息与免泄露系统是面向企业、政府等机构推出的一款敏感数据去隐私化产品。系统内置敏感信息搜索引擎，自动检索敏感信息，基础算法+可扩充模式、自定义脱敏策略，满足不同业务场景。支持数据类型多样：PostgreSQL、MySQL、Oracle、Greenplumn、Hive、SQL SERVER、DB2等数据库，Excel、csv等结构化数据，智能、灵活、高效工作，满足企业、政府敏感信息管理与保护需求。</p class="fr">
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
                        <button class="fl" type="button">数据装载</button>
                        <p class="fl two">可将脱敏后数据根据客户需求装载到不同环境中，包括文件到文件（同格式/不同格式），数据库到数据库（同数据库/不同数据库），文件到数据库，反之相同。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">脱敏方式可选择</button>
                        <p class="fl one">可根据客户业务的需要，同一敏感数据能进行不同方式脱敏。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">任务一对多</button>
                        <p class="fl two">可根据用户需要选择相同源后，配置不同的规则，不同的装载目标，同时新建多条任务。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">整库脱敏</button>
                        <p class="fl one">支持整库脱敏，并能保证脱敏的关联性，使其保留数据的分析价值。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">脱敏效果对比</button>
                        <p class="fl one">支持展示脱敏前后实际效果对比。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">任务管理</button>
                        <p class="fl one">能对各种任务进行管理，包括启停任务、任务重做等。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">算法拓展</button>
                        <p class="fl one">能根据用户需要提供算法包，用户只需要按几个键傻瓜式操作就能拓展新算法。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">多种类型算法</button>
                        <p class="fl two">支持可逆算法和不可逆算法，用户能根据业务要求选择使用可逆算法或不可逆算法。</p>
                    </div>
                    <div class="clear">
                        <button class="fl" type="button">操作/访问监控</button>
                        <p class="fl one">对系统内各用户访问/操作记录进行监控并整理反映出来。</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/sensitive/product_logo.png'

    export default {
        name: "sensitive",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '敏感数据与免泄露系统',
                bannerContent : '迅鳐敏感数据与免泄露系统的基本应用行业是银行业、金融业、政府企业等敏感数据较多的行业，其具有去隐私且保持真实性、保证业务流程不变、数据脱敏后结果一致性、数据分布一致性等特点。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/sensitive/'+$path;
    }
    .function{
        background-color: #fcfcfc;
        .commonWidth{
            height:730px;
            background: url(imgUrl('function.png')) no-repeat right center;
            section{
                div{
                    margin-top: 20px;
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
