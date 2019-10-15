<template>
    <div class="pokerArea">
        <div class="item">
            <poker v-for="item in cardData.slice(0,3)" :cardType="item"></poker>
        </div>
        <div class="item">
            <poker v-for="item in cardData.slice(3,8)" :cardType="item"></poker>
        </div>
        <div class="item">
            <poker v-for="item in cardData.slice(8,13)" :cardType="item"></poker>
        </div>
    </div>
</template>

<script>
import poker from "./poker.vue";
export default {
  name: "pokerArea",
  components: {
    poker
  },
  props: {
    cardData: {
      require: true,
      type: Array
    }
  }
};
</script>

<style scoped>
.item{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
.poker{
    margin:2px;
}
</style>
