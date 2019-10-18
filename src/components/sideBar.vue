<template>
  <div id="sideBar">
    <!-- <div class="block" v-for="item in routerData" @click="$router.push(item.to)">{{item.name}}</div> -->
    <div class="block" @click="$router.push(routerData[0].to)">{{ routerData[0].name }}</div>
    <div class="block" @click="$router.push(routerData[1].to)">{{ routerData[1].name }}</div>
    <div class="block" @click="$router.push(routerData[2].to)">{{ routerData[2].name }}</div>
    <div class="block" @click="$router.push(routerData[3].to)">{{ routerData[3].name }}</div>
    <div class="block" @click="logout()">{{ routerData[4].name }}</div>
  </div>
</template>

<script>
import { METHODS } from "http";
import Net from "../network";
export default {
  name: "sideBar",
  data() {
    return {
      routerData: [
        { name: "当前对战", to: "/opengame" },
        { name: "排名总榜", to: "/ranking" },
        { name: "历史记录", to: "/history" },
        { name: "查询历史战局详情", to: "/search"},
        { name: "注销", to: "/login" }
      ]
    };
  },
  methods: {
    logout() {
      if (!localStorage.Authorization) {
        alert("未登录");
        window.location.href = "#/login";
        return;
      }
      else{
        Net({
        method: "post",
        url: "/auth/logout"
      })
        .then(res => {
          alert("注销成功");
          window.location.href = "#/login";
        })
        .catch(err => {
          alert("注销失败");
          console.log(err.data);
        });
        localStorage.Authorization = ''
        localStorage.username = ''
        localStorage.player_id = ''
      }
    }
  }
};
</script>

<style scoped>
#sideBar {
  width: 200px;
  height: calc(100vh - 170px);
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
