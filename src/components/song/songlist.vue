<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-17 22:11:41
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="songlist">
    <div class="bg" @click="close" v-if="songListState"></div>
    <div class="song_warper">
      <div class="title">
        <span>播放列表</span>
        <span class="iconfont icon">&#xe659;</span>
      </div>
      <ul class="list_warper">
        <li
          class="item"
          v-for="(item,index) in playlist"
          :key="index"
          :class="{'active':playindex===item.id}"
          @click="getSongDetial(item.id,index)"
        >
          <span class="iconfont icon" v-show="playindex===item.id">&#xe682;</span>
          <span class="text">{{item.name}}</span>
          <span class="iconfont icon1" @click="cancel(index)">&#xe627;</span>
        </li>
      </ul>
      <div class="close" @click="close">关闭</div>
    </div>
  </div>
</template>

<script>
import MusicMixins from "../../store/mixins.js";
export default {
  name: "songlist",
  mixins: [MusicMixins],
  props: ["playlist", "playindex"],
  data() {
    return {};
  },
  components: {  },
  computed: {},
  methods: {
    getSongDetial(id,index) {
      this.setplayIndex(id);/* 歌曲id编号 */
      this.setListIndex(index)/* 序号 */
      this.setplayState(true);
    },
    close() {
      this.setsongListState(false);
    },
    cancel(id){
      let playList=this.playList.slice(id,1);
      this.setplayList(playList);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.songlist {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  z-index: 128;
  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba($color: #888, $alpha: 0.41);
  }
  .song_warper {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 35%;
    background: #fff;
    color: #000;
    border-radius: 20px 20px 0 0;
    z-index: 129;
    .title {
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      border-bottom: 1px solid #ccc;
      padding: 7px 20px;
    }
    .list_warper {
      height: calc(100% - 90px);
      width: 100%;
      overflow: auto;
      padding: 7px 20px;
      list-style: none;
      font-size: 12px;
      .item {
        display: flex;
        padding: 4px 0;
        .text {
          flex: 1;
        }
        .icon {
          width: 25px;
        }
        .icon1 {
          color: #000;
        }
      }
      .active {
        color: rgb(241, 43, 43);
      }
    }
    .close {
      height: 40px;
      line-height: 40px;
      width: 100%;
      font-size: 18px;
      text-align: center;
    }
  }
}
</style>
