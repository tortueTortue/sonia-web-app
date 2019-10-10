<template>
  <div class="content">
    <b-navbar :class="{'dark-mode-navbar': isDark}">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
         <img :src=" !isDark ? darkLogo : lightLogo" alt="Sonia logo" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item :class="{'text-white': isDark}" tag="router-link" :to="{ name: 'home' }">Telemetry</b-navbar-item>
        <b-navbar-item :class="{'text-white': isDark}" tag="router-link" :to="{ name: 'topics' }">Topics</b-navbar-item>
        <b-navbar-dropdown :class="{'dark-mode-navbar': isDark}" label="Info">
          <b-navbar-item tag="router-link" :to="{ name: 'about' }">About</b-navbar-item>
          <b-navbar-item href="#">Contact (NOT DONE)</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-dark" @click="toggleDarkMode">
              <strong>Dark Mode</strong>
            </a>
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      //isDark: false,
      lightLogo : require('./assets/logo_white.png'),
      darkLogo : require('./assets/logo_color.png')
    }
  },
  methods:{
    toggleDarkMode: function(){
      console.log("Dark mode is "+!this.isDark);
      //this.isDark = !this.isDark
      this.$store.commit("toggleDarkMode")
    }
  },
  computed:{
    isDark(){
      return this.$store.state.isDark;
    }
  }
};
</script>

<style>
.blue{
  background-color: #081B33!important;
}
.dark-mode{
  background-color: #081B33!important;
  color:#fff!important;
}
.dark-mode-navbar{
  background-color: #152642!important;
  color:#fff!important;
}
.dark-mode-bottom-bar{
  background: #2F4562!important;
}
.text-white{
  color: #fff!important;
}
.text-white:hover{
  color: #000000!important;
}
label.text-white{
  color:  #fff;
}

</style>



