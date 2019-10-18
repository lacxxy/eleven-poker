<template>
  <div id="ranking">
    <div id="content">
      <div id="content-top"></div>
      <div id="content-list">
        <table>
          <tr>
            <th>用户</th>
            <th>用户ID</th>
            <th>分数</th>
          </tr>
          <tr v-for="item in items">
            <td>{{ item.name }}</td>
            <td>{{ item.player_id }}</td>
            <td>{{ item.score }}</td>
          </tr>
        </table>
      </div>
      <div id="content-bottom">
        <div class="last-page">
          <img src="../assets/last-page.jpg" alt="上一页" @click="lastPage()" />
        </div>
        <ul id="page">
          <li v-for="(page,index) in pages" @click="jump(index)" ref="n">{{ page }}</li>
        </ul>
        <div id="next-page">
          <img src="../assets/next-page.jpg" alt="下一页" @click="nextPage()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { request } from "http";
export default {
  name: "ranking",
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
      rank: [],
      items: [],
      page: 1
    };
  },
  methods: {
    jump(index) {
      for (let i = 0; i < 5; i++) {
        this.$refs.n[i].style.background = "";
      }
      this.$refs.n[index].style.background = "white";
      if(this.page % 5 ===0){
        this.page = this.page - (4 - index)
      }
      else if(this.page % 5 - 1 > index ) {
        this.page = this.page - (this.page % 5 - 1 - index)
      }
      else {
        this.page = this.page + (index - this.page % 5 + 1)
      }
      this.items = this.rank.slice((this.page-1)*7,this.page*7);
      console.log(this.page);
      console.log(this.items)
    },
    lastPage() {
      if (this.page == 1) {
        alert("已经是第一页了");
        return;
      } else if ((this.page-1) % 5 === 0) {
        for (let i = 0; i < 5; i++) {
          this.$refs.n[i].innerHTML = this.page - 5 + i;
        }
      }
      this.page--;
      for (let i = 0; i < 5; i++) {
        this.$refs.n[i].style.background = "";
      }
      if (this.page % 5 === 0) {
        this.$refs.n[4].style.background = "white";
      } else {
        this.$refs.n[(this.page % 5) - 1].style.background = "white";
      }
      console.log(this.page);
      this.items = this.rank.slice((this.page-1)*7,this.page*7);
      console.log(this.items)
    },
    nextPage() {
      for (let i = 0; i < 5; i++) {
        this.$refs.n[i].style.background = "";
      }
      if (this.page % 5 === 0) {
        this.$refs.n[0].style.background = "white";
        for (let i = 0; i < 5; i++) {
          this.$refs.n[i].innerHTML = this.page + i + 1;
        }
      } else {
        this.$refs.n[(this.page % 5)].style.background = "white";
      }
      this.page++;
      console.log(this.page);
      this.items = this.rank.slice((this.page-1)*7,this.page*7);
      console.log(this.items)
    }
  },
  mounted() {
    axios({
      method: "get",
      url: "https://api.shisanshui.rtxux.xyz/rank",
    })
      .then(res => {
        this.rank = res.data;
        this.items = this.rank.slice(this.page-1,this.page+6);
        console.log(this.items);
        // alert("查询成功");
      })
      .catch(err => {
        if (localStorage.Authorization != "") {
          alert("查询错误");
          console.log(err);
        }
      });
    this.$refs.n[0].style.background = "white";
  }
};
</script>

<style scoped>
#ranking {
  flex: 1;
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
}
#content {
  margin: 2% auto;
  width: 38%;
  height: 90%;
  background: url("../assets/ranking.jpg") no-repeat;
  background-size: 100% 95%;
}
#content-top {
  width: 100%;
  height: 30%;
  background: url("../assets/ranking-top.jpg") no-repeat;
  background-size: 100% 100%;
}
#content-list {
  width: 80%;
  margin: auto;
}
table {
  width: 100%;
  color: #ffffff;
}
tr {
  line-height: 200%;
  background: url("../assets/line.jpg") no-repeat;
  background-position: bottom;
  background-size: 90%;
}
th,
td {
  width: 33.33%;
  overflow: hidden;
  text-align: center
}

#content-bottom {
  display: flex;
  justify-content: center;
}
#page li {
  display: inline;
  font-weight: 400;
  font-size: 12px;
  color: #333333;
  line-height: 12px;
  cursor: pointer;
  padding: 0 2px;
}
img {
  width: 8px;
  height: 8px;
  padding: 8px;
  cursor: pointer;
}
</style>
