<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <heade />
  <h1>Hello {{ name }},Welcome to home page</h1>
  <table border="1px">
    <thead>
      <td>ID</td>
      <td>RESTAURANT NAME</td>
      <td>ADDRESS</td>
      <td>CONTACT</td>
      <td>ACTION</td>
    </thead>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>
        <button>
          <router-link :to="'/update/' + item.id">Update</router-link>
        </button>&nbsp;
        <button @click="deleteRestaurant(item.id)">Delete</button>&nbsp;
        <button>
          <router-link :to="'/menu/'">Menu</router-link>
        </button>
      </td>
    </tr>
  </table>
</template>
<script>
import heade from "./header.vue";
import axios from "axios";
export default {
  name: "homeH",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    heade,
  },
  methods: {
    async deleteRestaurant(id) {
      const result = await axios.delete(
        "http://localhost:3000/restaurant/" + id
      );
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");      
      let conv = JSON.parse(user);
      this.name = conv[0].name;      
      if (!user) {
        this.$router.push({ name: "signUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurant");      
      this.restaurants = result.data;
    },
  },
  mounted() {    
    this.loadData();
  },
};
</script>
<style>
td {
  width: 200px;
  height: 50px;
  background: rgb(94, 240, 240);
  text-align: center;
}
table {
  margin-left: auto;
  margin-right: auto;
}
td:nth-child(1) {
  width: 100px;  
  }
  td:nth-child(5) {
  width: 300px;
  display:ruby-base-container; 
  } 
</style>
