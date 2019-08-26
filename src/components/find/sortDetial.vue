<template>
  <div class="sortDetial">
    <Header>
      <Headergoback :title="headertitle" :goback="'sort'" />
    </Header>
    <Scroll>
      <RecommentItem :dataList="sortDetialList"></RecommentItem>
    </Scroll>
  </div>
</template>

<script>
import Headergoback from "../find/headergoback";
import Header from "../common/header";
import Scroll from "../common/scroll";
import RecommentItem from "../find/recommentItem";

export default {
  name: "sortDetial",
  data() {
    return {
      headertitle: "",
      sortDetialList: []
    };
  },
  components: {
    Headergoback,
    Header,
    Scroll,
    RecommentItem
  },
  computed: {},
  methods: {
    getsortDetialData() {
      this.$httpget("top/playlist?tag=" + this.headertitle).then(res => {
        let data = res.data.playlists;
        this.sortDetialList = data;
      });
    }
  },
  mounted() {
    this.headertitle = this.$route.params.name;
    this.getsortDetialData();
  }
};
</script>

<style lang="scss" scoped>
.sortDetial {
  padding: {
    bottom: 64px;
    top: 40px;
    left: 14px;
    right: 14px;
  }
  .sort-warper {
    margin-top: 20px;
    .sorttitle {
      font-size: 12px;
      font-weight: 700;
    }
    .sortList {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        position: relative;
        display: inline-block;
        padding: 5px 0;
        width: 80px;
        text-align: center;
        background: #ccc;
        border-radius: 10px;
        font-size: 10px;
        margin-top: 10px;
        .icon {
          color: #f00;
          font-size: 9px;
        }
      }
      &:after {
        content: "";
        width: 80px;
      }
    }
  }
}
</style>
