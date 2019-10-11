<template>
    <div id="register">
        <div id="input-area">
            <p>注册</p>
            <input type = "text" placeholder = "用户名" v-model = "registerForm.uesrname">
            <input type = "text" placeholder = "密码" v-model = "registerForm.password">
            <button @click = "register()">确认</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
    name: "register",
    data() {
        return {
            loginForm: {
                uesrname: '',
                password: ''
            },
            userToken: ''
        }
    },
    methods: {
        // ...mapMutations(['changeregister']),
        register() {
            let _this = this;
            if(this.uesrname === '' || this.password === '') {
                alert('账号或密码不能为空');
            } else {
                axios({
                    method: 'post',
                    url: 'https://api.shisanshui.rtxux.xyz/auth/register',
                    data: _this.registerForm
                }).then(res => {
                    console.log(res.data);
                    _this.userToken = 'Bearer' + res.data.token;
                    //将用户的token保存到vue中
                    _this.changeregister({ Authorization: _this.userToken});
                    _this.$router.push('/battle');
                    alert('登陆成功');
                }).catch(err => {
                    alert('账号或密码错误');
                    console.log(err);
                })
            }
            // axios.get('http://shisanshui.rtxux.xyz/auth/login',{'uesrname': 'test', 'password': 'test', 'X-Auth-Token':'{$$.env.X-Auth-Token}'}).then(function(res){
            //     console.log(res)
            // }).catch(function(err){
            //     console.log(err)
            // })
        }
    }
};
</script>

<style scoped>
#register {
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
