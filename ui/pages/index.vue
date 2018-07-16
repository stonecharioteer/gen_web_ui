<template>
  <section class="container">
    <div v-if="!isAuthenticated">
      <app-logo/>
      <login-dialog/>
      
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import LoginDialog from '~/components/LoginDialog.vue'
export default {
  components: {
    AppLogo,
    LoginDialog
  },
  data () {
    return {
      isAuthenticated: false
    }
  },
  mounted () {
    console.log("Index mounted.")
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
