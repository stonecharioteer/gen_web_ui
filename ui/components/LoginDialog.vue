<template>
  <section id="login">
    <b-field label="SVN User ID" horizontal custom-class="is-small">
      <b-input label="User ID (SVN)" v-model="userID" placeholder="Enter your SVN Login ID here."></b-input>
    </b-field>
    <b-field label="SVN Password" horizontal custom-class="is-small">
      <b-input v-model="password" type="password" password-reveal></b-input>
    </b-field>
    <b-field grouped custom-class="is-small">
      <b-field expanded></b-field>
      <b-field>
        <b-switch
          v-model="isSwitched"
          type="is-warning"
          size="is-small">
          Remember Me
        </b-switch>
      </b-field>
      <b-field>
        <button class="button is-primary is-small" @click="login">Login</button>
      </b-field>
    </b-field>
  </section>
</template>

<script>
const axios = require('axios')
export default {
  data () {
    return {
      userID: null,
      password: null,
      isSwitched: true
    }
  },
  mounted () {
    // on mount check if person is returning and redirect him to another page.
  },
  methods: {
    login: function () {
      var vm = this
      axios.get(`http://localhost:5000/login?userID=${vm.userID}&password=${vm.password}`)
        .then(function (response) {
          if (response['success'] == true) {
            window.location.replace('/home')
          } else {
            vm.$snackbar.open({
              message: `Unable to login. Err: ${response['message']}`,
              type: 'is-danger'
              })

          }
        }
      )
    }
  }
}
</script>

<style scoped>
#login {
  padding: 3rem 2rem 2rem 2rem;
  margin: 0 25% 0% 25%;
  min-width: 5rem;
}
</style>