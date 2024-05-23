<script setup lang="ts">
const tabs = ref([
  {
    key: 'barbershop',
    label: 'Барбершопа',
  },
  {
    key: 'owner',
    label: 'Руководителя',
  }
])
const ui = {
  wrapper: 'tab-full',

  list: {
    base: 'tab-width tab-contacts',
    background: 'bg-yellow tab-border-pink',
    padding: '',

    tab: {
      base: '',
      background: '',
      active: 'tab-purple',
      inactive: 'tab-gray'
    },

    marker: {
      wrapper: 'tab-bg-purple',
    }
  },
}
</script>

<template>
  <div>
    <section class="contacts section" id="contacts">
      <h2 class="contacts__title">Контакты</h2>
      <UTabs :items="tabs" :ui="ui">
        <template #item="{ item }">
          <div class="map" v-if="item.key === 'barbershop'">
            <iframe class="map__desktop" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae8b3e691b9290bc21606eadce14cbc804ce724e25c54462cc9f399885b98b77d&amp;source=constructor" width="100%" height="312" frameborder="0"></iframe>
            <iframe class="map__mobile" src="https://yandex.ru/map-widget/v1/?um=constructor%3A92a4082950bdf949a48692e4ec9c3942799072b108de83c503250f7c90621504&amp;source=constructor" width="100%" height="312" frameborder="0"></iframe>
            <div class="see">
              <div class="see__block">
                <p class="see__block-name text-title">Всегда рады вас видеть</p>
                <NuxtLink
                    class="see__block-line call text-title"
                    to="tel: +7 (900) 933-29-35"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z" stroke="#5F2691" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  +7 (900) 933-29-35
                </NuxtLink>
                <div class="see__block-line">
                  <img src="@/assets/img/location.svg" alt="">
                  <p class="text">Воронеж, улица Карла Маркса 112</p>
                </div>
                <div class="see__block-line">
                  <img src="@/assets/img/clock.svg" alt="">
                  <p class="text">Пн-Вс: 10:00-22:00</p>
                </div>
                <div class="see__block-line">
                  <img src="@/assets/img/mail.svg" alt="">
                  <p class="text">doublecuts@mail.ru</p>
                </div>
                <NuxtLink
                    class="see__block-button button-toggle"
                    to="tel: +7 (900) 933-29-35"
                >
                  <img src="@/assets/img/white-phone.svg" alt="">
                  Позвонить в Double Cuts
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="owner-card" v-if="item.key === 'owner'">
            <div class="owner-card__info">
              <div class="owner-top">
                <span class="text-title custom-back">Евгений Черешнев<span></span></span>
                <p class="text owner-top__speciality">Руководитель</p>
              </div>
              <div class="owner-links">
                <NuxtLink
                    class="owner-links__item"
                    to="https://wa.me/79999139839"
                    target="_blank"
                >
                  <img src="../assets/img/wa_gray.svg" alt="">
                </NuxtLink>
                <NuxtLink
                    class="owner-links__item"
                    to="https://vk.com/himmortal"
                    target="_blank"
                >
                  <img src="../assets/img/vk_gray.svg" alt="">
                </NuxtLink>
                <NuxtLink
                    class="owner-links__item"
                    to="https://www.instagram.com/barber_cheresh?igsh=MTh5b3JjcGw0ejcybQ=="
                    target="_blank"
                >
                  <img src="../assets/img/inst_gray.svg" alt="">
                </NuxtLink>
              </div>
              <div class="owner-fake">
                <div class="owner-fake__top">
                  <div class="owner-fake-button">
                    <p class="text">Похвалить нас</p>
                    <img src="../assets/img/thumbs-up.svg" alt="">
                  </div>
                  <div class="owner-fake-button">
                    <p class="text">Поругать</p>
                    <img src="../assets/img/thumbs-down.svg" alt="">
                  </div>
                </div>
                <div class="owner-fake-button">
                  <p class="text">Сотрудничество</p>
                  <img src="../assets/img/handshake.svg" alt="">
                </div>
                <div class="owner-fake-button">
                  <p class="text">Замечания по сайту</p>
                  <img src="../assets/img/alert-circle.svg" alt="">
                </div>
              </div>
            </div>
            <img src="../assets/img/owner.jpg" alt="" class="owner-card__image desktop">
            <img src="../assets/img/owner-mobile.jpg" alt="" class="owner-card__image mobile">
          </div>
        </template>
      </UTabs>
    </section>
  </div>
</template>

<style lang="scss">
@import "assets/styles/colors";

.contacts{
  @media (max-width: 768px) {
    margin-top: -80px;
    max-width: unset;
    padding: 80px 0 0;

    &__title{
      padding-left: 20px;
    }
  }
}

.map{
  position: relative;
  height: 312px;
  margin: 16px auto 0;

  @media (max-width: 768px) {
    height: 512px;
  }

  &__mobile{
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__desktop{
    display: block;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .see{
    max-width: 1240px;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;

    @media (max-width: 768px) {
      height: unset;
      position: unset;
    }

    &__block{
      height: 100%;
      background: #EEE1FB;
      width: 480px;
      border-radius: 12px 12px 0 0;
      padding: 32px 20px 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: flex-start;

      @media (max-width: 768px) {
        width: 100%;
        border-radius: 0;
        padding: 24px 20px 40px;
      }

      &-name{
        margin-bottom: 8px;
      }

      &-line{
        display: flex;
        align-items: center;
        gap: 8px;

        &.call{
          color: $purple
        }
      }

      &-button{
        width: 100%;
        margin-top: 8px;
      }
    }
  }
}

.owner-card{
  display: flex;
  width: 100%;
  margin-top: 16px;

  @media (max-width: 600px){
    flex-direction: column;
  }

  &__info{
    max-width: 480px;
    min-width: 480px;
    width: 100%;
    background: white;
    padding: 24px 20px 28px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 2;

    @media (max-width: 600px){
      order: 2;
      min-width: unset;
      max-width: unset;
      margin-top: -20px;
    }

    .owner-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;

      &__speciality{
        color: #919191;
      }
    }

    .owner-links{
      display: flex;
      align-items: stretch;
      gap: 10px;

      &__item{
        background: #0000001A;
        padding: 10px;
        border-radius: 14px;

        &:hover{
          background: $pink;
        }
      }
    }

    .owner-fake{
      display: flex;
      flex-direction: column;
      gap: 12px;

      &__top{
        display: flex;
        align-items: stretch;
        gap: 12px;
        flex-wrap: nowrap;
      }

      &-button{
        width: 100%;
        border: 1px solid $purple;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 0;
      }
    }
  }

  &__image{
    position: absolute;
    right: 0;
    z-index: 1;
    height: 100%;

    &.mobile{
      display: none;
    }

    &.desktop{
      display: block;
    }

    @media (max-width: 768px) {
      position: unset;
      height: unset;
      width: 100%;
      border-radius: 12px;
      order: 1;

      &.mobile{
        display: block;
      }

      &.desktop{
        display: none;
      }
    }
  }
}
</style>