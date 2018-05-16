<template>
    <div>
        <div class="banner">
            <div class="commonWidth clear">
                <div class="banner_left fl">
                    <header>
                        <button type="button" :class="{current : bannerLeftIntroduceNav}" @click="toggleBannerLeftContent()">公司简介</button><button type="button" :class="{current : bannerLeftCultureNav}" @click="toggleBannerLeftContent()">企业文化</button>
                    </header>
                    <transition name="banner_left_introduce">
                        <div class="banner_left_introduce" v-show="bannerLeftIntroduceNav">
                            <p>迅鳐成都科技有限公司（简称‘迅鳐科技’）成立于2015年，由国内首位网络安全长江学者领头创办，是国内第一批大数据安全基础设施制造商与服务商，直接服务于国家信息中心重点筹建的政务数据支撑平台，具有国家级数据资源安全视角。</p>
                            <p>迅鳐科技依托大数据产业，交叉于信息安全，致力于价值数据市场基础规则设计、制定、建设，以提供高水平、定制化数据安全产品、解决方案为中心，服务于政务及企业数据开发、共享健康发展、决策可行性验证。</p>
                        </div>
                    </transition>
                    <transition name="banner_left_culture">
                        <div class="banner_left_culture" v-show="bannerLeftCultureNav">
                            <h1>企业宗旨：打造具备自主知识产权的数据安全产品，为客户提供高质量数据安全解决方案，构建安全。可控、可信的大数据生态环境。</h1>
                            <h1>企业使命：数据安全为己任，客户利益至上，企业成长与股东收益双赢，激发员工潜力，实现个人价值。</h1>
                            <h1>企业理念：创新、高效、与时俱进、价值观引领。</h1>
                            <h1>企业愿景：建设成世界一流水平的大数据安全服务提供商。</h1>
                        </div>
                    </transition>
                </div>
                <div class="banner_right fr"></div>
            </div>
        </div>
        <div class="eventList">
            <div class="commonWidth">
                <header class="title">
                    <h1>迅鳐大事件</h1>
                    <h2>MrRay&nbsp;Events</h2>
                </header>
            </div>
            <div class="timeAxis">
                <div class="commonWidth">
                    <ul class="clear">
                        <li class="fl"
                            v-for="(i,index) in eventsList"
                            v-bind:class="{current : currentYear === i.year}"
                            @click="timeAxisMove(i.year,index)">{{i.year}}</li>
                    </ul>
                </div>
            </div>
            <div class="detailEvent">
                <ul class="commonWidth">
                    <li v-for="i in currentEventsList"><strong>{{i.month}}</strong><span>{{i.event}}</span></li>
                </ul>
            </div>
        </div>
        <div class="dividingLine"></div>
        <div class="coreCreation">
            <div class="commonWidth">
                <header class="title">
                    <h1>核心主创</h1>
                    <h2>Core&nbsp;Creation</h2>
                </header>
                <section>
                    <el-carousel
                        :autoplay="false"
                        trigger="click"
                        arrow="never"
                        type="card"
                        height="350px"
                        @change="initCoreCreationMsg">
                        <el-carousel-item name="zhang" class="coreCreationBox">
                            <h1>张小松</h1>
                            <h2>迅鳐科技首席科学家</h2>
                            <img src="../../../assets/img/aboutUs/introduce/zhang.png" alt="">
                        </el-carousel-item>
                        <el-carousel-item name="chen" class="coreCreationBox">
                            <h1>陈瑞东</h1>
                            <h2>迅鳐科技COO</h2>
                            <img src="../../../assets/img/aboutUs/introduce/chen.png" alt="">
                        </el-carousel-item>
                        <el-carousel-item name="xia" class="coreCreationBox">
                            <h1>夏琦</h1>
                            <h2>迅鳐科技CTO</h2>
                            <img src="../../../assets/img/aboutUs/introduce/xia.png" alt="">
                        </el-carousel-item>
                    </el-carousel>
                    <ul class="clear">
                        <li class="fl">
                            <p v-for="i in coreCreationMsg.personalProfile"><strong></strong><span>{{i}}</span></p>
                        </li>
                        <li class="fl">
                            <p>{{coreCreationMsg.researchDirection}}</p>
                        </li>
                        <li class="fl">
                            <p v-for="i in coreCreationMsg.kudos"><strong></strong><span>{{i}}</span></p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Carousel, CarouselItem } from 'element-ui'
    Vue.use(Carousel);
    Vue.use(CarouselItem);

    export default {
        name: "introduce",
        data() {
            return{
                eventsList : [
                    {
                        year : 2015,
                        events : [
                            {
                                month : '10月',
                                event : '2015年10月9号迅鳐成都科技有限公司成立。'
                            },
                            {
                                month : '12月',
                                event : '2015年12月与电子科大、成都优易数据有限公司联合申报《大数据安全与共享四川省实验室》。'
                            }
                        ]
                    },
                    {
                        year : 2016,
                        events : [
                            {
                                month : '4月',
                                event : '2016年4月参加工信部《大数据产业峰会》，参与起草大数据安全流通行业标准。'
                            },
                            {
                                month : '6月',
                                event : '2016年6月24号举行大数据哨兵系列产品发布会。'
                            },
                            {
                                month : '4月',
                                event : '2016年10月大数据标记与溯源系统接入中国电建集团成都勘测设计研究院业务系统。'
                            }
                        ]
                    },
                    {
                        year : 2017,
                        events : [
                            {
                                month : '3月',
                                event : '2017年3月迅鳐科技区块链研究中心成立。'
                            },
                            {
                                month : '5月',
                                event : '2017年5月与积微物联联合发布国内首款“在线钢铁物流区块链应用平台”。'
                            },
                            {
                                month : '7月',
                                event : '2017年7月与电子科大、积微物联联合发布西南地区首个区块链研究所。'
                            },
                            {
                                month : '9月',
                                event : '2017年9月纳入国家信息安全中心安全事业部。'
                            }
                        ]
                    },
                    {
                        year : 2018,
                        events : []
                    },
                    {
                        year : 2019,
                        events : []
                    }
                ],
                index : 2,// 根据不同的索引值需改不同的计算属性
                bannerLeftIntroduceNav: true,
                bannerLeftCultureNav: false,
                coreCreationList: [
                    {
                        name : '张小松',
                        personalProfile : [
                            '长江学者特聘教授；',
                            '教育部十三五网络空间安全战略规划组长；',
                            '电子科技大学网络空间安全研究中心主任；',
                            '电子科技大学大数据研究中心副主任；',
                            '四川省学术技术带头人；',
                            '保密通信国防科技重点实验室客座专家；'
                        ],
                        researchDirection : '重点围绕网络空间安全：IT基础架构、大数据安全及应用、嵌入式平台安全、网络攻击检测与软件脆弱性等关键领域，开展创新研究和技术攻关，同时深入能源动力、电子机械、计算机应用技术和信息安全研究。',
                        kudos : [
                            '《2016年度成就奖》',
                            '《2012国家科技进步二等奖》',
                            '《2010四川省科技进步一等奖》',
                            '《2008四川省科技进步二等奖》',
                            '获国家版权局计算机软件著作权登记9项，授权发明专利7项'
                        ]
                    },
                    {
                        name : '陈瑞东',
                        personalProfile : [
                            '电子科技大学计算机博士；',
                            '主要从事数据安全、网络与云安全、系统攻击与测试验证等研究工作；',
                            '具有大型系统架构设计、网络安全解决方案的设计与实验经验；'
                        ],
                        researchDirection : '主要从事数据结构、信息安全技术、网络空间协议、数据通信协议等领域研究，具有政务数据基础设施设计、数据流通共享机制、数据安全生态布防经验，为多家企业提供信息安全（数据存储、数据共享、数据决策性管理等）解决方案。',
                        kudos : [
                            '参编网络溯源专著1部，国内外发表论文5篇',
                            '国家发明专利5项',
                            '省科技进步一等奖1项，二等奖1项',
                            '国家科技进步奖',
                            '参与国家863重大课题、国家自然科学基金面上、军方型号、华为、中电集团等课题70余项'
                        ]
                    },
                    {
                        name : '夏琦',
                        personalProfile : [
                            '电子科技大学计算机应用技术工学博士，电子科技大学副教授，研究生导师；',
                            '美国宾夕法尼亚大学访问学者；',
                            '网络空间安全研究中心副主任；',
                            '大数据研究中心科研办主任；',
                            '安全大数据研究所副所长；'
                        ],
                        researchDirection : '主要从事网络安全技术及其应用、密码学、大数据安全等领域研究，参与国家自然科学基金国际合作项目、中央高校基本科研业务费项目、国家AQ部部级课题、四川省科技支撑计划项目、型号专项课题等。',
                        kudos : [
                            '2012年获得国家科技进步二等奖',
                            '2010年获得四川省科技进步一等奖',
                            '发表论文20余篇，出版教材多部，英文专著一部',
                            '国家自然科学基金国际合作项目：SecureMultiparty Computation: Efficiency andApplications，2013.01-2013,12，第一负责人'
                        ]
                    }
                ],
                coreCreationMsg : {}
            }
        },
        computed:{
            // 时间轴当前时间
            currentYear() {
                return this.eventsList[this.index].year;
            },
            // 时间轴当前时间的事件
            currentEventsList() {
                return this.eventsList[this.index].events;
            },
        },
        methods: {
            // 时间抽切换当前时间
            timeAxisMove(target,index) {
                this.index = index;
            },
            // banner简介和企业文化的切换
            toggleBannerLeftContent() {
                this.bannerLeftIntroduceNav = !this.bannerLeftIntroduceNav;
                this.bannerLeftCultureNav = !this.bannerLeftCultureNav;
            },
            // 根据索引确定当前核心人物的信息
            initCoreCreationMsg(index) {
                this.coreCreationMsg = this.coreCreationList[index];
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($path) {
        @return '../../../assets/img/aboutUs/introduce/'+$path;
    }
    .title{
        width:149px;
        padding-top: 35px;
        h1{
            font-size: 18px;
            height:28px;
            line-height: 28px;
        }
        h2{
            font-size: 14px;
            height:22px;
            line-height: 22px;
            border-bottom: 2px solid #2e95ee;
            padding-bottom: 6px;
        }
    }
    .banner{
        height:335px;
        padding-top: 95px;
        background: url(imgUrl('banner.png')) no-repeat center;
        .banner_right{
            width:415px;
            height:250px;
            background: url(imgUrl('banner_computer.png')) no-repeat center;
            animation-name: zoomInRight;
            animation-duration: 1s;
        }
        .banner_left{
            height:210px;
            width:728px;
            color: #fff;
            background-color: rgba(46,149,238,.9);
            padding:20px;
            animation-name: zoomInLeft;
            animation-duration: 1s;
            position: relative;
            header{
                height:50px;
                line-height: 50px;
                button{
                    width:100px;
                    height:30px;
                    line-height: 30px;
                    border-radius: 30px;
                    border:1px solid #fff;
                    background-color: transparent;
                    color: #fff;
                    margin-right: 20px;
                    cursor: pointer;
                    transition: all .2s;
                }
                button.current, button:hover{
                    background-color: #fff;
                    color: #2e95ee;
                }
            }
            div{
                position: absolute;
                width:728px;
                p{
                    font-size: 14px;
                    line-height: 25px;
                    text-indent: 2em;
                    text-align: justify;
                }
                h1{
                    font-size: 14px;
                    line-height: 25px;
                    text-align: justify;
                }
            }
            .banner_left_introduce-enter-active{
                transform-origin: 100% 50%;
                animation: rotateCubeRightIn .6s both ease-in;
            }
            .banner_left_introduce-leave-active{
                transform-origin: 100% 50%;
                animation: rotateCubeLeftOut .6s both ease-in;
            }
            .banner_left_culture-enter-active{
                transform-origin: 0 50%;
                animation: rotateCubeLeftIn .6s both ease-in;
            }
            .banner_left_culture-leave-active{
                transform-origin: 0 50%;
                animation: rotateCubeRightOut .6s both ease-in;
            }
        }
    }
    .eventList{
        margin-bottom: 60px;
        .timeAxis{
            font-size: 14px;
            background: url(imgUrl('timeAxis.png')) no-repeat center;
            div{
                overflow: hidden;
                height:160px;
                position: relative;
                ul{
                    position: absolute;
                    top:0;
                    left: 0;
                    li{
                        width:80px;
                        height:80px;
                        background-color: #bed7ed;
                        border-radius: 50%;
                        line-height: 80px;
                        text-align: center;
                        color: #fff;
                        margin:40px 200px 40px 0;
                        cursor: pointer;
                        font-size: 18px;
                        &:last-child{
                            margin-right: 0;
                        }
                        &:hover, &.current{
                            background-color: #3096ee;
                        }
                    }
                }
            }
        }
        .detailEvent{
            background-color: #fcfcfc;
            line-height: 50px;
            padding:10px 0;
            height: 200px;
            strong{
                display: inline-block;
                height:30px;
                line-height: 30px;
                vertical-align: top;
                width: 60px;
                text-align: center;
                color: #fff;
                background-color: #2e95ee;
                font-size: 14px;
                margin-right: 20px;
                font-weight: normal;
                margin-top: 10px;
            }
        }
    }
    .dividingLine{
        height: 100px;
        background: url(imgUrl('dividingLine.png')) no-repeat center;
    }
    .coreCreation{
        background: url(imgUrl('coreCreation.png')) no-repeat center bottom;
        section{
            padding-top: 20px;
            .coreCreationBox{
                width:250px;
                line-height: 40px;
                text-align: center;
                margin: 0 175px;
                h1{
                    font-size: 24px;
                }
                h2{
                    font-size: 14px;
                    margin-bottom: 20px;
                }
            }
            ul{
                padding-top: 50px;
                li{
                    width:280px;
                    height: 240px;
                    overflow: hidden;
                    text-align: justify;
                    padding:80px 60px 0 60px;
                    line-height: 25px;
                    p{
                        font-size: 14px;
                        strong{
                            display: inline-block;
                            width:9px;
                            height:9px;
                            border-radius: 50%;
                            vertical-align: top;
                            background-color: #919dac;
                            margin-top: 8px;
                            margin-right: 5px;
                        }
                    }
                    &:nth-child(1){
                        background: url(imgUrl('personal_profile.png')) no-repeat center 0;
                    }
                    &:nth-child(2){
                        background: url(imgUrl('research_direction.png')) no-repeat center 0;
                    }
                    &:nth-child(3){
                        background: url(imgUrl('kudos.png')) no-repeat center 0;
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    .el-carousel__indicators{
        display: none;
    }
    .el-carousel__mask{
        display: none;
    }
    .el-carousel__item--card.is-active{
        h1,h2{
            color: #2e95ee;
        }
    }
</style>
