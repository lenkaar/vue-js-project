<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <h1>Welcome To Our Menu</h1>
  <!-- Header -->
  <div class="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/cart">Go To Cart</router-link>
  </div>

  <!--Veg Menu Section  -->
  <div>
    <h1><u>Menu</u></h1>
  </div>
  <div class="menu">    
          <div class="dish" v-for="(data,index) in result " :key="index"> 
          <img :src="data.image" alt="Image" />&nbsp;&nbsp;
          <u><label>{{data.name}}</label></u>
          <h3>Rs:{{data.cost}}/-</h3>          
          <button @click="addToCart(data)"><b>Add to cart</b></button><br/><br/>
         </div>         
  </div>
    <cart :cartData = "cart" />
    
</template>
<script>
import axios from "axios";
import cart from './cart.vue';
export default {
  name: "menuM",
  components:{
    cart
  },
  data() {
    return {
        result:[],
        res: axios.get(`http://localhost:3000/menudb`)
        .then((res)=>{        
        this.result = res.data;
        }
      ),
      cart: [],
      Total:0
    };
  },
  methods: {
    addToCart(data) { 
      this.cart.push(data);           
 }
  }, 
};
</script>
<style>
.menu img {
  height: 250px;
  width: 250px;
}
.menu label {
  font-size: 25px;
  display: block;
}
.menu button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.dish{
  border-style: double;
  border-radius: 10px;
  padding: 10px 0;
  margin: 30px 350px;
}
</style>
