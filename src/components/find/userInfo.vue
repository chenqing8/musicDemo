<template>
  <div class="userInfo">
    <div
      class="bg-warper"
      :style="{'background':`url(${userInfoList.images})`,'backgroundSize': '100% 100%','filter': 'blur(20px)'}"
    ></div>
    <div class="bgShadow"></div>
    <div class="content">
      <div @click="close" class="header-warper">
        <span class="iconfont close">&#xe627;</span>
      </div>
      <div class="image-warper">
        <img class="image" :src="userInfoList.images" alt />
      </div>
      <div class="name-warper">{{userInfoList.title}}</div>
      <div class="sign-warper" v-if="userInfoList.sign">
        <span>标签:</span>
        <span class="sign" v-for="(item,index) in userInfoList.sign" :key="index">{{item}}</span>
      </div>
      <pre class="content-warper" v-html="userInfoList.content"></pre>
    </div>
  </div>
</template>

<script>
import MusicMixins from "../../store/mixins";
export default {
  name: "userInfo",
  props: ["userInfoList"],
  mixins: [MusicMixins],
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    close() {
      this.SETUSERINFOSTATE(false);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.userInfo {
  width: 100%;
  color: #fff;

  .bg-warper {
    height: 100%;
    width: 100%;
    filter: grayscale(100%) blur(5px);
    transform: scale(2);
  }
  .bgShadow {
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba($color: #888, $alpha: 0.4);
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 102;
    padding: 7px 14px;
  }
  .header-warper {
    text-align: right;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
  }
  .image-warper {
    text-align: center;
    width: 100%;
    height: 150px;
    margin-top: 7px;
    .image {
      width: 150px;
      height: 150px;
      background: #ff0;
    }
  }
  .name-warper {
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    padding: 15px 0;
    border-bottom: 1px solid rgba($color: #aaa, $alpha: 0.3);
  }
  .sign-warper {
    display: flex;
    align-items: center;
    margin-top: 15px;
    font-size: 12px;
    .sign {
      padding: 3px 10px;
      background: rgba($color: #999, $alpha: 0.3);
      margin-left: 5px;
      border-radius: 15px;
      font-size: 10px;
    }
  }
  .content-warper {
    font-size: 12px;
    line-height: 20px;
    height: calc(100% - 350px);
    overflow-y: auto;
    margin-top: 10px;
  }
}
</style>
