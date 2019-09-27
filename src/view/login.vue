<template>
    <div id="login">
        <div id="input-area">
            <p>登录</p>
            <input type="text" placeholder="用户名">
            <input type="text" placeholder="密码">
            <button>确认</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style scoped>
#login {
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
  height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#input-area{
    width: 23%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
}
p{
    color: white;
    font-size:40px;
    font-weight: 800;
}
input{
    height: 48px;
    font-size: 18px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 223, 230);
    border-radius: 4px;
    padding-left: 2%;
}
button{
    width: 60%;
    margin: 0 auto;
    height: 48px;
    font-size: 18px;
    border-width: 0px;
    background:#409eff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}
button:hover{
    background: #2592ff;
}
input::-webkit-input-placeholder {
    color: rgb(207, 207, 207);
}
input:-moz-placeholder {
    color: rgb(207, 207, 207);
}
input:-ms-input-placeholder {
    color: rgb(207, 207, 207);
}
</style>
