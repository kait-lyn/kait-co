<template>
  <div id="nav" class="side-nav">
    <div class="top">
      <Avatar
        imageUrl="https://image.ibb.co/cstJQU/me.gif"
        :size="180"
        class="avatar-container"
      />
      <span class="dash"> ____ </span>
      <span class="name"> KAITLYN LY </span>
      <span class="title">Software Engineer</span>

      <div class="fullsize-links">
        <a href="/">Resume</a>
        <a href="/projects">Projects</a>
        <a href="/presentations">Presentations</a>
      </div>

      <div class="mobile-links">
        <Slide noOverlay class="burger-menu">
          <a href="/">
            <span>Resume</span>
          </a>
          <a href="/projects">
            <span>Projects</span>
          </a>
          <a href="/presentations">
            <span>Presentations</span>
          </a>

          <div class="mobile-bottom">
            <a
              v-for="social in social"
              :key="social.name"
              :href="social.href"
              target="_blank"
              class="icon-link"
            >
              <img :src="social.logo" height="36px" width="36px"/>
            </a>
          </div>
        </Slide>
      </div>
    </div>

    <div class="bottom">
      <a
        v-for="social in social"
        :key="social.name"
        :href="social.href"
        target="_blank"
        class="icon-link"
      >
        <img :src="social.logo" height="36px" width="36px"/>
      </a>
    </div>
  </div>
</template>

<script>
import Avatar from '@components/Avatar/Avatar'
import Icon from '@components/Icons/Icon.vue'
import IconGitHub from '@components/Icons/IconGitHub.vue'
import IconLinkedIn from '@components/Icons/IconLinkedIn.vue'
import { Slide } from 'vue-burger-menu'

export default {
  name: 'NavBar',

  components: {
    Avatar,
    Icon,
    IconGitHub,
    IconLinkedIn,
    Slide
  },

  data () {
    return {
      social: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/k8lyn/',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
        },
        {
          name: 'GitHub',
          href: 'https://github.com/kait-lyn/',
          logo: 'https://image.flaticon.com/icons/svg/25/25231.svg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '@styles/main.scss';

  #nav {
    @include box-shadow;
    z-index: 2;
    background-color: $color-white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: $gp;
    width: 280px;

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 1;

      .fullsize-links {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;

        a {
          padding-top: $gp * 2;
          text-decoration: none;
          color: $color-darkerGray;
        }

        a:hover {
          color: $color-lightGray;
        }
      }

      .mobile-links {
        display: none;
      }
    }

    .bottom {
      padding-bottom: $gp * 3;
      display: flex;
      justify-content: space-around;
      width: 70%;
    }

    @media only screen and (max-width: $small) {
      width: 100vw;
      height: 90px;
      min-height: 90px;
      padding: 0 $gp;
      flex-direction: row;

      .avatar-container {
        display: none;
      }

      .top {
        flex-direction: row;
        flex-grow: 3;
        justify-content: flex-end;

        .name {
          font-size: 2em;
          padding-right: $gp * 4;
        }

        .title {
          display: none;
        }

        .fullsize-links {
          display: none;
        }

        .mobile-links {
          display: flex;
          justify-content: flex-end;
        }
      }

      .bottom {
        display: none;
      }

      .dash {
        visibility: hidden;
        height: 0;
        width: 0;
      }

      .title {
        margin-bottom: 0;
        font-size: 1em;
        width: 35vw;
      }
    }
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

  .icon-link{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    width: 44px;
  }

  .icon-link:hover{
    align-items: flex-end;
  }
</style>
