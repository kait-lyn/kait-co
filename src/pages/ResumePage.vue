<template>
  <div class="main-container">
    <side-panel />
    <div class="right">
      <top-panel />
      <main-panel />
    </div>
  </div>
</template>

<script>
import * as animation from '../assets/coming_soon.json'

import lottie from 'vue-lottie'

import Avatar from '@components/Avatar'
import SidePanel from '@components/Panels/SidePanel'
import MainPanel from '@components/Panels/MainPanel'
import TopPanel from '@components/Panels/TopPanel'

export default {
  name: 'ResumePage',
  components: {
    lottie,
    Avatar,
    SidePanel,
    MainPanel,
    TopPanel,
  },
  data () {
    return {
      defaultOptions: { animationData: animation },
      animationSpeed: 0.4
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@styles/main.scss';

  .main-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    overflow: auto;
    justify-content: center;
    height: 100vh;
  }

  .right {
    flex-grow: 1;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $gp * 2 $gp * 4;
  }
</style>
