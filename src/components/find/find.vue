<template>
  <div class="Find">
    <Header>
      <HeaderLeft />
      <HeaderLeftFocuse />
    </Header>
    <Scroll>
      <div class="banner">
        <slider class="slider" ref="slider" :options="options" @slide="slide" @tap="onTap">
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
            <span class="sign">{{bannerList[index].typeTitle}}</span>
          </slideritem>
        </slider>
      </div>
      <div class="menuLists" v-if="menuList.length">
        <MenuList :menulist="menuList" :menuWidth="'100%'"></MenuList>
      </div>
      <div class="recomment" v-if="recommentList.length">
        <RecommentList :recommentList="recommentList"></RecommentList>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Header from "../common/header";
import HeaderLeft from "../find/headerLeft";
import HeaderLeftFocuse from "../find/headerLeftFocuse";
import MenuList from "../find/menuList";
import SideRight from "../transition/sideRight";
import Scroll from "../common/scroll";
import RecommentList from "../find/recommentList";
import { slider, slideritem } from "vue-concise-slider";
import MusicMixins from "../../store/mixins";

export default {
  name: "Find",
  mixins: [MusicMixins],
  data() {
    return {
      icon: "\ue67b If You-jksd",
      searchValue: "",
      someList: [],
      bannerList: [],
      recommentList: [],
      options: {
        /* slider的配置 */
        pagination: true,
        grabCursor: true, // Scratch style
         thresholdDistance: 100, // 滑动距离阈值判定
        thresholdTime: 300, // 滑动时间阈值判定
        autoplay: 3000,
        loop: true,
        speed: 300
      },
      menuList: [
        {
          icon: "\ue603",
          name: "每日推荐",
          route: "/find"
        },
        {
          icon: "\ue737",
          name: "歌单",
          route: "/find"
        },
        {
          icon: "\ue60e",
          name: "排行榜",
          route: "/find"
        },
        {
          icon: "\ue715",
          name: "电台",
          route: "/find"
        },
        {
          icon: "\ue606",
          name: "直播",
          route: "/find"
        }
      ]
    };
  },
  components: {
    Header,
    HeaderLeft,
    HeaderLeftFocuse,
    SideRight,
    Scroll,
    slider,
    slideritem,
    MenuList,
    RecommentList
  },
  computed: {},
  methods: {
    onTap(data) {
      this.$router.push({ path: "/v" });
    },
    slide(data) {},
    /**获取banner数据
     * @name: getbannerData
     * @param {null}
     * @return:this.someList
     */
    getbannerData() {
      this.$httpget("/banner?type=2").then(res => {
        if (res.code === 200) {
          return;
        }
        let data = res.data.banners;
        this.bannerList = data;
        let item = {};
        data.forEach(element => {
          item = {
            style: {
              background: `url(${element.pic})`,
              borderRadius: "5px",
              backgroundSize: "100% 100%"
            }
          };
          this.someList.push(item);
        });
      });
    },
    getrecommentData() {
      this.$httpget("/personalized").then(res => {
        if (res.code === 200) {
          return;
        }
        let data = res.data.result;
        this.SETRECOMMENTDATA(data);
        this.recommentList = data.slice(0, 6); /* 当前页面只需要6条数据 */
      });
    }
  },
  mounted() {
    this.getbannerData();
    this.getrecommentData();
  }
};
</script>

<style lang="scss" scoped>
.Find {
  padding: {
    bottom: 64px;
    top: 40px;
    left: 14px;
    right: 14px;
  }
  .banner {
    width: 100%;
    height: 130px;
    border-radius: 10px;
    position: relative;
    .slider {
      border-radius: 10px;
    }
    .sign {
      position: absolute;
      bottom: 0;
      right: 0;
      display: inline-block;
      padding: 2px 6px;
      border-radius: 10px 0 10px 0;
      background: rgb(245, 38, 38);
      z-index: 100;
      font-size: 10px;
    }
  }
  .menuLists {
    width: 100%;
    padding: 18px 0;
    overflow-x: auto;
    border-bottom: 1px solid #eee;
  }
  .recomment {
    margin-top: 20px;
  }
}
</style>
