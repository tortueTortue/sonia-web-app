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
          <div class="control">
            <b-switch v-model="isBordered">Killswitch Top</b-switch>
          </div>
          <div class="control" @click="toggleLeftMode">
            <b-switch v-model="isLeft">Lefty</b-switch>
          </div>
          <div class="control" @click="toggleDarkMode">
            <b-switch v-model="isDark">Dark mode</b-switch>
          </div>
        </b-field>
        <br />
        <h1 class="med-text">Layouts</h1>
        <b-table
          :data="isEmpty ? [] : layouts"
          :bordered="isBordered"
          :striped="isStriped"
          :narrowed="isNarrowed"
          :hoverable="isHoverable"
          :loading="isLoading"
          :focusable="isFocusable"
        >
          <template slot-scope="props">
            <b-table-column field="layoutName" label="Name">{{ props.row.name }}</b-table-column>

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
          </template>

          <template slot="empty">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p>
                  <b-icon icon="emoticon-sad" size="is-large"></b-icon>
                </p>
                <p>Nothing here.</p>
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
    const layouts = [];

    return {
      layouts,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false
    };
  },
  methods: {
    isLayoutActive(id) {
      return this.$store.state.activeLayoutId == id;
    },
    toggleDarkMode: function() {
      this.$store.commit("toggleDarkMode");
    },
    toggleLeftMode: function() {
      this.$store.commit("toggleLeftMode");
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
        confirmText: "Delete Account",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          this.deleteLayout(id);
          this.$buefy.toast.open("Layout deleted!");
        }
      });
    }
  },
  mounted: function() {
    this.getLayouts();
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    isLeft() {
      return this.$store.state.isLeft;
    }
  }
};
</script>
<style>
.dark-mode-status{
    background-color: #b61515!important;
    color: #fff!important;
    font-weight: 600;
}
.delete-button {
  font-weight: 500 !important;
  transition: ease 0.3s;
}
.delete-button:hover {
  background-color: #750a0a !important;
  color: #fbc1c1 !important;
  transition: ease 0.3s;
}
.window-height {
  height: calc(100vh - 40px) !important;
}
.dark-mode-delete-button{
    background-color: #fff!important;
    color: #b61515!important;
    transition: ease 0.3s;
    font-weight: 700!important;
}
.dark-mode-delete-button:hover{
    background-color: #6b1e1e!important;
    border-color: #6b1e1e!important;
    color: #f3d0d0!important;
}
</style>