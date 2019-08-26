<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-26 17:27:47
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="search">
    <Header>
      <HeaderLeftFocuse />
    </Header>
    <historySearch v-if="searchKey==''&&searchItemName.length"></historySearch>
    <hotSearch v-if="searchKey==''"></hotSearch>
    <SearchList v-if="searchKey!=''"></SearchList>
  </div>
</template>

<script>
import Header from "../components/common/header";
import HeaderLeftFocuse from "../components/find/headerLeftFocuse";
import SearchList from "../components/search/searchList";
import historySearch from "../components/search/historySearch";
import hotSearch from "../components/search/hotSearch";
import MusicMixins from "../store/mixins";

export default {
  name: "search",
  mixins: [MusicMixins],
  data() {
    return {};
  },
  components: {
    Header,
    HeaderLeftFocuse,
    SearchList,
    historySearch,
    hotSearch
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 44px 14px;
  z-index: 105;
  overflow: auto;
}
</style>
