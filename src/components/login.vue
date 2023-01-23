<template>
  <h1>Log In</h1>
  <form @submit.prevent="logIn" method="post" id="myForm">
  <div class="register">
    <b><label for="name">Email:</label></b>    
    <input type="text" v-model="email" placeholder="Enter Email" />
  </div>
  <div class="register">
    <b><label for="name">Phone No:</label></b>    
    <input type="text" v-model="PhoneNo" placeholder="Enter PhoneNo" />
  </div>
  <div class="register">
    <b><label for="name">Password:</label></b>
    <input
      type="password"
      v-model="password"
      placeholder="Enter Password"
    />
  </div>
  <div class="register">             
    <button type="submit">Log In</button>
  </div>
  <p>
    <router-link to="/sign-up">SignUp</router-link>
  </p>
</form>
</template>
<script>
      import axios from "axios";
      export default {
        name: "logIn",  
        data() {
          return {
            email: "",
            password: "",
            PhoneNo:"",
            counter:2     
          };
        },
      methods: {
        async logIn() {
          let result = await axios.get(
            `http://localhost:3000/user?(email=${this.email}|email=${this.email})&password=${this.password}`
          );
          console.log(result)
          if (result.status == 200 && result.data.length > 0) {
            alert("Logged in successfully");
            localStorage.setItem("user-info", JSON.stringify(result.data));                   
            this.$router.push({name: "home"});
          }else{
            if(this.counter >= 1){
              alert(`Please enter valid Mail Id and Password,${this.counter} attempts remained`)              
              this.counter -= 1;
              this.email = '';
              this.password = '';
              this.PhoneNo = '';
            }else{
              alert(`Not a valid User,Please Sign Up to Register Yourself`)
              this.$router.push({ name: "signUp"});
            }
          }
        },
      },
      mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
          this.$router.push({ name: "home" });
        }
      },
    };
</script>
