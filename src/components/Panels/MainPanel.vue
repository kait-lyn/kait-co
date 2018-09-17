<template>
  <div class="container">
    <section class="content">
      <h1>ABOUT ME</h1>
      <section class="section">
        about me here
      </section>

      <h1>EXPERIENCE</h1>
      <section class="section">
        about me here
      </section>

      <h1>EDUCATION</h1>
      <section class="section">
        about me here
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainPanel',
}
</script>

<style lang="scss" scoped>
  @import '@styles/main.scss';

  .container {
    @include box-shadow;
    width: 100%;
    margin: 0;
    background-color: $color-white;
    border-radius: $border-radius;
  }

  .content {
    padding: $gp $gp * 2 $gp * 2;
  }

  h1{
    font-size: 2rem;
    margin: $gp;
  }
</style>
