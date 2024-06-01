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
      <el-aside width="15%" style="position: relative; left:-8vw;top:-1vw">
        <!--搜索栏旁头像-->
        <img :src="'/imgForMain/person.png'" class="imgPerson">
      </el-aside>
    </el-container>
  </div>
  <!--分割线1-->
  <el-divider style="position: relative; top:-15vw" />
  <!--主推荐模块-->
  <div style="position: relative;top:-17vw;left:-3vw" v-for="item in filteredGameList">
    <div class="mainGameBox" :style="{ backgroundImage: `url(${returnGameBigImgUrl(item.gameName)})`,}">
      <!--内嵌的简介-->
      <div class="introBox">
        <el-row :gutter="20" class="introduction">
          <el-col :span="4" style="position: relative;left:2vw;">
            <img class="mainGameLogo" :src="returnGameImgUrl(item.gameName)" alt="简介小图">
          </el-col>
          <el-col :span="16">
            <div class="textBox">
              <h2 class="mainGameName">{{item.gameName}}</h2>
              <p class="mainGameIntro">{{ item.gameIntroduce }}</p>
            </div>
          </el-col>
          <el-col :span="4" style="position: relative;left:-5vw;top:2vw">
            <el-button type="info" round class="button" @click="openGame(item.gameName)">游玩</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

  <bar></bar>
</template>

<script>
import Bar from './bar.vue'

export default {
  props:['gameTotal'],
  components: {
    bar:Bar,
  },

  mounted() {
    this.myGameList=this.gameTotal;
  },

  created() {
    const queryString = this.$route.query.data;
    if (queryString) {
      const decodedString = decodeURIComponent(queryString.replace(/%/g, '%25'));
      this.searchInput=JSON.parse(decodedString);
      console.log(this.searchInput);
    }

    this.search();
  },

  data() {
    return {
      searchInput: '',    //搜索框的内容
      myGameList:[],
      filteredGameList: [],
    }
  },

  methods: {
    // updateGameTime(){
    //   window.Android.UpdateGameTime(1, 0.5); // 更新游戏时间
    // },
    search(){
      if(this.searchInput==='') {
        this.$router.push('/mainView');
      }
      else{
        this.filteredGameList = this.myGameList.filter(game => {
          return game.gameName.includes(this.searchInput) || game.gameIntroduce.includes(this.searchInput);
        });
      }
    },


    //打开链接的页面
    openLink(url) {
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
  border-radius: 50px;
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
</style>