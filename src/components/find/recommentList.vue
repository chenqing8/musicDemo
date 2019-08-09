<template>
  <div class="recommentList">
    <div class="title-warper">
      <div class="title">推荐歌单</div>
      <div @click="getmore" class="more">歌单广场</div>
    </div>
    <div class="recommentList-warper">
      <RecommentItem :dataList="recommentList"></RecommentItem>
    </div>
  </div>
</template>

<script>
import RecommentItem from '../find/recommentItem'
export default {
  name: "recommentList",
  props: ["recommentList"],
  data() {
    return {};
  },
  components: {
      RecommentItem
  },
  computed: {

  },
  methods: {
    getmore(){
      this.$router.push({name:'songSheet'})
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.recommentList {
  .title-warper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 16px;
      font-weight: 700;
    }
    .more {
      font-size: 10px;
      padding: 2px 7px;
      border: 1px solid #bbbbbb;
      border-radius: 20px;
      color: #444;
    }
  }
  .recommentList-warper {

  }
}
</style>
