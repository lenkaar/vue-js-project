<template>
  <heade />
  <h1>Hello, Welcome to Updata Restaurant Page</h1>
  <h2>Update Now!!!</h2>
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
    <button type="button" v-on:click="updateRestaurant">
      Update Restaurant
    </button>
  </form>
</template>
<script>
import heade from "./header.vue";
import axios from "axios";
export default {
  name: "upDate",
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
    async updateRestaurant() {
      // console.warn(this.restaurant);
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "home" });
      }     
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );    
    this.restaurant = result.data;
  },
};
</script>
