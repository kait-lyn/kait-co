<template>
  <div class="container">
    <div class="content">
      <div class="image">
        <img src="../assets/1x/Artboard 1.png">
      </div>

      <h1>Projects</h1>
      <a href="https://white-tree.firebaseapp.com/" target="_blank">
        <div class="project">
          <span><h3>White Tree</h3></span>
          <b>A Dungeons and Dragons character sheet React app</b>
          <br />
          <span>I worked on the Firebase integration (auth using
            Google and storing character data in Firebase real time database).
            It was made to work well(ish) on mobile but primarily as a desktop app.
          </span>
        </div>
      </a>
      <br />
      <a href="/test" target="_blank">
        <div class="project">
          <span><h3>Current Work In Progress</h3></span>
          <b>Parallax image Vue component</b>
          <br />
          <span>
            A friend of mine took this great photo of me in Queenstown, NZ and
            I wanted to try to create a parallax effect using CSS and vanilla Javascript.
            You can view it here, but I can't guarantee it'll look good on your browser.
            <br />
            My goal is to make an easy to use Vue component that I can allow others to use!
          </span>
        </div>
      </a>
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

    @media only screen and (max-width: $small) {
      overflow-x: none;
    }
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

  .image {
    display: flex;
    justify-content: center;
  }

  h1 {
    font-weight: 500;
    border-bottom: 6px solid $color-lighterGray;
  }

  h3 {
    margin: 0 0 $gp 0;
  }

  a {
    text-decoration: none;
    color: $color-darkGray;
  }

  .project {
    display: flex;
    flex-direction: column;
    border: 1px solid $color-lightGray;
    padding: $gp * 2;
    border-radius: $border-radius;
  }

  .project:hover {
    border-color: $color-lighterGray;
    background-color: $color-lighterGray;
    cursor: pointer;
  }
</style>
