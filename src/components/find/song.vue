<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-09-06 18:39:11
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="song">
    <Header>
      <Headergoback :title="'歌单'" />
    </Header>
    <Scroll v-if="!userInfoState">
      <div class="bgParent">
        <div
          class="bg"
          :style="{'background-image':'url('+songDetialList.coverImgUrl+')','backgroundSize': '100% 100%', 'filter': 'blur(15px)'}"
        ></div>
        <div class="bgShadow"></div>
      </div>
      <div class="songDetial">
        <div class="songInfo-warper">
          <div class="songInfo">
            <div class="infoLeft" v-if="songDetialList.coverImgUrl" @click="showUserInfo">
              <div
                class="image"
                :style="{'background':`url(${songDetialList.coverImgUrl})`,'backgroundSize': '100% 100%'}"
              ></div>
              <span class="shadow"></span>
              <span class="iconfont icon">&#xe61a;{{playCount}}</span>
            </div>
            <div class="infoRight">
              <p class="title" @click="showUserInfo">{{songDetialList.name}}</p>
              <p class="user">
                <img class="iconfont userIcon" :src="creatorDetialList.avatarUrl" alt />
                {{creatorDetialList.nickname}}
                <span class="iconfont icon">&#xe642;</span>
              </p>
              <p class="dec" @click="showUserInfo">
                <span class="detial">{{songDetialList.description}}</span>
                <span class="iconfont icon" v-if="songDetialList.description">&#xe642;</span>
              </p>
            </div>
          </div>
          <ul class="songInfoList">
            <li class="item">
              <span class="iconfont icon">&#xe6d3;</span>
              <span class="text">{{songDetialList.commentCount}}</span>
            </li>
            <li class="item">
              <span class="iconfont icon">&#xe63e;</span>
              <span class="text">{{songDetialList.shareCount}}</span>
            </li>
            <li class="item">
              <span class="iconfont icon">&#xe628;</span>
              <span class="text">下载</span>
            </li>
            <li class="item">
              <span class="iconfont icon">&#xe60a;</span>
              <span class="text">多选</span>
            </li>
          </ul>
        </div>
        <SongList :orderShow="true"  :songList="songDetialList.tracks" />
        <div class="subscribe-warper">
          <div class="subscribers">
            <img
              class="subscribeImg"
              :src="item.avatarUrl"
              v-for="(item,index) in subscribers"
              :key="index"
            />
          </div>
          <div class="subscribecount">{{songDetialList.subscribedCount}}人收藏></div>
        </div>
      </div>
    </Scroll>
    <FadeIn>
      <UserInfo v-if="userInfoState" class="userInfo-warper" :userInfoList="userInfoList" />
    </FadeIn>
  </div>
</template>

<script>
import Headergoback from "../find/headergoback";
import Header from "../common/header";
import Scroll from "../common/scroll";
import UserInfo from "../find/userInfo";
import MusicMixins from "../../store/mixins";
import FadeIn from "../transition/fadeIn";
import SongList from "../search/songList";

export default {
  name: "song",
  mixins: [MusicMixins],
  data() {
    return {
      songDetialList: {},
      creatorDetialList: {},
      subscribers: {},
      modleShow: false,
      userInfoList: {},
      songList: {}
    };
  },
  components: {
    Headergoback,
    Header,
    Scroll,
    UserInfo,
    FadeIn,
    SongList
  },
  computed: {
    playCount() {
      return this.CountCal(this.songDetialList.playCount);
    }
  },
  methods: {
    getSongListData(id) {
      this.$httpget("playlist/detail?id=" + id).then(res => {
        let data = res.data.playlist;
        this.songDetialList = data;
        this.songList = data.tracks;
        this.creatorDetialList = data.creator;
        this.subscribers = data.subscribers.slice(0, 5);
        this.userInfoList = {
          title: data.name,
          images: data.coverImgUrl,
          sign: data.creator.expertTags,
          content: data.description.replace("/s/g", "<br />")
        };
      });
    },
    showUserInfo() {
      this.SETUSERINFOSTATE(true);
    },
    formatLrc(lrc) {
      return lrc.replace("/[(w*:w*).w*]/g", "");
    },
    /**获取歌曲信息
     * @name: getSongUrlData
     * @param {id} 歌曲的id
     * @param {listId} 当前点击列表的id
     * @return: 新的歌曲信息，放在vuex中
     */
    getSongUrlData(id, listId) {
      this.$httpget("song/url?id=" + id).then(res => {
        let data = res.data.data[0];
        this.setCurrenSong(songUrlData);
        // this.$httpget("lyric?id=" + id).then(res1 => {
        //   let lyr = res1.data.lrc;
        //   let lyric;
        //   if (!lyr) {
        //     lyric = "";
        //   } else {
        //     lyric = new Lyric(lyr.lyric, hanlder);
        //   }
        //   function hanlder({ lineNum, txt }) {
        //     console.log(txt);
        //   }
        // });

        // songUrlData.push({
        //   id: data.id /* 歌曲的id */,
        //   url: data.url /* 歌曲的播放地址 */,
        //   br: data.br /* 音质 */,
        //   size: data.size /* 文件大小 */,
        //   songname: this.songList[listId].name /* 歌曲名字 */,
        //   CD: this.songList[listId].al.picUrl /* 光盘背景 */,
        //   authorname: this.songList[listId].ar[0].name /* 演唱者名字 */,
        //   // lrc: lyric.lines /* 歌词 */,
        //   dt: this.songList[listId].dt /* 歌曲时长 */
        // });
        // localStorage.setItem(
        //   "playList",
        //   JSON.stringify(this.playList.concat(songUrlData))
        // );
        // localStorage.setItem("playIndex", this.playList.length);
        // this.setplayIndex(this.playList.length);
        // this.setplayList(this.playList.concat(songUrlData));
        // // this.setlyricObj(lyric);
        // this.setplayState(true);
        // this.setfullScreen(true);
      });
    },
  },
  mounted() {
    let id = this.$route.params.id;
    this.getSongListData(id);
    if(this.playState && this.fullScreen){
    let platList = JSON.parse(localStorage.getItem("playList"));
    let platIndex = parseInt(localStorage.getItem("playIndex"));
    if (platList) this.setplayList(platList);
    else this.setplayList([]);
    if (platIndex) this.setplayIndex(platIndex);
    else this.setplayIndex(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.song {
  width: 100%;
  height: 100%;
  background: #aaa;
  position: relative;
  .bgParent {
    overflow: hidden;
    .bg {
      height: 300px;
      width: 100%;
      transform: scale(2.2);
      -moz-transform: scale(2, 2);
      -webkit-transform: scale(2, 2);
      -o-transform: scale(2, 2);
      background-size: 100% 100%;
      background-origin: center;
    }
    .bgShadow {
      position: absolute;
      top: 40px;
      right: 0;
      left: 0;
      height: 300px;
      width: 100%;
      background: rgba($color: #888, $alpha: 0.4);
    }
  }
  .songDetial {
    position: absolute;
    top: 40px;
    right: 0;
    left: 0;
    .songInfo-warper {
      color: #fff;
      padding: 14px;
      .songInfo {
        display: flex;
        height: 110px;
        .infoLeft {
          position: relative;
          width: 110px;
          margin-right: 14px;
          .shadow {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            border-radius: 10px 10px 0 0;
            height: 30px;
            background: linear-gradient(
              to bottom,
              rgba($color: #888, $alpha: 0.3),
              transparent
            );
          }
          .image {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
          .icon {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 10px;
          }
        }
        .infoRight {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 10px;
          .title {
            font-size: 18px;
            font-weight: 700;
          }
          .user {
            display: flex;
            align-items: center;
            color: #efefef;

            .userIcon {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              margin-right: 5px;
            }
            .icon {
              font-size: 10px;
            }
          }
          .dec {
            display: flex;
            align-items: center;
            color: #efefef;
            color: #ececec;
            .detial {
              font-size: 10px;
              max-height: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }
        }
      }
    }
    .songInfoList {
      display: flex;
      list-style: none;
      justify-content: space-between;
      padding: 20px 14px 0 14px;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          font-size: 25px;
        }
        .text {
          font-size: 10px;
        }
      }
    }

    .subscribe-warper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      color: #aaa;
      padding: 0 14px;
      padding-top: 10px;
      padding-bottom: 57px;
      .subscribers {
        .subscribeImg {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
      .subscribecount {
      }
    }
  }
  .userInfo-warper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    // bottom: 0;
    background: #ccc;
    z-index: 101;
  }
}
</style>
