<template>
  <!--顶部搜索+用户头像-->
  <div style="position: relative; left:-6vw;top:-7vw;width:100vw">
    <el-container>
      <el-main style="position: relative; left:-3vw;">
        <!-- 搜索栏 -->
        <el-input class="search search-model" v-model="searchInput" placeholder=" 搜索我的游戏">
          <template v-slot:prepend>
            <el-button icon="Search" @click="search"></el-button>
          </template>
        </el-input>
      </el-main>
      <el-aside width="15%" style="position: relative; left:-6vw;top:4vw">
        <!--搜索栏旁头像-->
        <img :src="'/imgForMain/person.png'" class="imgPerson">
      </el-aside>
    </el-container>
  </div>
  <!--分割线1-->
  <el-divider style="position: relative; top:-15vw" />

  <div style="position: relative; top:-10vw;left:0vw">
    <el-row :gutter="20" v-for="item in filteredGameList">
      <el-col>
        <div style="position: relative;top:-17vw;left:-5vw">
          <div class="itemBox" @click="openGame(item.gameName)">
            <!--上部图片-->
            <el-row :gutter="20">
              <el-col :span="24">
                <img :src="returnGameBigImgUrl(item.gameName)" class="itemImg">
              </el-col>
            </el-row>
            <!--下部简介-->
            <el-row :gutter="20" class="itemIntro">
              <el-col :span="18">
                <h2 class="itemGamename">{{item.gameName}}</h2>
                <p class="itemGameIntro">{{item.gameIntroduce}}</p>
              </el-col>
              <el-col :span="3" style="position: relative;left:-3vw">
                <img :src="'/imgForMain/score.png'" class="imgsvg">
                <p class="textsvg">{{item.gameRecommendationScore}}</p>
              </el-col>
              <el-col :span="3" style="position: relative;left:-3vw">
                <img :src="'/imgForMain/time.png'" class="imgsvg">
                <p class="textsvg">{{item.gamePlayTime}}h</p>
              </el-col>
            </el-row>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>

  <bar></bar>

</template>

<script>

import Bar from "@/components/bar.vue";

export default {
  name: "gameLibrary",

  components: {
    bar:Bar,
  },
  mounted() {
    this.filteredGameList = this.myGameList;
  },

  data() {
    return {
      searchInput: '',    //搜索框的内容

      myGameList:[
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
          gameIntroduce:"趣味肉鸽现在开始！！",
          gameName:"肉鸽魔塔",
          gamePlayTime:6.3,
          gameRecommendationScore:9.5,
          id:4,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"酷跑快跑！！！",
          gameName:"天天酷跑",
          gamePlayTime:9.9,
          gameRecommendationScore:9.6,
          id:5,
        }
      ],
      filteredGameList: []
    }
  },

  methods: {
    //搜索
    search() {
      this.filteredGameList = this.myGameList.filter(game => {
        return game.gameName.includes(this.searchInput) || game.gameIntroduce.includes(this.searchInput);
      });
    },

    //打开链接的页面
    openLink(url) {
      window.open(url, '_blank');
    },

    //跳转到游戏
    openGame(gameName){
      let gameUrl;
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
  },
}
</script>

<style scoped>
.itemBox{
  width: 90vw;
  height: 75vw;
  flex-shrink: 0;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10vw;
  border-radius: 10px;
}


.itemImg{
  width: 90vw;
  height: 56vw;
  flex-shrink: 0;
  border-radius: 10px 10px 0px 0px;
}

.itemIntro{
  width: 335px;
  height: 70px;
  flex-shrink: 0;
  fill: #FAFAFA;
  position: relative;
  left:3vw;
  top:2vw;
}

.itemGamename{
  color: #5F5F5F;
  font-family: "PingFang SC";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.itemGameIntro{
  color: #000;
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.5;
}

.imgsvg{
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  stroke-width: 1.5px;
  stroke: #4B4848;
}

.textsvg{
  width: 27px;
  height: 24px;
  flex-shrink: 0;
  color: #494949;
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  position: relative;
  top:-1vw;
}
</style>