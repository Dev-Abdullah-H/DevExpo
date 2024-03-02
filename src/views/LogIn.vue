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
    <input type="text" />
    <h2>
      Password
      <i class="fa-solid fa-star-of-life fa-2xs" style="color: #ba0808"></i>
    </h2>
    <input type="text" />
  </div>
  <button>Sign up</button>
</div>
<h6>New to DEV community?<router-link to="/signup">Sign up</router-link></h6>
</template>

<script setup>
import '../assets/LogIn/LogIn.css'
</script>

<style></style>
