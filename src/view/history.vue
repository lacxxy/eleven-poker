<template>
  <div id="history">
    <div id="content">
      <div id="content-top"></div>
      <div id="content-list">
        <table>
          <tr>
            <th>牌局ID</th>
            <th>用户</th>
            <th>分数</th>
          </tr>
          <tr v-for="item in items">
            <td>{{ item.id }}</td>
            <td>031702637</td>
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
import Net from "../network";
import { request } from "http";
export default {
  name: "history",
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
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
      Net({
        method: "get",
        url: "/history",
        params: {
          player_id: 80,
          limit: 7,
          page: this.page - 1
        }
      })
        .then(res => {
          this.items = res.data;
          console.log(this.items);
          // alert("查询成功");
        })
        .catch(err => {
          alert("查询错误");
          console.log(err);
        });
      console.log(this.page);
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
      Net({
        method: "get",
        url: "/history",
        params: {
          player_id: 80,
          limit: 7,
          page: this.page - 1
        }
      })
        .then(res => {
          this.items = res.data;
          console.log(this.items);
          // alert("查询成功");
        })
        .catch(err => {
          alert("查询错误");
          console.log(err);
        });
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
      Net({
        method: "get",
        url: "/history",
        params: {
          player_id: 80,
          limit: 7,
          page: this.page - 1
        }
      })
        .then(res => {
          this.items = res.data;
          console.log(this.items);
          // alert("查询成功");
        })
        .catch(err => {
          alert("查询错误");
          console.log(err);
        });
    }
  },
  mounted() {
    Net({
      method: "get",
      url: "/history",
      params: {
        player_id: 80,
        limit: 7,
        page: this.page - 1
      }
    })
      .then(res => {
        this.items = res.data;
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
#history {
  flex: 1;
  background: url("../assets/background.jpg") no-repeat;
  background-size: cover;
}
#content {
  margin: 2% auto;
  width: 38%;
  height: 96%;
  background: url("../assets/ranking.jpg") no-repeat;
  background-size: 100% 95%;
}
#content-top {
  width: 100%;
  height: 30%;
  background: url("../assets/history-top.jpg") no-repeat;
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
}
td {
  padding-left: 12%;
}
#content-bottom {
  padding: 10% 34%;
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
img,
#page {
  float: left;
}
</style>
