<template>
    <div>
        <div class="banner">
            <h1>积微仓储区块链</h1>
            <p>解决传统仓储平台的信息不通造成损失、电商平台交易安全隐患、<br>远程发货信任危机等痛点，实现安全新人的仓储平台。</p>
        </div>
        <div class="function commonWidth">
            <header class="title">
                <h1>仓储区块链平台</h1>
                <h2>Product&nbsp;Function</h2>
            </header>
            <section>
                <div>
                    <button type="button">仓储区块链平台</button>
                    <p>以仓储链未核心打通金融链、生产链、物流链、供应链，实现数据资源能力开放</p>
                </div>
                <div>
                    <button type="button">覆盖仓储管理全业务</button>
                    <p>信息化管理入库、出库、移库、调拨、退货、盘点等环节；支持多仓库、多货主、多货物、多条码、多批次等管理维度</p>
                </div>
                <div>
                    <button type="button">工业级APls适配接口</button>
                    <p>提供多种数据接口可与TMS、ERP、OMS系统对接实现系统之间的信息共享与资源统筹</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StorageBlockChain"
    }
</script>

<style lang="scss" scoped>
    @import "./css/case";
    @function imgUrl($path) {
        @return '../../../assets/img/case/storageBlockChain/'+$path;
    }
    .banner{
        background: url(imgUrl('banner.png')) no-repeat center;
    }
    .function{
        section{
            padding: 100px 0;
            background: url(imgUrl('function.png')) no-repeat right center;
        }
    }
</style>
