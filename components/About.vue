<script setup lang="ts">

</script>

<template>
  <section class="about section" id="about">
    <h2 class="about__title">О нас</h2>
    <div class="about__block">
      <img src="../assets/img/about1.png" alt="" class="about__block-image">
      <div class="about__block-text">
        <p class="about__block-text_title text-title">Философия про индивидуальный подход <span class="custom-back">к каждому<span></span></span></p>
        <p class="text">DOUBLE CUTS - это место где тебя выслушают и услышат.</p>
        <p class="text">Наши мастера регулярно проходят повышение квалификации, чтобы соответствовать современным запросам клиентов.</p>
        <p class="text">Так же наши мастера являются преподавателями, судя по отзывам, вполне успешно справляются.</p>
      </div>
      <img src="../assets/img/about2.png" alt="" class="about__block-image">
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/colors";

.about{
  padding-top: 120px;

  @media (max-width: 768px) {
    padding-top: 30px;
  }

  &__block{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 10px;
    width: 100%;

    @media (max-width: 450px) {
      flex-direction: column;
    }

    @media (min-width: 451px) and (max-width: 1100px){
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    &-image {
      border-radius: 12px;
    }

    &-image:last-child{
      @media (max-width: 450px) {
        display: none;
      }

      @media (min-width: 451px) and (max-width: 1100px){
        order: 3;
        width: calc(50% - 5px);
        height: 350px;
        object-fit: cover;
      }
    }

    &-image:first-child{
      @media (min-width: 451px) and (max-width: 1100px){
        order: 2;
        width: calc(50% - 5px);
        height: 350px;
        object-fit: cover;
      }
    }

    &-text{
      background: white;
      border-radius: 12px;
      border: 2px solid $pink;
      padding: 32px 32px 40px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      @media (max-width: 768px) {
        padding: 32px;
      }

      @media (min-width: 769px) and (max-width: 1100px){
        order: 1;
        width: 100%;
      }

      &_title{
        margin-bottom: 12px;
      }
    }
  }
}
</style>