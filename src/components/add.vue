<template>
  <heade />
  <h1>Hello, Welcome to Add Resturant Page</h1>
  <h2>Add Your Restaurant Now!!!</h2>
  <form action="" class="Add">
    <input
      type="text"
      placeholder="Enter Name"
      v-model="restaurant.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Enter Address"
      v-model="restaurant.address"
      name="address"
    />
    <input
      type="text"
      placeholder="Enter Contact Details"
      v-model="restaurant.contact"
      name="contact"
    />
    <button type="button" v-on:click="addRestaurant">Add Resturant</button>
  </form>
</template>
<script>
import axios from "axios";
import heade from "./header.vue";
export default {
  name:"addR",
  components: {
    heade,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {      
      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status == 201) {
        alert('Restaurant added successfully')
        this.$router.push({ name: "home" });
      }
     
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
  },
};
</script>
<style>
.Add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.Add button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: aquamarine;
  cursor: pointer;
}
</style>
