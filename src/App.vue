<template>
  <div id="app">
    <side-nav />
    <router-view class="router-view-container"/>
  </div>
</template>

<script>
import SideNav from '@components/Nav/SideNav'

export default {
  name: 'App',
  components: {
    SideNav,
  },
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url(https://fonts.googleapis.com/css?family=Bellefair);
@import '@styles/main.scss';

body {
  margin: 0;
  background-color: $color-lightestGray;
}

#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.router-view-container {
  width: 100%;
}
</style>
