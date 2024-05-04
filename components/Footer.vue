<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-container__top">
        <div class="name">
          <p class="name__title text-title">Double cuts барбершоп</p>
          <p class="name__text">Все права защищены</p>
        </div>
        <div class="payment">
          <p class="payment__text">Принимаем к оплате</p>
          <div class="payment__methods">
            <img src="@/assets/img/sbp.svg" alt="">
            <img src="@/assets/img/mir.svg" alt="">
            <img src="@/assets/img/visa.svg" alt="">
          </div>
        </div>
      </div>
      <div class="footer-container__line"></div>
      <div class="footer-container__bottom">
        <button @click="isOpen = true" class="confidential">Политика конфиденциальности</button>
        <p class="studio">Разработано в студии <NuxtLink class="studio__link">Я люблю пиво</NuxtLink></p>
      </div>

      <UModal v-model="isOpen">
        <div class="p-6 relative">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloremque doloribus expedita fugiat iusto molestias nesciunt nihil obcaecati quia tempora! Adipisci cumque dolorem earum eum natus non tempora. Culpa, libero!
          <div class="footer-close" >
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
          </div>
        </div>
      </UModal>
    </div>
  </footer>
</template>

<style lang="scss">
@import "assets/styles/colors";

.footer{
  padding: 32px 10px;
  background: $black;

  @media (max-width: 768px) {
    margin-top: 105px;
    padding: 32px 10px 100px;
  }

  &-modal{
    padding: 10px;
  }

  &-container{
    max-width: 1260px;
    margin: 0 auto;

    &__top{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;

      @media (max-width: 768px) {
        flex-wrap: wrap;
      }

      .name{
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-start;

        &__title{
          color: white;
        }

        &__text{
          font-size: 12px;
          line-height: 18px;
          color: #909090;
        }
      }

      .payment{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        &__text{
          font-size: 12px;
          line-height: 18px;
          color: #909090;
        }

        &__methods{
          display: flex;
          align-items: center;
          gap: 24px;
        }
      }
    }

    &__line{
      width: 100%;
      height: 1px;
      background: #919191;
      margin: 32px 0 28px;
    }

    &__bottom{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      @media (max-width: 768px) {
        flex-wrap: wrap;
      }

      .confidential{
        font-size: 12px;
        line-height: 18px;
        color: #909090;

        &:hover{
          color: white;
        }
      }

      .studio{
        font-size: 12px;
        line-height: 18px;
        color: #909090;

        &__link{
          color: white;

          &:hover{
            color: $pink;
          }
        }
      }
    }
  }
}

.footer-close{
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>