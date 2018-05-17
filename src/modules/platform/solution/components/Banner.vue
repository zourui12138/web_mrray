<template>
    <div class="banner">
        <div class="commonWidth">
            <div class="solutionIntroduce">
                <h1 :style="{background : 'url('+ solutionLogo +') no-repeat 0 center'}">{{bannerTitle}}</h1>
                <p v-html="bannerContent"></p>
                <button type="button">联系我们</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props: ['bannerTitle','bannerContent','solutionLogo']
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($path) {
        @return '../../../../assets/img/solution/'+$path;
    }
    .banner{
        height:400px;
        background: url(imgUrl('banner.png')) no-repeat center;
        position: relative;
        .solutionIntroduce{
            width:600px;
            color: #fff;
            padding-top: 96px;
            animation-name: zoomInLeft;
            animation-duration: 1s;
            h1{
                height:64px;
                line-height: 64px;
                padding-left: 76px;
                font-size: 30px;
            }
            p{
                line-height: 20px;
                margin-top: 24px;
                margin-bottom: 24px;
                font-size: 14px;
                text-align: justify;
            }
            button{
                width:120px;
                height:36px;
                line-height: 36px;
                color: #fff;
                background-color: #3096ee;
                cursor: pointer;
                border-radius: 4px;
            }
        }
    }
</style>
