<template>
  <div class="recommentItem">
    <ul>
      <li
        v-for="(item,index) in dataList"
        :key="index"
        :style="{'background':`url(${item.picUrl||item.coverImgUrl})`,'backgroundSize': '100% 100%'}"
        @click="detial(item.id)"
      >
        <p class="text">{{item.name}}</p>
        <span class="iconfont playCount">&#xe61a;{{playCount[index]}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import MusicMixins from "../../store/mixins";
export default {
  name: "recommentItem",
  props: ["dataList"],
  mixins: [MusicMixins],
  data() {
    return {};
  },
  components: {},
  computed: {
    playCount() {
      let playList = [];
      let num = "";
      this.dataList.forEach(element => {
        num = this.CountCal(element.playCount);
        playList.push(num);
      });

      return playList;
    }
  },
  methods: {
    detial(ids) {
      this.$router.push({ name: "song", params: { id: ids } });
    },

  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.recommentItem {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      position: relative;
      width: 30%;
      height: 0px;
      padding-bottom: 30%;
      margin-top: 15px;
      margin-bottom: 35px;
      list-style: none;
      border-radius: 8px;
      .text {
        margin-top: 102%;
        font-size: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .playCount {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 11px;
        color: #fff;
      }
    }
    &:after {
      content: "";
      width: 30%;
    }
  }
}
</style>
