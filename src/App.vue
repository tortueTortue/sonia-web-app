<template>
  <fullscreen ref="fullscreen" @change="fullscreenChange">
    <div>
      <section class="section no-padding">
        <Header />
      </section>
      <section class="section no-padding">
        <Sidebar />
      </section>
      <section class="section no-padding">
        <router-view></router-view>
      </section>
    </div>
  </fullscreen>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
import Fullscreen from 'vue-fullscreen/src/component.vue';
@Component({
  components: {
    Header,
    Sidebar,
    Fullscreen,
  },
})
export default class App extends Vue {
  public lightLogo = require('./assets/logo_white.png');
  public darkLogo = require('./assets/logo_color.png');

  public fullscreenChange(fullscreen: boolean) {
    if (fullscreen !== this.isFullscreen) {
      this.$store.commit('toggleFullscreen');
    }
  }
  get isFullscreen() {
    return this.$store.state.isFullscreen;
  }
  get isSidebarOpen() {
    return this.$store.state.isSidebarOpen;
  }
  get isDark() {
    return this.$store.state.isDark;
  }
  get isLeft() {
    return this.$store.state.isLeft;
  }
  @Watch('isFullscreen')
  public toggle() {
    // @ts-ignore
    this.$refs.fullscreen.toggle();
  }
}
</script>

<style>
html {
  overflow: hidden !important;
  background-color: #081b33 !important;
}
.no-padding {
  padding: 0 !important;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.hover-dark:hover {
  background-color: rgb(3, 16, 32) !important;
}
.hover-light:hover {
  background-color: rgb(164, 216, 247) !important;
}
.hidden {
  display: none !important;
  transition: display 0.5s ease;
}
.blue {
  background-color: #081b33 !important;
}
.dark-mode {
  background-color: #081b33 !important;
  color: #fff !important;
}
.dark-mode a {
  color: #fff !important;
}
.dark-mode a:hover {
  color: rgb(0, 0, 0) !important;
}
.dark-mode table {
  background-color: #0a3366 !important;
  border-color: #07274e !important;
  color: #fff !important;
}
.dark-mode thead {
  background-color: #07274e !important;
  border-color: #07274e !important;
}
.dark-mode thead th {
  color: #fff !important;
}
#text-white {
  color: #fff !important;
}
.text-white {
  color: #fff !important;
}
.text-white:hover {
  color: #000000 !important;
}
label.text-white {
  color: #fff;
}
ul.sidebar {
  list-style: none !important;
}
.sidebar {
  font-size: 1.2rem !important;
}
.sidebar-container {
  height: calc(100vh - 50px) !important;
  transition: width 1s ease-in-out 0.5s !important;
}
.margin-down-null {
  margin-bottom: 0% !important;
}
.height-full-screen {
  height: calc(100vh - 50px) !important;
}
.big-text {
  font-size: 2.4rem !important;
}
.med-text {
  font-size: 1.9rem !important;
}
.space {
  height: 20px !important;
}
.padding-null {
  padding: 0% !important;
}
.div-full-width {
  width: 100% !important;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  /* transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  transform: translateX(17px);
  opacity: 0.1;
}
.slide-fade-leave-to {
  transform: translateX(-17px);
  opacity: 0.1;
}
.color-none {
  background-color: transparent !important;
  border-color: transparent !important;
  color: #fff !important;
  transition: ease 0.2s;
}
.color-none :hover {
  background-color: transparent !important;
  border-color: transparent !important;
  color: rgb(119, 119, 126) !important;
  transition: ease-out 0.3s;
}
.light-color-none {
  background-color: transparent !important;
  border-color: transparent !important;
  color: rgb(8, 49, 97) !important;
  transition: ease 0.2s;
}
.light-color-none :hover {
  background-color: transparent !important;
  border-color: transparent !important;
  color: rgb(59, 59, 85) !important;
  transition: ease-out 0.3s;
}
</style>
