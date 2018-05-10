<template>
    <div>
        <Banner :banner-title="bannerTitle" :banner-content="bannerContent" :product-logo="productLogo"/>
        <div class="commonWidth overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section class="clear">
                <img class="fl" src="../../../assets/img/products/dataAssets/overview.png" alt="">
                <p class="fr">此系统主要服务于企业级数据中心，保护数据防删除、免泄露。系统基于存储、访问进行安全布防，对访问身份、权限范围、预置策略多维度进行审计分析，综合评估用户行为、潜在风险，实现数据可读、可编辑、风险预知、危险拦截，全方位确保数据存储、访问、使用安全。</p>
            </section>
        </div>
        <div class="overview_">
            <section class="commonWidth clear">
                <transition name="overview_content">
                    <div v-show="overView.certificationNav" class="fl overview_content">
                        <h1>认证</h1>
                        <p>运维，临时用户等直接访问身份授权，网络访问路径，开放服务，流量、访问时间等进行集中策略配置。</p>
                    </div>
                </transition>
                <transition name="overview_content">
                    <div v-show="overView.authorizationNav" class="fl overview_content">
                        <h1>授权</h1>
                        <p>运维操作身份，网络调用，系统请求、应用访问等行为进行集中权限认证，身份安全性确认，合法放行，非法拒绝。</p>
                    </div>
                </transition>
                <transition name="overview_content">
                    <div v-show="overView.protectNav" class="fl overview_content">
                        <h1>保护</h1>
                        <p>数据存储介质硬件接口保护，控制接口数据传输。SSH直接访问，防删除、防破坏，网络请求，防攻击、防爬取、非法拦截，免泄露。</p>
                    </div>
                </transition>
                <transition name="overview_content">
                    <div v-show="overView.auditNav" class="fl overview_content">
                        <h1>审计</h1>
                        <p>用户操作日志，请求访问日志，权限记录，异常行为等进行统计分析，用户行为、网络行为集中审计审查。</p>
                    </div>
                </transition>
                <div class="fr overview_image">
                    <h2 @click="toggleOverview('认证')" :class="{current : overView.certificationNav}"></h2>
                    <h2 @click="toggleOverview('授权')" :class="{current : overView.authorizationNav}"></h2>
                    <h2 @click="toggleOverview('保护')" :class="{current : overView.protectNav}"></h2>
                    <h2 @click="toggleOverview('审计')" :class="{current : overView.auditNav}"></h2>
                </div>
            </section>
        </div>
        <div class="commonWidth function">
            <header class="title">
                <h1>产品功能</h1>
                <h2>Product&nbsp;Function</h2>
            </header>
            <section>
                <h1>功能概述：数据资产存储安全布防，权限访问审计分析，破坏行为拦截废止，异常请求、攻击行为拒绝准入，潜在风险预警通知。</h1>
                <div>
                    <button type="button">多认证模式</button>
                    <p>支持本地认证、LDAP认证、USBkey认证等多种方式，根据用户需求，设置混合认证方式，确保身份信息唯一性，服务器采用IP地址、物理地址、业务类型、唯一身份识别码等进行多维度确认身份准确性。</p>
                </div>
                <div>
                    <button type="button">权限授权、审计</button>
                    <p>上级可按照时间、服务类型、用户类别、部门等维度，设置细粒度权限策略，让正确的人在正确时间做正确的事，多层级管理身份，适当放权、权限分级，提高效率。</p>
                </div>
                <div>
                    <button type="button">防破坏行为</button>
                    <p>运维、三方人员等身份，高危命令（如：删除数据、停止服务、数据下载等），需更高权限二次确认或授权配置，上级自由配置危险命令集。管理员多身份确认，防止独掌大权。</p>
                </div>
                <div>
                    <button type="button">全程行为审计</button>
                    <p>运维行为审计，管理员权限变更记录、操作指令、数据传输详情、关联关系、敏感级别审计分析</p>
                    <p>应用请求、网络访问安全性、合法性、请求欺骗、权限状态等审计分析，身份关联、请求数据类型、持续周期、数据关联、峰值详细统计分析，确保数据免于网络泄露、恶意攻击。</p>
                </div>
                <div>
                    <button type="button">分布控制、模块执行</button>
                    <p>系统采用权限集中管理，多种访问方式，灵活多变，不受时间、地点限制，动作分布执行方式,一方面有利于降低WEB管理服务器资源消耗、负载压力，另一方面确保控制目标权限执行更准确、迅速</p>
                </div>
            </section>
        </div>
        <div class="features">
            <div class="commonWidth">
                <header class="title">
                    <h1>产品特性</h1>
                    <h2>Product&nbsp;Features</h2>
                </header>
                <section>
                    <ul class="clear">
                        <li class="fl">
                            <div>
                                <img src="../../../assets/img/products/dataAssets/features_manage.png" alt="">
                                <h1>集中策略管理</h1>
                                <p>建立唯一身份标识实名制管理，统一账号管理策略，实现与服务器请求对接和数据交换</p>
                            </div>
                        </li>
                        <li class="fl">
                            <div>
                                <img src="../../../assets/img/products/dataAssets/features_visit.png" alt="">
                                <h1>集中访问控制</h1>
                                <p>通过集中访问控制和细粒度命令级的授权策略，最小化权限原则，实现集中有序的操作管理，让正确的人在正确时间做正确的事。</p>
                            </div>
                        </li>
                        <li class="fl">
                            <div>
                                <img src="../../../assets/img/products/dataAssets/features_audit.png" alt="">
                                <h1>集中安全审计</h1>
                                <p>基于唯一身份标识，对访问用户、请求系统全程安全审计，监控用户及请求操作，对危险事件及时发现预警。</p>
                            </div>
                        </li>
                        <li class="fl">
                            <div>
                                <img src="../../../assets/img/products/dataAssets/features_distribution.png" alt="">
                                <h1>权限分布执行</h1>
                                <p>被保护服务器根据控制中心权限策略，对自身系统服务进行监控，实现运维行为管理，网络请求控制功能。</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <div class="commonWidth application">
            <header class="title">
                <h1>典型应用</h1>
                <h2>Typical&nbsp;Application</h2>
            </header>
            <section>
                <ul class="clear">
                    <li class="fl">
                        <img class="fl" src="../../../assets/img/products/dataAssets/application_1.png" alt="">
                        <div class="fr">
                            <h1>管理员、运维破坏、误操作</h1>
                            <p>实现对运维等身份操作行为限制管理，历史审计分析功能。再此基础上，实现本地硬件接口传输拦截，网络请求拦截和恶意请求、非法请求拒绝能力，API接口通信阻断等功能。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <img class="fl" src="../../../assets/img/products/dataAssets/application_2.png" alt="">
                        <div class="fr">
                            <h1>研发测试数据泄密</h1>
                            <p>避免研发测试等身份利用职位、工作便利获取数据私自转移。</p>
                        </div>
                    </li>
                    <li class="fl">
                        <img class="fl" src="../../../assets/img/products/dataAssets/application_3.png" alt="">
                        <div class="fr">
                            <h1>外部攻击、爬虫窃取</h1>
                            <p>防网络攻击，窃取企业核心、偷窥用户隐私。</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <Documents :documents-list="documentsList"/>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import Documents from './components/Documents'
    import productLogo from '~/assets/img/products/dataAssets/product_logo.png'

    export default {
        name: "data-assets",
        components: {Banner, Documents},
        data() {
            return{
                productLogo : {
                    background : 'url('+ productLogo +') no-repeat 0 center'
                },
                bannerTitle : '数据资产防护系统',
                bannerContent : '数据资产防护系统主要基于数据存储安全、访问安全、运维管理等角度，多维度保护客户数据资产安全。最小权限原则，集中控制方式，免于恶意攻击，非安全环境使用，对运维、系统管理员、网络访问、访问策略等进行权限审计，正确的人通过正确手段正确的使用数据，做到数据防破坏（防删除）、免泄露。',
                documentsList: [
                    '《数据资产防护系统产品说明书》',
                    '《数据资产防护系统产品白皮书》',
                    '《数据资产防护系统产品介绍PPT》'
                ],
                overView: {
                    certificationNav: true,
                    authorizationNav: false,
                    protectNav: false,
                    auditNav: false
                }
            }
        },
        methods: {
            toggleOverview(arg) {
                this.overView.certificationNav = false;
                this.overView.authorizationNav = false;
                this.overView.protectNav = false;
                this.overView.auditNav = false;
                switch (arg){
                    case '认证' :this.overView.certificationNav = true;break;
                    case '授权' :this.overView.authorizationNav = true;break;
                    case '保护' :this.overView.protectNav = true;break;
                    case '审计' :this.overView.auditNav = true;break;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($path) {
        @return '../../../assets/img/products/dataAssets/'+$path
    }
    .title {
        width: 149px;
        padding-top: 35px;
        h1 {
            font-size: 18px;
            height: 28px;
            line-height: 28px;
        }
        h2 {
            font-size: 14px;
            height: 22px;
            line-height: 22px;
            border-bottom: 2px solid #333333;
            padding-bottom: 6px;
        }
    }
    .overview {
        section {
            margin-top: 20px;
            margin-bottom: 40px;
            p {
                width: 630px;
                line-height: 30px;
                margin-top: 105px;
                text-indent: 2em;
                text-align: justify;
            }
        }
    }
    .overview_{
        height: 286px;
        background-color: #fcfcfc;
        position: relative;
        .overview_content {
            width: 740px;
            height: 286px;
            position: absolute;
            h1 {
                text-align: center;
                height: 60px;
                line-height: 60px;
                font-size: 18px;
                color: #3094f1;
                margin-top: 70px;
            }
            p {
                line-height: 30px;
            }
        }
        .overview_content-enter-active{
            transform-origin: 0 50%;
            animation: rotateCubeLeftIn .6s both ease-in;
        }
        .overview_content-leave-active{
            transform-origin: 100% 50%;
            animation: rotateCubeLeftOut .6s both ease-in;
        }
        .overview_image {
            width: 385px;
            height: 204px;
            margin-top: 41px;
            position: relative;
            background: url(imgUrl('overview_.png')) no-repeat center;
            h2{
                width:116px;
                height:116px;
                border-radius: 50%;
                overflow: hidden;
                cursor: pointer;
                position: absolute;
                transition: all .2s;
            }
            h2:nth-child(1){
                left:-6px;
                top:70px;
                background: url(imgUrl('certification.png')) no-repeat center;
                &:hover,&.current{
                    background: url(imgUrl('certification_.png')) no-repeat center;
                }
            }
            h2:nth-child(2){
                left:91px;
                top:10px;
                background: url(imgUrl('authorization.png')) no-repeat center;
                &:hover,&.current{
                    background: url(imgUrl('authorization_.png')) no-repeat center;
                }
            }
            h2:nth-child(3){
                left:188px;
                top:70px;
                background: url(imgUrl('protect.png')) no-repeat center;
                &:hover,&.current{
                    background: url(imgUrl('protect_.png')) no-repeat center;
                }
            }
            h2:nth-child(4){
                left:285px;
                top:10px;
                background: url(imgUrl('audit.png')) no-repeat center;
                &:hover,&.current{
                    background: url(imgUrl('audit_.png')) no-repeat center;
                }
            }
        }
    }
    .function{
        section{
            position: relative;
            height:626px;
            background: url(imgUrl('function.png')) no-repeat center 120px;
            h1{
                height:100px;
                line-height: 100px;
                text-indent: 2em;
            }
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
            }
            div:nth-child(2){
                top:100px;
                left:0;
            }
            div:nth-child(3){
                top:284px;
                left:0;
            }
            div:nth-child(4){
                top:448px;
                left:0;
            }
            div:nth-child(5){
                top:148px;
                right:0;
                text-align: left;
            }
            div:nth-child(6){
                top:382px;
                right:0;
                text-align: left;
            }
        }
    }
    .features{
        background-color: #fcfcfc;
        section{
            li{
                width:25%;
                div{
                    width:260px;
                    margin:auto;
                    text-align: center;
                    padding-top: 40px;
                    padding-bottom: 110px;
                    img{
                        vertical-align: top;
                    }
                    h1{
                        font-size: 18px;
                        color: #3096ee;
                        height:75px;
                        line-height: 75px;
                    }
                    p{
                        line-height: 26px;
                        text-align: justify;
                        text-indent: 2em;
                    }
                }
            }
        }
    }
    .application{
        section{
            margin-bottom: 40px;
            li{
                width:575px;
                height:110px;
                margin-top: 40px;
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
