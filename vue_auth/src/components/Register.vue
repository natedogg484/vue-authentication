<template>
  <div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="card" id="registration-card">
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-group">
                <input
                  type="username"
                  id="username"
                  v-model="username"
                  name="username"
                  placeholder="Enter Username"
                />
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
              <button type="submit" value="Submit" class="btn btn-dark">Register</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    register() {
      const user = {
        username: this.username,
        password: this.password
      };

      // send to parent
      this.$emit("register", user);

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

#registration-card {
  background-color: mediumseagreen;
}
</style>