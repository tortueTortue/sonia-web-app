<template class="about link about-layout">
  <div v-if="isConnected" class="about link about-layout">
    <h1 class="title">Login</h1>
    <section>
      <b-checkbox v-model="hasError">Show errors</b-checkbox>

      <b-field label="Username" :message="{ 'Username is not available': hasError }">
        <b-input value="johnsilver" maxlength="30"></b-input>
      </b-field>

      <b-field
        label="Password"
        :message="[
                { 'Wrong password or username': hasError }
            ]"
      >
        <b-input value="123" type="password" maxlength="30"></b-input>
      </b-field>
    </section>
  </div>
  <div v-else>
      <h2> You are already connected </h2>
      <button name="Logout"> </button>
  </div>
</template>
<script>
export default {
  methods: {
      async accountConnectionAttempt(username, password){
          return this.$store.accountManager.accountConnectionAttempt(username, password);
      }
  },
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    }
  }
};
</script>
<style scoped>
.title {
  font-size: 2rem !important;
  color: #fff !important;
}
.link a {
  text-decoration-line: underline !important;
  color: rgb(213, 232, 248) !important;
  font-size: 1.2rem !important;
}
.link a:hover {
  color: rgb(113, 191, 255) !important;
}
.about-layout {
  padding: 20px !important;
}
</style>
