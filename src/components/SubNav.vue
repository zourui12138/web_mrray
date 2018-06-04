<template>
    <div class="subNav">
        <ul class="clear" :style="subNavWidth">
            <li v-for="i in navList"
                class="subNavBox fl"
                @click="href(i.router)"
                :class="i.router === currentPath ? 'current' : ''">
                <img class="normal" :src="i.src" alt="">
                <img class="hover" :src="i.hoverSrc" alt="">
                <span>{{i.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SubNav",
        props: ['navList'],
        computed: {
            currentPath() {
                return this.$route.path;
            },
            subNavWidth() {
                let style = {width:'170px'};
                this.navList.length >= 6 && (style.width = '340px');
                return style;
            }
        },
        methods: {
            href(path) {
                path && this.$router.push({path: path});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .subNav{
        position: absolute;
        z-index: 100;
        top: 80px;
        padding-top: 5px;
        ul{
            width: 340px;
            background-color: #fff;
            border-radius: 5px;
            border: 1px solid #d7d7d7;
            li.subNavBox{
                width: 170px;
                text-align: left;
                height: 35px;
                line-height: 35px;
                cursor: pointer;
                font-size: 14px;
                position: relative;
                img{
                    margin:7px;
                    &.normal{
                        display: inline-block;
                    }
                    &.hover{
                        display: none;
                    }
                }
                &:hover,&.current{
                    span{
                        color: #2e95ee;
                    }
                    .normal{
                        display: none;
                    }
                    .hover{
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>
