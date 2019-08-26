<template>
  <div class="Scroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Scroll",
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
.Scroll {
  overflow: auto;
}
</style>
