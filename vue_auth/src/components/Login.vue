<template>
  <div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 text-center">
        <div class="card" id="login-card">
          <div class="card-body text-center" id="login-space">
            <form @submit.prevent="login">
              <div class="form-group">
                <input
                  type="username"
                  id="username"
                  v-model="username"
                  name="username"
                  placeholder="Enter Username"
                />
                <small
                  id="emailHelp"
                  class="form-text"
                >We'll never share your information with anyone else.</small>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" value="Submit" class="btn btn-dark">Submit</button>
            </form>
            <router-link to="/register">Don't have an account? Click here to register.</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      const user = {
        username: this.username,
        password: this.password
      };

      // send to parent
      this.$emit("login", user);

      this.username = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
input[type="username"] {
  flex: 10;
  padding: 5px;
  width: 60%;
}

input[type="password"] {
  flex: 10;
  padding: 5px;
  width: 60%;
}

input[type="submit"] {
  flex: 2;
}

#login-card {
  background-color: mediumseagreen;
}

a {
  color: purple;
}
</style>