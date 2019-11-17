<template>
  <div class="window-height" :class="{'dark-mode': isDark}">
    <div class="columns is-gapless">
      <div class="column is-12 space"></div>
    </div>
    <div class="columns is-gapless">
      <div class="column is-2"></div>
      <section class="column is-8">
        <div class="settings">
          <h1 class="big-text">Settings</h1>
          <br />
        </div>
        <h1 class="med-text">Options</h1>
        <br />
        <b-field grouped group-multiline>
          <div class="control" @click="toggleKillswitch">
            <b-switch v-model="isKillswitchUp">Killswitch Top</b-switch>
          </div>
          <div class="control" @click="toggleLeftMode">
            <b-switch v-model="isLeft">Lefty</b-switch>
          </div>
          <div class="control" @click="toggleDarkMode">
            <b-switch v-model="isDark">Dark mode</b-switch>
          </div>
        </b-field>
        <br />
        <div>
          <h1 class="med-text inline align-middle-y">Layouts</h1>
          <button
            @click="toggleEditMode"
            class="button small-margin-x is-small align-middle-y inline"
            :class="isDark ? 'color-none' : 'light-color-none'"
          >
            <b-icon icon="square-edit-outline"></b-icon>
          </button>
        </div>
        <br />
        <b-table :data="isEmpty ? [] : layouts">
          <template slot-scope="props">
            <b-table-column field="layoutName" label="Name">
              <span v-if="!isEditMode">
                <button
                  @click="setLayout(props.row)"
                  class="button color-none is-small"
                  :class="isDark ? '' : 'light-color-none'"
                >
                  <b-icon class icon="table-large-plus"></b-icon>
                </button>
                {{ props.row.name }}
              </span>
              <b-field v-else>
                <b-input class="settings-input" :id="'layout'+props.row.id" :value="props.row.name"></b-input>
              </b-field>
            </b-table-column>

            <b-table-column field="Status" label="Status" centered>
              <span v-if="isLayoutActive(props.row.id)" class="tag is-success">Active</span>
              <span v-else :class="isDark? 'dark-mode-status' : 'is-danger'" class="tag">Inactive</span>
            </b-table-column>

            <b-table-column field="Option" label="Option" centered>
              <button
                @click="confirmDelete(props.row.id)"
                class="button is-danger is-small"
                :class="isDark ? 'dark-mode-delete-button' : 'delete-button'"
              >Delete</button>
            </b-table-column>

            <b-table-column field="Option" label="Edit" centered>
              <button
                v-if="isEditMode"
                @click="rename(props.row.id)"
                class="button is-small color-none"
                :class="isDark ? 'color-none' : 'light-color-none'"
                v-popover:tooltip="'Save'"
              >
                <b-icon icon="content-save" v-popover:tooltip="'Save'"></b-icon>
              </button>
              <button
                v-if="isEditMode"
                @click="toggleEditMode"
                class="button is-small color-none"
                :class="isDark ? 'color-none' : 'light-color-none'"
              >
                <b-icon icon="close-box-multiple"></b-icon>
              </button>
            </b-table-column>
          </template>

          <template slot="empty">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p>
                  <b-icon icon="emoticon-sad" size="is-large"></b-icon>
                </p>
                <p>There is no layouts.</p>
              </div>
            </section>
          </template>
        </b-table>
      </section>
      <div class="column is-2"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "settings",
  data() {
    const layouts = [
      { name: "Dummy iPad layout", id: 1 },
      { name: "Dummy Desktop layout", id: 2 },
      { name: "Dummy iPhone layout", id: 3 }
    ];

    return {
      layouts,
      isEmpty: false,
      isLoading: false,
      isEditMode: false,
      fullscreen: false,
      isLeft: this.$store.state.isLeft,
      isDark: this.$store.state.isDark,
      isKillswitchUp: this.$store.state.isKillswitchUp
    };
  },
  methods: {
    isLayoutActive(id) {
      return this.$store.state.moduleManager.activeLayoutId == id;
    },
    toggleDarkMode: function() {
      this.$store.commit("toggleDarkMode");
    },
    toggleLeftMode: function() {
      this.$store.commit("toggleLeftMode");
    },
    toggleKillswitch: function() {
      this.$store.commit("toggleKillswitch");
    },
    toggleEditMode: function() {
      this.isEditMode = !this.isEditMode;
    },
    rename(id) {
      axios
        .patch(this.$store.state.be_api_url + "/api/layout/" + id + "/", {
          name: document.getElementById("layout" + id).value
        })
        .then(response => {
          console.log("Response : " + response);
          this.getLayouts();
          if (response.status == 200) this.$buefy.toast.open("Layout renamed!");
        })
        .catch(function(error) {
          console.log(error);
        })
        .finally(function() {
          console.log("Done.");
        });
    },
    async getLayouts() {
      axios
        .get(this.$store.state.be_api_url + "/api/layout/")
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
    },
    async deleteLayout(id) {
      axios
        .delete(this.$store.state.be_api_url + "/api/layout/" + id + "/")
        .then(response => {
          console.log("Response : " + response);
          this.getLayouts();
        })
        .catch(function(error) {
          console.log(error);
        })
        .finally(function() {
          console.log("Done.");
        });
    },
    confirmDelete(id) {
      this.$buefy.dialog.confirm({
        title: "Deleting Layout",
        message:
          "Are you sure you want to <b>delete</b> this layout? You won`t be able to get it back if you do this.",
        confirmText: "Delete Layout",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          this.deleteLayout(id);
          this.$buefy.toast.open("Layout deleted!");
        }
      });
    },
    setLayout(layout) {
      this.confirmLayout(layout);
    },
    confirmLayout(layout) {
      this.$buefy.dialog.confirm({
        title: "Setting Layout",
        message:
          "Are you sure you want to <b>set</b> this layout? " + layout.name,
        confirmText: "Add Layout",
        type: "is-success",
        hasIcon: true,
        onConfirm: () => {
          this.$store.commit("loadLayout", layout.id);
          this.$buefy.toast.open("Layout loaded!");
        }
      });
    }
  },
  mounted: function() {
    this.getLayouts();
  }
};
</script>
<style>
@import "../assets/stylesheets/settings.css";
</style>