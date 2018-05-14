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
        <div class="commonWidth">
            <el-carousel :autoplay="false" trigger="click" arrow="never" type="card" height="350px">
                <el-carousel-item v-for="item in 3" :key="item">
                    <div class="coreCreationBox" v-if="item === 1">
                        <h1>张小松</h1>
                        <h2>迅鳐科技首席科学家</h2>
                        <img src="../../../assets/img/aboutUs/introduce/zhang.png" alt="">
                    </div>
                    <div class="coreCreationBox" v-if="item === 2">
                        <h1>陈瑞东</h1>
                        <h2>迅鳐科技COO</h2>
                        <img src="../../../assets/img/aboutUs/introduce/chen.png" alt="">
                    </div>
                    <div class="coreCreationBox" v-if="item === 3">
                        <h1>夏琦</h1>
                        <h2>迅鳐科技CTO</h2>
                        <img src="../../../assets/img/aboutUs/introduce/xia.png" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
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
                    <ul class="clear" v-bind:style="{width : timeAxisWidth}" ref="timeAxis">
                        <li class="fl" v-for="(i,index) in eventsList" v-bind:class="{current : currentYear === i.year}" @click="timeAxisMove(i.year,index)">{{i.year}}</li>
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
                    <div class="coreCreationList">
                        <div v-for="(i,index) in coreCreationList" :class="coreCreationClassName[index]">
                            <h1>{{i.name}}</h1>
                            <h2>{{i.position}}</h2>
                            <img :src="i.src" alt="" @click="coreCreationAnimate(index)">
                        </div>
                    </div>
                    <div class="coreCreationMsg">
                        <ul class="clear">
                            <li class="fl">
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '张小松'">
                                        <p v-for="i in coreCreationList[0].personalProfile"><strong></strong><span>{{i}}</span></p>
                                    </div>
                                </transition>
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '夏琦'">
                                        <p v-for="i in coreCreationList[0].personalProfile"><strong></strong><span>{{i}}</span></p>
                                    </div>
                                </transition>
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '陈瑞东'">
                                        <p v-for="i in coreCreationList[0].personalProfile"><strong></strong><span>{{i}}</span></p>
                                    </div>
                                </transition>
                            </li>
                            <li class="fl">
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '张小松'">
                                        <p>{{coreCreationList[0].researchDirection}}</p>
                                    </div>
                                </transition>
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '夏琦'">
                                        <p>{{coreCreationList[0].researchDirection}}</p>
                                    </div>
                                </transition>
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '陈瑞东'">
                                        <p>{{coreCreationList[0].researchDirection}}</p>
                                    </div>
                                </transition>
                            </li>
                            <li class="fl">
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '张小松'">
                                        <p v-for="i in coreCreationList[0].kudos"><strong></strong><span>{{i}}</span></p>
                                    </div>
                                </transition>
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '夏琦'">
                                        <p v-for="i in coreCreationList[0].kudos"><strong></strong><span>{{i}}</span></p>
                                    </div>
                                </transition>
                                <transition name="bounce">
                                    <div v-show="currentCoreCreation === '陈瑞东'">
                                        <p v-for="i in coreCreationList[0].kudos"><strong></strong><span>{{i}}</span></p>
                                    </div>
                                </transition>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Zhang from '~/assets/img/aboutUs/introduce/zhang.png'
    import Xia from '~/assets/img/aboutUs/introduce/xia.png'
    import Chen from '~/assets/img/aboutUs/introduce/chen.png'
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
                index : 0,// 根据不同的索引值需改不同的计算属性
                step : 0, // 移动几步
                bannerLeftIntroduceNav: true,
                bannerLeftCultureNav: false,
                coreCreationClassName: ['','',''],
                isAnimate: false,
                coreCreationList: [
                    {
                        src : Zhang,
                        name : '张小松',
                        position : '迅鳐科技首席科学家',
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
                        src : Xia,
                        name : '夏琦',
                        position : '迅鳐科技COO',
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
                    },
                    {
                        src : Chen,
                        name : '陈瑞东',
                        position : '迅鳐科技CTO',
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
                    }
                ]
            }
        },
        computed:{
            timeAxisWidth() {
                return 1200+280*(this.eventsList.length-5)+'px'
            },
            currentEventsList() {
                return this.eventsList[this.index].events;
            },
            currentYear() {
                return this.eventsList[this.index].year;
            },
            currentCoreCreation() {
                return this.coreCreationList[0].name;
            }
        },
        methods: {
            timeAxisMove(target,index) {
                let beforeCurrent = this.currentYear;
                this.index = index;
                if(this.eventsList.length > 5){
                    let distance = 280,// 移动一次的距离
                        isMove = false,// 是否移动
                        first = this.eventsList[0].year,
                        last = this.eventsList[this.eventsList.length-1].year,
                        totalStep = this.eventsList.length-5;
                    if(!isMove){
                        isMove = true;
                        if(target > beforeCurrent && this.step < totalStep){// 可以向左移动
                            if(totalStep-this.step < 2){
                                this.step += target <= first+2 ? 0 : 1;
                            }else{
                                target > first+2 && (this.step += beforeCurrent <= first+2 ? target-(first+2) : target-beforeCurrent);
                            }
                        }else if(target < beforeCurrent && this.step > 0){// 可以向右移动
                            if(this.step < 2){
                                this.step -= target >= last-2 ? 0 : 1;
                            }else{
                                target < last-2 && (this.step -= beforeCurrent >= last-2 ? last-2-target : beforeCurrent-target);
                            }
                        }
                        $(this.$refs.timeAxis).animate({left : -this.step*distance+'px'},500,function () {isMove = false;});
                    }
                }
            },
            toggleBannerLeftContent() {
                this.bannerLeftIntroduceNav = !this.bannerLeftIntroduceNav;
                this.bannerLeftCultureNav = !this.bannerLeftCultureNav;
            },
            moveLeft() {
                this.$set(this.coreCreationClassName,0,'moveLeft');
                this.$set(this.coreCreationClassName,1,'moveRight');
                this.$set(this.coreCreationClassName,2,'moveCenter');
                this.isAnimate = true;
            },
            moveRight() {
                this.$set(this.coreCreationClassName,0,'moveRight');
                this.$set(this.coreCreationClassName,1,'moveCenter');
                this.$set(this.coreCreationClassName,2,'moveLeft');
                this.isAnimate = true;
            },
            coreCreationAnimate(index) {
                let me = this;
                if(!this.isAnimate){
                    index === 1 && (this.moveRight());
                    index === 2 && (this.moveLeft());
                    console.log(index);
                    setTimeout(function () {
                        me.isAnimate = false;
                        me.$set(me.coreCreationClassName,0,'');
                        me.$set(me.coreCreationClassName,1,'');
                        me.$set(me.coreCreationClassName,2,'');
                        index === 1 && (me.coreCreationList = me.coreCreationList.concat(me.coreCreationList.splice(0,1)));
                        index === 2 && (me.coreCreationList = me.coreCreationList.splice(me.coreCreationList.length-1,1).concat(me.coreCreationList));
                    },500);
                }
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
            height:765px;
            .coreCreationList{
                transform-style: preserve-3d;
                perspective : 1500px;
                position: relative;
                div{
                    width:250px;
                    height:350px;
                    position: absolute;
                    top:40px;
                    left:0;
                    right:0;
                    margin:auto;
                    text-align: center;
                    line-height: 40px;
                    h1{
                        font-size: 24px;
                    }
                    h2{
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                    &.moveLeft{
                        animation: moveLeft .5s both linear;
                    }
                    &.moveRight{
                        animation: moveRight .5s both linear;
                    }
                    &.moveCenter{
                        animation: moveCenter .5s both linear;
                    }
                    &:nth-child(1){
                        transform: translateZ(0) translateX(0);
                        color: #2e95ee;
                    }
                    &:nth-child(2){
                        transform: translateZ(-450px) translateX(-450px);
                    }
                    &:nth-child(3){
                        transform: translateZ(-450px) translateX(450px);
                    }
                }
            }
            .coreCreationMsg{
                padding-top: 445px;
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
                    .bounce-enter-active {
                        animation: bounceIn .5s;
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
    .coreCreationBox{
        width:250px;
        line-height: 40px;
        text-align: center;
        margin: auto;
        h1{
            font-size: 24px;
        }
        h2{
            font-size: 14px;
            margin-bottom: 20px;
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
</style>
