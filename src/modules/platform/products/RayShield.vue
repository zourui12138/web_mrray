<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/rayShield/overview.png" alt="">
                <p class="fr">数据哨兵系列之----迅鳐数盾（Rayshield），主要解决文件安全与权属问题，以文件加密保护为基础，每一份安全文件配置“身份证”：文件信息、所有者、访问策略唯一标识，加工、伪造、转换不可消除；优化管控：权限细分、最小化（可读、可编辑、可打印、另存为）授予、回收；实现文件全生命周期保护（生成、流通、使用、销毁）。</p>
            </section>
        </div>
        <div class="function">
            <div class="commonWidth">
                <header class="title">
                    <h1>产品功能</h1>
                    <h2>Product&nbsp;Function</h2>
                </header>
                <section>
                    <div>
                        <button type="button">数据身份识别</button>
                        <p>赋予数据独一无二的“身份证”。</p>
                    </div>
                    <div>
                        <button type="button">实时查看、调整权限</button>
                        <p>实时查看、调整访问权限（可编辑、可打印、离线只读、水印、限制阅读次数、限制打开时间、限制打开时间段）。</p>
                    </div>
                    <div>
                        <button type="button">数据安全保护</button>
                        <p>全生命周期保护（起始阶段 → 数据产生 → 数据存储与管理  → 数据发布与应用  → 数据销毁）。</p>
                    </div>
                    <div>
                        <button type="button">数据访问控制</button>
                        <p>分析审计访问合规性、身份可读性、权限合法性。</p>
                    </div>
                    <div>
                        <button type="button">数据全局可视化</button>
                        <p>数据流通、访问全局跟踪，呈现数据资产全周期。</p>
                    </div>
                    <div>
                        <button type="button">数据追踪溯源</button>
                        <p>数据追溯传输轨迹、回溯泄露源头。</p>
                    </div>
                </section>
            </div>
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
                            <header><img src="../../../assets/img/products/rayShield/features_errorData.png" alt=""></header>
                            <h1>异常数据及时撤回</h1>
                            <p>数盾内置异常发现与撤回功能，及时发现数据泄漏源头及扩散程度，从源头撤回所有数据。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/rayShield/features_flexibility.png" alt=""></header>
                            <h1>灵活策略组合</h1>
                            <p>由基本权限积木般灵活组成安全策略，适应于复杂多变的应用场景。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/rayShield/features_visualization.png" alt=""></header>
                            <h1>数据资产可视化</h1>
                            <p>WEB管理面板内置多个可视化组件，清晰、全面呈现所有数据资产。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/rayShield/features_audit.png" alt=""></header>
                            <h1>全面审计数据使用合规性</h1>
                            <p>访问信息：时间、身份、操作、地点全纪录，通过WEB管理面板俯瞰用户使用活动。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/rayShield/features_lifeCycle.png" alt=""></header>
                            <h1>全生命周期保护</h1>
                            <p>以数据为中心，贯穿数据生产、传输、应用、销毁，全生命周期提供安全保护。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/rayShield/features_policy.png" alt=""></header>
                            <h1>策略中心化管理</h1>
                            <p>安全云平台支持管理敏感企业数据的策略中心化，策略将伴随数据传输被全局、自动执行。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/rayShield/features_format.png" alt=""></header>
                            <h1>支持格式齐全</h1>
                            <p>office文件保护：Word、Excel、PPT和图片格式支持：BMP、JPG、JPEG、PNG、GIF等。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <header><img src="../../../assets/img/products/rayShield/features_encrypt.png" alt=""></header>
                            <h1>加密方式多样</h1>
                            <p>支持Outlook邮件附件加密，并右键快捷方式生成，社交工具传输。</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <div class="application">
            <div class="commonWidth">
                <header class="title">
                    <h1>典型应用</h1>
                    <h2>Typical&nbsp;Application</h2>
                </header>
                <section>
                    <ul class="clear">
                        <li class="fl">
                            <img class="fl" src="../../../assets/img/products/rayShield/application_1.png" alt="">
                            <div class="fr">
                                <h1>彼此信任的业务数据交换</h1>
                                <p>可以做到只进不出；能看不能改；防截屏；定时销毁。企业对于客户、自身资料的安全保护，有利于提升品牌形象。</p>
                            </div>
                        </li>
                        <li class="fl">
                            <img class="fl" src="../../../assets/img/products/rayShield/application_2.png" alt="">
                            <div class="fr">
                                <h1>企业高管的可靠“数据盾牌”</h1>
                                <p>可以实现：独有身份验证；能看不能改；“三防”保护体系；闭环的线下办公环境。</p>
                            </div>
                        </li>
                        <li class="fl">
                            <img class="fl" src="../../../assets/img/products/rayShield/application_3.png" alt="">
                            <div class="fr">
                                <h1>离线办公与离线归档</h1>
                                <p>支持安全云桌面系统对接；提供“数盾之心”离线办公平台；数据自毁功能，保障企业数据安全防网络攻击，窃取企业核心、偷窥用户隐私。</p>
                            </div>
                        </li>
                        <li class="fl">
                            <img class="fl" src="../../../assets/img/products/rayShield/application_4.png" alt="">
                            <div class="fr">
                                <h1>杜绝“U盘小偷/U盘病毒”</h1>
                                <p>独有的身份验证；防导出、防另存为；内核级防毒体系；密闭的环境防大环境窃密。</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import productLogo from '~/assets/img/products/rayShield/product_logo.png'

    export default {
        name: "ray-shield",
        components: {Banner},
        data() {
            return{
                productLogo : productLogo,
                bannerTitle : '迅鳐数盾（Rayshield）',
                bannerContent : '解决大数据安全首要问题——权属<br/>迅鳐数盾为您每一份数据提供1张“身份证”，即使数据的复制品也会标明身份，同时在用户外发数据的时候，系统会自动抽取“部分重要数据”置于SAAS安全平台当中，每次使用都需要用自己的“钥匙”才能开启数据。'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./css/products";
    @function imgUrl($path) {
        @return '../../../assets/img/products/rayShield/'+$path
    }
    .function{
        background-color: #fcfcfc;
        section{
            position: relative;
            height:513px;
            background: url(imgUrl('function.png')) no-repeat center 40px;
            div{
                position: absolute;
                width:360px;
                text-align: right;
                button{
                    width:160px;
                    height:40px;
                    background-color: #2e95ee;
                    color: #fff;
                    margin-bottom: 6px;
                    border-radius: 4px;
                }
                p{
                    text-align: justify;
                    text-indent: 2em;
                    line-height: 20px;
                }
                &:nth-child(1){
                    top:40px;
                    left:0;
                }
                &:nth-child(2){
                    top:200px;
                    left:0;
                }
                &:nth-child(3){
                    top:360px;
                    left:0;
                }
                &:nth-child(4){
                    top:40px;
                    right:0;
                    text-align: left;
                }
                &:nth-child(5){
                    top:200px;
                    right:0;
                    text-align: left;
                }
                &:nth-child(6){
                    top:360px;
                    right:0;
                    text-align: left;
                }
            }
        }
    }
    .application{
        background-color: #fcfcfc;
        section{
            padding-bottom: 40px;
            li{
                width:575px;
                height:110px;
                margin-top: 40px;
                img{
                    background-color: #fff;
                }
                div{
                    width:440px;
                    h1{
                        color: #3096ee;
                        font-size: 18px;
                        height:24px;
                        line-height: 24px;
                        margin-bottom: 11px;
                    }
                    p{
                        height:75px;
                        line-height: 25px;
                        overflow: hidden;
                    }
                }
            }
            li:nth-child(odd){
                margin-right: 50px;
            }
        }
    }
</style>
