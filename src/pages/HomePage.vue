<template>
  <div class="hello">
    <lottie :options="defaultOptions" :height="500" :width="500" v-on:animCreated="handleAnimation"/>
  </div>
</template>

<script>
import lottie from "vue-lottie";
import * as animation from "../assets/coming_soon.json";

export default {
  name: "HomePage",
  components: {
    lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animation },
      animationSpeed: 0.4
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
