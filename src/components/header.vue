<template>
  <div class="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="add">Add Resturant</router-link>
    <a @click="logOut" href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: "headerH",
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "logIn" });
    },
  },
};
</script>
<style>
.nav {
  background-color: midnightblue;
  overflow: hidden;
  color: white;
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 15px;
  font-size: 20px;
  margin-left: 5px;
  text-decoration: none;
}
body {
  padding: 0;
  margin: 0;
}
.nav a:hover {
  background-color: azure;
  color: #222;
}
</style>
