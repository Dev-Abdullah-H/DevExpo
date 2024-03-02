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
        <input type="text" />
        <h2>
          Username
          <i class="fa-solid fa-star-of-life fa-2xs" style="color: #ba0808"></i>
        </h2>
        <input type="text" />
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
  </body>
</template>

<script setup>
import "../assets/SignUp/SignUp2.css";
</script>
<style scoped></style>
