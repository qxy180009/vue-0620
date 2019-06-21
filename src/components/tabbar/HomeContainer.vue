<template>
    <div>
        <!-- 轮播图区 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中使用v-for循环 一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格到六宫格改造 -->

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 

        <h3>HomeContainer</h3>
    </div>
</template>

<script>

export default {
    data() {
        return {
            lunbotuList: [ // 保存轮播图的数组
            ]
        }
    },
    created(){
        this.getLunbotu()
    },
    methods: {
        getLunbotu(){
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                // console.log(result.body);
                if (result.body.status === 0) {
                    this.lunbotuList = result.body.message;
                    Toast('加载轮播图失败')
                }else{
                    // 失败
                    Toast('加载轮播图失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 100px;

        .mint-swipe-item{
            &:nth-child(1){
                background-color:red;
            }
            &:nth-child(2){
                background-color:blue;
            }
            &:nth-child(3){
                background-color:yellow;
            }

            img{
                width: 100%;
                height: 100%;
                background-color: yellow;
            }

        }
    }
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        width: 60px;
        height: 60px;
    }

    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}

</style>