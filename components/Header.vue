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
const isOpen = ref(false)
const isMobile = ref(false)
const isSoundOn = ref(false)
const soundRef = ref()

const openHandler = () => {
  isOpen.value = !isOpen.value
  isMobile.value = !isMobile.value

  if (isOpen.value) {
    document.querySelector('body').classList.add('body-hidden')
  } else {
    document.querySelector('body').classList.remove('body-hidden')
  }
}

const soundHandler = () => {
  isSoundOn.value = !isSoundOn.value

  if (soundRef.value.paused) {
    soundRef.value.play()
  } else {
    soundRef.value.pause()
  }
}

const linkClickHandler = () => {
  isMobile.value = false
  isOpen.value = false
  document.querySelector('body').classList.remove('body-hidden')
}
</script>

<template>
  <header
      class="header"
      :style="isOpen ? 'background: #848484' : 'background: #11111166; border-radius: 0 0 12px 12px;'"
  >
    <div class="header-inner">
      <NuxtLink class="header-inner__logo" to="/">
        <img src="~/assets/img/logo.webp" alt="" loading="lazy">
      </NuxtLink>
      <nav
          class="nav"
          :style="isMobile ? 'left: 0' : 'left: 100vw'"
      >
        <h2 class="nav__mobile white">Меню</h2>
        <NuxtLink
            class="nav__item text"
            v-for="link in navLinks"
            :to="link.url"
            @click="linkClickHandler"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
      <div class="header-inner__links">
        <div class="header-inner__links-item sound">
          <img
              :src="isSoundOn ? '/img/sound_on.svg' : '/img/sound_off.svg'"
              alt=""
              @click="soundHandler"
              loading="lazy"
          >
        </div>
        <audio ref="soundRef" controls loop preload="none">
          <source src="../public/audio/doublecuts.mp3" type="audio/mpeg">
        </audio>
        <NuxtLink
            class="header-inner__links-item"
            to="https://wa.me/79009332935"
            target="_blank"
        >
          <img src="~/assets/img/wa.svg" alt="" loading="lazy">
        </NuxtLink>
        <NuxtLink
            class="header-inner__links-item"
            to="https://vk.com/double_cuts_vrn"
            target="_blank"
        >
          <img src="~/assets/img/vk.svg" alt="" loading="lazy">
        </NuxtLink>
<!--        <NuxtLink class="header-inner__links-item">-->
<!--          <img src="~/assets/img/inst.svg" alt="">-->
<!--        </NuxtLink>-->
        <NuxtLink
            class="header-inner__links-item"
            to="tel: +7 (900) 933-29-35"
        >
          <img src="~/assets/img/phone.svg" alt="" loading="lazy">
        </NuxtLink>
        <img
            class="mobile-burger"
            :src="isOpen ? '/img/close.svg' : '/img/menu.svg'"
            alt=""
            @click="openHandler"
        >
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
  padding: 9px 10px 5px;
  z-index: 10;
  backdrop-filter: blur(10px);
  transition: 0.3s;

  @media (max-width: 1220px) {
    padding: 2px 12px;
  }

  .mobile-burger {
    display: none;

    @media (max-width: 1220px) {
      display: block;
      width: 40px;
      height: 40px;
    }
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

      @media (max-width: 1220px) {
        position: fixed;
        background: #848484;
        top: 80px;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;
        height: calc(100vh - 70px);
        transition: 0.3s;
      }

      &__mobile {
        display: none;

        @media (max-width: 1220px) {
          display: block;
        }
      }

      &__item{
        color: white;
        padding: 10px;

        @media (max-width: 1220px) {
          padding: 8px;
        }

        &:hover{
          color: $purple;
        }
      }
    }

    &__logo{
      img{
        width: 76px;
        height: 76px;
      }
    }

    &__links{
      display: flex;
      align-items: center;
      gap: 8px;

      @media (max-width: 1220px) {
        gap: 5px;
      }

      &-item{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #FFFFFF33;
        border-radius: 8px;
        width: 40px;
        height: 40px;

        @media (max-width: 1220px) {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #0000001A;

          img{
            width: 20px;
            height: 20px;
          }
        }

        &.sound{
          background: $purple;
          border-color: $purple;
          animation: pulse 1.25s infinite cubic-bezier( 0.66, 0.33, 0, 1);
          box-shadow: 0 0 0 0 rgba(#F0F0F0, 1), 0 0 0 0 rgba($purple, 0.7);
          transform: translate3d(0,0,0);
          cursor: pointer;

          @keyframes pulse {
            to {
              box-shadow: 0 0 0 12px transparent, 0 0 0 24px rgba($purple,  0);
            }
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