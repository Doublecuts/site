<script setup lang="ts">

</script>

<template>
  <section class="school section">
    <h2 class="school__title white">Школа барберов</h2>
    <div class="school__block">
      <img src="../assets/img/school1.webp" alt="" class="school__block-image" loading="lazy">
      <div class="school__block-text">
        <p class="school__block-text_title text-title">Более <span class="custom-back">100 учеников<span></span></span> уже прошли наши курсы и успешно работают</p>
        <p class="text">Образование в парикмахерской сфере сегодня очень хромает и мы решили все изменить!</p>
        <p class="text">У нас уже есть большой опыт в преподавании. Теперь мы расширяемся и открываем полноценную школу.</p>
      </div>
      <img src="../assets/img/school2.webp" alt="" class="school__block-image" loading="lazy">
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

    @media (max-width: 450px) {
      flex-direction: column;
    }

    @media (min-width: 451px) and (max-width: 1220px){
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    &-image{
      width: 100%;
      height: 291px;
      object-fit: cover;
      border-radius: 12px;
    }

    &-image:last-child{
      @media (max-width: 450px) {
        display: none;
      }

      @media (min-width: 451px) and (max-width: 1220px){
        order: 3;
        width: calc(50% - 5px);
        height: 350px;
        object-fit: cover;
      }
    }

    &-image:first-child{
      @media (min-width: 451px) and (max-width: 1220px){
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
      min-width: 400px;

      @media (max-width: 450px) {
        min-width: unset;
      }

      @media (max-width: 768px) {
        padding: 32px;
      }

      @media (min-width: 769px) and (max-width: 1220px){
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