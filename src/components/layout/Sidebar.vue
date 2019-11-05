<template>
  <div
    :class="{'hidden' : !isSidebarOpen, 'dark-mode': isDark}"
    class="sidebar-container column is-2 height-full-screen-sidebar"
  >
    <template>
      <b-menu class="sidebar" :class="{'dark-mode': isDark}">
        <b-menu-list :id="{'text-white': isDark}">
          <b-menu-item
            icon="window-maximize"
            :active="!isActive"
            :expanded="!isActive"
            @click="isActive = !isActive"
          >
            <template slot="label" slot-scope="props">
              Modules
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
            </template>
            <b-menu-item
              v-for="module in modules"
              v-bind:key="module.id"
              :icon="module.icon"
              :label="module.name"
            ></b-menu-item>
            <b-menu-item icon="account" label="Missions"></b-menu-item>
            <b-menu-item icon="cellphone-link">
              <template slot="label">Thrusters</template>
            </b-menu-item>
            <b-menu-item icon="cash-multiple" label="Camera" disabled></b-menu-item>
          </b-menu-item>
          <b-menu-item icon="account" label="My Account">
            <b-menu-item label="Account data"></b-menu-item>
            <b-menu-item label="Addresses"></b-menu-item>
          </b-menu-item>
        </b-menu-list>
        <b-menu-list>
          <b-menu-item icon="content-save" label="Save Layout" @click="saveLayout"></b-menu-item>
        </b-menu-list>
        <b-menu-list>
          <b-menu-item
            icon="settings"
            label="Settings"
            tag="router-link"
            :to="{ name: 'settings' }"
          ></b-menu-item>
        </b-menu-list>
        <b-menu-list>
          <b-menu-item
            @click="isSignedIn ? logout : login"
            :label="isSignedIn ? 'Logout' : 'Login / Sign up'"
          ></b-menu-item>
        </b-menu-list>
      </b-menu>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { ModuleInformation } from './../../types';

@Component
export default class Sidebar extends Vue {
  public modules: ModuleInformation[] = [
    { icon: 'map', name: 'Map', id: 1 },
    { icon: 'depth', name: 'depth', id: 2 },
    { icon: 'car', name: 'motors', id: 3 },
  ];
  public isActive = true;

  public login() {
    // Opens a vue with a login and a signup page
  }
  public logout() {
    // Logs user out
  }
  public saveLayout() {
    this.promptSaveLAyoutAlert();
  }
  public promptSaveLAyoutAlert() {
    this.$buefy.dialog.prompt({
      message: 'Give the layout a name.',
      inputAttrs: {
        placeholder: 'e.g. iPad layout',
        maxlength: 20,
      },
      trapFocus: true,
      onConfirm: (value) => {
        this.saveLayouts(value);
        this.$buefy.toast.open('Saving layout : ${value}');
      },
    });
  }
  public saveLayouts(layoutName: string) {
    axios
      .post(this.$store.state.be_api_url + '/api/layout/', {
        name: layoutName,
      })
      .then((response) => {
        alert('Response : ' + response);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        alert('Layout saved');
      });
  }
  get isSidebarOpen() {
    return this.$store.state.isSidebarOpen;
  }
  get isDark() {
    return this.$store.state.isDark;
  }
  get isSignedIn() {
    return this.$store.state.isSignedIn;
  }
}
</script>

<style scoped>
.height-full-screen-sidebar {
  height: 100vh !important;
}
</style>
