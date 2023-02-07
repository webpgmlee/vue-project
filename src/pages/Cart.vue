<template>
<div class="container">
  <main>
    <div class="row g-5 py-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill"></span>
        </h4>
        <ul class="list-group mb-3">
          <li class="d-flex justify-content-between lh-sm"><img :src="product.pitems.imgPath"/></li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-1">{{product.pitems.productName}}</h6>
              <small class="text-muted"></small>
            </div>
            <span class="text-muted">{{product.pitems.price}} 원</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>합계</span>
            <strong>{{product.pitems.price}} 원</strong>
          </li>
        </ul>
      </div>
      <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Payment</h4>
          <div class="my-3">
            <div class="col-md-6">
              <label for="acct_list" class="form-label">계좌정보</label>
              <select id="acct_list" class="form-control" @change="getBalance()">
                <option value="">선택</option>
                <option v-for="(item, idx) in state.items" :key="idx" :value="item.balance" :id="item.acctNo">{{item.acctNo}}</option>
              </select>
            </div>
            <div class="col-md-6 my-3">
              잔액 : {{balance}}
            </div>
          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="button" @click="payment()">결제하기</button>
        </div>
    </div>
  </main>
</div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import axios from 'axios'
import router from "@/scripts/router"

export default ({
    name: 'Cart',
    setup() {
      const state = reactive({
          items:[]
      })

      const product = reactive({ pitems: "" })

      let balance = ref(0)

      const eid = sessionStorage.getItem("id");

      const payment = () => {
        console.log(balance);
        if(balance.value >= product.pitems.price){

          axios.put("/api/payments", 
            {
              "userId" : eid,
              "productId" : product.pitems.id,
              "account" : "987654321"
            } 
          ).then((res) => {
            alert("결제가 완료되었습니다.");
            console.log(res);
            router.push("/");
          }).catch(() => {
            alert("");
          });

        }else{
          alert("잔액이 부족합니다.");
        }
      }

      const getBalance = () => {
        let acctNo = document.getElementById("acct_list");
        balance.value = acctNo.value;
        console.log(acctNo.getAttribute("id"));
      }

      axios.get("/api/accounts").then((res) => {
        console.log(res.data);
        state.items = res.data;
      })

      axios.get("/api/products/1").then((res) => {
        console.log(res.data);
        product.pitems = res.data;
      })

      return {
        state,
        product,
        balance,
        getBalance,
        payment
      }
    },
})
</script>

<style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      img{
        width:400px;
      }
    </style>
