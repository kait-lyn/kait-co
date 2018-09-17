<template>
  <div class="container">
    <div class="content">
      I'll put some cool stuff here one day...
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPanel',
}
</script>

<style lang="scss" scoped>
  @import '@styles/main.scss';

  .container {
    @include box-shadow;
    width: 100%;
    margin: 0;
    background-color: $color-white;
    margin-bottom: $gp * 4;
    height: 8vh;
    border-radius: $border-radius;
  }

  .content {
    padding: $gp;
  }
</style>
