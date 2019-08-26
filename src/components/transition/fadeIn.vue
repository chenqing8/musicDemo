<template>
  <div class="fadeIn">
    <transition name="fadeIn">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "fadeIn",
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
.fadeIn {
  .fadeIn-enter,.fadeIn-leave-to{
    opacity: 0;
  }
  .fadeIn-enter-active,.fadeIn-leave-active{
    transition: all .5s;
  }
  .fadeIn-enter-to,.fadeIn-leave{
    opacity: 1;
  }
}
</style>
