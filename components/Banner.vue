<script setup lang="ts">
const vacations = ref([
    'Администратор',
    'Младший барбер',
    'Барбер',
    'Старший барбер',
    'Шеф-барбер'
])
</script>

<template>
  <section class="vacations" id="vacations">
    <div class="vacations__field">
      <h2>Стань частью команды</h2>
      <p class="text">Звони <span class="custom-back purple">+7 (900) 933-29-35<span></span></span> и присоединяйся к лучшему барбершопу города. Сейчас нам нужны:</p>
      <div class="vacation">
        <p
            class="vacation__item text"
            v-for="vacation in vacations"
            :key="vacation"
        >
          {{ vacation }}
        </p>
      </div>

      <img class="vacations__field-img" src="../assets/img/phone.webp  " alt="" loading="lazy">
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/colors";

.vacations{
  padding-top: 120px;
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: 1310px) {
    padding: 80px 20px 0;
  }

  &__field{
    width: 100%;
    background: #EEE1FB;
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 12px;
    position: relative;

    .vacation{
      margin-top: 48px;
      display: flex;
      align-items: stretch;
      gap: 12px;

      @media (max-width: 1310px) {
        flex-wrap: wrap;
      }

      &__item{
        border: 1px solid $black;
        padding: 9px 16px;
        border-radius: 8px;
      }
    }

    &-img{
      position: absolute;
      right: -30px;
      bottom: 0;

      @media (max-width: 1310px) {
        display: none;
      }
    }
  }
}
</style>