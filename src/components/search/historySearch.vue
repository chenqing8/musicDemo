<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-26 17:20:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="historySearch">
    <div class="history_title">
      <span class="title">历史搜索</span>
      <span class="iconfont icon">&#xe659;</span>
    </div>
    <div class="history_list">
      <span class="item" v-for="(item,index) in setsearchItemName" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
import MusicMixins from "../../store/mixins";

export default {
  name: "historySearch",
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
.historySearch {
  .title {
    font-size: 14px;
    font-weight: 700;
  }
  .history_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      font-size: 10px;
    }
  }
  .history_list {
    width: 100%;
    height: 50px;
    overflow-x: auto;
    white-space: nowrap;
    .item {
      display: inline-block;
      padding: 2px 8px;
      text-align: center;
      background: #aaa;
      border-radius: 10px;
      margin: 0 10px;
      font-size: 12px;
    }
  }
}
</style>
