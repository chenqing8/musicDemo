<template>
  <div class="Header" :style="{'background':bg || '#fff','color':color||'#000'}">
    <div class="header-warper">
      <slot></slot>
    </div>
    <span class="iconfont icon1">&#xe555;</span>
  </div>
</template>


<script>
export default {
  name: "Header",
  props: ["bg","color"],/*  */
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
.Header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  padding: 7px 14px;
  display: flex;
  align-items: center;
  z-index: 100;
  // filter: blur(25px);
  // transform: scale(2.2);
  .header-warper {
    flex: 1;
  }
  .icon1 {
    height: 25px;
    display: inline-block;
    font-size: 16px;
    text-align: center;
    margin-left: 15px;
    margin-top: 7px;
  }
}
</style>
