<template>
  <div class="container">
    <div class="content">
        <h1>Presentations</h1>
        <a href="https://docs.google.com/presentation/d/1sFObDbY0ZwU1UCDzWBFmTu-lkpaSDQKZ67iaNARBDMM/edit?usp=sharing" target="_blank">
          <div class="presentation">
            <span class="what">Circle CI Demo</span>
            <span class="when">October 6th, 2018</span>
            <span class="where">Desert Code Camp @ CGCC</span>
          </div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresentationsPage',
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

  a {
    text-decoration: none;
    color: $color-darkGray;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    border: 1px solid $color-lightGray;
    padding: $gp * 2;
    border-radius: $border-radius;
  }

  .presentation:hover {
    border-color: $color-lighterGray;
    background-color: $color-lighterGray;
    cursor: pointer;
  }
</style>
