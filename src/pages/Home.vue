<template>
    <main>
  <section class="text-center">
    <img src="/img/main.jpg"/>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="(item, idx) in state.items" :key="idx">
          <Product 
          :productName="item.productName"
          :price="item.price"
          :imgPath="item.imgPath"
          :id="item.id"/>
        </div>
      </div>
    </div>
</div>
</main>
</template>

<script>
import Product from '@/components/Product.vue'
import axios from 'axios'
import { reactive } from '@vue/reactivity'
export default{
    name: 'Home',
    components: { 
        Product 
    },
    setup(){
        const state = reactive({
            items:[]
        })

        axios.get("/api/products").then((res) => {
          console.log(res.data);
          state.items = res.data;
        })

        return{
            state
        }
    }
}
</script>

<style scoped>
img{ width:1290px; height:500px;}
</style>