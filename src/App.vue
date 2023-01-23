<template>
  <div class="total">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
.total{
  border-style: double;
  border-radius: 10px;
  padding: 20px 0;
  margin: 30px 250px;
}
.total img{
  width: 20%;
  height: 20%;
}
</style>
