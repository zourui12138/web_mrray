<template>
    <div>
        <div class="banner"><img src="../../../assets/img/news/banner.png" alt=""></div>
        <div class="newsList commonWidth" v-show="showListOrDetail">
            <ul>
                <li class="clear" v-for="i in newsList">
                    <div class="newsLeft fl"><img src="../../../assets/img/news/newsImg.png" alt=""></div>
                    <div class="newsRight fl">
                        <h1><span @click="toNewDetail('123456')">{{i.title}}</span><img src="../../../assets/img/news/hot.png" alt=""></h1>
                        <p>{{i.content}}</p>
                        <h2 class="clear">
                            <span class="fr">{{'时间：'+i.date}}</span>
                            <span class="fr">{{'新闻来源：'+i.source}}</span>
                        </h2>
                    </div>
                </li>
            </ul>
        </div>
        <div class="newsDetail commonWidth" v-show="!showListOrDetail">
            <div class="breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{path: '/news'}">新闻资讯</el-breadcrumb-item>
                    <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <header>
                <h1>迅鳐科技受邀参加2016大数据产业峰会 ——为大数据安全流通助力</h1>
                <h2><span>{{'发布时间：'+newsDetail.date}}</span><span>{{'新闻来源：'+newsDetail.source}}</span></h2>
            </header>
            <section v-html="newsDetail.content"></section>
            <footer class="clear">
                <p class="fr" v-show="newsDetail.next"><strong>下一篇：</strong><span>{{newsDetail.next.title}}</span></p>
                <p class="fr" v-show="newsDetail.prev"><strong>上一篇：</strong><span>{{newsDetail.prev.title}}</span></p>
            </footer>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Breadcrumb, BreadcrumbItem } from 'element-ui'
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);

    export default {
        name: "news",
        data() {
            return{
                newsList: [
                    {
                        title: '迅鳐科技“数据哨兵”系列产品发布会取得圆满成功',
                        content: '2016年6月24日，迅鳐成都科技有限公司召开“数据哨兵”系列产品发布会，中国移动通信集团公司、西南电子电信技术研究所、中国工程物理研究院、国家电网四川省电力公司、四川省测绘局、交通银行四川省分行、四川省经信委信息安全处、成都飞机设计研究所、四川省安全测评中心、金蝶国际软件集团有限公司、亿阳信通股份有限公司、郫县信息中心、成都寻道科技有限公司等企事业单位相关领导莅临发布会现场。',
                        date: '2018-05-16',
                        source: 'www.baidu.com'
                    },
                    {
                        title: '迅鳐科技“数据哨兵”系列产品发布会取得圆满成功',
                        content: '2016年6月24日，迅鳐成都科技有限公司召开“数据哨兵”系列产品发布会，中国移动通信集团公司、西南电子电信技术研究所、中国工程物理研究院、国家电网四川省电力公司、四川省测绘局、交通银行四川省分行、四川省经信委信息安全处、成都飞机设计研究所、四川省安全测评中心、金蝶国际软件集团有限公司、亿阳信通股份有限公司、郫县信息中心、成都寻道科技有限公司等企事业单位相关领导莅临发布会现场。',
                        date: '2018-05-16',
                        source: 'www.baidu.com'
                    },
                    {
                        title: '迅鳐科技“数据哨兵”系列产品发布会取得圆满成功',
                        content: '2016年6月24日，迅鳐成都科技有限公司召开“数据哨兵”系列产品发布会，中国移动通信集团公司、西南电子电信技术研究所、中国工程物理研究院、国家电网四川省电力公司、四川省测绘局、交通银行四川省分行、四川省经信委信息安全处、成都飞机设计研究所、四川省安全测评中心、金蝶国际软件集团有限公司、亿阳信通股份有限公司、郫县信息中心、成都寻道科技有限公司等企事业单位相关领导莅临发布会现场。',
                        date: '2018-05-16',
                        source: 'www.baidu.com'
                    }
                ],
                newsDetail: {
                    title: '',
                    date: '2018-05-16 23:59:59',
                    source: 'www.baidu.com',
                    content: '<p style="margin-top:0;margin-bottom:0;text-indent:43px;text-align:justify;text-justify:inter-ideograph;line-height:150%;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(62,62,62);font-size:16px">2016大数据产业峰会”于4月27-28日在北京国际会议中心盛大召开，大会联合各级政府、数据安全领域专家、大数据企业共商大数据安全问题。迅鳐成都科技有限公司受邀参加大会，并参与共建由54家大数据相关企事业单位共同发起的大数据安全流通行业自律公约。</span></p><p style="text-align: center;"><img src="/upload/news/6ulFIWITMIYE/f1904d58-1fb3-40c4-b1f2-de4613e1bc10.png" title="图片1.png" alt="图片1.png"/></p><p style="margin-top:0;margin-bottom:0;text-align:center;line-height:150%;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">迅鳐科技</span>CEO陈瑞东出席公约发布仪式</span></p><p style="margin-top:0;margin-bottom:0;text-indent:32px;text-align:justify;text-justify:inter-ideograph;line-height:150%;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">大会期间迅鳐科技同参与制定公约的单位一起见证了公约的发布，其内容包含遵守法律、合规采集、流向管控、数据保护、权益协调、服务提升、社会监督等七方面内容。此公约的目的是推进我国大数据产业持续健康发展，营造公平有序的大数据生态环境，加强用户数据保护，促进数据交易、共享、转移等环节的规范有序，推动数据的充分流通及价值开发，完善企业内部制度管理和技术保障。</span></span></p><p style="margin-top:0;margin-bottom:0;text-indent:32px;text-align:justify;text-justify:inter-ideograph;line-height:150%;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">迅鳐成都科技有限公司作为国内第一批大数据安全基础设备制造商和服务商，直接服务于国家信息中心重点筹建的政府数据支撑平台，具有国家级数据资源安全视角，就</span>“数据交易与共享、数据应用与创新”等方面提供完整的大数据安全解决方案。我们的产品贯穿数据源保护、数据流通过程保护、数据应用监管、数据终端使用安全四大领域，为数据在整个生命周期提供安全保障。</span></p><p style="margin-top: 0px; margin-bottom: 0px; text-indent: 32px; text-align: justify; line-height: 150%; background: rgb(255, 255, 255);"><span style=";font-family:宋体;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">迅鳐科技整合电子科技大学大数据研究中心、国家网络空间安全特色研究中心等重磅机构</span>10余年技术积淀全力推出新一代数据安全管控平台——数据哨兵，其多项科研技术获得国家专利认证，软件系统获得国家计算机软件著作权等级认证。数字哨兵为客户打造数据安全闭环，企业内外、线上线下一体防护，让企业的业务开展与数据安全双线并行；为企业提供软着陆式安全应用，做到完全融合企业的业务环境、不改变用户办公习惯、不转移企业数据资产；为企业敏感性、风险型数据描绘轨迹图谱，全景式呈现数据转移轨迹，清楚了解数据分布；为企业数据提供贴身式安全服务，无论数据发送到任何地方，安全如影随形提供贴身服务保障。</span></p>',
                    next: {
                        title: '迅鳐科技“数据哨兵”系列产品发布会取得圆满成功',
                        id: '12138'
                    },
                    prev: {
                        title: '迅鳐科技“数据哨兵”系列产品发布会取得圆满成功',
                        id: '12138'
                    }
                }
            }
        },
        computed: {
            showListOrDetail() {
                let show = true;
                this.$route.query.id && (show = false);
                return show;
            }
        },
        methods: {
            toNewDetail(id) {
                console.log(id);
                this.$router.push({ path: '/news', query: { id: id }})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($path) {
        @return '../../../assets/img/news/'+$path;
    }
    .banner{
        height:268px;
        padding-top: 132px;
        background: url(imgUrl('banner_bg.png')) no-repeat center;
        text-align: center;
        img{
            animation-name: zoomInLeft;
            animation-duration: 1s;
        }
    }
    .newsList{
        ul{
            li{
                margin: 40px 0;
                .newsLeft{
                    width: 360px;
                    height: 220px;
                    overflow: hidden;
                    img{
                        width: 360px;
                        height: 220px;
                        transition: all .5s;
                        &:hover{
                            transform: scale(1.4);
                        }
                    }
                }
                .newsRight{
                    margin-left: 40px;
                    h1{
                        span{
                            font-size: 20px;
                            line-height: 26px;
                            cursor: pointer;
                            color: #3096ee;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        img{
                            margin-top: 4px;
                            margin-left: 10px;
                        }
                    }
                    p{
                        margin: 20px 0;
                        width: 800px;
                        text-indent: 2rem;
                        height: 120px;
                        line-height: 20px;
                        overflow: hidden;
                        text-align: justify;
                        font-size: 14px;
                    }
                    h2{
                        height: 33px;
                        line-height: 33px;
                        border-bottom: 1px solid #ddd;
                        span{
                            margin-left: 30px;
                        }
                    }
                }
            }
        }
    }
    .newsDetail {
        header{
            background: url(imgUrl('news_line.png'))no-repeat bottom;
            height: 110px;
            margin-top: 30px;
            text-align: center;
            h1 {
                font-weight: bold;
                font-size: 25px;
                height: 40px;
                line-height: 40px;
            }
            h2 {
                margin-top: 10px;
                height: 30px;
                line-height: 30px;
                span {
                    color: #b3b3b3;
                    font-size: 16px;
                }
            }
        }
        section{
            padding: 30px 0;
            border-bottom: 1px solid #dfdfdf;
        }
        footer {
            height: 30px;
            line-height: 30px;
            margin-bottom: 30px;
            margin-top: 30px;
            p {
                margin-left: 100px;
                strong{
                    font-weight: normal;
                }
                span{
                    color: #2e95ee;
                    font-size: 16px;
                    cursor: pointer;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
