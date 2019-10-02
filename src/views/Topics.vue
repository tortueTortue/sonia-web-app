<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Topics page</h1>
        <h2 class="subtitle">Rostopic configurations (Currently displaying topic positions)</h2>
        <!-- Main container -->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <b-table :data="topicList" :columns="columns"></b-table>
            </div>
          </div>

          <!-- Right side -->
          <div class="level-right">
            <p class="level-item">
              <strong>All</strong>
            </p>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      columns: [
        {
          field: "i",
          label: "Topic"
        },
        {
          field: "x",
          label: "X",
          width: "40",
          numeric: true
        },
        {
          field: "y",
          label: "Y",
          width: "40",
          numeric: true
        },
        {
          field: "w",
          label: "W",
          width: "40",
          numeric: true
        },
        {
          field: "h",
          label: "H",
          width: "40",
          numeric: true
        },
        {
          field: "active",
          label: "Active"
        }
      ]
    };
  },
  computed: {
    topicList() {
      return this.$store.state.topic.topicList;
    }
  }
};
</script>

<style>
</style>