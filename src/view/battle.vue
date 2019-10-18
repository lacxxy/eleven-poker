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
      <poker-area :card-data="myCardType"></poker-area>
    </div>
    <button id="play" @click="play()">自动出牌</button>
  </div>
</template>

<script>
import pokerArea from "../components/pokerArea.vue";
import Net from "../network";
import api from "../battle";
export default {
  name: "battle",
  components: {
    pokerArea
  },
  data() {
    return {
      cardType: [
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back",
        "back"
      ],
      myCardType: [],
      card: [],
      id: 0
    };
  },
  methods: {
    play() {
      console.log(this.calc())
      Net({
        method: "post",
        url: "/game/submit",
        data: {
          id: this.id,
          card: this.calc()
        }
      })
        .then(res => {
          console.log(res.data);
          alert("已出牌");
          window.location.href = "#/openGame";
        })
        .catch(err => {
          alert("出牌错误");
          console.log(err);
          window.location.href = "#/openGame";
        });
    },
    calc() {
      let card = this.$route.params.card.split(" ");
      let result = [];
      this.card=[];
      card.forEach(item => {
        this.card.push({
          head: item[0],
          flag: item.slice(1),
          num: api.dealNum(item.slice(1))
        });
      });
      this.card.sort((a, b) => {
        return a.num - b.num;
      });
      let func = [
        api.sameFlower(this.card),
        api.straight(this.card),
        api.three(this.card),
        api.double(this.card),
        api.cutSingle(this.card)
      ];
      let flag;
      func.forEach(methods => {
        if (methods) {
          result.push(methods);
        }
      });
      if (this.card.length) {
        result.push(this.card);
      }
      let sendData = api.dealString(result);
      return sendData;
    },
    getCard() {
      this.card = this.$route.params.card;
      this.id = this.$route.params.id;
      this.card = this.card.split(" ");
      this.myCardType = this.card;
      var card1 = this.card[0] + " " + this.card[1] + " " + this.card[2];
      var card2 =
        this.card[3] +
        " " +
        this.card[4] +
        " " +
        this.card[5] +
        " " +
        this.card[6] +
        " " +
        this.card[7];
      var card3 =
        this.card[8] +
        " " +
        this.card[9] +
        " " +
        this.card[10] +
        " " +
        this.card[11] +
        " " +
        this.card[12];
      this.card = [card1, card2, card3];
      for (let i = 0; i < 13; i++) {
        if (this.myCardType[i][0] === "*") {
          this.myCardType[i] = "club_" + this.myCardType[i].slice(1);
        }
        if (this.myCardType[i][0] === "&") {
          this.myCardType[i] = "heart_" + this.myCardType[i].slice(1);
        }
        if (this.myCardType[i][0] === "$") {
          this.myCardType[i] = "spade_" + this.myCardType[i].slice(1);
        }
        if (this.myCardType[i][0] === "#") {
          this.myCardType[i] = "diamond_" + this.myCardType[i].slice(1);
        }
      }
    }
  },
  created() {
    this.getCard();
  }
};
</script>

<style scoped>
#battle {
  flex: 1;
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
  position: relative;
  padding: 10px;
}
#head {
  display: flex;
  width: 100%;
  justify-content: center;
}
#mid {
  width: 100%;
  width: calc(100% - 20px);
  position: absolute;
  top: 25%;
  display: flex;
  justify-content: space-between;
}
#tail {
  width: 100%;
  display: flex;
  width: calc(100% - 20px);
  justify-content: center;
  position: absolute;
  bottom: calc(1% + 53px);
}
.pokerArea {
  width: 18%;
}
#play {
  width: 136px;
  height: 38px;
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
