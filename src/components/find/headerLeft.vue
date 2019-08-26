<template>
  <div class="headerLeft">
    <SideRight>
      <div class="warper" v-if="!searchState">
        <span class="iconfont icon">&#xe63e;</span>
        <input ref="search" class="search" type="text" :placeholder="icon" @click="changeState" />
      </div>
    </SideRight>
  </div>
</template>

<script>
import SideRight from "../transition/sideRight";
import MusicMixins from "../../store/mixins";
export default {
  name: "headerLeft",
  mixins: [MusicMixins],
  data() {
    return {
      icon: "\ue67b If You-jksd" /* search框提示语 */
    };
  },
  components: {
    SideRight
  },
  computed: {},
  methods: {
    changeState() {
      this.$router.push({ name: "search" });
      setTimeout(() => {
        this.SETSEARCHSTATE(true);
      }, 20);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.headerLeft {
  .warper {
    position: absolute;
    top: 7px;
    width: calc(100% - 59px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    // 麦克风
    .icon {
      display: inline-block;
      font-size: 16px;
      margin-right: 15px;
      // width: 50px;
    }
    // 搜索
    .search {
      flex: 1;
      padding: 0 7px;
      height: 25px;
      border-radius: 20px;
      background: #eee;
      border: none;
      outline: none;
      text-align: center;
      font-family: "iconfont";
      color: #555;
    }
    input::-webkit-input-placeholder {
      color: #cacaca;
    }
    input::-ms-input-placeholder {
      color: #cacaca;
    }
    input::-moz-placeholder {
      color: #cacaca;
    }
  }
}
</style>
