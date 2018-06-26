<template>
    <div id="admin">
        <header class="header"><h1>迅鳐官网管理系统</h1></header>
        <section class="section clear">
            <div class="navContainer fl">
                <div class="navHeader"><img :src="img.portrait" alt=""></div>
                <el-menu
                    class="nav"
                    :default-active="$route.path"
                    background-color="#efefef"
                    text-color="#606266"
                    router
                    active-text-color="#fff">
                    <el-menu-item index="/admin/news"><span slot="title">新闻中心</span></el-menu-item>
                    <el-menu-item index="/admin/jobs"><span slot="title">招聘管理</span></el-menu-item>
                </el-menu>
            </div>
            <VuePerfectScrollbar class="main fl" v-scroll><router-view/></VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import portrait from '../../assets/img/admin/portrait.png'

    export default {
        name: "admin",
        components: {VuePerfectScrollbar},
        data() {
            return{
                img: {
                    portrait: portrait
                }
            }
        }
    }
</script>

<style lang="scss">
    .el-menu-item{
        text-align: center;
        border-bottom: 1px solid #e1e1e1;
        &.is-active{
            background-color: #6898d6!important;
        }
        &:focus, &:hover{
            background-color: #6898d6!important;
            color: #fff!important;
        }
    }
    .tableTitle{
        background-color: #f5f8fd!important;
    }
    .avatar-uploader {
        height: 220px;
        .el-upload{
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            width: 360px;
            height: 220px;
            overflow: hidden;
            .avatar{
                width: 360px;
                height: 220px;
            }
            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 360px;
                height: 220px;
                line-height: 220px;
                text-align: center;
            }
        }
    }
</style>

<style lang="scss" scoped>
    #admin{
        height: 100%;
        .header{
            height: 80px;
            color: #fff;
            background-color: #2e95ee;
            h1{
                line-height: 80px;
                text-align: center;
                width: 260px;
                font-size: 24px;
            }
        }
        .section{
            height: calc(100% - 80px);
            .navContainer{
                width: 259px;
                height: 100%;
                overflow: hidden;
                background-color: #efefef;
                border-right: 1px solid #c6c6c6;
                .navHeader{
                    text-align: center;
                    padding: 20px 0 30px;
                    background: url(../../assets/img/admin/dividingLine.png) no-repeat center 90px;
                }
                .nav{
                    border-right: none;
                }
            }
            .main{
                width: calc(100% - 320px);
                height: calc(100% - 32px);
                padding: 16px 30px;
            }
        }
    }
</style>
