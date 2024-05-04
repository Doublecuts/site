<script setup lang="ts">

</script>

<template>
  <section class="school section">
    <h2 class="school__title white">Школа барберов</h2>
    <div class="school__block">
      <img src="../assets/img/about1.png" alt="" class="school__block-image">
      <div class="school__block-text">
        <p class="school__block-text_title text-title">Более <span class="custom-back">100 учеников<span></span></span> уже прошли наши курсы и успешно работают</p>
        <p class="text">Образование в парикмахерской сфере сегодня очень хромает и мы решили все изменить!</p>
        <p class="text">У нас уже есть большой опыт в преподавании. Теперь мы расширяемся и открываем полноценную школу.</p>
      </div>
      <img src="../assets/img/about2.png" alt="" class="school__block-image">
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/colors";

.school{
  padding-top: 0;

  @media (max-width: 768px) {
    padding: 0;
  }

  &__block{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 10px;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &-image{
      width: 100%;
      height: 291px;
      object-fit: cover;
      border-radius: 12px;
    }

    &-image:last-child{
      @media (max-width: 768px) {
        display: none;
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
      max-width: 400px;
      width: 100%;

      @media (max-width: 768px) {
        padding: 32px;
      }

      &_title{
        margin-bottom: 12px;
      }
    }
  }
}
</style>