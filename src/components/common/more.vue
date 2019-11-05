<!--
 * @Description: In User Settings Editd
 * @Author: your name
 * @Date: 2019-08-27 15:26:29
 * @LastEditTime: 2019-08-28 10:19:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="more" @click="getMore()">
      查看全部{{num}}个{{type}} >
  </div>
</template>

<script>
export default {
  name: "more",
  props:['type','num'],
  data() {
    return {

    };
  },
  components: {

  },
  computed: {

  },
  methods: {
getMore(){
  console.log(123);
}
  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
.more{
    width:100%;
    text-align: center;
    font-size: 10px;
    color:#aaa;
    margin-bottom: 20px;
    margin-top: 10px;
    cursor: pointer;
}
</style>
