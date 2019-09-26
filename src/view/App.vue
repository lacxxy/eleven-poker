<template>
    <div id="app">
        <v-head></v-head>
        <router-view></router-view>
    </div>
</template>

<script>
import vHead from '../components/vHead.vue';
export default {
  name: "app",
  components:{
      vHead
  },
  data() {
      return{
          
      }
  }
};
</script>

<style>
</style>
