<template>
  <div id="search">
    <div id="head">
      <poker-area :card-data="card[0]"></poker-area>
      <div id="card1">
        <p>用户名：{{ name[0] }}</p>
        <p>用户ID：{{ player_id[0] }}</p>
        <p>得分：{{ score[0] }}</p>
      </div>
    </div>

    <div id="mid">
      <poker-area :card-data="card[1]"></poker-area>
      <div id="card2">
        <p>用户名：{{ name[1] }}</p>
        <p>用户ID：{{ player_id[1] }}</p>
        <p>得分：{{ score[1] }}</p>
      </div>
      <poker-area :card-data="card[2]"></poker-area>
      <div id="card3">
        <p>用户名：{{ name[2] }}</p>
        <p>用户ID：{{ player_id[2] }}</p>
        <p>得分：{{ score[2] }}</p>
      </div>
    </div>

    <div id="tail">
      <poker-area :card-data="card[3]"></poker-area>
      <div id="card4">
        <p>用户名：{{ name[3] }}</p>
        <p>用户ID：{{ player_id[3] }}</p>
        <p>得分：{{ score[3] }}</p>
      </div>
    </div>
    <input type="text" placeholder="请输入战局id" v-model="id" />
    <button id="play" @click="play()">查询</button>
  </div>
</template>

<script>
import pokerArea from "../components/pokerArea.vue";
import Net from "../network";
export default {
  name: "search",
  components: {
    pokerArea
  },
  data() {
    return {
      card: [
        [
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
        [
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
        [
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
        [
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
        ]
      ],
      score: [],
      name: [],
      player_id: [],
      id: ""
    };
  },
  methods: {
    play() {
      Net({
        method: "get",
        url: "/history/" + this.id
      })
        .then(res => {
          console.log(res);
          alert("查询成功");
          for (let i = 0; i < 4; i++) {
            this.name[i] = res.data.detail[i].name;
            this.score[i] = res.data.detail[i].score;
            this.player_id[i] = res.data.detail[i].player_id;
            this.card[i] = res.data.detail[i].card.join(" ").split(" ");
            for (let j = 0; j < 13; j++) {
              if (this.card[i][j][0] === "*") {
                this.card[i][j] = "club_" + this.card[i][j].slice(1);
              }
              if (this.card[i][j][0] === "&") {
                this.card[i][j] = "heart_" + this.card[i][j].slice(1);
              }
              if (this.card[i][j][0] === "$") {
                this.card[i][j] = "spade_" + this.card[i][j].slice(1);
              }
              if (this.card[i][j][0] === "#") {
                this.card[i][j] = "diamond_" + this.card[i][j].slice(1);
              }
            }
          }
          this.id = "";
        })
        .catch(err => {
          if (localStorage.Authorization != "") {
            alert("查询错误");
            console.log(err);
            this.id = "";
          }
        });
    }
  }
};
</script>

<style scoped>
#search {
  flex: 1;
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
  position: relative;
}
#head {
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
#tail {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(1% + 53px);
}
.pokerArea {
  width: 18%;
}
input {
  width: 10%;
  height: 43px;
  position: absolute;
  bottom: 1%;
  left: 34.55%;
  font-size: 15px;
  border-radius: 5px;
}
#play {
  width: 10%;
  height: 43px;
  background: rgba(64, 158, 255, 1);
  position: absolute;
  bottom: 1%;
  left: 45%;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
}
#card1,
#card2,
#card3,
#card4 {
  color: white;
}
#card2 {
  position: absolute;
  left: 20%;
}
#card3 {
  position: absolute;
  right: 20%;
}
</style>
