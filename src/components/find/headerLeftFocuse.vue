<template>
  <div class="headerLeftFocuse">
    <SideRight>
      <div class="warper" v-if="searchState">
        <input ref="search" class="search" type="text" :placeholder="icon" />
        <span class="cancel text" @click="changeState">取消</span>
      </div>
    </SideRight>
  </div>
</template>


<script>
import SideRight from "../transition/sideRight";
import MusicMixins from "../../store/mixins";

export default {
  name: "headerLeftFocuse",
  mixins: [MusicMixins],
  data() {
    return {
      icon: "\ue67b If You-jksd" /* search框提示语 */,
      searchValue: ""
    };
  },
  components: {
    SideRight
  },
  computed: {},
  methods: {
    search(event) {
      // this.searchValue = event.currentTarget.value;
    },
    changeState() {
      this.SETSEARCHSTATE(false);
    }
  },
  mounted() {},
  watch: {
    /* 当 searchState真，则聚焦input */
    searchState(now, old) {
      if (now == true) {
        this.$nextTick(() => {
          this.$refs.search.focus();
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.headerLeftFocuse {
  .warper {
    position: absolute;
    top: 7px;
    width: calc(100% - 59px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    // 搜索
    .search {
      flex: 1;
      padding: 0 7px;
      height: 25px;
      border-radius: 20px;
      background: #eee;
      border: none;
      outline: none;
      text-align: left;
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
    // 取消
    .cancel {
      color: #555;
      font: {
        size: 12px;
        weight: 600;
      }
      margin-left: 15px;
    }
  }
}
</style>
