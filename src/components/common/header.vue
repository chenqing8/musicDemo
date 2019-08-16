<template>
  <div class="Header" :style="{'background':bg || '#fff','color':color||'#000'}">
    <div class="header-warper">
      <slot></slot>
    </div>
    <span class="play" @click="goSongDetial" v-if="playList.length>0">
      <span class="line line1" :class="playState?'animation1':''"></span>
      <span class="line line2" :class="playState?'animation2':''"></span>
      <span class="line line3" :class="playState?'animation3':''"></span>
      <span class="line line4" :class="playState?'animation4':''"></span>
    </span>
  </div>
</template>
<script>
import MusicMixins from "../../store/mixins";
export default {
  name: "Header",
  mixins: [MusicMixins],
  props: ["bg", "color"],
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    goSongDetial() {
      this.setfullScreen(true);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.Header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  padding: 7px 14px;
  display: flex;
  align-items: center;
  z-index: 100;
  .header-warper {
    flex: 1;
  }
  .play {
    display: inline-block;
    margin-left: 15px;
    margin-bottom: 10px;
    .line {
      display: inline-block;
      width: 2px;
      background: #000;
      margin-left: 3px;
    }
    .line1 {
      height: 10px;
    }
    .line2 {
      height: 16px;
    }
    .line3 {
      height: 13px;
    }
    .line4 {
      height: 15px;
    }
  }
  .animation1 {
    animation: playing1 0.8s infinite linear;
  }
  .animation2 {
    animation: playing2 0.8s infinite linear;
  }
  .animation3 {
    animation: playing3 0.8s infinite linear;
  }
  .animation4 {
    animation: playing4 0.8s infinite linear;
  }
  @keyframes playing1 {
    0% {
      height: 10px;
    }
    50% {
      height: 16px;
    }
    100% {
      height: 10px;
    }
  }
  @keyframes playing2 {
    0% {
      height: 16px;
    }
    50% {
      height: 10px;
    }
    100% {
      height: 16px;
    }
  }
  @keyframes playing3 {
    0% {
      height: 13px;
    }
    50% {
      height: 19px;
    }
    100% {
      height: 13px;
    }
  }
  @keyframes playing4 {
    0% {
      height: 15px;
    }
    50% {
      height: 9px;
    }
    100% {
      height: 15px;
    }
  }
}
</style>
