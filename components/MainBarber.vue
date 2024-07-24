<script setup lang="ts">

</script>

<template>
  <section class="main-barber">
    <img src="../assets/img/main_back_mobile.webp" alt="" class="main-barber__mobile" loading="lazy">
    <div class="main-barber__text">
      <h1 class="main-barber__text-main">Барбершоп Double cuts</h1>
      <h2 class="main-barber__text-title">
        <span class="main-barber__text-title_big">СКИДКА 20%</span>
        <span class="main-barber__text-title_small">На первое посещение барбершопа</span>
        <span class="main-barber__text-title_small adaptive">На первое посещение</span>
      </h2>
    </div>
    <div class="main-barber__pictures">
      <img src="../assets/img/main1.webp" alt="" class="main-barber__pictures-item" loading="lazy">
      <img src="../assets/img/main2.webp" alt="" class="main-barber__pictures-item" loading="lazy">
      <img src="../assets/img/main3.webp" alt="" class="main-barber__pictures-item" loading="lazy">
      <img src="../assets/img/main4.webp" alt="" class="main-barber__pictures-item" loading="lazy">
    </div>
    <div class="marquee">
      <div class="marquee__item">
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
      </div>
      <div class="marquee__item" aria-hidden="true">
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
      </div>
    </div>
    <div class="marquee next">
      <div class="marquee__item reverse">
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
      </div>
      <div class="marquee__item reverse" aria-hidden="true">
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
        <div class="marquee__item-text">ОСТОРОЖНО!</div>
        <div class="marquee__item-text">НАШИ СТРИЖКИ ВЫЗЫВАЮТ ПРИВЫКАНИЕ</div>
      </div>
    </div>
    <div class="main-barber__buttons">
      <NuxtLink
          to="https://n748041.yclients.com/company/704044/personal/select-master?o=m2862252"
          target="_blank"
          class="main-barber__buttons-order"
      >
        <img src="../assets/img/order_img.webp" alt="" loading="lazy">
        <p class="main-barber__buttons-order_desktop">Записаться онлайн</p>
        <p class="main-barber__buttons-order_mobile">Записаться</p>
      </NuxtLink>
      <div class="main-barber__buttons-stars">
        <NuxtLink
            class="main-barber__buttons-stars_item"
            to="https://go.2gis.com/v6p3a"
            target="_blank"
        >
          <img src="../assets/img/google.svg" alt="" style="width: 24px; height: 24px" loading="lazy">
          5.0
        </NuxtLink>
        <NuxtLink
            class="main-barber__buttons-stars_item"
            to="https://yandex.ru/maps/-/CDRCV21A"
            target="_blank"
        >
          <img src="../assets/img/yandex.svg" alt="" loading="lazy">
          5.0
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/styles/colors";

.main-barber{
  height: 100vh;
  background: url("~/assets/img/main_back.webp") no-repeat center top/cover;
  display: flex;
  overflow-x: hidden;

  @media (max-width: 768px){
    background: $black;
    flex-direction: column;
    border-radius: 0 0 12px 12px;
  }

  &__mobile{
    display: none;

    @media (max-width: 768px) {
      display: block;
      width: 100%;
      border-radius: 0 0 12px 12px;
    }
  }

  &__text{
    margin: auto;

    @media (max-width: 768px) {
      padding: 0 20px;
      margin: 0 auto;
    }

    &-main {
      visibility: hidden;
      position: absolute;
    }

    &-title{
      display: flex;
      flex-direction: column;
      gap: 0;
      align-items: center;

      &_big{
        font-size: 96px;
        line-height: 1.2;
        color: white;
        font-family: "Rostov";

        @media (max-width: 768px){
          font-size: 50px;
        }
      }

      &_small{
        font-size: 42px;
        line-height: 1.2;
        font-family: "Rostov";
        text-transform: uppercase;
        color: #8d8d8d;

        &.adaptive{
          display: none;
        }

        @media (max-width: 768px){
          display: none;

          &.adaptive{
            display: block;
            font-size: 31px;
          }
        }
      }
    }
  }

  &__pictures{
    display: flex;
    align-items: flex-start;
    height: 500px;
    position: absolute;
    max-width: 1240px;
    width: 100%;
    justify-content: space-between;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;

    @media (max-width: 768px){
      display: none;
    }

    &-item{
      &:first-child{
        padding-top: 40px;
      }

      &:nth-child(2){
        margin-top: -20px;
      }

      &:nth-child(3){
        margin-top: -20px;
      }
    }
  }

  .marquee{
    display: flex;
    gap: 20px;
    overflow: hidden;
    user-select: none;
    position: absolute;
    bottom: 200px;
    width: calc(100% - 1px);
    background: $purple;
    border-top: 3px dashed black;
    border-bottom: 3px dashed black;
    transform: rotate(2deg);
    padding: 5px 0;

    @media(max-width: 768px){
      bottom: 100px;
      padding: 0;
      transform: rotate(-5deg);
    }

    &.next{
      transform: rotate(-2deg);

      @media(max-width: 768px){
        transform: rotate(5deg);
      }
    }

    &__item{
      flex-shrink: 0;
      display: flex;
      justify-content: space-around;
      min-width: 100%;
      gap: 20px;
      animation: scroll 50s linear infinite;

      &.reverse{
        animation-direction: reverse;
      }

      &-text{
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        color: white;
        float: left;
        white-space: nowrap;
      }
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - 20px));
      }
    }
  }

  &__buttons{
    display: flex;
    align-items: stretch;
    gap: 12px;
    padding: 11px;
    border: 1px solid #FFFFFF33;
    border-radius: 12px;
    position: fixed;
    bottom: 20px;
    margin-left: -211px;
    left: 50%;
    z-index: 10;
    background: $black;

    @media (max-width: 430px) {
      margin-left: 0;
      left: 0;
      width: 100%;
      max-width: 430px;
      bottom: 0;
      border-radius: 12px 12px 0 0;
    }

    &-order{
      display: flex;
      align-items: center;
      gap: 8px;
      background: $pink;
      font-size: 16px;
      line-height: 1.2;
      color: $black;
      border-radius: 8px;
      padding: 13px 24px;

      &_mobile {
        display: none;
      }

      @media (max-width: 430px) {
        &_desktop {
          display: none;
        }

        &_mobile {
          display: block;
        }
      }

      &:hover {
        background: $purple;
        color: white;

        &_desktop {
          color: white;
        }
      }
    }

    &-stars{
      display: flex;
      align-items: stretch;
      gap: 4px;

      @media (max-width: 768px) {
        margin-left: auto;
      }

      &_item{
        display: flex;
        align-items: center;
        gap: 10px;
        border: 1px solid #FFFFFF33;
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 16px;
        font-weight: 500;
        color: white;
        line-height: 1.2;

        &:hover{
          background: $purple;
          border-color: $purple;
        }
      }
    }
  }
}
</style>