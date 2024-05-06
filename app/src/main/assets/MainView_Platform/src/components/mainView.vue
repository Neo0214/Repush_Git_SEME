<template>
  <button @click="getGameData()">Test Select</button>
  <button @click="updateGameTime()">UpdateTime Test</button>

  <button @click="open2048()">2048</button>
  <button @click="openplane()">plane</button>
  <button @click="opensheep()">sheep</button>

  <button @click="openpersonal()">personal</button>

<!-- 底部导航栏-->
  <bar></bar>
</template>

<script>

// import NewsDetails from './NewsDetails.vue';
import Bar from './bar.vue'

export default {
  components: {
     bar:Bar,
  },

  data() {
    return {
      ok: '',
    }
  },

  methods: {
    getGameData() {
      window.Android.getOneGameInfo(1); // 获取 id 为 1 的游戏数据
    },
    updateGameTime(){
      window.Android.UpdateGameTime(1,0.5)
    },
    handleItemData(data) {
      try {
        const item = JSON.parse(data); // 解析 JSON 数据
        console.log("Game: " + item.gameName + "\nIntroduction: " + item.gameIntroduce);
      } catch (e) {
        console.error("Error parsing JSON: ", e);
        alert("Error parsing JSON: " + e.message); // 显示解析错误
      }
    },

    //打开链接的页面
    openLink(url) {
      window.open(url, '_blank');
    },
    //跳转到2048游戏
    open2048() {
      this.openLink('../../public/2048/index.html');
      // this.$router.push('/2048');
    },
    //跳转到飞机大战游戏
    openplane() {
      this.openLink('../../public/plane/index1.html');
      // this.$router.push('/plane');
    },
    //跳转到羊了个羊游戏
    opensheep() {
      this.openLink('../../public/sheep/index.html');
    },
    //跳转到个人游戏库
    openpersonal() {
      this.openLink('/personal');
      // this.$router.push('/personal');
    },


  },

}

</script>

<style scoped>

</style>