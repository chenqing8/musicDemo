<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 10:30:57
 * @LastEditTime: 2019-08-28 12:20:51
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="comp">
    <div class="title-warper">
      <span class="text">{{type}}</span>
    </div>
    <component v-bind:is="who" :dataList="dataList"></component>
    <More :type="type" :num="num" :typeId="typeId" />
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
import More from "../common/more";

export default {
  name: "comp",
  props: ["orderShow", "dataList", "type", "num", "typeId"],
  data() {
    return {};
  },
  components: {
    SongList,
    UserList,
    VideoList,
    PlayListList,
    DjRadioList,
    Artist,
    AlbumList,
    More
  },
  computed: {
    who() {
      switch (this.typeId) {
        case 1:
          return "SongList";
          break;
        case 10:
          return "AlbumList";
          break;
        case 100:
          return "Artist";
          break;
        case 1000:
          return "PlayListList";
          break;
        case 1002:
          return "UserList";
          break;
        case 1009:
          return "DjRadioList";
          break;
        case 1014:
          return "VideoList";
          break;
      }
    }
  },
  methods: {
    gets() {
      console.log(123);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.comp {
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
