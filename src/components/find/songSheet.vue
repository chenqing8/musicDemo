<template>
  <div class="songSheet">
    <Header>
      <Headergoback :title="'歌单广场'" :goback="'home'" />
    </Header>
    <div class="scrollSort">
      <div class="sort">
        <span
          @click="changeSort(item.name,index)"
          v-for="(item,index) in sortList"
          :key="index"
          :class="{'active':currenSort==index}"
        >{{item.name}}</span>
      </div>
      <span class="iconfont sortMore" @click="sortMore">&#xe610;</span>
    </div>
    <Scroll>
      <div class="sortSongList-warper">
        <RecommentItem :dataList="sortSongList"></RecommentItem>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "../common/scroll";
import Header from "../common/header";
import Headergoback from "../find/headergoback";
import RecommentItem from "../find/recommentItem";

export default {
  name: "songSheet",
  data() {
    return {
      sortList: [],
      sortSongList: [],
      currenSort: 0
    };
  },
  components: {
    Header,
    Scroll,
    RecommentItem,
    Headergoback
  },
  computed: {},
  methods: {
    sortMore() {
      this.$router.push({ name: "sort" });
    },
    getsortData() {
      this.$httpget("playlist/hot").then(res => {
        let data = res.data.tags;
        this.sortList = data;
        this.getsortSongData(data[0]);
      });
    },
    getsortSongData(name) {
      this.sortSongList = [];
      this.$httpget("top/playlist?tag=" + name).then(res => {
        let data = res.data.playlists;
        this.sortSongList = data;
      });
    },
    changeSort(name, id) {
      this.currenSort = id;
      this.getsortSongData(name);
    }
  },
  mounted() {
    this.getsortData();
  }
};
</script>

<style lang="scss" scoped>
.songSheet {
  padding: {
    bottom: 64px;
    top: 80px;
    left: 14px;
    right: 14px;
  }
  width: 100%;
  .scrollSort {
    position: fixed;
    top: 40px;
    overflow: auto;
    height: 40px;
    width: 92%;
    background: #fff;
    z-index: 100;
    .sort {
      width: 500px;
      display: flex;
      justify-content: space-between;
      padding: 10px 25px;
      font-size: 10px;
      font-weight: 700;
      .active {
        color: #ff2216;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          bottom: -10px;
          right: 0;
          width: 100%;
          height: 2px;
          background: #ff2216;
        }
      }
    }
    .sortMore {
      position: fixed;
      top: 45px;
      right: 12px;
      font-size: 18px;
      background: #fff;
      box-shadow: -6px 0 10px #fff;
    }
  }
}
</style>
