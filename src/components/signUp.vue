<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="SignUp" method="post" id="myForm">
    <div class="register">
      <b><label for="name">Name:&nbsp;</label></b>
      <input type="text" v-model="name" placeholder="Enter Name" id="name" />
      <div class="error">{{ errors.name }}</div>
    </div>
    <div class="register">
      <b><label for="email">Email:&nbsp;</label></b>
      <input type="text" v-model="email" placeholder="Enter Email" id="email" />
      <div class="error">{{ errors.email }}</div>
    </div>
    <div class="register">
      <b><label for="Phno">Phone NO:&nbsp;</label></b>
      <input
        type="text"
        v-model="PhoneNo"
        placeholder="Enter Your Phone No."
        id="Phno"
      />
      <div class="error">{{ errors.PhoneNo }}</div>
    </div>
    <div class="register">
      <b><label for="password">Password:&nbsp;</label></b>
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        id="password"
      />
      <div class="error">{{ errors.password }}</div>
    </div>
    <div class="register">
      <button type="submit">Sign Up</button>
    </div>
    <p>
      <router-link to="/log-In">LogIn</router-link>
    </p>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      PhoneNo: "",
      valid: true,
      errors: {},
    };
  },
  methods: {
    async SignUp() {
      this.errors = {};
      const alreadyExist = await axios.get("http://localhost:3000/user");
      console.log('alreadyExist',alreadyExist.data[0].email)
      const validateName = (name) => {
        if (!name.length) {
          return { valid: false, error: "This field is required" };
        }
        return { valid: true, error: null };
      };
      const validName = validateName(this.name);
      this.errors.name = validName.error;
      if (this.valid) {
        this.valid = validName.valid;
      }
      const validateEmail = (email) => {        
        if (!email.length) {
          return { valid: false, error: "This field is required" };
        }
        if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
          return { valid: false, error: "Please, enter a valid email." };
        }        
        for (let i = 0; i < alreadyExist.data.length; i++) {
          if (email == alreadyExist.data[i].email) {            
            return { valid: false, error: " email already exist" };
          }         
        }
        return { valid: true, error: null };
      };

      const validEmail = validateEmail(this.email);
      this.errors.email = validEmail.error;
      if (this.valid) {
        this.valid = validEmail.valid;
      }

      const validatePhoneNO = (PhoneNo) => {
        if (!PhoneNo.length) {
          return { valid: false, error: "This field is required" };
        }        
        for (let i = 0; i < alreadyExist.data.length; i++) {
          if (PhoneNo == alreadyExist.data[i].PhoneNo) {            
            return { valid: false, error: " Phone No already exist" };
          }         
        }
        return { valid: true, error: null };
      };
      const validPhoneNO = validatePhoneNO(this.PhoneNo);
      this.errors.PhoneNo = validPhoneNO.error;
      if (this.valid) {
        this.valid = validPhoneNO.valid;
      }

      const validatePassword = (password) => {
        if (!password.length) {
          return { valid: false, error: "This field is required" };
        }
        if (password.length < 7) {
          return { valid: false, error: "Password is too short" };
        }
        return { valid: true, error: null };
      };
      const validPassword = validatePassword(this.password);
      this.errors.password = validPassword.error;
      if (this.valid) {
        this.valid = validPassword.valid;
      }

      if (this.valid) {
        alert("Sign Up Done");
        let result = await axios.post("http://localhost:3000/user", {
          name: this.name,
          email: this.email,
          password: this.password,
          PhoneNo: this.PhoneNo,
        });

        result.status = 201;
        this.$router.push({ name: "logIn" });
        console.log("sign-up done successfully");
      } else {
        alert(
          "Sign-Up Failed!!!Please Fill The Name,Mail Id and Password Correctly"
        );
        let reset = setTimeout(() => {
          this.name = "";
          this.email = "";
          this.password = "";
          this.PhoneNo = "";
          window.location.reload();
        }, 5000);
        reset();
      }
    },
  },
};
</script>
<style>
.register label {
  display: inline-block;
  width: 120px;
  text-align: right;
  margin-left: -100px;
  font-size: 20px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 250px;
  height: 40px;
  font-size: 20px;
  border: 1px solid skyblue;
  background-color: aquamarine;
  cursor: pointer;
}
.error {
  color: red;
}
</style>
