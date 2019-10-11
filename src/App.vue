<template>
  <div class="content columns is-gapless">
    <div :class="{'hidden' : isHidden }" class="column is-one-fifth">
        <template>
          <b-menu>
              <b-menu-list label="Menu">
                  <b-menu-item icon="information-outline" label="Info"></b-menu-item>
                  <b-menu-item
                      icon="settings"
                      :active="isActive"
                      :expanded="isActive"
                      @click="isActive = !isActive">
                      <template slot="label" slot-scope="props">
                          Administrator
                          <b-icon
                              class="is-pulled-right"
                              :icon="props.expanded ? 'menu-down' : 'menu-up'">
                          </b-icon>
                      </template>
                      <b-menu-item icon="account" label="Users"></b-menu-item>
                      <b-menu-item icon="cellphone-link">
                          <template slot="label" slot-scope="props">
                              Devices
                              <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                              <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                                  <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                                  <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                                  <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                              </b-dropdown>
                          </template>
                      </b-menu-item>
                      <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
                  </b-menu-item>
                  <b-menu-item icon="account" label="My Account">
                      <b-menu-item label="Account data"></b-menu-item>
                      <b-menu-item label="Addresses"></b-menu-item>
                  </b-menu-item>
              </b-menu-list>
              <b-menu-list>
                  <b-menu-item
                      label="Expo"
                      icon="link"
                      tag="router-link"
                      target="_blank"
                      to="/expo">
                  </b-menu-item>
              </b-menu-list>
              <b-menu-list label="Actions">
                  <b-menu-item label="Logout"></b-menu-item>
              </b-menu-list>
          </b-menu>
      </template>
    </div>
    <div class="column"> 
        <b-navbar :class="{'dark-mode-navbar': isDark}">   
          <template slot="brand" >
            <b-navbar-item :class="{'hover-dark': isDark,'hover-light': !isDark}"  tag="router-link" :to="{ path: '/' }">
              <img @click="toggleSideBar" :src=" !isDark ? darkLogo : lightLogo" alt="Sonia logo" />
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
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data: function() {
    return {
      lightLogo : require('./assets/logo_white.png'),
      darkLogo : require('./assets/logo_color.png'),
      isHidden : true,
      isActive: true
    }
  },
  methods:{
    toggleDarkMode: function(){
      console.log("Dark mode is "+!this.isDark);
      //this.isDark = !this.isDark
      this.$store.commit("toggleDarkMode")
    },
    toggleSideBar: function(){
      console.log("here")
      this.isHidden = !this.isHidden
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
.hover-dark:hover{
  background-color: rgb(3, 16, 32)!important;
}
.hover-light:hover{
  background-color: rgb(164, 216, 247)!important;
}
.hidden{
  display: none!important;
}
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



