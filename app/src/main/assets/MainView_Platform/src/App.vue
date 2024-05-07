<template>
  <router-view></router-view>
  <bar></bar>
</template>


<script>
import MainView from "@/components/mainView.vue";
import Bar from "@/components/bar.vue";


export default {
  name: 'App',
  components: {
    bar:Bar,
  },
}
</script>
