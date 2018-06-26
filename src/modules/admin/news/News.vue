<template>
    <div>
        <div v-show="!isShowDetail">
            <header class="clear">
                <span class="fl">招聘列表</span>
                <el-button type="primary" plain class="fr" @click="toDetail">新增招聘</el-button>
            </header>
            <el-table
                :data="tableData"
                header-cell-class-name="tableTitle"
                :cell-style="{color: '#6898d6'}"
                style="width: 100%">
                <el-table-column prop="dept" label="岗位名称"></el-table-column>
                <el-table-column prop="name" label="招聘部门"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="success">修改</el-button>
                        <el-button size="mini" type="success" @click="deleteNews">删除</el-button>
                        <el-button size="mini" type="success">隐藏</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="page"
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        <div v-show="isShowDetail">
            <header><span>新闻详情</span></header>
            <el-form
                class="newsDetail"
                ref="form"
                :model="form"
                label-width="90px">
                <el-form-item label="新闻标题：">
                    <el-input v-model="form.title" placeholder="请输入新闻标题"></el-input>
                </el-form-item>
                <el-form-item label="新闻来源：">
                    <el-input v-model="form.title" placeholder="请输入新闻来源"></el-input>
                </el-form-item>
                <el-form-item label="新闻简介：">
                    <el-input type="textarea" v-model="form.introduce" placeholder="请输入新闻简介"></el-input>
                </el-form-item>
                <el-form-item label="封面图片：">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="changeUpload"
                        :auto-upload="false"
                        :show-file-list="false">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="新闻内容：">
                    <UEditor :defaultMsg="defaultMsg" :config="config" ref="ue"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">立即提交</el-button>
                    <el-button @click="toTableList">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import UEditor from '../../../components/UEditor'

    export default {
        name: "News",
        components: {UEditor},
        data() {
            return{
                tableData: [
                    {
                        dept: "研发部",
                        name: "项目申报主管",
                        status: "显示"
                    }
                ],
                form: {
                    title: null,
                    source: null,
                    introduce: null,
                    imageUrl: null
                },
                defaultMsg: '请输入新闻内容',
                config: {
                    initialFrameWidth: 1200,
                    initialFrameHeight: 200,
                    autoHeightEnabled: false,
                    autoHeight: true
                }
            }
        },
        computed: {
            isShowDetail(){
                let show = false;
                this.$route.query.uuid && (show = true);
                return show;
            }
        },
        methods: {
            changeUpload(file) {
                this.form.imageUrl = file.url;
            },
            getUEContent() {
                let content = this.$refs.ue.getUEContent();
                console.log(content)
            },
            toDetail() {
                this.$router.push({ path: '/admin/news', query: { uuid: '123456' }});
            },
            toTableList() {
                this.$router.push({ path: '/admin/jobs'});
            },
            deleteNews() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({type: 'success', message: '删除成功!'});
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        height: 40px;
        line-height: 40px;
        padding: 5px 0;
        border-bottom: 4px solid #6898d6;
    }
    .page{
        text-align: right;
        padding: 20px 0;
    }
    .newsDetail{
        width: 1292px;
        padding-top: 20px;
    }
</style>
