<script setup lang="ts">

</script>

<template>
  <section class="discount">
    <div class="discount__field">
      <h2 class="discount__field-title">Для своих дешевле!</h2>
      <p class="discount__field-text text">Записывайся в школу прямо сейчас и получи <span class="custom-back purple">скидку 10%<span></span></span></p>
      <NuxtLink
          class="discount__field-button button-toggle"
          to="https://vk.com/shkolabarberov_vrn"
          target="_blank"
      >
        Перейти на страницу школы
      </NuxtLink>

      <img class="discount__field-img" src="../assets/img/discount.png  " alt="">
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/colors";

.discount{
  max-width: 1240px;
  margin: 40px auto 0;
  padding-top: 0;

  @media (min-width: 769px) and (max-width: 1310px) {
    padding: 10px;
  }

  &__field{
    width: 100%;
    background: #EEE1FB;
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 12px;
    position: relative;

    @media (max-width: 1310px) {
      padding: 20px 20px 24px;
    }

    &-title{
      @media (max-width: 1310px) {
        font-size: 20px;
      }
    }

    &-text{
      @media (max-width: 1310px) {
        max-width: 200px;
      }
    }

    &-button{
      margin: 48px 0 0 0;

      @media (max-width: 1310px) {
        margin-top: 20px;
      }
    }

    &-img{
      position: absolute;
      right: 0;
      bottom: -4px;

      @media (max-width: 1310px) {
        width: 100px;
        bottom: unset;
        top: -25px;
      }
    }
  }
}
</style>