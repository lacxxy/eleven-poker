<template>
  <div id="opengame">
    <button id="open" @click="open()">开启或进入战局</button>
  </div>
</template>

<script>
import Net from "../network";
export default {
  name: "openGame",
  methods: {
    open() {
      Net({
        method: "post",
        url: "/game/open"
      })
        .then(res => {
          console.log(res.data);
          // alert("开启或加入战局成功");
          this.$router.push({
            name: 'battle',
            params: res.data
          })
          // window.location.href = "#/battle";
        })
        .catch(err => {
          if (localStorage.Authorization) {
            alert("开启或加入战局错误");
            console.log(err);
          }
        });
    }
  }
};
</script>

<style scoped>
#opengame {
  flex: 1;
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
  position: relative;
}
#open {
  width: 200px;
  height: 60px;
  background: rgba(64, 158, 255, 1);
  position: absolute;
  bottom: 20%;
  left: calc(50% - 68px);
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
