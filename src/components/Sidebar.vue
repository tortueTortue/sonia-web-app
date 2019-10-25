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
              Widgets
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
            </template>
            <b-menu-item icon="account" label="Missions"></b-menu-item>
            <b-menu-item icon="cellphone-link">
              <template slot="label" slot-scope="props">
                Thrusters
                <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                  <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                  <b-dropdown-item aria-role="listitem">Left</b-dropdown-item>
                  <b-dropdown-item aria-role="listitem">Front</b-dropdown-item>
                  <b-dropdown-item aria-role="listitem">Right</b-dropdown-item>
                </b-dropdown>
              </template>
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

<script >
import axios from "axios";

export default {
  name: "sidebar",
  data() {
    return {
      isActive: true
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
      console.log("here");
      this.promptSaveLAyoutAlert();
    },
    promptSaveLAyoutAlert() {
      this.$buefy.dialog.prompt({
        message: `Give the layout a name.`,
        inputAttrs: {
          placeholder: "e.g. iPad layout",
          maxlength: 20
        },
        trapFocus: true,
        onConfirm: value => {
          this.saveLayouts(value);
          this.$buefy.toast.open(`Saving layout : ${value}`);
        }
      });
    },
    async saveLayouts(layoutName) {
      axios
        .post(this.$store.state.be_api_url + "/api/layout/", {
          name: layoutName
        })
        .then(response => {
          console.log("Response : " + response);
          this.layouts = response.data || "";
        })
        .catch(function(error) {
          console.log(error);
        })
        .finally(function() {
          console.log("Done.");
        });
    }
  },
  computed: {
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