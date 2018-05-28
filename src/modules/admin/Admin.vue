<template>
    <div>
        <UEditor :defaultMsg=defaultMsg :config=config ref="ue"/>
        <button @click="getUEContent()">获取内容</button>
    </div>
</template>

<script>
    import UEditor from '../../components/UEditor'
    export default {
        name: "admin",
        components: {UEditor},
        data() {
            return{
                defaultMsg: '这里是UE测试',
                config: {
                    initialFrameWidth: 1200,
                    initialFrameHeight: 400
                }
            }
        },
        methods: {
            getUEContent() {
                let content = this.$refs.ue.getUEContent();
                console.log(content)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
