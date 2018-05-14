<template>
    <div>
        <div class="banner"><div></div></div>
        <div class="department commonWidth">
            <button type="button" class="current">研发部</button><button type="button">产品部</button>
        </div>
        <ul class="jobMsg commonWidth">
            <li>
                <header><h2><strong>WEB前端工程師</strong></h2></header>
                <section>
                    <h1>工作职责：</h1>
                    <p>从事面向金融科技基于大数据和云计算架构的大规模WEB前端开发；</p>
                    <p>与产品、测试和运维人员紧密配合，通过快速迭代交付高质量的产品；</p>
                    <p>参与产品的设计。</p>
                    <h1>任职要求：</h1>
                    <p>本科及以上学历，两年以上的前端领域开发经验，能独立完成前端开发工作；</p>
                    <p>熟练掌握JavaScript，HTML，CSS开发，熟悉响应式布局；</p>
                    <p>精通面向对象开发概念，具备学习和掌握新技术的能力；</p>
                    <p>熟练运用主流的JS库和开发框架，如：React、Vue、Angular等；</p>
                    <p>熟练使用前端编译打包工具，如Webpack, Gulp等；</p>
                    <p>有代码洁癖，不能忍受垃圾代码。热爱技术，有极强的好奇心及持之以恒的钻研心态；</p>
                    <h1>工作地址：</h1>
                    <p>西区：四川省成都市郫都区菁蓉镇静园东路28号优易数据大厦5F</p>
                    <p>南区：四川省成都市高新区菁蓉国际广场1栋A区3楼</p>
                    <p>简历投递邮箱：hr@mrray.cn</p>
                </section>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "jobs"
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($path) {
        @return '../../../assets/img/aboutUs/jobs/'+$path;
    }
    .banner{
        height:144px;
        padding-top: 56px;
        background: url(imgUrl('banner.png')) no-repeat center;
        div{
            width:256px;
            height:87px;
            background: url(imgUrl('bannerContent.png')) no-repeat center;
            margin:auto;
            animation-name: zoomInLeft;
            animation-duration: 1s;
        }
    }
    .department{
        padding-top: 40px;
        padding-bottom: 27px;
        button{
            width:120px;
            height:40px;
            background-color: transparent;
            color: #2e95ee;
            border:1px solid #2e95ee;
            cursor: pointer;
        }
        button:hover, button.current{
            background-color: #2e95ee;
            color: #fff;
        }
    }
    .jobMsg{
        li{
            margin-bottom: 20px;
            header{
                height:50px;
                border-left: 4px solid #2e95ee;
                padding-left: 36px;
                h2{
                    height:49px;
                    line-height: 49px;
                    border-bottom: 1px solid #d6d6d6;
                    color: #333;
                    font-size: 18px;
                }
            }
            section{
                background-color: #fcfcfc;
                padding:10px 40px;
                line-height: 30px;
                font-size: 14px;
                color: #747474;
                margin-top: 20px;
                max-height:600px;
                overflow: hidden;
                h1{
                    color: #333;
                    margin-top: 4px;
                }
                p{
                    font-size: 14px;
                }
            }
        }
    }
</style>
