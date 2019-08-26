<template>
  <ul class="menuList" :style="{'width':menuWidth}">
    <li v-for="(item,index) in menulist" :key="index">
      <div class="bg">
        <span class="iconfont icon">{{item.icon}}</span>
      </div>
      <div class="text">{{item.name}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "menuList",
  props: ["menulist", "menuWidth"],
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
.menuList {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #ff5446, #ff1f14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    color: #fff;
    font-size: 20px;
  }
  .text {
    font-size: 10px;
    color: #aaa;
    margin-top: 7px;
  }
}
</style>
