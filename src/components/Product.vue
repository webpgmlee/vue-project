<template>
    <div class="card shadow-sm">
        <img :src="imgPath"/>
        <div class="card-body">
            <p class="card-text">{{productName}}</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-primary" :pid="id" @click="buy($event)">구매하기</button>
            </div>
            <small class="text-muted">{{price}}원</small>
            </div>
        </div>
    </div>
</template>

<script>
import router from "@/scripts/router"
import store from "@/scripts/store";

export default {
    name: 'Product',
    props: {
        productName: String,
        price: Number,
        imgPath: String, 
        id: Number, 
    },
    setup() {
        const buy = (event) => {
            if(confirm("구매하시겠습니까?")){
                const targetId = event.currentTarget.pid;
                store.commit('setProductId', targetId);
                router.push({path: '/cart'});
            }
            
        }

        return{
            buy
        }
    }
}
</script>

<style scoped>
img{ width: 420px; height: 268px;}
</style>
