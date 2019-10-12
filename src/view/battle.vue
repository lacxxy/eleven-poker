<template>
    <div id="battle">
        <div id="head">
            <poker-area :card-data="cardType"></poker-area>
        </div>

        <div id="mid">
            <poker-area :card-data="cardType"></poker-area>
            <poker-area :card-data="cardType"></poker-area>
        </div>

        <div id="tail">
            <poker-area :card-data="cardType"></poker-area>
        </div>
        <button id="play" @click= "play()">出牌</button>
    </div>
</template>

<script>
import pokerArea from "../components/pokerArea.vue";
import Net from '../network'
export default {
  name: "battle",
  components: {
    pokerArea
  },
  data() {
    return {
      cardType: [
        "heart_12",
        "back",
        "heart_12",
        "heart_12",
        "heart_12",
        "club_2",
        "club_2",
        "club_2",
        "club_2",
        "back",
        "club_2",
        "club_2",
        "back",
      ],
      card: ["#3 &Q *Q", "*2 $2 *9 $9 &A", "*5 *6 *10 *K *A"]
    };
  },
  methods: {
    play(){
      Net({
        method: "post",
        url: "/game/submit"
      })
        .then(res => {
          console.log(res.data);
          alert("出牌成功");
        })
        .catch(err => {
          alert("出牌错误");
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
#battle {
  flex: 1;
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
  position: relative;
}
#head{
    display: flex;
    width: 100%;
    justify-content: center;
}
#mid {
  width: 100%;
  position: absolute;
  top: 25%;
  display: flex;
  justify-content: space-between;
}
#tail{
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: calc(1% + 53px)
}
.pokerArea {
  width: 18%;
}
#play {
  width: 136px;
  height: 43px;
  background: rgba(64, 158, 255, 1);
  position: absolute;
  bottom: 1%;
  left: calc(50% - 68px);
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
