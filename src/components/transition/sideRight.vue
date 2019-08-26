<template>
  <div class="sideRight">
    <transition name="sideRight">
      <slot></slot>
    </transition>
  </div>
</template>


<script>
export default {
  name: "sideRight"
};
</script>

<style lang="scss" scoped>
.sideRight {
  .sideRight-enter,
  .sideRight-leave-to {
    transform: translateX(5px);
    opacity: 0;
  }
  .sideRight-enter-to,
  .sideRight-leave {
    opacity: 1;
    transform: translateX(0px);
  }
  .sideRight-enter-active,
  .sideRight-leave-active {
    transition: all .8s;
  }
}
</style>
