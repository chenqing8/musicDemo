<template>
  <div class="hotSearch">
    <div class="hot_title">
      <span class="title">热门推荐</span>
    </div>
    <div class="hot_list">
      <div
        class="item"
        v-for="(item,index) in hotSearchList"
        :key="index"
        @click="search(item.searchWord)"
      >
        <div class="item_left">{{index+1}}</div>
        <div class="item_right">
          <div class="item_up">
            <span class="item_name">{{item.searchWord}}</span>
            <span class="item_num">{{item.score}}</span>
            <img v-if="item.iconUrl" class="icon" :src="item.iconUrl" alt />
          </div>
          <div class="item_down">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotSearch",
  data() {
    return {
      hotSearchList: []
    };
  },
  components: {},
  computed: {},
  methods: {
    getHotSearchData() {
      this.$httpget("search/hot/detail").then(res => {
        let data = res.data.data;
        this.hotSearchList = data;
      });
    },
    search(key) {
        this.$router.push({name:'searchResult',params:{'key':key}})
    }
  },
  mounted() {
    this.getHotSearchData();
  }
};
</script>

<style lang="scss" scoped>
.hotSearch {
  .title {
    font-size: 14px;
    font-weight: 700;
  }
  .hot_list {
    .item {
      padding: 10px 0;
      display: flex;
      align-items: center;
      color: #999;
      .item_left {
        font-size: 14px;
        font-weight: 700;
        margin-right: 14px;
      }
      .item_right {
        display: flex;
        flex-direction: column;
        font-size: 10px;
        color: #000;
        .item_up {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          .item_name {
            font-size: 14px;
          }
          .item_num {
            color: #aaa;
            margin: 0 15px;
          }
          .icon {
            height: 12px;
          }
        }
        .item_down {
        }
      }
    }
    .item:nth-child(1) {
      color: red;
      .item_right {
        .item_up {
          .item_name {
            font-weight: 700;
          }
        }
      }
    }
    .item:nth-child(2) {
      color: red;
      .item_right {
        .item_up {
          .item_name {
            font-weight: 700;
          }
        }
      }
    }
    .item:nth-child(3) {
      color: red;
      .item_right {
        .item_up {
          .item_name {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
