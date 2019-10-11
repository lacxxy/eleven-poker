<template>
    <div class="poker">
        <img :src="imgSrc">
    </div>
</template>

<script>
export default {
    name:'poker',
    props:{
        cardType:{
            require:true,
            type:String
        }
    },
    computed:{
        imgSrc(){
            return require(`../assets/poker/${this.cardType}.png`)
        }
    },
    methods:{

    }
};
</script>
<style scoped>
.poker{
    display: inline-block;
    width: 20%;
}
img{
    width: 100%;
    height: auto;
}
</style>

