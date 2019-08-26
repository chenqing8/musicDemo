<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-26 17:21:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="searchResult">
    <div class="header-warper">
      <div class="search-warper">
        <span class="iconfont icon" @click="goback">&#xe641;</span>
        <input class="search" type="text" :value="searchValue" />
      </div>
      <div class="type-warper">
        <span
          class="type-item"
          :class="{'active':typeActive==item.id}"
          v-for="(item,index) in typeList"
          :key="index"
          @click="changeType(item.id)"
        >{{item.name}}</span>
      </div>
    </div>
    <div class="title-warper">
      <span class="text">单曲</span>
      <!-- <span class="playing">播放全部</span> -->
    </div>
    <SongList :orderShow="false" :songList="songList" />
    <div class="title-warper">
      <span class="text">视屏</span>
    </div>
    <VideoList :videoList="videoList" />
    <div class="title-warper">
      <span class="text">歌单</span>
    </div>
    <PlayListList />
    <div class="title-warper">
      <span class="text">歌手</span>
    </div>
    <Artist />
    <div class="title-warper">
      <span class="text">专辑</span>
    </div>
    <AlbumList />
    <div class="title-warper">
      <span class="text">用户</span>
    </div>
    <UserList />
  </div>
</template>

<script>
import SongList from "../search/songList";
import UserList from "../search/userList";
import VideoList from "../search/videoList";
import PlayListList from "../search/playListList";
import DjRadioList from "../search/djRadioList";
import Artist from "../search/artist";
import AlbumList from "../search/albumList";
import MusicMixins from "../../store/mixins";

export default {
  name: "searchResult",
  mixins: [MusicMixins],
  data() {
    return {
      searchValue: "",
      typeList: [
        {
          name: "综合",
          id: 1018
        },
        {
          name: "单曲",
          id: 1
        },
        {
          name: "专辑",
          id: 10
        },
        {
          name: "歌手",
          id: 100
        },
        {
          name: "歌单",
          id: 1000
        },
        {
          name: "用户",
          id: 1002
        },
        {
          name: "MV",
          id: 1004
        },
        {
          name: "歌词",
          id: 1006
        },
        {
          name: "电台",
          id: 1009
        },
        {
          name: "视频",
          id: 1014
        }
      ],
      typeActive: 1018,
      songList: [] /* 单曲列表 */,
      videoList: [] /* 视屏列表 */,
      albumList: [] /* 专辑列表 */,
      djRadioList: [] /* 电台列表 */,
      userList: [] /* 用户列表 */,
      playListList: [] /* 歌单列表 */,
      artist: [] /* 歌手列表 */
    };
  },
  components: {
    SongList,
    UserList,
    VideoList,
    PlayListList,
    DjRadioList,
    Artist,
    AlbumList
  },
  computed: {},
  methods: {
    changeType(typeid) {
      this.typeActive = typeid;
    },
    goback() {
      this.setsearchKey('');
      this.$router.push({ name: "search" });
    },
    getSearchResultData() {
      this.$httpget(
        `search?keywords=${this.searchValue}&type=${this.typeActive}`
      ).then(res => {
        let data = res.data.result;
        this.songList = data.song ? data.song.songs : [];
        this.videoList = data.video ? data.video.videos : [];
        this.albumList = data.album ? data.album.albums : [];
        this.djRadioList = data.djRadio ? data.djRadio.djRadios : [];
        this.userList = data.user ? data.user.users : [];
        this.playListList = data.playList ? data.playList.playLists : [];
        this.artistList = data.artist ? data.artist.artists : [];
      });
    }
  },
  mounted() {
    this.searchValue = "\ue67b " + this.$route.params.key;
    this.getSearchResultData();
  }
};
</script>

<style lang="scss" scoped>
.searchResult {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: 70px;
  padding-right: 14px;
  padding-left: 14px;
  z-index: 105;
  background: #fff;
  overflow: auto;
  .header-warper {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    background-color: #fff;
    padding: 7px 14px;
    z-index: 10;
    .search-warper {
      display: flex;
      align-items: center;
      .icon {
        text-align: center;
        margin-right: 15px;
      }
      .search {
        flex: 1;
        padding: 0 7px;
        height: 25px;
        border-radius: 20px;
        background: #eee;
        border: none;
        outline: none;
        font-family: "iconfont";
        color: #555;
      }
    }
    .type-warper {
      overflow: auto;
      white-space: nowrap;
      display: flex;
      align-items: center;
      margin-top: 10px;
      .type-item {
        font-size: 14px;
        margin: 0 8px;
        padding-bottom: 10px;
      }
      .active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
  .title-warper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-top: 10px;
    .text {
      font-weight: 700;
    }
    .playing {
      font-size: 10px;
      padding: 3px 10px;
      border: 1px solid #aaa;
      border-radius: 10px;
    }
  }
}
</style>
