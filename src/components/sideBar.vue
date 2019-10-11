<template>
  <div id="sideBar">
    <div class="block" v-for="item in routerData" @click="$router.push(item.to)">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  data() {
    return {
      routerData: [
        { name: "当前对战", to: "/battle" },
        { name: "排名总榜", to: "/ranking" },
        { name: "历史记录", to: "/history" },
        { name: "注销", to: "/login" }
      ]
    };
  }
};
</script>

<style scoped>
#sideBar {
  width: 200px;
  height: 82vh;
  border-right: 3vh #e7e7e7 solid;
  background: rgba(0, 137, 117, 1);
}
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #409eff;
  height: 82px;
  border: 1px rgb(133, 133, 133) solid;
  cursor: pointer;
  color: white;
}
</style>
