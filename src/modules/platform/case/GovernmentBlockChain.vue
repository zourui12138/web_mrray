<template>
    <div>
        <div class="banner">
            <h1>政务区块链</h1>
            <p>政府数据共享开放区块链应用能为政府提供可信、可靠、可执行的数据共享开放<br>监管措施，为拥有、使用、传播政府数据保驾护航，助力产业发展、<br>维护社会稳定，进而为国家层面数据资源共享开放</p>
        </div>
        <div class="function commonWidth">
            <header class="title">
                <h1>仓储区块链平台</h1>
                <h2>Product&nbsp;Function</h2>
            </header>
            <section>
                <div>
                    <button type="button">政务区块链</button>
                    <p>有助于构建一个合理、合规、合法、公开、公平、公正的数据共享开放平台</p>
                </div>
                <div>
                    <button type="button">主权节点服务器管理</button>
                    <p>希望加入此网络进行节点维护的单位、企业或者个人需要发起申请，提交服务器信息等信息。政府通过审核申请方的资质决定是否允许服务器加入网络，和加入网络的节点类型，在政府监管下实现部分去中心化。</p>
                </div>
                <div>
                    <button type="button">可拓展电子合约</button>
                    <p>将各行业规则对应到电子合同模板当中，拟定一个具有可扩展能力的合同模板模块，选择合同模板会生成对应的智能合约。智能合约会广播到所有节点服务器，数据出售、购买、使用过程中均使用智能合约。</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GovernmentBlockChain"
    }
</script>

<style lang="scss" scoped>
    @import "./css/case";
    @function imgUrl($path) {
        @return '../../../assets/img/case/governmentBlockChain/'+$path;
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
