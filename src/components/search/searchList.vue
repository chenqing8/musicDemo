<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-26 17:20:56
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="searchList">
    <div class="searchKey" @click="search(searchKey)">搜索“{{searchKey}}”</div>
    <ul>
      <li v-for="(item,index) in searchList" :key="index"  @click="search(item.keyword)">
        <span class="iconfont icon">&#xe67b;</span>
        <span class="text">{{item.keyword}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import MusicMixins from "../../store/mixins";
export default {
  name: "searchList",
  mixins: [MusicMixins],
  data() {
    return {
      searchList: [],
      key:''
    };
  },
  components: {},
  computed: {
  },
  methods: {
    search(data){
      this.setsearchItemName(data)
        this.setsearchItemName(data)
    },
    getSearchListData(){
       this.$httpget(
        `search/suggest?keywords=${this.searchKey}&type=mobile`
      ).then(res => {
        let data=res.data.result.allMatch;
        this.searchList=data;
      })
    }
  },
  mounted() {
    this.getSearchListData();
  },
  watch: {
    searchItemName(key) {
        this.$router.push({name:'searchResult',params:{'key':key}})
    },
    searchKey(){
      this.getSearchListData();
    }
  }
};
</script>

<style lang="scss" scoped>
.searchList {
  font-size: 13px;
  .searchKey {
    color: rgb(39, 151, 196);
      padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  ul {
    padding: 5px 14px;
    li {
      list-style: none;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      .icon{
          margin-right: 5px;
      }
    }
  }
}
</style>
