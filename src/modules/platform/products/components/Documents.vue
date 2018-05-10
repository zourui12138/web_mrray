<template>
    <div class="commonWidth documents">
        <header class="title"><h1>相关文档</h1><h2>Related&nbsp;Documents</h2></header>
        <section><a v-for="i in documentsList">{{i}}</a></section>
    </div>
</template>

<script>
    export default {
        name: "documents",
        props: ['documentsList']
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($path) {
        @return '../../../../assets/img/products/'+$path;
    }
    .documents{
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
        section{
            margin-top:20px;
            margin-bottom:60px;
            background-color: #fcfcfc;
            padding:20px;
            a{
                color: #3096ee;
                text-decoration: none;
                padding-left: 20px;
                height:20px;
                line-height: 20px;
                background: url(imgUrl('download.png')) no-repeat 0 center;
                margin-right: 20px;
                cursor: pointer;
            }
        }
    }
</style>
