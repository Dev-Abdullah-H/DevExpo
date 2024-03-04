<template>
  <div class="container">
    <div class="items">
      <img src="../assets/Logo.png" />
      <input type="text" placeholder="Search..." v-model="todo.title" />
      <button @click="showModal">Create Post</button>
      <i class="fa-regular fa-bell fa-lg"></i>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
// import axios from 'axios'
import { defineEmits } from 'vue';
// import { emit } from '../../backend/models/SignUp.cjs';

const emit = defineEmits()


const userData = localStorage.getItem('userData');
const parsedUserData = userData ? JSON.parse(userData) : null;

const todo = reactive({
  userId: parsedUserData ? parsedUserData._id : null,
  title: '',
  completed: false
})

const showModal = () => {
  emit('showModal')
};



</script>

<style scoped>
.container {
  height: 8vh;
  border: 1px solid rgb(201, 200, 200);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}
.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
img {
  height: 50px;
  width: auto;
  display: block;
  margin: auto;
  margin-right: 1vw;
}
input {
  position: relative;
  padding: 15px 30px 15px 15px;
  width: 20vw;
  margin-right: 30vw;
  border: 1px solid rgb(185, 184, 184);
  border-radius: 5px;
  transition: border-color 0.3s ease;
  outline: none;
  font-size: 15px;
}
input:hover {
  border-color: rgb(103, 104, 104);
}
button {
  padding: 10px;
  background-color: rgb(74, 90, 231);
  transition: background-color 0.3s ease;
  font-weight: 300;
  font-size: 15px;
  color: white;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: rgb(20, 36, 173);
}
i {
  cursor: pointer;
}

</style>
