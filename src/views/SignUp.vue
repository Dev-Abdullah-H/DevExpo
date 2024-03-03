
<template>
  <img src="../assets/Logo.png" />
  <h1>Join the DEV Community</h1>
  <h4>DEV Community is a community of 1,296,722 amazing developers</h4>
  <div class="container">
    <div class="item" @click="redirect()">
      <i class="fa-brands fa-github fa-lg"></i>
      <h5>Sign up with GitHub</h5>
    </div>
    <div class="item" @click="redirect()">
      <i class="fa-brands fa-apple fa-lg"></i>
      <h5>Sign up with Apple</h5>
    </div>
    <div class="item" @click="redirect()">
      <i class="fa-brands fa-twitter fa-lg"></i>
      <h5>Sign up with Twitter</h5>
    </div>
    <div class="item" @click="redirect()">
      <i class="fa-solid fa-envelope fa-lg"></i>
      <h5>Sign up with Email</h5>
    </div>
  </div>
  <h6>
    By signing up, you are agreeing to our privacy policy, terms of use and code
    of conduct.
  </h6>
  <div class="hr">
    <hr />
  </div>
  <h6>
    Already have an account? <router-link to="/login">Log in</router-link>
  </h6>
  <h6>Made By : Muhammad Abdullah Haider</h6>
</template>

<script setup>
import "../assets/SignUp/SignUp.css";
import { useRouter } from "vue-router";

const router = useRouter();

function redirect() {
  router.push({ name: "signup2" });
}

</script>

