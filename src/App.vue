<template>
  <div id="app">
    <SongDetial class="songDetial" />
    <div>
      <router-view />
      <Footer />
    </div>
  </div>
</template>
 <script>
import MusicMixins from "./store/mixins";
import Footer from "./components/common/footer";
import SongDetial from "./views/songDetial";
export default {
  mixins: [MusicMixins],
  components: {
    Footer,
    SongDetial
  },
  mounted() {
    // this.setplayState(false);
    // this.setfullScreen(false);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  let fontSize = window.innerWidth / 10; /* 根据屏幕宽度计算fontsize */
  fontSize =
    fontSize > 50
      ? 50
      : fontSize; /* 这一步是为了当fontsize尺寸大于50的时候，就保持在50 */
  html.style.fontSize =
    fontSize + "px"; /* 给html设置fontsize，然后页面根据它设置rem单位 */
});
</script>
<style lang="scss">
@import "../src/assets/font/font.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
}
</style>
