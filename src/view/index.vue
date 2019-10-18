<template>
    <div id="index">
        <side-bar></side-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import vHead from "../components/vHead.vue";
import sideBar from "../components/sideBar.vue";
export default {
  name: "index",
  components: {
    vHead,
    sideBar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#index{
    display: flex;
    height: calc(100vh - 170px);
}
</style>
