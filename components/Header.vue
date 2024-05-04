<script setup lang="ts">
const navLinks = ref<{ name: string, url: string }[]>([
  {
    name: 'О нас',
    url: '#about',
  },
  {
    name: 'Акции',
    url: '#events',
  },
  {
    name: 'Отзывы',
    url: '#reviews',
  },
  {
    name: 'Портфолио',
    url: '#portfolio',
  },
  {
    name: 'Услуги',
    url: '#price',
  },
  {
    name: 'Команда',
    url: '#team',
  },
  {
    name: 'Товары',
    url: '#products',
  },
  {
    name: 'Вакансии',
    url: '#vacations',
  },
  {
    name: 'Школа барберов',
    url: '#school',
  },
  {
    name: 'Контакты',
    url: '#contacts',
  },
])
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <NuxtLink class="header-inner__logo" to="/">
        <img src="~/assets/img/logo.png" alt="">
      </NuxtLink>
      <nav class="nav">
        <NuxtLink class="nav__item text" v-for="link in navLinks" :to="link.url">
          {{ link.name }}
        </NuxtLink>
      </nav>
      <div class="header-inner__links">
        <NuxtLink
            class="header-inner__links-item"
            to="https://wa.me/79009332935"
            target="_blank"
        >
          <img src="~/assets/img/wa.svg" alt="">
        </NuxtLink>
        <NuxtLink
            class="header-inner__links-item"
            to="https://vk.com/double_cuts_vrn"
            target="_blank"
        >
          <img src="~/assets/img/vk.svg" alt="">
        </NuxtLink>
<!--        <NuxtLink class="header-inner__links-item">-->
<!--          <img src="~/assets/img/inst.svg" alt="">-->
<!--        </NuxtLink>-->
        <NuxtLink
            class="header-inner__links-item"
            to="tel: +7 (900) 933-29-35"
        >
          <img src="~/assets/img/phone.svg" alt="">
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "assets/styles/colors";

.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #11111166;
  padding: 9px 10px 5px;
  z-index: 100;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2px 12px;
    border-radius: 0 0 12px 12px;
  }

  &-inner{
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    .nav{
      display: flex;
      align-items: center;
      gap: 4px;

      @media (max-width: 768px) {
        display: none;
      }

      &__item{
        color: white;
        padding: 10px;

        &:hover{
          color: $purple;
        }
      }
    }

    &__links{
      display: flex;
      align-items: center;
      gap: 8px;

      @media (max-width: 768px) {
        gap: 10px;
      }

      &-item{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #FFFFFF33;
        border-radius: 8px;
        width: 40px;
        height: 40px;

        @media (max-width: 768px) {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #0000001A;

          img{
            width: 28px;
            height: 28px;
          }
        }

        &:hover{
          background: $purple;
          border-color: $purple;
        }
      }
    }
  }
}
</style>