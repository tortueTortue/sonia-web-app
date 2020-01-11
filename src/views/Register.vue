<template class="about link about-layout">
  <div v-if="!isConnected" class="about link about-layout">
    <h1 class="title">Login</h1>
    <section>
      <div class="block">
        <b-radio v-model="labelPosition" native-value="on-border">On Border</b-radio>
        <b-radio v-model="labelPosition" native-value="inside">Inside</b-radio>
      </div>

      <b-field label="Name" :label-position="labelPosition">
        <b-input value="Kevin Garvey"></b-input>
      </b-field>

      <b-field
        label="Email"
        :label-position="labelPosition"
        type="is-danger"
        message="This email is invalid"
      >
        <b-input type="email" value="john@" maxlength="30"></b-input>
      </b-field>

      <b-field
        label="Username"
        :label-position="labelPosition"
        type="is-success"
        message="This username is available"
      >
        <b-input value="johnsilver" maxlength="30"></b-input>
      </b-field>

      <b-field
        label="Password"
        :label-position="labelPosition"
        type="is-warning"
        :message="['Password is too short', 'Password must have at least 8 characters']"
      >
        <b-input value="123" type="password" maxlength="30"></b-input>
      </b-field>

      <b-field label="Subject" :label-position="labelPosition">
        <b-select placeholder="Select a subject">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </b-select>
      </b-field>

      <b-field label="Message" :label-position="labelPosition">
        <b-input maxlength="200" type="textarea"></b-input>
      </b-field>

      <hr />
      <p class="title is-6">Also works for grouped field and with addons.</p>

      <b-field label="Search..." :label-position="labelPosition" grouped>
        <b-input placeholder="Search..." type="search"></b-input>
        <p class="control">
          <b-button class="button is-primary">Search</b-button>
        </p>
      </b-field>

      <b-field label="Search..." :label-position="labelPosition">
        <b-input placeholder="Search..." type="search"></b-input>
        <p class="control">
          <b-button class="button is-primary">Search</b-button>
        </p>
      </b-field>
    </section>
  </div>
  <div v-else></div>
</template>
<script>
export default {
  methods: {
    async accountConnectionAttempt(username, password) {
      return this.$store.accountManager.accountConnectionAttempt(
        username,
        password
      );
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
