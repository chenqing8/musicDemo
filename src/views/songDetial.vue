<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-26 17:27:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="songDetial" v-if="songData">
      <div v-if="fullScreen">
        <div class="bgParent">
          <div
            class="bg"
            v-if="songData.CD"
            :style="{'background-image':'url('+songData.CD+')','backgroundSize': '100% 100%', 'filter': 'blur(15px)'}"
          ></div>
          <div class="bgShadow"></div>
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
            <img :class="pointer" src="../assets/img/needle-ip6.png" alt />
            <div :class="CDbox">
              <img class="CD" :src="songData.CD" alt />
            </div>
          </div>
          <div v-show="lrcState" @click="lrcState=false" class="lrc_warper">
            <div class="lrcText" ref="lyricList">
              <p
                v-for="(item,index) in lyricList"
                :key="index"
                :class="{'active':lrcIndex==index}"
                ref="lyricItem"
              >{{item.txt}}</p>
            </div>
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
              ref="range"
              min="0"
              max="100"
              step="1"
              :value="progrose"
              @change="onProgressChange($event.target.value)"
              @input="onProgressInput($event.target.value)"
            />
            <span class="time">{{jsDateTimeFormat(songData.dt)}}</span>
          </div>
          <div class="songMenu_warper">
            <span class="iconfont icon" @click="playingModel">{{modelList[playModel]}}</span>
            <span class="iconfont icon" @click="perSong(ListIndex)">&#xe78a;</span>
            <span class="iconfont play" @click="playing">{{playIcon}}</span>
            <span class="iconfont icon" @click="nextSong(ListIndex)">&#xe7a5;</span>
            <span class="iconfont icon" @click="setsongListState(true)">&#xe737;</span>
          </div>
          <SideUp>
            <SongList :playlist="playList" :playindex="playIndex" v-if="songListState"></SongList>
          </SideUp>
        </div>
      </div>
    <audio ref="audio" :src="songData.url" @timeupdate="timeUpData" @ended="ended" :loop="loop"></audio>
  </div>
</template>

<script>
import MusicMixins from "../store/mixins";
import FadeIn from "../components/transition/fadeIn";
import SideUp from "../components/transition/sideUp";
import SongList from "../components/song/songlist";
import Lyric from "lyric-parser";

export default {
  name: "songDetial",
  mixins: [MusicMixins],
  data() {
    return {
      lrcState: false /* 歌词是否显示的状态 */,
      currentTime: 0 /* 歌曲当前播放的时间 */,
      lrcIndex: 0 /* 当前歌词所在行数 */,
      lyric: null /* 歌词解析生成的对象 */,
      lyricList: [] /* 歌词 */,
      progrose: 0 /* 进度 */,
      flag: true /* 用来拖动进度条时使用 */,
      modelList: ["\ue66d", "\ue66e", "\ue66c"] /* 播放模式的图标 */,
      loop: false,
      songData: {}
    };
  },
  components: {
    FadeIn,
    SongList,
    SideUp
  },
  computed: {
    playIcon() {
      return this.playState ? '\ue670' : '\ue626';
    },
    CDbox() {
      return this.playState ? 'CDbox' : 'CDbox pause';
    },
    pointer() {
      return this.playState ? 'pointer' : 'pointer pointerrotate';
    }
  },
  methods: {
    playing() {
      if (this.playState) {
        this.$refs.audio.pause();
        this.lyric.togglePlay();
        this.setplayState(false);
      } else {
        this.$refs.audio.play();
        this.lyric.togglePlay();
        this.setplayState(true);
      }
    },
    goBack() {
      this.setfullScreen(false);
    },
    perSong(id) {
      this.lrcState = false;
      if (this.ListIndex === 0) {
        id = this.playList.length;
      }
      id = id - 1;
      let playIndex = this.playList[id].id;
      localStorage.setItem("playIndex", playIndex);
      this.setplayIndex(playIndex);
      this.setListIndex(id);
      this.setplayState(true);
    },
    nextSong(id) {
      this.lrcState = false;
      if (this.ListIndex === this.playList.length - 1 || this.ListIndex < 0) {
        id = -1;
      }
      id = id + 1;
      let playIndex = this.playList[id].id;
      localStorage.setItem("playIndex", playIndex);
      this.setplayIndex(playIndex);
      this.setListIndex(id);
      this.setplayState(true);
    },
    getLyricData() {
      if (this.lyric) {
        this.lyric.stop();
      }
      this.lyric = null;
      this.$httpget("lyric?id=" + this.playIndex).then(res1 => {
        let lyr = res1.data.lrc;
        if (!lyr) {
          return;
        } else {
          let lyrs = lyr.lyric;
          this.lyric = new Lyric(lyrs, ({ lineNum, txt }) => {
            // console.log(lineNum);
            this.lrcIndex = lineNum;
            // let titleNames = $(".lrcText>p");
            // let sTop = titleNames.eq(lineNum)[0].offsetTop;
            // $(".lrcText").animate({ scrollTop: '100px' }, 1000);
            // document.getElementsByClassName("lrcText").scrollTo='100px'
            // this.$refs.lyricList.animate({ scrollTop: "500px" }, 1000);
          });
          this.lyricList = this.lyric.lines;
          this.lyric.play();
        }
      });
    },
    range(p) {
      this.flag = false;
      this.progrose = Number(p);
      this.$refs.range.style.backgroundSize = `${this.progrose}%, 100%`;
      let time = (p / 100) * this.songData.dt;
      let audiocurenTime = time / 1000; /* audio的时间需要除以1000 */
      this.$refs.audio.currentTime = audiocurenTime;
      if (this.lyric !== null) {
        this.lyric.seek(time); /* 歌词生成的时间是js的时间戳，不用除1000 */
      }
      this.flag = true;
    },
    onProgressChange(p) {
      this.range(p);
    },
    onProgressInput(p) {
      this.range(p);
    },
    timeUpData(e) {
      this.currentTime = e.target.currentTime;
      let audioTime = (e.target.currentTime * 1000) | 0;
      if (this.flag && this.fullScreen) {
        this.progrose =
          (((e.target.currentTime * 1000) | 0) / this.songData.dt) * 100;
        this.$refs.range.style.backgroundSize = `${this.progrose}%, 100%`;
      }
    },

    /**audio自带的判断歌曲结束函数
     * @name: ended
     * @param {null}
     * @return:
     */
    ended() {
      this.nextSong(this.ListIndex);
    },
    playingModel() {
      this.loop = false;
      switch (this.playModel) {
        case 0 /* 当前是顺序播放，下一个是单曲循环 */:
          this.loop = true;
          this.setplayModel(1);
          break;
        case 1 /* 当前是单曲循环，下一个是随机播放 */:
          this.setplayModel(2);
          break;
        case 2 /* 当前是随机播放，下一个是顺序播放 */:
          this.setplayModel(0);
          break;
      }
    },
    getsongUrlData() {
      this.$httpget("song/url?id=" + this.playIndex).then(res => {
        let data = res.data.data[0];
        this.songData = {
          id: data.id /* 歌曲的id */,
          url: data.url /* 歌曲的播放地址 */,
          br: data.br /* 音质 */,
          size: data.size /* 文件大小 */,
          songname: this.playList[this.ListIndex].name /* 歌曲名字 */,
          CD: this.playList[this.ListIndex].al.picUrl /* 光盘背景 */,
          authorname: this.playList[this.ListIndex].ar[0].name /* 演唱者名字 */,
          dt: this.playList[this.ListIndex].dt /* 歌曲时长 */
        };
      });
    }
  },
  watch: {
    fullScreen() {
      this.lrcState = false;
      this.getsongUrlData();
      this.getLyricData();
    },
    playIndex() {
      // if (this.playState) {
        this.$nextTick(() => {
          this.getsongUrlData();
          this.getLyricData();
          this.$refs.audio.src=this.songData.url;
          this.$refs.audio.play();
        });
      // }
    },

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
    z-index: 121;
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
    z-index: 120;
      background: #aaa;
    }
    .bgShadow {
      position: absolute;
      top: 0px;
      right: 0;
      left: 0;
      bottom: 0;
    z-index: 121;
      background: rgba($color: #888, $alpha: 0.4);
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
    z-index: 122;
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
        z-index: 122;
        background-image: url("../assets/img/needle-ip6.png");
        background-size: 100% 100%;

      }
      .pointerrotate {
        transform-origin: 10px 0;
        transform: rotate(-15deg);
      }
      .CDbox {
        position: absolute;
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        width: 300px;
        height: 300px;
        background-image: url("../assets/img/disc-ip6.png");
        background-size: 100% 100%;
        animation: CDRotate 15s infinite linear;
      }
      .pause {
        animation-play-state: paused;
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
        .active {
          color: #fff;
          font-size: 13px;
        }
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
        background: linear-gradient(#fff, #999) no-repeat, #999; /*设置左边颜色为#61bd12，右边颜色为#ddd*/
        background: -webkit-linear-gradient(#fff, #999) no-repeat, #999; /*设置左边颜色为#61bd12，右边颜色为#ddd*/
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
