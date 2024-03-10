<template>
  <Header @showModal="showModal" />
  <div class="container1">
    <div class="sub-container1">
      <h3><i class="fa-solid fa-house"></i>Home</h3>
      <h3><i class="fa-solid fa-book-open"></i>Reading List</h3>
      <h3><i class="fa-solid fa-podcast"></i>Podcasts</h3>
      <h3><i class="fa-solid fa-video"></i>Videos</h3>
      <h3><i class="fa-solid fa-tag"></i>Tags</h3>
      <h3><i class="fa-solid fa-lightbulb"></i>DEV Help</h3>
      <h3><i class="fa-solid fa-address-card"></i>About</h3>
    </div>
    <div class="sub-container2">
      <div class="sub-item" v-for="post in posts" :key="post._id">
        <h2>{{ post.title }}</h2>
        <div class="tags">
          <p v-for="(tag, index) in post.tags" :key="index">{{ tag }}</p>
        </div>
        <i
          @click="deletePosts(post._id)"
          class="fa-solid fa-trash hover:bg-red-600 ease-in-out"
        ></i>
      </div>
      <div class="card-overlay" v-if="modal">
        <div class="card">
          <h4>Create the Post</h4>
          <input
            type="text"
            placeholder="Enter Title..."
            id="card-inp"
            v-model="data.title"
          />
          <h5>Tags</h5>
          <div class="inp-tags">
            <input type="text" v-model="data.tags[0]" />
            <input type="text" v-model="data.tags[1]" />
            <input type="text" v-model="data.tags[2]" />
          </div>
          <div class="post-btns">
            <button @click="showModal">Close</button>
            <button @click="createPost">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-container3"></div>
  </div>
</template>

<script setup>
import Header from "../Components/Header.vue";
import { reactive, ref, onMounted } from "vue";
import axios from "axios";

const posts = ref([]);

const data = reactive({
  title: "",
  tags: ["", "", ""],
});

let modal = ref(false);

let showModal = () => {
  modal.value = !modal.value;
};

//
// const userData = localStorage.getItem("userData");
// const parsedUserData = userData ? JSON.parse(userData) : null;

// const userId = ref(parsedUserData ? parsedUserData._id : null);

//

const createPost = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/postapi/createPost",
      data
    );
    console.log(response);
    await fetchPosts();
    showModal();
    data.title = "";
    data.tags = ["", "", ""];
  } catch (e) {
    console.log(e);
  }
};

const fetchPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/postapi/getPosts");
    posts.value = response.data.posts;
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

const deletePosts = async (postId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/postapi/deletePosts/${postId}`
    );
    fetchPosts();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
body {
  background-color: #f8f8f8;
}
body .container1 {
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 4vw;
}
.sub-container1 {
  color: #495555;
  height: 70vh;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: color 0.3s;
  cursor: pointer;
}
.sub-container1 h3:hover {
  color: #2a8484;
}
.sub-container2 {
  min-height: 100vh;
  width: 40vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
}
.sub-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(161, 157, 157);
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1vw;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.tags {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5vw;
}
.tags p {
  margin: 1vw;
  background-color: #e0e0e0;
  padding: 0.5vw;
  border-radius: 5px;
}
h3 {
  color: rgb(73, 153, 153);
  margin: 2vw;
  font: 100;
}
.sub-container3 {
  height: 70vh;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sub-item i {
  cursor: pointer;
  padding: 4px;
  border-radius: 10px;
  transition: background-color 0.3s;
}
.sub-item i:hover {
  background-color: #ff8a8a;
}
.card-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  height: 60vh;
  width: 60vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-direction: column;
}
h4 {
  margin-bottom: 5vw;
  font-size: 40px;
}
#card-inp {
  height: 3vh;
  padding: 20px;
  font-size: 20px;
  width: 20vw;
  margin-bottom: 5vw;
}
h5 {
  margin-left: 10vw;
  margin-bottom: 1vw;
}
.inp-tags input {
  height: 4vh;
  width: 8vw;
  margin: 1vw;
  padding: 10px;
}
input {
  border-radius: 8px;
  outline: none;
  border: 1px solid rgb(173, 170, 170);
}
.card button {
  padding: 15px;
  width: 8vw;
  background-color: #333;
  color: #ddd;
  border-radius: 8px;
  cursor: pointer;
  margin: 2vw;
}
</style>
