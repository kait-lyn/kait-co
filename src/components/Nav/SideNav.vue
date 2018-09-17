<template>

    <div id="sideNav" class='nav-bar'>

      <Avatar
        imageUrl="https://image.ibb.co/cstJQU/me.gif"
        :size="180"
      />

      <span class="dash"> ____ </span>
      <span class="name"> KAITLYN LY </span>
      <span class="title">Software Engineer</span>

    </div>
</template>

<script>
import Avatar from '@components/Avatar/Avatar'
import Icon from '@components/Icons/Icon.vue'
import IconMenu from '@components/Icons/IconMenu.vue'

export default {
  name: 'Nav',

  components: {
    Avatar,
    Icon,
    IconMenu,
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles/main.scss';

  .nav-bar {
    @include box-shadow;
    z-index: 2;
    background-color: $color-white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $gp;
    width: 280px;
  }

  .dash {
    font-size: 2em;
  }

  .name {
    font-family: 'Bellefair', serif;
    padding: $gp;
    font-size: 2em;
  }

  .title {
    margin-bottom: $gp * 8;
  }

</style>
