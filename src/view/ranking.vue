<template>
    <div id="ranking">
        <div id="content">
            <div id="content-top"></div>
            <div id="content-rank">
                <table>
                    <tr>
                        <th>RANK</th>
                        <th>用户</th>
                        <th>分数</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>林铮威</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>陈郑华</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>10000000086</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>陈郑华</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>1</td>
                        <td>100</td>
                    </tr>
                </table>
            </div>
            <div id="content-bottom">
                <div class='last-page'>
                    <img src="../assets/last-page.jpg" alt="上一页">
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <div id="next-page">
                    <img src="../assets/next-page.jpg" alt="下一页">
                </div>
                <div id="select">
                    <select></select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ranking'
}
</script>

<style scoped>
#ranking {
    flex:1;
    background: url('../assets/background.jpg')no-repeat;
    background-size: cover;
}
#content {   
    margin: 2% auto;
    width: 38%;
    height: 96%;
    background: url('../assets/ranking.jpg')no-repeat;
    background-size: 100% 95%;
}
#content-top {
    width: 100%;
    height: 30%;
    background: url('../assets/ranking-top.jpg')no-repeat;
    background-size: 100% 100%;
}
#content-rank{
    width: 80%;
    margin: auto;
}
table {
    width: 100%;
    color: #ffffff;
}   
tr {
    line-height:200%;
    background: url('../assets/line.jpg')no-repeat;
    background-position:  bottom; 
    background-size: 90%;
}
th,td {
    width: 33.33%;
}
td {
    padding-left: 12%;
}
#content-bottom {
    padding: 10% 34%;
}
ul li{
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
img,ul,select {
    float: left;
}
</style>
