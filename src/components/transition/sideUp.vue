<template>
  <div class="sideUp">
    <transition name="sideUp">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "sideUp",
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
.sideUp {
  .sideUp-enter,
  .sideUp-leave-to {
    transform: translateY(500px);
    opacity: 0;
  }
  .sideUp-enter-active,
  .sideUp-leave-active {
    transition: transform 0.5s;
    transition: opacity 0.5s;
  }
  .sideUp-enter-to,
  .sideUp-leave {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
