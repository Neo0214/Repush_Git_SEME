<template>
  <div class="bottom-nav">
    <router-link to="/" exact active-class="active" class="nav-item">
      <span v-bind:class="{ 'main': !isActive[0], 'main-active': isActive[0] }">
      </span>
      <span class="nav-text">推荐</span>
    </router-link>
    <router-link to="/ranking" active-class="active" class="nav-item">
      <span v-bind:class="{ 'ranking': !isActive[1], 'ranking-active': isActive[1] }">
      </span>
      <span class="nav-text">排行榜</span>
    </router-link>
    <router-link to="/gameLibrary" active-class="active" class="nav-item">
      <span v-bind:class="{ 'gameLibrary': !isActive[2], 'gameLibrary-active': isActive[2] }">
      </span>
      <span class="nav-text">游戏库</span>
    </router-link>
    <router-link to="/personal" active-class="active" class="nav-item">
      <span v-bind:class="{ 'personal': !isActive[3], 'personal-active': isActive[3] }">
      </span>
      <span class="nav-text">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bar",

  mounted() {
    const currentRoute = this.$route; // 获取当前路由
    if(currentRoute.fullPath==='/')
      this.isActive[0]=true;
    else if(currentRoute.fullPath==='/ranking')
      this.isActive[1]=true;
    else if(currentRoute.fullPath==='/gameLibrary')
      this.isActive[2]=true;
    else if(currentRoute.fullPath==='/personal')
      this.isActive[3]=true;
  },

  data(){
    return{
       isActive:[false,false,false,false],
    }
  },

  methods:{
  }
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 12px;
  color: #828180;
}

.nav-item.active {
  color: #2B88FF;
}

.iconfont {
  font-size: 24px;
  margin-bottom: 5px;
}

.nav-text {
  margin-top: 2px;
}

.main {
  background-image: url(../../public/imgForMain/main.png);
  background-size: cover;
  width: 24px;
  height: 24px;
}

.main-active {
  background-image: url(../../public/imgForMain/main-active.png);
  background-size: cover;
  width: 24px;
  height: 24px;
}

.ranking {
  background-image: url(../../public/imgForMain/ranking.png);
  background-size: cover;
  width: 24px;
  height: 24px;
}

.ranking-active {
  background-image: url(../../public/imgForMain/ranking-active.png);
  background-size: cover;
  width: 24px;
  height: 24px;
}

.gameLibrary {
  background-image: url(../../public/imgForMain/gameLibrary.png);
  background-size: cover;
  width: 24px;
  height: 24px;
}

.gameLibrary-active {
  background-image: url(../../public/imgForMain/gameLibrary-active.png);
  background-size: cover;
  width: 24px;
  height: 24px;
}

.personal {
  background-image: url(../../public/imgForMain/personal.png);
  background-size: cover;
  width: 24px;
  height: 24px;
}

.personal-active {
  background-image: url(../../public/imgForMain/personal-active.png);
  background-size: cover;
  width: 24px;
  height: 24px;
}

</style>