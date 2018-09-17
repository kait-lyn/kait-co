<template>
  <div class="container">
    <div class="content">
      Coming soon...
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@styles/main.scss';

.container {
  display: flex;
  flex-direction: row;
  background-color: $color-lightestGray;
}

.content {
  flex-grow: 1;
  padding: $gp * 4;
}
</style>
