<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <p class="fl">随着国家关于客户隐私信息保护相关法律法规的出台，企业级大数据平台的安全管理能力需要不断提升，本平台重点针对Hadoop、MPP等与移动业务系统整合的大数据平台解决方案，重点实现了对Hadoop平台的网络安全、主机安全、应用安全、数据安全等方面的防护措施，产品系列主要包括了：大数据认证授权管控系统、大数据安全访问审计网关、大数据平台下敏感数据泄露防护系统，构建综合性共享生态。</p>
                <img class="fr" src="../../../assets/img/products/dataSecurity/overview.png" alt="">
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>产品功能</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
            </div>
            <section>
                <ul>
                    <li>
                        <div class="commonWidth clear">
                            <span class="fl">大数据认证授权管控系统</span>
                            <div class="fr">
                                <h1>通过松耦合方式向多种Hadoop平台（如Apache Hadoop、Cloudera Distribution Hado-op及其他第3方定制的Hadoo-p平台）提供大数据认证授权管控能力，用于限制第3方应用向大数据平台的无认证授权访问，保障基本的大数据平台安全访问能力。</h1>
                                <img src="../../../assets/img/products/dataSecurity/function_1.png" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="commonWidth clear">
                            <div class="fl">
                                <h1>通过网关的方式对大数据平台（Hadoop及其他数据库）提供大数据平台用户（数据使用者）的访问过滤、访问异常分析审计等监测功能，满足管理员及时发现大数据平台中可能存在的安全风险点以及应用攻击行为的需求，强化应用安全管控，保证数据访问服务正常、安全、有序地进行。</h1>
                                <img src="../../../assets/img/products/dataSecurity/function_2.png" alt="">
                            </div>
                            <span class="fr">大数据安全访问审计网关</span>
                        </div>
                    </li>
                    <li>
                        <div class="commonWidth clear">
                            <span class="fl">大数据平台下敏感数据泄漏防护系统</span>
                            <div class="fr">
                                <h1>基于对通信行业中涉及企业客户、个人用户、业务数据中敏感字段进行分类、分级处理结果，形成具有自动化的数据分类分级管理能力；基于敏感数据自动化检测与发现技术，实现对用户数据请求的返回结果的隐私保护处理；基于多形态和多业务需求的脱敏函数库，形成对涉及敏感数据威胁的数据集进行基于硬件级高速动/静态脱敏能力。</h1>
                                <img src="../../../assets/img/products/dataSecurity/function_3.png" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <div class="commonWidth features">
            <header class="title">
                <h1>产品特性</h1>
                <h2>Product&nbsp;Features</h2>
            </header>
            <section>
                <ul class="clear">
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/dataSecurity/features_1.png" alt=""></header>
                            <h1>统一标准</h1>
                            <p>提供统一的Hadoop集群认证入口，保证Hadoop集群用户无法任意访问获取数据，以造成数据留失。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/dataSecurity/features_2.png" alt=""></header>
                            <h1>未授权重定向</h1>
                            <p>未经过LDAP、AD以及其他SSO非授权访问用户重定向。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/dataSecurity/features_3.png" alt=""></header>
                            <h1>禁止绕行访问</h1>
                            <p>实现Hadoop用户、4A业务用户、以及LDAP或AD域的原有业务系统用户的认证和授权；禁止非法用户绕过认证服务集群。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/dataSecurity/features_4.png" alt=""></header>
                            <h1>处理高效</h1>
                            <p>设备独立、无侵入式地与现有Hadoop平台相结合使用，单机性能支持1000MB/s读写I/O，支持集群式扩展负载均衡和热备转移功能。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/dataSecurity/features_5.png" alt=""></header>
                            <h1>细粒度权限</h1>
                            <p>细粒度访问控制，鉴权用户，同时满足操作对象和操作指令授权的“2层授权”后放行；细化操作对象到“服务器、数据库、目录、文件、表名、列、行”等内容。</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <div class="deploymentForm">
            <div class="commonWidth">
                <header class="title">
                    <h1>部署形态</h1>
                    <h2>Deployment&nbsp;Form</h2>
                </header>
                <section>
                    <h1>大数据安全管控平台位于“兼容性的Hadoop系统”与“业务系统与用户”之间，具备了以下几个重要的可用性指标：</h1>
                    <p>相对独立于大数据平台和业务系统部署；</p>
                    <p>产品型态为软硬件一体化系统，支持负载均衡和热备，最大化稳定性和应急响应能力。</p>
                    <p>3个子系统具有各自独立的管理页面，同时联合工作使得效率更高，安全综合能力更强。</p>
                    <p>本大数据安全管控平台，与“DataShield”数据外发系统可以结合，用于数据外发后收回。</p>
                    <p>本大数据安全管控平台，与“数据水印标记系统”相结合，用于数据版本鉴定、来源追溯等功能。</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/dataSecurity/product_logo.png'

    export default {
        name: "data-security",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '大数据安全监控平台',
                bannerContent : '大数据安全管控平台的基本应用行业是银行业、金融业、政府企业等数据查看权限成阶梯状的行业，其具备细粒度权限管控、业务流程不变、支持多种大数据平台等特点。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/dataSecurity/'+$path
    }
    .function{
        background-color: #fcfcfc;
        li{
            padding:20px 0;
            .commonWidth{
                span{
                    width:20px;
                    background-color: #3096ee;
                    color: #fff;
                    line-height: 20px;
                    text-align: center;
                    padding:128px 20px;
                    height:220px;
                }
                div{
                    width:1110px;
                    text-align: center;
                    h1{
                        text-align: left;
                        line-height: 30px;
                    }
                }
            }
            &:nth-child(even){
                background-color: #fff;
            }
            &:nth-child(3){
                span{
                    height:320px;
                    padding:93px 20px;
                }
            }
        }
    }
    .features{
        section{
            ul{
                li{
                    width:400px;
                    div{
                        width:320px;
                        header{
                            width:320px;
                        }
                    }
                }
            }
        }
    }
    .deploymentForm{
        background-color: #fcfcfc;
        section{
            padding-bottom: 80px;
            background: url(imgUrl('deploymentForm.png')) no-repeat right center;
            h1{
                height:60px;
                line-height: 60px;
            }
            p{
                border-left: 6px solid #3096ee;
                height:40px;
                line-height: 20px;
                padding-left: 20px;
                width:380px;
                margin-bottom: 40px;
                &:nth-child(4){
                    margin-bottom: 148px;
                }
            }
        }
    }
</style>
