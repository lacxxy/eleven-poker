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
          <img src="../assets/last-page.jpg" alt="上一页" @click= "lastPage()" />
        </div>
        <ul id="page">
          <li class='active'>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>...</li>
        </ul>
        <div id="next-page">
          <img src="../assets/next-page.jpg" alt="下一页" @click= "nextPage()" />
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
      items: [],
      page: 1
    };
  },
  methods: {
    lastPage() {
      if (this.page == "1") {
        alert("已经是第一页了");
        return;
      }
      this.page--;
      console.log(this.page);
      Net({
        method: "get",
        url: "/history",
        params: {
          player_id: 1,
          limit: 7,
          page: this.page
        }
      })
        .then(res => {
          console.log(res.data);
          this.items = res.data.data;
          console.log(this.items);
          alert("查询成功");
        })
        .catch(err => {
          alert("查询错误");
          console.log(err);
        });
    },
    nextPage() {
      this.page++;
      console.log(this.page);
      Net({
        method: "get",
        url: "/history",
        params: {
          player_id: 1,
          limit: 7,
          page: this.page
        }
      })
        .then(res => {
          console.log(res.data);
          this.items = res.data.data;
          console.log(this.items);
          alert("查询成功");
        })
        .catch(err => {
          alert("查询错误");
          console.log(err);
        });
    }
  },
  created() {
    Net({
      method: "get",
      url: "/history",
      params: {
        player_id: 1,
        limit: 7,
        page: this.page
      }
    })
      .then(res => {
        console.log(res.data);
        this.items = res.data.data;
        console.log(this.items);
        alert("查询成功");
      })
      .catch(err => {
        alert("查询错误");
        console.log(err);
      });
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
.active {
    background: #ffffff;
}
</style>
