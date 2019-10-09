<template>
  <div class="content">
    <b-navbar :class="{'dark-mode-navbar': isDark}">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
         <!-- <img :src=" isDark ? darkLogo : lightLogo" alt="Sonia logo" /> -->
         <img v-if="!isDark" src="./assets/logo_color.png" alt="Sonia logo" />
         <img v-else src="./assets/logo_white.png" alt="Sonia logo" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item :class="{'text-white': isDark}" tag="router-link" :to="{ name: 'home' }">Home</b-navbar-item>
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
      isDark: false,
      lightLogo : './assets/logo_white.png',
      darkLogo : './assets/logo_color.png'
    }
  },
  methods:{
    toggleDarkMode: function(){
      console.log("Dark mode is "+!this.isDark);
      this.isDark = !this.isDark
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
.text-white{
  color: #fff!important;
}
label.text-white{
  color:  #fff;
}

</style>



