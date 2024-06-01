<template>
  <router-view :gameTotal="gameTotal"></router-view>
</template>


<script>
import mainView from '@/components/mainView.vue';
import gameLibrary from "@/components/gameLibrary.vue";
import ranking from "@/components/ranking.vue";
import gameDetail from "@/components/gameDetail.vue";
import searchForMainView from "@/components/searchForMainView.vue";

export default {
  name: 'App',
  components: {
    mainView,
    gameLibrary,
    ranking,
    gameDetail,
    searchForMainView,
  },
  data() {
    return {
      gameTotal: [
        {
          bestScoreInGame:0,
          gameIntroduce:"益智游戏，今日你2048了吗",
          gameName:"2048",
          gamePlayTime:10.0,
          gameRecommendationScore:4.2,
          id:1,
          n:1,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"自定义主题，通勤娱乐优选",
          gameName:"羊了个羊",
          gamePlayTime:13.0,
          gameRecommendationScore:3.8,
          id:2,
          n:1,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"回味童年经典",
          gameName:"飞机大战",
          gamePlayTime:7.3,
          gameRecommendationScore:4.9,
          id:3,
          n:1,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"趣味肉鸽现在开始！！",
          gameName:"肉鸽魔塔",
          gamePlayTime:6.3,
          gameRecommendationScore:4.5,
          id:4,
          n:1,
        },
      ],
    }
  },
  methods:{
    updateGameTime(id,time) {
      this.gameTotal[id-1].gamePlayTime+=time/3600.0;
      this.$forceUpdate();
    },
    updateGameScore(id,score) {
      this.gameTotal[id-1].gameRecommendationScore=score;
      this.$forceUpdate();
    }
  }
}
</script>
