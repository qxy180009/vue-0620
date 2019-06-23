<template>
    <div class="photo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{photoinfo.add_time | dateFormat}}</span>
            <span>点击次数: {{photoinfo.click}}次</span>
        </p>
        <hr>

        <!-- 一个缩略图区域 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" 
            height="100" @click="$preview.open(index, list)" :key="item.src">
        </div>

        <!-- 图片内容区 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
//1. 导入
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id, // 从路由中获得的 图片ID
            photoinfo: {}, //图片详情
            list: [] // 缩略图
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods:{
        getPhotoInfo(){
            // 获取图片详情
            this.$http.get('api/getimageInfo/'+this.id).then(result => {
                if (result.body.status === 0) {
                    this.photoinfo = result.body.message[0]
                }
            });
        },
        getThumbs(){ // 获取缩量图
            this.$http.get('api/getthumimages/' + this.id).then(result => {
                if (result.body.status === 0) {
                    // 循环每个图片, 补全 w和h
                    result.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                    });
                    // 保存完整数据
                    this.list = result.body.message;
                }
            })
        }
    },
    components:{ // 注册评论 子组件
        'cmt-box': comment
    }
}
</script>

<style lang="scss" scoped>
.photo-container{
    padding: 3px;
    h3{
        color: #26A2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;

    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .thumbs{
        img{
            margin: 10px;
            box-shadow: 0 0 8px #999;
        }
    }
}
</style>
