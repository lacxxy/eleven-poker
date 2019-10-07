<template>
    <div id="battle">
        <div id="p1"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p2"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p3"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p4"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p5"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p6"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p7"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p8"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p9"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p10"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p11"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p12"><img src="../assets/poker.jpg" alt="十三水"></div>
        <div id="p13"><img src="../assets/poker.jpg" alt="十三水"></div>
        <button id="play">出牌</button>
    </div>
</template>

<script>
export default {
    name:'battle'
}
</script>

<style scoped>
#battle {
    flex:1;
    background: url('../assets/background.jpg')no-repeat;
    background-size: cover;
}
#p1,#p2,#p3,#p4,#p5,#p6,#p7,#p8,#p9,#p10,#p11,#p12,#p13{
    position: absolute;
    width: 124px;
    height: 172px;
}
#p1,#p2,#p3,#p4,#p5 {
    top: 30%;
}
#p6,#p7,#p8,#p9,#p10,#p11,#p12,#p13 {
    top: 55%;
}
#p1 {
    left: 35%;
}
#p2 {
    left: 45%;
}
#p3 {
    left: 55%;
}
#p4 {
    left: 65%;
}
#p5 {
    left:75%;
}
#p6 {
    left: 20%;
}
#p7 {
    left: 30%;
}
#p8 {
    left: 40%;
}
#p9 {
    left: 50%;
}
#p10 {
    left: 60%;
}
#p11 {
    left: 70%;
}
#p12 {
    left: 80%;
}
#p13 {
    left: 90%;
}
img {
    width: 80%;
    height: 80%;
}
#play {
    width: 176px;
    height: 73px;
    background: rgba(64, 158, 255, 1);
    position: absolute;
    bottom: 10%;
    left: 50%;
    color: white;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
}
</style>
