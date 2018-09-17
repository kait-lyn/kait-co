<template>
  <div>
    <div class="avatar" :style="computedStyle"/>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 200,
    }
  },

  data: () => {
    return {}
  },

  computed: {
    computedStyle () {
      return {
        background: `lightgray url(${this.imageUrl}) no-repeat center`,
        backgroundSize: `cover`,
        height: `${this.size}px`,
        width: `${this.size}px`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles/main.scss';

  .avatar {
    @include bordered-box-shadow;

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $gp;
  }
</style>
