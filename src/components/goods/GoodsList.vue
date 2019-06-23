<template>
    <div class="goods-list">
        
        <div class="goods-item">
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/MMT-154297-pol_der-86337.jpg;maxHeight=309;maxWidth=457" alt="">
            <h1 class="title">H儿遛遛</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2133</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖</span>
                    <span>left 60</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/MMT-154297-pol_der-86337.jpg;maxHeight=309;maxWidth=457" alt="">
            <h1 class="title">H儿遛遛</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2133</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖</span>
                    <span>left 60</span>
                </p>
            </div>
        </div><div class="goods-item">
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/MMT-154297-pol_der-86337.jpg;maxHeight=309;maxWidth=457" alt="">
            <h1 class="title">H儿遛遛</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2133</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖</span>
                    <span>left 60</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 15px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
            }
        }
    }
}

</style>
