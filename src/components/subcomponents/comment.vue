<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入的内容(<= 120)" maxlength="120"
        v-model="msg"></textarea>

        <!-- 先导入样式 -->
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="{item, i} in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户: {{ item.user_name}}&nbsp;nbsp;发表时间: 
                    {{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户什么都没说' : item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageIndex: 1, // 默认展示 第一页数据
            comments: [], // 所有评论数据
            msg: '' // 评论输入的内容
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){ // 获取评论
            this.$http
            .get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex)
            .then(result => {
                if (result.body.status === 0) {
                    // this.comments = result.body.message;
                    // 获取新评论数据的时候 不要把原来的覆盖掉 使用拼接
                    this.comments = this.comments.concat(result.body.message);
                }else{
                    Toast('获取评论失败');
                }
            });
        },
        getMore(){ // 加载更多
            this.pageIndex++;
            this.getComments();
        },
        postComment(){
            // 校验是否为空内容
            if (this.msg.trim().length === 0) {
                return Toast('评论内容不能为空');
            }
            // 发表评论 post到服务器
            // 1. 参数1: 请求的URL地址
            // 2. 参数2: 提交给服务器的数据对象 {content: this.msg}
            // 3. 参数3: 定义提交时候, 表单中的数据格式
            this.$http.post('api/postComment/' + this.$route.params.id, {
                content: this.msg.trim()
                .then(function(){result => {
                    if (result.body.status === 0) {
                        // 1. 拼接一个评论对象
                        var cmt = {
                            user_name: '匿名用户',
                            add_time: Date.now(), 
                            content: this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = '';
                    };
                }}) 
            });
        }
    },
    props: ["id"]
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }

    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 36px;
                text-indent: 2em;
            }
        }
    }
}
</style>
