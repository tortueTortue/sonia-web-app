<template>
  <footer :class="isDark? 'dark-mode-bottom-bar' : 'light-mode-bottom-bar'">
    <nav class="level">
      <div class="level-left">
        <button
          v-for="topic in minimizedTopics"
          :key="topic.id"
          @click="minimizeModule(topic)"
          class="button is-dark is-small is-outlined level-item"
          :class="isDark ? 'mini-wid-dark-mode-kill' : 'mini-wid-light-mode-kill'"
        >Index: {{ topic.i }}</button>
      </div>
      <div class="level-right">
        <b-button
          @click="killswitch"
          :class="[isDark ? 'dark-mode-kill' : 'light-mode-kill', {'hidden' : isKillswitchUp}]"
          class="bold md-text-size level-item"
        >
          <b-icon icon="skull"></b-icon>K I L L
          <b-icon icon="skull"></b-icon>
        </b-button>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TopicInformation } from './../../types';
@Component
export default class Footer extends Vue {
  public isMinimized = true;

  public killswitch() {
    this.promptKillswitchAlert();
  }
  public movedEvent(i: string, newX: number, newY: number) {
    this.$store.commit('setTopicPosition', {
      i,
      x: newX,
      y: newY,
    });
  }
  public resizedEvent(i: string, newH: number, newW: number) {
    this.$store.commit('setTopicSize', {
      i,
      h: newH,
      w: newW,
    });
  }
  public minimizeModule(topic: TopicInformation) {
    this.$store.commit('toggleMinimizeTopic', {
      i: topic.i,
      isMinimized: !topic.isMinimized,
    });
  }
  public promptKillswitchAlert() {
    this.$buefy.dialog.alert({
      title: 'GAME OVER',
      message: '<b>The sub died...!</b>',
      confirmText: 'Great!',
    });
  }
  get minimizedTopics() {
    return this.$store.state.topic.topicList.filter((t: TopicInformation) => {
      return t.isMinimized && t.isActive;
    });
  }
  get isDark() {
    return this.$store.state.isDark;
  }
  get isKillswitchUp() {
    return this.$store.state.isKillswitchUp;
  }
}
</script>

<style scoped>
/* TODO: Refactor and use bulma color classes instead */
.mini-wid-dark-mode-kill {
  background-color: #fff !important;
  border-color: #fff !important;
  font-weight: 700 !important;
  color: #081b33 !important;
  transition: ease 0.3s;
}
.mini-wid-dark-mode-kill:hover {
  background-color: #174885 !important;
  border-color: #174885 !important;
  font-weight: 700 !important;
  color: #e0e9f5 !important;
}
.mini-wid-light-mode-kill {
  background-color: #183b66 !important;
  border-color: #183b66 !important;
  font-weight: 700 !important;
  color: #fff !important;
  transition: ease 0.3s;
}
.mini-wid-light-mode-kill:hover {
  background-color: #174885 !important;
  border-color: #174885 !important;
  font-weight: 700 !important;
  color: #e0e9f5 !important;
}
.light-mode-kill {
  background-color: #e01e1e !important;
  color: rgb(250, 242, 242) !important;
  transition: ease 0.3s;
}
.light-mode-kill:hover {
  background-color: #750a0a !important;
  color: #140606 !important;
}
.dark-mode-kill {
  background-color: #fff !important;
  color: #720606 !important;
  transition: ease 0.3s;
}
.dark-mode-kill:hover {
  background-color: #250b0b !important;
  border-color: #250b0b !important;
  color: #f3d0d0 !important;
}
.dark-mode-bottom-bar {
  background: #2f4562 !important;
}
.light-mode-bottom-bar {
  background-color: rgb(241, 241, 241) !important;
}
</style>
