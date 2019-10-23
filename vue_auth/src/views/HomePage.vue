<template>
  <div class="home">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <p>Basic authentication app. If there is no ability to login then you can use the registration link to create your own login.</p>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login";
import axios from "axios";

export default {
  name: "HomePage",
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
