<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-26 17:22:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="videoList">
    <ul>
      <li class="video_warper" v-for="(item,index) in videoList" :key="index">
        <div class="video_left">
          <img class="vedio_img" :src="item.coverUrl" alt />
          <span class="iconfont playCount">&#xe61a;{{CountCal(item.playTime)}}</span>
        </div>
        <div class="video_right">
          <div class="vedio_title">{{item.title}}</div>
          <div class="vedio_des">
            <span class="des_time">{{jsDateTimeFormat(item.durationms)}}</span>
            <span class="des_author">by{{item.userName}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MusicMixins from "../../store/mixins";

export default {
  name: "videoList",
  props: ["videoList"],
  mixins: [MusicMixins],
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.videoList {
  .video_warper {
    display: flex;
    align-items: center;
    .video_left {
      margin-right: 14px;
      width: 100px;
      position: relative;
      .vedio_img {
        width: 100%;
      }
      .playCount {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 11px;
        color: #fff;
      }
    }
    .video_right {
      flex: 1;
      .vedio_title {
        font-size: 12px;
        font-weight: 500;
        overflow: hidden;

        text-overflow: ellipsis;

        display: -webkit-box;

        -webkit-box-orient: vertical;

        -webkit-line-clamp: 2;
      }
      .vedio_des {
        font-size: 10px;
        color: #aaa;
        margin-top: 5px;
        .des_time {
        }
        .des_author {
        }
      }
    }
  }
}
</style>
