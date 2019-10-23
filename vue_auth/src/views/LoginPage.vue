<template>
  <div class="login">
    <h1>Login</h1>
    <Login v-on:login="login" />
  </div>
</template>

<script>
import Login from "../components/Login";
import axios from "axios";

export default {
  name: "LoginPage",
  components: {
    Login
  },
  methods: {
    login(user) {
      axios
        .post("http://localhost:5000/login", user)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this compmonent only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
