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
      <button @click="SignUp">Sign up</button>
      <div v-if="message" class="message">
        <p>Sign up Successfull!</p>
      </div>
    </div>
  </body>
</template>

<script setup>
import "../assets/SignUp/SignUp2.css";
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
    } catch (e) {
      console.log(e);
    }
  } else alert("Input field is missing! please fill it.");
};
const setup = () => {
  const beforeRouteEnter = (to, from, next) => {
    location.reload();
    next();
  };

  return { beforeRouteEnter };
};
</script>
<style scoped></style>
