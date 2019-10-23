<template>
  <div class="register">
    <h1>Register</h1>
    <Register v-on:register="register" />
  </div>
</template>

<script>
import Register from "../components/Register";
import axios from "axios";

export default {
  name: "RegistrationPage",
  components: {
    Register
  },
  methods: {
    register(user) {
      axios
        .post("http://localhost:5000/registration", user)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this compm onent only -->
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
