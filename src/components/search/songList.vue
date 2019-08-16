<template>
  <div class="songList">
    <ul class="songList">
      <li class="item" v-for="(item,index) in songList" :key="index">
        <div class="itemLeft">
          <span class="order" v-if="orderShow">{{index+1}}</span>
          <div class="songitem" @click="getSongDetial(index)">
            <p class="songitemtitle">
              <span class="title">{{item.name}}</span>
              <span v-if="item.alia.length">({{item.alia[0]}})</span>
            </p>
            <p class="sign">
              <span class="vip signitem" v-if="item.cp=='0'">VIP</span>
              <span class="exclusive signitem" v-if="item.mark!='0'">独家</span>
              <span class="SQ signitem" v-if="item.fee=='8'">SQ</span>
              <span class="singer">{{item.ar[0].name}}-{{item.al.name}}</span>
            </p>
          </div>
        </div>
        <div class="itemRight">
          <span class="iconfont icon" v-show="item.mv!='0'">&#xe7d5;</span>
          <span class="iconfont icon">&#xe634;</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MusicMixins from "../../store/mixins";

export default {
  name: "songList",
  props: ["songList", "orderShow"],
  mixins: [MusicMixins],
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    getSongDetial(id) {
      this.setplayState(true);
      this.setfullScreen(true);

      let songId = this.songList[id].id;
      localStorage.setItem("playList", JSON.stringify(this.songList));
      localStorage.setItem("playIndex", songId);
      this.setplayIndex(songId);
      this.setListIndex(id);
      this.setplayList(this.songList);
      if (this.orderShow) {
      } else {
        // let songId = this.songList[id].id;
        // let songItem = this.songList[id];
        // let songlist=this.playList.splice(id, 0, songItem);
        // console.log(songlist);
        // localStorage.setItem("playList", JSON.stringify(songlist));
        // localStorage.setItem("playIndex", songId);
        // this.setplayIndex(songId);
        // this.setListIndex(id);
        // this.setplayList(songlist);
        // console.log(this.ListIndex);
        // console.log(songItem);
        // console.log(this.playList);
        // // console.log(songlist.splice(this.ListIndex, 0, songItem));
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.songList {
  .songList {
    width: 100%;
    background: #fff;
    border-radius: 20px;
    .item {
      padding: 10px 14px;
      display: flex;
      justify-content: space-between;
      .itemLeft {
        display: flex;
        align-items: center;
        .order {
          font-size: 15px;
          font-weight: 700;
          color: #aaa;
          margin-right: 14px;
        }
        .songitem {
          .songitemtitle {
            font-size: 15px;
          }
          .sign {
            font-size: 12px;
            color: #ccc;
            margin-top: 7px;

            .signitem {
              padding: 1px 2px;
              border: 1px solid red;
              border-radius: 4px;
              margin-right: 4px;
              color: #f00;
              font-size: 10px;
            }
            .vip {
            }
            .SQ {
            }
            .exclusive {
            }
            .singer {
            }
          }
        }
      }
      .itemRight {
        display: flex;
        align-items: center;
        .icon {
          margin-left: 14px;
          width: 25px;
        }
      }
    }
  }
}
</style>
