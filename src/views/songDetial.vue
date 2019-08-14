<template>
  <div class="songDetial" v-if="songData">
    <div v-if="fullScreen">
      <div class="bgParent">
        <div
          class="bg"
          :style="{'background-image':'url('+songData.CD+')','backgroundSize': '100% 100%', 'filter': 'blur(15px)'}"
        ></div>
        <div class="bgShadow" :style="{'background': 'rgba(150,150,150,.4)'}"></div>
      </div>
      <div class="songDetial_warper">
        <div class="header_warper">
          <span class="iconfont icon" @click="goBack">&#xe641;</span>
          <div class="title_warper">
            <span class="title">{{songData.songname}}</span>
            <span class="author">{{songData.authorname}}</span>
          </div>
          <span class="iconfont icon">&#xe60f;</span>
        </div>
        <div v-show="!lrcState" @click="lrcState=true" class="CD_warper">
          <img class="pointer" src="../assets/img/needle-ip6.png" alt />
          <div :class="CDbox">
            <img class="CD" :src="songData.CD" alt />
          </div>
        </div>
        <div v-show="lrcState" @click="lrcState=false" class="lrc_warper">
          <pre class="lrcText">
          {{songData.lrc}}
        </pre>
        </div>
        <div class="menu_warper">
          <span class="iconfont icon">&#xe60a;</span>
          <span class="iconfont icon">&#xe628;</span>
          <span class="iconfont icon">&#xe600;</span>
          <span class="iconfont icon">&#xe6d3;</span>
          <span class="iconfont icon">&#xe634;</span>
        </div>
        <div class="songPro_warper">
          <span class="time">{{timeFormat(currentTime)}}</span>
          <input
            class="range"
            type="range"
            min="0"
            max="100"
            step="1"
            :style="{'background-image': 'linear-gradient(90deg, #fff 10%, #999 90%)'}"
          />
          <span class="time">{{jsDateTimeFormat(songData.dt)}}</span>
        </div>
        <div class="songMenu_warper">
          <span class="iconfont icon">&#xe66d;</span>
          <span class="iconfont icon" @click="perSong(playIndex)">&#xe78a;</span>
          <span class="iconfont play" @click="playing">{{playIcon}}</span>
          <span class="iconfont icon" @click="nextSong(playIndex)">&#xe7a5;</span>
          <span class="iconfont icon" @click="setsongListState(true)">&#xe737;</span>
        </div>
        <SideUp>
          <SongList :playlist="playList" :playindex="playIndex" v-if="songListState"></SongList>
        </SideUp>
      </div>
    </div>
    <audio ref="audio" :src="songData.url" @timeupdate="timeUpData"></audio>
  </div>
</template>

<script>
import MusicMixins from "../store/mixins";
import FadeIn from "../components/transition/fadeIn";
import SideUp from "../components/transition/sideUp";
import SongList from "../components/song/songlist";
export default {
  name: "songDetial",
  mixins: [MusicMixins],
  data() {
    return {
      lrcState: false,
      currentTime: 0
    };
  },
  components: {
    FadeIn,
    SongList,
    SideUp
  },
  computed: {
    playIcon() {
      return this.playState ? "\ue670" : "\ue626";
    },
    songData() {
      return this.playList[this.playIndex];
    },
    CDbox() {
      return this.playState ? "CDbox rotate" : "CDbox";
    }
  },
  methods: {
    playing() {
      if (this.playState) {
        this.$refs.audio.pause();
        this.setplayState(false);
      } else {
        this.$refs.audio.play();
        this.setplayState(true);
      }
    },
    goBack() {
      this.setfullScreen(false);
    },
    perSong(id) {
      if (this.playIndex === 0) {
        id = this.playList.length;
      }
      localStorage.setItem("playIndex", --id);
      this.setplayIndex(--id);
    },
    nextSong(id) {
      if (this.playIndex === this.playList.length - 1) {
        id = -1;
      }
      localStorage.setItem("playIndex", ++id);
      this.setplayIndex(++id);
    },
    timeUpData(e) {
      this.currentTime = e.target.currentTime;
    },
    add0(nums) {
      let length = nums.toString().length;
      if (length < 2) {
        return `0${nums}`;
      } else {
        return nums;
      }
    },
    jsDateTimeFormat(currentTime) {
      let Datat = new Date(currentTime);
      let min = Datat.getMinutes();
      let sec = Datat.getSeconds();
      return `${this.add0(min)}:${this.add0(sec)}`;
    },
    timeFormat(currentTime) {
      let min = Math.floor(currentTime / 60) % 60;
      let sec = parseInt(currentTime % 60);
      return `${this.add0(min)}:${this.add0(sec)}`;
    }
  },
  watch: {
    fullScreen() {
      this.lrcState = false;
    },
    playIndex(now) {
      if (this.playState) {
        this.$nextTick(() => {
          this.$refs.audio.play();
          this.setplayState(true);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes CDRotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.songDetial {
  width: 100%;
  height: 100%;
  .bgParent {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 101;
    .bg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform: scale(2.2);
      -moz-transform: scale(2, 2);
      -webkit-transform: scale(2, 2);
      -o-transform: scale(2, 2);
      background-size: 100% 100%;
      background-origin: center;
      z-index: 100;
    }
    .bgShadow {
      position: absolute;
      top: 0px;
      right: 0;
      left: 0;
      bottom: 0;

      z-index: 102;
    }
  }
  .songDetial_warper {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 7px 14px;
    color: #fff;
    z-index: 102;
    overflow: hidden;
    .header_warper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 7px;
      padding-top: 7px;
      .title_warper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          font-size: 16px;
        }
        .author {
          font-size: 12px;
        }
      }
    }
    .CD_warper {
      flex: 1;
      position: relative;
      .pointer {
        position: absolute;
        top: 0;
        left: 160px;
        height: 36%;
        z-index: 102;
      }
      .CDbox {
        position: absolute;
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        width: 300px;
        height: 300px;
        background-image: url("../assets/img/disc-ip6.png");
        background-size: 100% 100%;
      }
      .rotate {
        animation: CDRotate 15s infinite linear;
      }
      .CD {
        width: 185px;
        height: 185px;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 31%);
        left: calc(50% - 31%);
      }
    }
    .lrc_warper {
      flex: 1;
      overflow: auto;
      padding: 14px 0;
      .lrcText {
        font-size: 12px;
        color: #eee;
        text-align: center;
        line-height: 26px;
      }
    }
    .menu_warper {
      display: flex;
      justify-content: space-between;
      padding: 17px 7px;
      .icon {
        font-size: 20px;
      }
    }
    .songPro_warper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .time {
        font-size: 12px;
        color: #eee;
      }
      .range {
        flex: 1;
        margin: 0 7px;
      }
      input[type="range"] {
        -webkit-appearance: none;
        outline: none;
        height: 1px;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 8px;
        width: 8px;
        border-radius: 8px;
        background: #fff;
        cursor: pointer;
      }
      input[type="range"]::-moz-range-thumb {
        height: 8px;
        width: 8px;
        border-radius: 8px;
        background: #fff;
        cursor: pointer;
      }
      input[type="range"]::-ms-thumb {
        height: 8px;
        width: 8px;
        border-radius: 8px;
        background: #fff;
        cursor: pointer;
      }
    }
    .songMenu_warper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7px;
      .play {
        font-size: 45px;
      }
      .icon {
        font-size: 20px;
      }
    }
  }
}
</style>
