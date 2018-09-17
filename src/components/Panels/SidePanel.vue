<template>
  <div class="side-nav">
    <Avatar
      imageUrl="https://image.ibb.co/cstJQU/me.gif"
      :size="210"
    />
    <header class="name"><h2>KAITLYN LY</h2></header>
    <span header class="row">Software Engineer</span>

    <section class="social-media-links">
      <a
        v-for="link in links"
        :href="link.href"
        :key="link.title"
        target="_none"
        class="icon-link"
      >
        <img
        :src="link.logoUrl"
        class="icon-image"
      />
      </a>
    </section>
  </div>
</template>

<script>
import Avatar from '@components/Avatar'

export default {
  name: 'SidePanel',

  components: {
    Avatar,
  },

  data: () => {
    return {
      links: [
        {
          title: 'LinkedIn',
          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
          href: 'https://www.linkedin.com/in/k8lyn/',
        },
        {
          title: 'GitHub',
          logoUrl: 'https://image.flaticon.com/icons/svg/25/25231.svg',
          href: 'https://github.com/kait-lyn/',
        }
      ]
    }
  },

}
</script>

<style lang="scss" scoped>
  @import '@styles/main.scss';

  .side-nav {
    @include box-shadow;
    background-color: $color-white;
    border-radius: $border-radius;
    height: 400px;
    padding: $gp * 2;

    .name, .row {
      display: flex;
      justify-content: center;
    }

    .name {
      padding-top: $gp * 2;
    }
  }

  h2 {
    font-weight: lighter;
    margin-bottom: $gp / 2;
  }

  .social-media-links {
    display: flex;
    justify-content: center;
    padding-top: $gp * 2;
  }

  .icon-link {
    padding: $gp;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-image {
      width: 36px;
      height: 36px;
    }
  }

  .icon-link:hover {
    opacity: 0.35;
    cursor: pointer;

    .icon-image {
      width: 34px;
      height: 34px;
    }
  }
</style>
