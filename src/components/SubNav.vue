<template>
    <div class="subNav">
        <ul>
            <li v-for="i in navList"
                class="subNavBox"
                @click="href(i.router)"
                :class="i.router === currentPath ? 'current' : ''">
                <img class="normal" :src="i.src" alt="">
                <img class="hover" :src="i.hoverSrc" alt="">
                <span>{{i.name}}</span>
                <div>
                    <ol>
                        <li v-for="j in i.child"
                            class="subNavBox"
                            @click.stop="href(j.router)"
                            :class="j.router === currentPath ? 'current' : ''">
                            <img class="normal" :src="j.src" alt="">
                            <img class="hover" :src="j.hoverSrc" alt="">
                            <span>{{j.name}}</span>
                        </li>
                    </ol>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SubNav",
        props: ['navList','hasChild'],
        computed: {
            currentPath() {
                return this.$route.path;
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
    .style{
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #d7d7d7;
    }
    .subNav{
        position: absolute;
        z-index: 100;
        top: 80px;
        padding-top: 5px;
        ul{
            @extend .style;
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
                div{
                    position: absolute;
                    z-index: 100;
                    top: 0;
                    right: -176px;
                    display: none;
                    padding-left: 5px;
                    ol{
                        @extend .style;
                    }
                }
                &:hover,&.current{
                    >span{
                        color: #2e95ee;
                    }
                    >.normal{
                        display: none;
                    }
                    >.hover{
                        display: inline-block;
                    }
                }
                &:hover{
                    background-color: #f2f2f2;
                    >div{
                        display: block;
                    }
                }
            }
        }
    }
</style>
