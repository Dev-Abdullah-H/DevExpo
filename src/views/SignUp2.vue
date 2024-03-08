<template>
  <body>
    <div class="container">
      <h1>Create your account</h1>
      <div class="profile">
        <h3>Profile Image</h3>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onchange="previewImage()"
        />
        <h2>
          Name
          <i class="fa-solid fa-star-of-life fa-2xs" style="color: #ba0808"></i>
        </h2>
        <input type="text" v-model="data.name" />
        <h2>
          Username
          <i class="fa-solid fa-star-of-life fa-2xs" style="color: #ba0808"></i>
        </h2>
        <input type="text" v-model="data.username" />
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
      <div class="btns">
        <button @click="redirect">Go Back</button>
        <button @click="SignUp">Sign up</button>
      </div>
      <div v-if="message" class="message">
        <p>Sign up Successfull!</p>
      </div>
    </div>
  </body>
</template>

<script setup>
// import "../assets/SignUp/SignUp2.css";
import { ref, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();


let data = reactive({
  name: "",
  username: "",
  email: "",
  password: "",
});
let message = ref(false);
const SignUp = async () => {
  if (
    data.name != "" &&
    data.username != "" &&
    data.email != "" &&
    data.password != ""
  ) {
    try {
      const response = await axios.post(
        "http://localhost:3000/signUpApi/signup",
        data
      );
      console.log(response.data);
      message.value = true;
      router.push({name: 'login'})
    } catch (e) {
      console.log(e);
    }
  } else alert("Input field is missing! please fill it.");
};


const redirect = () => {
  router.push({name : 'signup'})
}

</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  border: 2px solid rgb(187, 187, 187);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80vh;
  width: 30vw;
}
.profile {
  padding: 20px;
}
h1 {
  font-weight: 400;
  margin-bottom: 1vw;
}
h3 {
  font-weight: 300;
  margin-bottom: 1vw;
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
  margin: 1vw;
}
button:hover {
  background-color: rgb(20, 36, 173);
}

.message {
  margin-top: 2vw;
  color: rgb(70, 112, 7);
}





</style>
