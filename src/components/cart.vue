<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div>
    <h1>Welcome to Cart</h1>
    <table>
      <tr>
        <td>ID</td>
        <td>ITEM IMG</td>
        <td>NAME OF ITEM</td>
        <td>QUANTITY</td>
        <td>COST</td>
        <td>ACTION</td>
      </tr>
      <tr v-for="(item, index) in cartTable" :key="index">
        <td>{{ item.id }}</td>
        <td><img :src="item.image" alt="Image"/></td>
        <td>{{ item.name }}</td>
        <td>1</td>
        <td>Rs {{ item.cost }} /-</td>
        <td>        
             <button @click="deleteItem(index)">Delete</button><br />
        </td>
      </tr>
    </table>
    <div>
      <tr>       
          <h2>Total Bill: Rs {{ total }} /- </h2>        
      </tr>
    </div>
  </div>
</template>
<script>
export default {
  name: "cartC",
  data(){
    return{            
      cartTable:this.cartData
    }    
  },
  props:['cartData'],
  methods: {
  deleteItem(index) {
      this.cartTable.splice(index, 1);
  }
},
  computed: {
    total() {
      let total = 0;
      this.cartData.forEach(item => {
        total += item.cost;
      });
      return total;
    }
  }
}
</script>
<style scoped>
 h2{
  margin-left: 620px;
 }
  .total img {
    width: 80%;
    height: auto;
}
</style>
