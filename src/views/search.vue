<template>
  <div class="search">
    <Header>
      <HeaderLeftFocuse />
    </Header>
    <historySearch v-if="searchKey==''"></historySearch>
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
