<template>
  <!--详情页表头图片 -->
  <div class="PhotoBox" :style="{ backgroundImage: `url(${returnGameBigImgUrl(gamePresent.gameName)})`,}">
    <div class="maskBox"></div>
  </div>
  <div class="mainBox" style="position: relative;top:-12vw;left:-8.5vw">
    <!--  游戏框  -->
    <el-row :gutter="30">
      <el-col :span="6" style="position: relative;left:4vw;top:4vw;">
        <img class="presentGameLogo" :src="returnGameImgUrl(gamePresent.gameName)" alt="简介小图">
      </el-col>
      <el-col :span="10" >
        <div class="presenttextBox">
          <h2 class="presentGameName">{{gamePresent.gameName}}</h2>
          <p class="presentGameIntro">{{ gamePresent.gameIntroduce }}</p>
        </div>
      </el-col>
      <el-col :span="8" style="position: relative;left:-10vw;top:2vw">
        <a class="rateNum">{{gamePresent.gameRecommendationScore}}</a>
        <el-rate
            v-model="gamePresent.gameRecommendationScore" size="large"
            disabled text-color="#ff9900"
            class="scorerRate"
            style="position: relative;"
        />
      </el-col>
    </el-row>
    <!--  排行榜状态  -->
    <div class="rankingBox" style="position: relative;top:6vw;left:5vw">
      <el-row :gutter="30" style="position: relative;left:8vw;top:4vw;">
        <el-col :span="8" >
          <p class="rankingNum">#{{this.returnScoreRank(gamePresent.id)}}</p>
          <a class="rankingText">热度榜</a>
        </el-col>
        <el-col :span="8" >
          <p class="rankingNum">#{{this.returnTimeRank(gamePresent.id)}}</p>
          <a class="rankingText">时长榜</a>
        </el-col>
        <el-col :span="8" >
          <p class="rankingNum">#{{this.returnTotalRank(gamePresent.id)}}</p>
          <a class="rankingText">综合榜</a>
        </el-col>
      </el-row>
    </div>
    <!-- 简介框-->
    <div style="position: relative;top:10vw;left:5vw">
      <p class="gameIntroText1">游戏简介</p>
      <a class="gameIntroText2">{{gamePresent.gameIntroduce}}</a>
    </div>
    <!--  评分框  -->
    <div class="scoreBox" style="position: relative;top:15vw;left:5vw">
      <div style="position: relative;top:2vw;left:3vw">
        <a class="scoreText">点击星星进行评分：</a>
        <el-rate v-model="value" size="large" allow-half class="rankingStar" @click="makeScore()" />
      </div>
    </div>
    <!--下部按钮框-->
    <div class="returnBox" style="position: relative;top:21vw;">
      <!--返回按钮-->
      <el-row :gutter="20" style="position: relative;top:6vw;left:6vw">
        <el-col :span="3">
          <img :src="'/imgForMain/返回.png'" class="iconForReturn">
        </el-col>
        <el-col :span="15" style="position: relative;top:1vw;left:0vw">
          <a class="returnText" @click="returnMainView()">返回推荐页</a>
        </el-col>
        <el-col :span="6" style="position: relative;top:-1vw;left:0vw">
          <img :src="'/imgForMain/return.png'" class="returnImg" @click="returnMainView()">
        </el-col>
      </el-row>

      <el-row :gutter="20" style="position: relative;top:6vw;left:6vw">
        <el-col :span="3">
          <img :src="'/imgForMain/刷新.png'" class="iconForReturn">
        </el-col>
        <el-col :span="15" style="position: relative;top:1vw;left:0vw">
          <a class="returnText" @click="returnRanking()">跳转排行榜</a>
        </el-col>
        <el-col :span="6" style="position: relative;top:-1vw;left:0vw">
          <img :src="'/imgForMain/return.png'" class="returnImg" @click="returnRanking()">
        </el-col>
      </el-row>

      <el-row :gutter="20" style="position: relative;top:6vw;left:6vw">
        <el-col :span="3">
          <img :src="'/imgForMain/进入.png'" class="iconForReturn">
        </el-col>
        <el-col :span="15" style="position: relative;top:1vw;left:0vw">
          <a class="returnText" @click="returnGameLibrary()">进入游戏库</a>
        </el-col>
        <el-col :span="6" style="position: relative;top:-1vw;left:0vw">
          <img :src="'/imgForMain/return.png'" class="returnImg" @click="returnGameLibrary()">
        </el-col>
      </el-row>
      <!--游玩按钮-->
      <div style="position: relative;top:6vw;left:30vw">
        <el-button :type="'primary'" class="playButton"  @click="openGame(item.gameName)" text bg>游玩</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import router from "@/router/index.js";
import ranking from "@/components/ranking.vue";
import { ref } from 'vue'

export default {
  props:['gameTotal'],
  name: "gameDetail",

  created() {
    const queryString = this.$route.query.data;
    if (queryString) {
      const decodedString = decodeURIComponent(queryString.replace(/%/g, '%25'));
      this.gameId=JSON.parse(decodedString);
      // console.log(this.gameId);
    }
    this.gamePresent=this.gameTotal[this.gameId-1];
    console.log(this.gamePresent);
  },

  data() {
    return {
      rankingGameList: [],
      gameId:-1,
      gamePresent:{},
      value:0,
    }
  },

  methods:{
    //打开链接的页面
    openLink(url){
      window.open(url, '_blank');
    },
    //跳转到游戏
    openGame(gameName){
      let gameUrl;
      if(gameName==="肉鸽魔塔")
        gameUrl='101.43.38.150:1055';   //肉鸽小游戏的网址
      else
        gameUrl='/'+ (String)(gameName) +'/index.html';
      this.openLink(gameUrl);
    },
    //返回游戏对应图片路径
    returnGameImgUrl(gameName){
      return '/imgForMain/'+ (String)(gameName) +'.png';
    },
    //返回游戏对应图片路径
    returnGameBigImgUrl(gameName){
      return '/imgForMain/'+ (String)(gameName) +'Big.png';
    },
    returnRank(id){
      for(let i=0;i<this.rankingGameList.length;i++){
        if(id===this.rankingGameList[i].id){
          return i+1;
        }
      }
    },
    returnScoreRank(id) {
      this.rankingGameList=JSON.parse(JSON.stringify(this.gameTotal));
      this.rankingGameList.sort((a, b) => b.gameRecommendationScore - a.gameRecommendationScore);
      return this.returnRank(id);
    },
    returnTimeRank(id) {
      this.rankingGameList=JSON.parse(JSON.stringify(this.gameTotal));
      this.rankingGameList.sort((a, b) => b.gamePlayTime - a.gamePlayTime);
      return this.returnRank(id);
    },
    returnTotalRank(id) {
      this.rankingGameList=JSON.parse(JSON.stringify(this.gameTotal));
      this.rankingGameList.sort((a, b) => b.gameRecommendationScore*b.gamePlayTime - a.gameRecommendationScore*a.gamePlayTime);
      return this.returnRank(id);
    },
    //返回主页面
    returnMainView(){
      this.$router.push('/mainView');
    },
    //返回排行榜
    returnRanking(){
      this.$router.push('/ranking');
    },
    //返回游戏库
    returnGameLibrary(){
      this.$router.push('/gameLibrary');
    },
    //评分
    makeScore(){
      // console.log(this.value);
      this.gameTotal[this.gamePresent.id-1].gameRecommendationScore=(
          (this.gameTotal[this.gamePresent.id-1].gameRecommendationScore*this.gameTotal[this.gamePresent.id-1].n
              +this.value)/(this.gameTotal[this.gamePresent.id-1].n+1)).toFixed(1);
      this.gameTotal[this.gamePresent.id-1].n++;
    }
  },
}
</script>

<style scoped>
.PhotoBox{
  width: 100vw;
  height: 60vw;
  flex-shrink: 0;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  position: relative;
  left:-8.5vw;
  top:-9vw;
}

.maskBox{
  width: 100vw;
  height: 28vw;
  flex-shrink: 0;
  background-image: linear-gradient(180deg, rgba(46, 64, 82, 0.00) 0%, #2C3F51 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 5px;
}

.mainBox{
  width: 100vw;
  height: 160vw;
  flex-shrink: 0;
  border-radius: 15px 15px 0px 0px;
  background: linear-gradient(180deg, #618AC7 0%, #2F4361 100%);
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
}

.presentGameLogo{
  width: 18vw;
  height: 18vw;
  border-radius: 10px;
}

.presenttextBox{
  position: relative;
  left:-2vw;
  top:6vw;
}

.presentGameName{
  color: #FFF;
  font-family: "PingFang SC";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}

.presentGameIntro{
  color: #9ECBFF;
  font-family: "PingFang SC";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
  position: relative;
  top:2vw;
}

.rateNum{
  flex-shrink: 0;
  color: #FFF;
  font-family: "PingFang SC";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  top:3vw;
  left:10vw;
}

.rankingBox{
  width: 90vw;
  height: 25vw;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.60);
  backdrop-filter: blur(42px);
}

.rankingNum{
  color: #FFF;
  font-family: "PingFang SC";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.rankingText{
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  position: relative;
  left:-3vw;
}

.gameIntroText1{
  color: #FFF;
  font-family: "PingFang SC";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.gameIntroText2{
  color: #C9C9C9;
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  top:1vw;
  left:-1vw;
}

.scoreBox{
  width: 90vw;
  height: 15vw;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.60);
  backdrop-filter: blur(42px);
}

.scoreText{
  color: #C9C9C9;
  font-family: "PingFang SC";
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.rankingStar{
  position: relative;
  top:0.5vw;
  left:5vw
}

.returnBox{
  width: 100vw;
  height: 64vw;
  flex-shrink: 0;
  border-radius: 16px 16px 0px 0px;
  background: rgba(185, 221, 255, 0.84);
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25), 1px 1px 1px 0px rgba(255, 255, 255, 0.40) inset, 0px 12px 24px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
}

.iconForReturn{
  width: 32px;
  height: 32px;
  line-height: normal;
}

.returnText{
  color: #19191A;
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.returnImg{
  width: 20px;
  height: 40px;
  flex-shrink: 0;
}

.playButton{
  width: 40vw;
  height: 12vw;
  flex-shrink: 0;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
}

</style>