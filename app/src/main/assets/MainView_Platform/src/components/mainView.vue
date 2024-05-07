<template>
  <!--顶部搜索+用户头像-->
  <div style="position: relative; left:-6vw;top:-7vw;width:100vw">
    <el-container>
      <el-main style="position: relative; left:-3vw;">
        <!-- 搜索栏 -->
        <el-input class="search search-model" v-model="searchInput" placeholder=" 请输入搜索关键字">
          <template v-slot:prepend>
            <el-button icon="Search" @click="search"></el-button>
          </template>
        </el-input>
      </el-main>
      <el-aside width="15%" style="position: relative; left:-8vw;">
        <!--搜索栏旁头像-->
        <img :src="'../../public/imgForMain/person.png'" class="imgPerson">
      </el-aside>
    </el-container>
  </div>
  <!--分割线1-->
  <el-divider style="position: relative; top:-15vw" />
  <!--主推荐模块-->
  <div style="position: relative;top:-17vw;left:-3vw">
    <p class="mainForP1">主打推荐</p>
    <p class="mainForP2">{{mainGame.gameName}}</p>
    <p class="mainForP3">休闲益智，娱乐消遣</p>
    <div class="mainGameBox" :style="{ backgroundImage: `url('../../public/imgForMain/test1.png')`,}">
      <!--内嵌的简介-->
      <div class="introBox">
        <el-row :gutter="20" class="introduction">
          <el-col :span="4" style="position: relative;left:2vw;">
            <img class="mainGameLogo" :src="'../../public/imgForMain/test2.png'" alt="简介小图">
          </el-col>
          <el-col :span="16">
            <div class="textBox">
              <h2 class="mainGameName">{{mainGame.gameName}}</h2>
              <p class="mainGameIntro">{{ mainGame.gameIntroduce }}</p>
            </div>
          </el-col>
          <el-col :span="4" style="position: relative;left:-5vw;top:2vw">
            <el-button type="info" round class="button">游玩</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <!--分割线2-->
  <el-divider style="position: relative; top:-18vw" />
  <!--副推荐模块-->
  <div style="position: relative; top:-20vw;left:-3vw">
    <p class="mainForP4">热门游戏推荐</p>
    <el-row :gutter="20" v-for="item in recommandGameList">
      <el-col>
        <!--内嵌的简介-->
        <div class="recommandBox">
          <el-row :gutter="30">
            <el-col :span="6" style="position: relative;left:2vw;">
              <img class="recommandGameLogo" :src="'../../public/imgForMain/test2.png'" alt="简介小图">
            </el-col>
            <el-col :span="14">
              <div class="recommandtextBox">
                <h2 class="recommandGameName">{{item.gameName}}</h2>
                <p class="recommandGameIntro">{{ item.gameIntroduce }}</p>
              </div>
            </el-col>
            <el-col :span="4" style="position: relative;left:-5vw;top:2vw">
              <el-button :type="'primary'" class="recommendbutton" text bg >游玩</el-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>


  <!--测试按钮-->
  <!--    <button @click="getGameData()">Test Select</button>-->
  <!--    <button @click="updateGameTime()">UpdateTime Test</button>-->
  <!--    <button @click="open2048()">2048</button>-->
  <!--    <button @click="openplane()">plane</button>-->
  <!--    <button @click="opensheep()">sheep</button>-->
</template>

<script>

// import NewsDetails from './NewsDetails.vue';
import Bar from './bar.vue'

export default {
  components: {

  },

  data() {
    return {
      mainGame:{
        bestScoreInGame:0,
        gameIntroduce:"益智游戏，今日你2048了吗",
        gameName:"2048",
        gamePlayTime:100.0,
        gameRecommendationScore:9.8,
        id:1,
      },
      recommandGameList:[
        {
          bestScoreInGame:0,
          gameIntroduce:"益智游戏，今日你2048了吗",
          gameName:"2048",
          gamePlayTime:10.0,
          gameRecommendationScore:9.2,
          id:1,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"自定义主题，通勤娱乐优选",
          gameName:"羊了个羊",
          gamePlayTime:13.0,
          gameRecommendationScore:8.8,
          id:2,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"回味童年经典",
          gameName:"飞机大战",
          gamePlayTime:7.3,
          gameRecommendationScore:9.9,
          id:3,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"酷跑快跑！！！",
          gameName:"天天酷跑",
          gamePlayTime:9.9,
          gameRecommendationScore:9.6,
          id:4,
        }
      ],
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
      // this.openLink('/personal');
      this.$router.push('/personal');
    },


  },

}

</script>

<style scoped>
.search-model{
  width: 70vw;
  height: 9vw;
  flex-shrink: 0;
  border-radius: 15px;
  background: #E8E8E8;
}

.imgPerson{
  width: 9vw;
  height: 9vw;
  flex-shrink: 0;
  position: relative;
  left:3vw;
  top:6vw;
}

.mainForP1{
  color: #3478F6;
  font-family: "PingFang SC";
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.mainForP2{
  color: #000;
  font-family: "PingFang SC";
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.mainForP3{
  color: #8A8A8D;
  font-family: "PingFang SC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.mainGameBox{
  width: 88vw;
  height: 56vw;
  flex-shrink: 0;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
}

.introBox{
  width: 88vw;
  height: 28vw;
  flex-shrink: 0;
  background-image: linear-gradient(180deg, rgba(46, 64, 82, 0.00) 0%, #2C3F51 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 5px;
}

.introduction{
  position: absolute;
  bottom: 0;
  left: 0;
}

.mainGameLogo{
  width: 10vw;
  height: 10vw;
  border-radius: 3px;
}

.mainGameName{
  color: #FFF;
  font-family: "PingFang SC";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.mainGameIntro{
  color: #FFF;
  font-family: "PingFang SC";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}

.button{
  width: 70px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 30px;
  opacity: 0.5;
  background: #606060;
  color: #ffffff;
  font-family: "PingFang SC";
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.mainForP4{
  color: #000;
  font-family: "PingFang SC";
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.recommandBox{
  margin-top: 5vw;
  position: relative;
  top:0vw;
  left: -3vw;
}

.recommandGameLogo{
  width: 18vw;
  height: 18vw;
  border-radius: 10px;
}

.recommandtextBox{
  position: relative;
  left:0vw;
  top:3vw;
}

.recommandGameName{
  color: #000;
  font-family: "PingFang SC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}

.recommandGameIntro{
  color: #7F7F81;
  font-family: "PingFang SC";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */

  position: relative;
  top:2vw;
}

.recommendbutton{
  width: 72px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 10px;
  font-weight: 700;
  position: relative;
  top:5vw;
}
</style>