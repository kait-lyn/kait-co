<template>
  <div id="app">
    <nav-bar class="nav-bar" />
    <router-view class="router-view-container" />
  </div>
</template>

<script>
import NavBar from '@components/Nav/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
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

    @media only screen and (max-width: $small) {
      flex-direction: column;
      width: 100%;
      overflow-y: none;
    }
  }

  .router-view-container {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
</style>
