<script setup lang="ts">
import PortfolioSlider from "./PortfolioSlider.vue";

const sliderRef = ref()
</script>

<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="white">Портфолио</h2>
    <div class="portfolio__buttons">
      <button
          class="portfolio__buttons-item prev"
          @click="sliderRef.prevSlide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button
          class="portfolio__buttons-item next"
          @click="sliderRef.nextSlide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </section>
  <PortfolioSlider ref="sliderRef"/>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";

.portfolio{
  padding-top: 130px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-top: 40px;
  }

  &__buttons{
    display: flex;
    align-items: stretch;
    gap: 8px;

    &-item{
      border: 1px solid white;
      border-radius: 8px;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover{
        svg path{
          stroke: $purple;
        }

        border-color: purple;
      }
    }
  }
}
</style>