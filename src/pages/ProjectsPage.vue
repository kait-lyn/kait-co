<template>
  <div class="container">
    <div class="content">
        <h1>Projects</h1>
        Coming soon!
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  components: {
  },
  data () {
    return {}
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
    color: $color-darkerGray;
    overflow: auto;

    @media only screen and (max-width: $small) {
      padding: $gp;
    }
  }

  h1 {
    font-weight: 500;
    border-bottom: 6px solid $color-lighterGray;
  }
</style>
