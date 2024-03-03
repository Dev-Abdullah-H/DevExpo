<template>
  <img src="../assets/Logo.png" />
  <h1>Join the DEV Community</h1>
  <h4>DEV Community is a community of 1,296,722 amazing developers</h4>
  <div class="container">
    <div class="profile">
      <h2>
        Email
        <i class="fa-solid fa-star-of-life fa-2xs" style="color: #ba0808"></i>
      </h2>
      <input type="text" v-model="data.email" />
      <h2>
        Password
        <i class="fa-solid fa-star-of-life fa-2xs" style="color: #ba0808"></i>
      </h2>
      <input type="text" v-model="data.password" />
    </div>
    <button @click="Login">Log in</button>
  </div>
  <h6>New to DEV community?<router-link to="/signup">Sign up</router-link></h6>
  <div class="message" v-if="message">
    <p>Log in Successfull!</p>
  </div>
</template>

<script setup>
import "../assets/LogIn/LogIn.css";
import { ref, reactive } from "vue";
import axios from "axios";

let data = reactive({
  email: "",
  password: "",
});
let message = ref(false);
const Login = async () => {
  if (data.email != "" && data.password != "") {
    try {
      const response = await axios.post(
        "http://localhost:3000/signUpApi/login",
        data
      );
      console.log(response);
      if (response.status == 200) message.value = true;
    } catch (e) {
      console.log("User not found by abdullah", e);
    }
  } else alert("Input field missing! please fill it.");
};
</script>

<style></style>
