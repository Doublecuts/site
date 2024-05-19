<script setup lang="ts">
import teamSergey from '../public/img/employers/sergey.jpg'
import teamMichael from '../public/img/employers/michael.jpg'
import teamAlexander from '../public/img/employers/alexander.jpg'
import teamVlad from '../public/img/employers/vlad.jpg'
import teamDmitriy from '../public/img/employers/dmitriy.jpg'
import teamEvgeniy from '../public/img/employers/evgeniy.jpg'

const tabs = ref([
  {
    key: 'master',
    label: 'Мастера',
    data: [
      {
        name: 'Сергей',
        post: 'Младший барбер',
        exp: 'Более 1 года',
        src: teamSergey,
        href: 'https://n748041.yclients.com/company/704044/personal/select-services?o=m2862252',
      },
      {
        name: 'Михаил',
        post: 'Барбер',
        exp: 'Более 2 лет',
        src: teamMichael,
        href: 'https://n748041.yclients.com/company/704044/personal/select-services?o=m2612541',
      },
      {
        name: 'Александр',
        post: 'Старший барбер',
        exp: 'Более 4 лет',
        src: teamAlexander,
        href: 'https://n748041.yclients.com/company/704044/personal/select-services?o=m2334511',
      },
      {
        name: 'Владислав',
        post: 'Старший барбер',
        exp: 'Более 4 лет',
        src: teamVlad,
        href: 'https://n748041.yclients.com/company/704044/personal/select-services?o=m2726996',
      },
    ]
  },
  {
    key: 'head',
    label: 'Руководители',
    data: [
      {
        name: 'Дмитрий',
        post: '',
        exp: 'Более 4 лет',
        src: teamDmitriy,
        href: 'https://n748041.yclients.com/company/704044/personal/select-services?o=m2035999',
      },
      {
        name: 'Евгений',
        post: '',
        exp: 'Более 4 лет',
        src: teamEvgeniy,
        href: 'https://n748041.yclients.com/company/704044/personal/select-services?o=m2375171',
      },
    ]
  },
])
const ui = {
  wrapper: 'tab-full',

  list: {
    base: 'tab-width',
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
  <section class="team section" id="team">
    <h2>Команда</h2>
    <p class="team__sub text-title">Люди, безгранично преданные своему делу, постоянно созерцающие новые тендеции в индустрии, совершенствуя свое мастерство</p>
    <UTabs :items="tabs" :ui="ui">
      <template #item="{ item }">
        <div v-for="tab in tabs" :key="tab.key">
          <div class="members" v-if="tab.key === item.key">
<!--            <UCarousel v-slot="{ slide, index }" :items="tab.data" :key="tab.key">-->
<!--              <div class="member">-->
<!--                <img :src="tab.data[index].src" alt="" class="member__img">-->
<!--                {{ slide }}-->
<!--              </div>-->
<!--            </UCarousel>-->

            <div class="members__item" v-for="member in tab.data">
              <img :src="member.src" alt="" class="members__item-img">
              <div class="member">
                <div class="member__info">
                  <p class="text-title"><span class="custom-back">{{ member.name }}<span></span></span></p>
                  <p class="member__info-post text">{{ member.post }}</p>
                </div>
                <div class="member__exp">
                  <p class="member__exp-text text">Опыт работы</p>
                  <p class="text">{{ member.exp }}</p>
                </div>
                <a :href="member.href" target="_blank" class="button-outline">Записаться к мастеру</a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UTabs>
  </section>
</template>

<style lang="scss">
.team{
  margin-top: -90px;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  &__sub{
    max-width: 725px;
  }

  .members{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding-top: 20px;

    @media (max-width: 590px) {
      max-width: 100%;
      overflow: scroll;
    }

    @media (min-width: 591px) and (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 901px) and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    &__item{
      max-width: 295px;
      width: 100%;

      @media (max-width: 590px) {
        width: 290px;
      }

      @media (min-width: 591px) and (max-width: 1200px) {
        max-width: unset;
      }

      &-img{
        z-index: 0;
        border-radius: 12px 12px 0 0;
        object-fit: cover;
        width: 295px;
        height: 280px;

        @media (min-width: 591px) and (max-width: 1200px) {
          width: 100%;
        }
      }
    }

    .member{
      background: white;
      z-index: 1;
      margin-top: -48px;
      position: relative;
      border-radius: 12px;
      padding: 24px 20px 28px;
      border: 1px solid #e9e9e9;
      border-top: none;
      display: flex;
      flex-direction: column;
      gap: 12px;

      &__info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;

        &-post{
          color: #919191;
        }
      }

      &__exp{
        display: flex;
        align-items: center;
        gap: 4px;

        &-text{
          color: #656565;
        }
      }
    }
  }
}
</style>