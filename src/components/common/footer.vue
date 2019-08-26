<template>
  <div class="Footer">
    <router-link
      tag="div"
      :to="item.route"
      class="item_warper"
      @click="activeIndex=index"
      v-for="(item,index) in list"
      :key="index"
    >
      <div class="icon">
        <span class="iconfont icon1">{{item.icon}}</span>
      </div>
      <div class="text">{{item.name}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      activeIndex: 0,
      list: [
        {
          icon: "\ue715",
          name: "发现",
          route: "/find"
        },
        {
          icon: "\ue606",
          name: "视频",
          route: "/a"
        },
        {
          icon: "\ue682",
          name: "我的",
          route: "/b"
        },
        {
          icon: "\ue64e",
          name: "云村",
          route: "/v"
        },
        {
          icon: "\ue611",
          name: "用户",
          route: "/g"
        }
      ]
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.Footer {
  position: fixed;
  bottom: 0px;
  right: 0;
  left: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  padding: 0 14px;
  .item_warper {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #aaa;
    .icon {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon1 {
        font-size: 17px;
      }
    }
    .text {
      font-size: 10px;
      margin-top: 4px;
    }
  }
  .router-link-active {
    .icon {
      background-image: linear-gradient(to right, #ff5547, #ff2015);
      color: #fff;
    }
    .text {
      color: #ff5547;
    }
  }
}
</style>
