<template>
  <div class="sort">
    <Header>
      <Headergoback :title="'所有歌单'" :goback="'songSheet'" />
    </Header>
    <Scroll>
      <div class="sort-warper" v-for="(item,index) in sortList" :key="index">
        <div class="sorttitle">{{sortName[index]}}</div>
        <ul class="sortList">
          <span class="item" v-for="(sort,id) in item" :key="id" @click="getSortName(sort.name)">
            <span class="iconfont icon" v-if="sort.hot">&#xe6e1;</span>
            {{sort.name}}
          </span>
        </ul>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Headergoback from "../find/headergoback";
import Header from "../common/header";
import Scroll from "../common/scroll";

export default {
  name: "sort",
  data() {
    return {
      sortName: ["语种", "风格", "场景", "情感", "主题"],
      sortList: []
    };
  },
  components: {
    Headergoback,
    Header,
    Scroll
  },
  computed: {},
  methods: {
    getsortData() {
      this.$httpget("playlist/catlist").then(res => {
        let data = res.data.sub;
        let sortTitle = [];
        data.forEach(element => {
          if (!sortTitle[element.category]) {
            sortTitle[element.category] = [];
          }
          sortTitle[element.category].push({
            hot: element.hot,
            name: element.name
          });
        });
        this.sortList = sortTitle;
      });
    },
    getSortName(name) {
      this.$router.push({ name: "sortDetial", params: { name: name } });
    }
  },
  mounted() {
    this.getsortData();
  }
};
</script>

<style lang="scss" scoped>
.sort {
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
