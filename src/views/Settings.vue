<template>
  <div>
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
          <div class="control">
            <b-switch v-model="isStriped">Lefty</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="hasMobileCards">Dark mode</b-switch>
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
          :mobile-cards="hasMobileCards"
        >
          <template slot-scope="props">
            <b-table-column field="layoutName" label="Name">{{ props.row.name }}</b-table-column>

            <b-table-column field="date" label="Active" centered>
              <span v-if="isLayoutActive(props.row.id)" class="tag is-success">active</span>
              <span v-else class="tag is-danger">inactive</span>
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
    const layouts = [
      {
        id: 1,
        name: "Jesse"
      },
      {
        id: 2,
        name: "John"
      },
      {
        id: 3,
        name: "Tina"
      },
      {
        id: 4,
        name: "Clarence"
      },
      {
        id: 5,
        name: "Anne"
      }
    ];

    return {
      layouts,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true
    };
  },
  methods: {
    isLayoutActive(id) {
      return this.$store.state.activeLayoutId == id;
    },
    getLayouts() {
      axios
        .get(this.$store.state.be_api_url + "/api/layout/")
        .then(function(response) {
          console.log("Response : "+ response.isEmpty);
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
  mounted: function() {
    this.getLayouts();
  }
};
</script>