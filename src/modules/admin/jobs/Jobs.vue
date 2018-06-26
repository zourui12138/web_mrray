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
                        <el-button size="mini" type="success" @click="deleteJobs">删除</el-button>
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
            <header><span>招聘详情</span></header>
            <el-form
                class="jobsDetail"
                ref="form"
                :model="form"
                label-width="90px">
                <el-form-item label="招聘岗位：">
                    <el-input v-model="form.name" placeholder="请选择招聘岗位"></el-input>
                </el-form-item>
                <el-form-item label="招聘部门：">
                    <el-select v-model="form.dept" placeholder="请选择招聘部门">
                        <el-option label="研发部" value="1"></el-option>
                        <el-option label="产品部" value="2"></el-option>
                        <el-option label="综合管理部" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工作职责：">
                    <el-input type="textarea" v-model="form.responsibility"
                              placeholder="请选择工作职责，每一条职责请用英文分号(;)隔开。"></el-input>
                </el-form-item>
                <el-form-item label="任职要求：">
                    <el-input type="textarea" v-model="form.requirements"
                              placeholder="请选择任职要求，每一条要求请用英文分号(;)隔开。"></el-input>
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
    export default {
        name: "Jobs",
        data() {
            return{
                tableData: [
                    {
                        dept: "研发部",
                        name: "项目申报主管",
                        status: "显示"
                    },
                    {
                        dept: "研发部",
                        name: "项目申报主管",
                        status: "显示"
                    }
                ],
                form: {
                    name: null,
                    dept: null,
                    responsibility: null,
                    requirements: null
                }
            }
        },
        computed: {
            isShowDetail() {
                let show = false;
                this.$route.query.uuid && (show = true);
                return show;
            }
        },
        methods: {
            toDetail() {
                this.$router.push({ path: '/admin/jobs', query: { uuid: '123456' }});
            },
            toTableList() {
                this.$router.push({ path: '/admin/jobs'});
            },
            deleteJobs() {
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
    .jobsDetail{
        width: 500px;
        padding-top: 20px;
    }
</style>
