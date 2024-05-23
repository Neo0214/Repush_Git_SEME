<template>
  <!--排行榜表头图片-->
  <div style="position: relative;left:-7vw;top:-8vw">
    <img :src="'/imgForMain/rankingImg.png'" class="rankingImg">
  </div>
  <!--排行榜主体-->
  <div class="rankingBox" style="position: relative;left:-7vw;top:-12vw">
    <!--排行榜导航-->
    <div class="selector" style="position: relative;left:6vw;top:2vw">
      <ul class="nav-list">
        <li :class="{ active: selected === '口碑榜' }" @click="handleSelect('口碑榜')">
          <span class="rankTypeName">口碑榜</span>
          <div class="indicator" v-if="selected === '口碑榜'"></div>
        </li>
        <li :class="{ active: selected === '时长榜' }" @click="handleSelect('时长榜')">
          <span class="rankTypeName">时长榜</span>
          <div class="indicator" v-if="selected === '时长榜'"></div>
        </li>
        <li :class="{ active: selected === '综合榜' }" @click="handleSelect('综合榜')">
          <span class="rankTypeName">综合榜</span>
          <div class="indicator" v-if="selected === '综合榜'"></div>
        </li>
      </ul>
    </div>
    <!--分割线-->
    <el-divider style="position: relative;top:-5vw"/>
    <!--排行榜内容-->
    <el-row :gutter="20" v-for="(item,index) in rankingGameList">
      <el-col>
        <div class="rankingGameBox" style="position: relative;left:5vw;top:-10vw">
          <el-row :gutter="20">
            <!--排行榜序号-->
            <el-col :span="4">
              <div class="rankingNum">
                <div class="rankingNumtext" style="position: relative;left:3vw;top:3vw">
                  {{index+1}}
                </div>
              </div>
            </el-col>
            <!--排行榜内容-->
            <el-col :span="4" style="position: relative;left:-1vw;top:-2vw">
              <img class="rankingGameLogo" :src="returnGameImgUrl(item.gameName)" alt="简介小图">
            </el-col>
            <el-col :span="8" style="position: relative;left:0vw;">
              <div>
                <h2 class="rankingGameName">{{item.gameName}}</h2>
                <!--简介-->
                <el-rate
                    v-model="item.gameRecommendationScore" size="large"
                    disabled show-score text-color="#ff9900" score-template="{value}"
                    class="scorerRate"
                />
              </div>
            </el-col>
            <el-col :span="8" style="position: relative;left:-4vw;top:-6.5vw">
              <el-button :type="'primary'" class="rankingbutton"  @click="openGame(item.gameName)" text bg>游玩</el-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

  </div>
<bar></bar>
</template>


<script>
import Bar from "@/components/bar.vue";

export default {
  name: "ranking",

  components: {
    bar:Bar,
  },

  data() {
    return {
      selected: '口碑榜', // 默认选中的选项

      rankingGameList:[
        {
          bestScoreInGame:0,
          gameIntroduce:"益智游戏，今日你2048了吗",
          gameName:"2048",
          gamePlayTime:10.0,
          gameRecommendationScore:4.2,
          id:1,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"自定义主题，通勤娱乐优选",
          gameName:"羊了个羊",
          gamePlayTime:13.0,
          gameRecommendationScore:3.8,
          id:2,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"回味童年经典",
          gameName:"飞机大战",
          gamePlayTime:7.3,
          gameRecommendationScore:4.9,
          id:3,
        },
        {
          bestScoreInGame:0,
          gameIntroduce:"酷跑快跑！！！",
          gameName:"天天酷跑",
          gamePlayTime:9.9,
          gameRecommendationScore:4.6,
          id:4,
        }
      ],
    };
  },
  methods: {
    handleSelect(option) {
      this.selected = option;
      // 根据选中的选项执行相应的操作
      if (option === '口碑榜') {
        this.handleScore();
      } else if (option === '时长榜') {
        this.handleTime();
      } else if (option === '综合榜') {
        this.handleTotal();
      }
    },
    handleScore() {
      this.rankingGameList.sort((a, b) => b.gameRecommendationScore - a.gameRecommendationScore);
    },
    handleTime() {
      this.rankingGameList.sort((a, b) => b.gamePlayTime - a.gamePlayTime);
    },
    handleTotal() {
      this.rankingGameList.sort((a, b) => b.gameRecommendationScore*b.gamePlayTime - a.gameRecommendationScore*a.gamePlayTime);
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
  }

}
</script>

<style scoped>
.rankingImg{
  width: 95vw;
  height: 30vw;
  flex-shrink: 0;
}

.rankingBox{
  width: 95vw;
  /*height: 100vw;*/
  flex-shrink: 0;
  border-radius: 15px 15px 0px 0px;
  background: #FFF;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
}

.selector {
  width: 90vw;
  margin: 0 auto;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  display: inline-block;
  margin-right: 5vw;
  position: relative;
}

.nav-list li span {
  padding: 2vw 4vw;
  /*border: 1px solid #ccc;*/
  cursor: pointer;
}

.nav-list li.active span {
  /*background-color: #e6f7ff;*/
}

.indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1vw;
  background-color: #000000;
  transition: width 0.3s ease;
}

.nav-list li.active .indicator {
  width: 40%;
  position: relative;
  left:6.5vw
}

.rankTypeName{
  color: #000;
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.rankingGameBox{
  margin-top: 5vw;
}

.rankingNum{
  width: 12vw;
  height: 12vw;
  flex-shrink: 0;
  border-radius: 3px;
  background: #FFF;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25), -4px -4px 4px 0px rgba(0, 0, 0, 0.25);
}

.rankingNumtext{
  width: 6vw;
  height: 6vw;
  flex-shrink: 0;
  color: #000;
  font-family: Piazzolla;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 50% */
}

.rankingGameLogo{
  width: 16vw;
  height: 16vw;
  flex-shrink: 0;
  border-radius: 14px;
}

.rankingGameName{
  color: #000;
  font-family: "PingFang SC";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}

.rankingbutton{
  width: 20vw;
  height: 8vw;
  flex-shrink: 0;
  border-radius: 10px;
  font-weight: 700;
  position: relative;
  top:5vw;
}

</style>