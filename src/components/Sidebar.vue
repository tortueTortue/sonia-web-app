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
              v-for="mod in moduleRepertory"
              v-bind:key="mod.id"
              :icon="mod.icon"
              :label="mod.name"
              @click="toggleModule(mod.id)"
            ></b-menu-item>
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

<script >
import axios from "axios";

export default {
  name: "sidebar",
  data() {
    const modules = [];

    return {
      isActive: true,
      modules
    };
  },
  methods: {
    login: function() {
      // Opens a vue with a login and a signup page
    },
    logout: function() {
      // Logs user out
    },
    saveLayout: function() {
      console.log("Prompt save layout window");
      this.promptSaveLayoutAlert();
    },
    promptSaveLayoutAlert() {
      this.$buefy.dialog.prompt({
        message: `Give the layout a name.`,
        inputAttrs: {
          placeholder: "e.g. iPad layout",
          maxlength: 20
        },
        trapFocus: true,
        onConfirm: value => {
          this.saveLayoutInDb(value);
          this.$buefy.toast.open(`Saving layout : ${value}`);
        }
      });
    },
    saveLayoutInDb(layoutName) {
      console.log("Let's save this layout "+ layoutName + " in the database.");
      this.$store.commit("saveLayout", layoutName);

    },
    toggleModule(id) {
      console.log("Toggling module of this id : " + (id-1));
      this.$store.commit("toggleModule", id);
    }
  },
  computed: {
    moduleRepertory() {
      return this.$store.state.moduleManager.moduleRepertory;
    },
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    },
    isDark() {
      return this.$store.state.isDark;
    },
    isSignedIn() {
      return this.$store.state.isSignedIn;
    }
  }
};
</script>
<style scoped>
.height-full-screen-sidebar {
  height: 100vh !important;
}
</style>