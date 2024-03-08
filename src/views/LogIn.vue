<template>
  <img src="../assets/Logo.png" />
  <h1>Join the DEV Community</h1>
  <h4>DEV Community is a community of 1,296,722 amazing developers</h4>
  <div class="container mx-auto">
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
  <h6>New to DEV community?<router-link class="text-sky-800 underline" to="/signup">Sign up</router-link></h6>
  <div class="message" v-if="message">
    <p>Log in Successfull!</p>
  </div>
</template>

<script setup>
// import "../assets/LogIn/LogIn.css";
import { ref, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter()


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
      console.log(response.data._id);
      if (response.status == 200){
        message.value = true;
        localStorage.setItem('userData', JSON.stringify(response.data))
        router.push(`/dashboard/${response.data._id}`);
      }
    } catch (e) {
      console.log("User not found by abdullah", e);
    }
  } else alert("Input field missing! please fill it.");
};
</script>

<style scoped>
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vw;
    width: 5%;
  }
  h1, h4 {
      text-align: center;
      margin-top: 1vw;
  }

  .profile {
    padding: 20px;
  }

  h2 {
    font-weight: 200;
    margin-bottom: 1vw;
  }
  input {
    padding: 10px;
    border: 1px solid rgb(158, 156, 156);
    width: 15vw;
    margin-bottom: 1vw;
    border-radius: 5px;
    outline: none;
  }
  button {
    padding: 10px;
    width: 7vw;
    background-color: rgb(74, 90, 231);
    font-weight: 300;
    font-size: 15px;
    color: white;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: rgb(20, 36, 173);
  }

.message {
  margin-top: 1vw;
  color: rgb(70, 112, 7);
  text-align: center;
}

</style>
