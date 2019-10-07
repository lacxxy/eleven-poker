<template>
    <div id="history">
        <div id="content">
            <div id="content-top"></div>
            <div id="content-list">
                <ul id="record">
                    <li>1111111111</li>
                    <li>2222222222222</li>
                    <li>333333333333333</li>
                    <li>4</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                    <li>5</li>
                </ul>
            </div>
            <div id="content-bottom">
                <div class='last-page'>
                    <img src="../assets/last-page.jpg" alt="上一页">
                </div>
                <ul id="page">
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
    name:'history'
}
</script>

<style scoped>
#history{
    flex:1;
    background: url('../assets/background.jpg')no-repeat;
    background-size: cover;
}
#content {   
    margin: 4% auto 0;
    width: 38%;
    height: 96%;
    background: url('../assets/ranking.jpg')no-repeat;
    background-size: 100% ;
}
#content-top {
    width: 100%;
    height: 30%;
    background: url('../assets/history-top.jpg')no-repeat;
    background-size: 100% 100%;
}
#content-list{
    width: 80%;
    margin: auto;
}
#record {
    list-style-type: none;
    background-image: url('../assets/line.jpg') no-repeat;
    background-position:0px 5px; 
}
#content-bottom {
    padding: 10% 34%;
}
#page li{
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
img,#page,select {
    float: left;
}
</style>
