<template>
    <div>
        <div class="banner">
            <h1>运力共享区块链平台</h1>
            <p>绿色共享运力区块链平台，是一个可以审计的区块链系统，方便交易确权、追踪<br>溯源，解决出现纠纷时难以取证和维权的问题。</p>
        </div>
        <div class="function commonWidth">
            <header class="title">
                <h1>仓储区块链平台</h1>
                <h2>Product&nbsp;Function</h2>
            </header>
            <section>
                <div>
                    <button type="button">运力共享区块链平台</button>
                    <p>实现了去中介化的绿色电动运力的可信可靠的共享，提升了运力利用率，提高了运输效率，创造了良好的社会效益，同时使用运力币方式，实现了运力报酬的节税、高效对冲等，具有优秀的经济效益与价值。</p>
                </div>
                <div>
                    <button type="button">分时租赁、联盟结算能力</button>
                    <p>吸纳各种大小级别的物流公司加入到联盟当中，同时进行联盟链的租赁业务上线，可以将零散时间内的物流汽车等运力资源，通过分时租赁实现与供销商的订单匹配，最大化物流资源利用率。</p>
                </div>
                <div>
                    <button type="button">新零售战略的商业智能</button>
                    <p>主要包括了运力平台的发展趋势报表、异常分析和预测、风险控制模型生成与机器学习、智能分类与聚合应用、智能推送、物流网点的优化与选址、动态接单等创新型平台。</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CapacityShareBlockChain"
    }
</script>

<style lang="scss" scoped>
    @import "./css/case";
    @function imgUrl($path) {
        @return '../../../assets/img/case/capacityShareBlockChain/'+$path;
    }
    .banner{
        background: url(imgUrl('banner.png')) no-repeat center;
    }
    .function{
        section{
            background: url(imgUrl('function.png')) no-repeat right center;
        }
    }
</style>
