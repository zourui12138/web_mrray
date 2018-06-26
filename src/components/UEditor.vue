<template>
    <div>
        <script id="editor" type="text/plain"></script>
    </div>
</template>

<script>
    import '../../static/ueditor/ueditor.config'
    import '../../static/ueditor/ueditor.all.min'
    import '../../static/ueditor/lang/zh-cn/zh-cn'
    import '../../static/ueditor/ueditor.parse'

    export default {
        name: "UEditor",
        data () {
            return {
                editor: null
            }
        },
        props: {
            defaultMsg: {
                type: String
            },
            config: {
                type: Object
            }
        },
        mounted() {
            const _this = this;
            this.editor = UE.getEditor('editor', this.config); // 初始化UE
            this.editor.addListener("ready", function () {
                _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
            });
        },
        methods: {
            getUEContent() { // 获取内容方法
                return this.editor.getContent()
            }
        },
        destroyed() {
            this.editor.destroy();
        }
    }
</script>

<style lang="scss">
    #editor{
        line-height: 0;
    }
</style>
