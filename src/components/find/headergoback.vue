<template>
  <div class="headergoback">
    <div class="header">
      <span class="iconfont icon" @click="gobackItem">&#xe641;</span>
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headergoback",
  props: ["title", "goback"],/* goback有值表示跳转到指定路由，没值表示返回上一页 */
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    gobackItem() {
      if (this.goback == undefined) {
        this.go();
      } else {
        this.goBack();
      }
    },
    // 返回到指定路由
    goBack() {
      this.$router.push({ name: this.goback });
    },
    // 返回上一页
    go() {
      this.$router.go(-1);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.headergoback {
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      font-size: 16px;
      margin-right: 15px;
    }
    .title {
      flex: 1;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
