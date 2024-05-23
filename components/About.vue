<script setup lang="ts">
const swiperRef = ref(null)
</script>

<template>
  <section class="about section" id="about">
    <h2 class="about__title">О нас</h2>
    <div class="about__block">
      <img src="../assets/img/about1.png" alt="" class="about__block-image">
      <Swiper
          :slides-per-view="1"
          :modules="[SwiperNavigation, SwiperPagination]"
          class="about__block-slider"
          space-between="10"
          :pagination="{clickable: true}"
      >
        <SwiperSlide class="about__block-text">
          <p class="about__block-text_title text-title">Философия про индивидуальный подход <span class="custom-back">к каждому<span></span></span></p>
          <p class="text">DOUBLE CUTS - это место где тебя выслушают и услышат.</p>
          <p class="text">Наши мастера регулярно проходят повышение квалификации, чтобы соответствовать современным запросам клиентов.</p>
          <p class="text">Так же наши мастера являются преподавателями, судя по отзывам, вполне успешно справляются.</p>
          <img src="../assets/img/logo.png" alt="" class="about__block-text_image cuts">
        </SwiperSlide>
        <SwiperSlide class="about__block-text">
          <p class="about__block-text_title text-title">Самый рейтинговый <span class="custom-back">барбершоп<span></span></span> по отзывам Яндекс и 2GIS </p>
          <p class="text"><span class="custom-back text-title">5.0<span></span></span> - оценка на Яндекс картах</p>
          <p class="text"><span class="custom-back text-title">5.0<span></span></span> - оценка 2GIS</p>
          <svg class="about__block-text_image" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="12" r="12" fill="#FC3F1D"></circle><path d="M21.885 19.5h2.616v-15h-3.808c-3.83 0-5.839 1.96-5.839 4.857 0 2.5 1.303 3.91 3.61 5.44l1.401.925-1.799-1.508-3.565 5.286h2.837l3.808-5.683-1.325-.88c-1.6-1.08-2.384-1.917-2.384-3.734 0-1.597 1.126-2.677 3.267-2.677h1.17V19.5h.011z" fill="#fff"></path></svg>
        </SwiperSlide>
        <SwiperSlide class="about__block-text">
          <p class="about__block-text_title text-title">Мы за <span class="custom-back">безопасность<span></span></span></p>
          <p class="text">В барбершопе работает циркулятор воздуха, с его помощью очищается воздух в помещении.</p>
          <p class="text">Используем антисептические средства и тщательно обрабатываем рабочий инструмент по нормам СанПин</p>
          <svg class="about__block-text_image shield" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>safety_certificate_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="System" transform="translate(-430.000000, -240.000000)"> <g id="safety_certificate_fill" transform="translate(430.000000, 240.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M11.2978,2.19533 C11.6939125,2.0467725 12.1254734,2.02820281 12.530448,2.13962094 L12.7022,2.19533 L19.7022,4.82033 C20.4308533,5.09354467 20.9298818,5.76181693 20.9931804,6.52752646 L21,6.69299 L21,12.0557 C21,15.3644353 19.185628,18.397435 16.2910032,19.9669788 L16.0249,20.1056 L12.6708,21.7826 C12.2954222,21.9703333 11.8610222,21.9911926 11.4725284,21.8451778 L11.3292,21.7826 L7.97508,20.1056 C5.01569824,18.6258412 3.11426678,15.6466349 3.00497789,12.3557015 L3,12.0557 L3,6.69299 C3,5.91488867 3.45049511,5.21294858 4.14521784,4.88481446 L4.29775,4.82033 L11.2978,2.19533 Z M15.4329,8.6291 L10.8348,13.2272 L9.06707,11.4594 C8.67654,11.0689 8.04338,11.0689 7.65285,11.4594 C7.26233,11.8499 7.26233,12.4831 7.65285,12.8736 L10.057,15.2778 C10.4866,15.7074 11.1831,15.7074 11.6127,15.2778 L16.8471,10.0433 C17.2377,9.65278 17.2377,9.01962 16.8471,8.6291 C16.4566,8.23857 15.8235,8.23857 15.4329,8.6291 Z" id="形状" fill="#5F2691"> </path> </g> </g> </g> </g></svg>
        </SwiperSlide>
        <SwiperSlide class="about__block-text">
          <p class="about__block-text_title text-title">Даём реальную <span class="custom-back">гарантию<span></span></span></p>
          <p class="text">Не понравилось - не платишь!</p>
          <p class="text">Мы полностью несём ответственность за наши косяки, любые недочеты будут исправлены в течение 3-ех дней!</p>
          <svg class="about__block-text_image warranty" fill="#5F2691" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="27. Return" id="_27._Return"> <path d="M16,0A16,16,0,0,0,4.08,26.66a13,13,0,0,0,1,1.06c.22.21.45.42.69.62s.59.46.88.66H6a1,1,0,0,0,0,2H9a1,1,0,0,0,1-1V27a1,1,0,0,0-2,0v.47c-.3-.21-.61-.43-.93-.68s-.39-.34-.57-.52-.63-.61-.93-.94A14,14,0,1,1,16,30a13.57,13.57,0,0,1-2.8-.28,1,1,0,1,0-.4,2A16,16,0,1,0,16,0Z"></path> <path d="M26,16A10,10,0,1,0,16,26,10,10,0,0,0,26,16ZM8,16a8,8,0,1,1,8,8A8,8,0,0,1,8,16Z"></path> <path d="M17,21v-.18A3,3,0,0,0,16,15a1,1,0,0,1,0-2h2a1,1,0,0,0,0-2H17a1,1,0,0,0-2,0v.18A3,3,0,0,0,16,17a1,1,0,0,1,0,2H14a1,1,0,0,0,0,2h1a1,1,0,0,0,2,0Z"></path> </g> </g></svg>
        </SwiperSlide>
        <SwiperSlide class="about__block-text">
          <p class="about__block-text_title text-title"><span class="custom-back">Бесплатные<span></span></span> напитки и кофе с собой</p>
          <p class="text">У нас играет классная музыка и есть чай с конфетами (классический черный или зелёный, а так же много видов китайского для тех кто в теме)</p>
          <svg class="about__block-text_image tea" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.2509 11.8809C2.2404 12.057 2.26536 12.2706 2.3153 12.6978L2.71598 16.1258C2.89681 17.6729 3.72352 19.0714 4.99182 19.9757C5.9263 20.6419 7.04537 21 8.19303 21H11.8069C12.9546 21 14.0736 20.6419 15.0081 19.9757C15.8116 19.4028 16.4378 18.6317 16.8349 17.75H19C21.0711 17.75 22.75 16.0711 22.75 14C22.75 11.9289 21.0711 10.25 19 10.25H16.7212C16.5325 10.1455 16.3244 10.0703 16.1027 10.0309C15.929 10 15.7139 10 15.2838 10H4.71612C4.286 10 4.07094 10 3.89725 10.0309C2.98677 10.1928 2.30599 10.9577 2.2509 11.8809ZM17.7369 11.75C17.7424 11.7932 17.7464 11.8369 17.749 11.8809C17.7595 12.057 17.7346 12.2706 17.6847 12.6977L17.284 16.1258C17.2791 16.1673 17.2738 16.2087 17.268 16.25H19C20.2426 16.25 21.25 15.2426 21.25 14C21.25 12.7574 20.2426 11.75 19 11.75H17.7369Z" fill="#5F2691"></path> <g opacity="0.5"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5307 1.46967C10.8236 1.76256 10.8236 2.23744 10.5307 2.53033C10.2713 2.78972 10.2713 3.21028 10.5307 3.46967C11.3758 4.31485 11.3758 5.68515 10.5307 6.53033C10.2378 6.82322 9.7629 6.82322 9.47001 6.53033C9.17712 6.23744 9.17712 5.76256 9.47001 5.46967C9.7294 5.21028 9.7294 4.78972 9.47001 4.53033C8.62483 3.68515 8.62483 2.31485 9.47001 1.46967C9.7629 1.17678 10.2378 1.17678 10.5307 1.46967Z" fill="#5F2691"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03052 2.96967C6.32341 3.26256 6.32341 3.73744 6.03052 4.03033L5.9144 4.14645C5.67115 4.3897 5.64379 4.77479 5.85019 5.05C6.50448 5.92239 6.41772 7.14313 5.64664 7.91421L5.53052 8.03033C5.23763 8.32322 4.76275 8.32322 4.46986 8.03033C4.17697 7.73744 4.17697 7.26256 4.46986 6.96967L4.58598 6.85355C4.82923 6.6103 4.85659 6.22521 4.65019 5.95C3.9959 5.07761 4.08266 3.85687 4.85374 3.08579L4.96986 2.96967C5.26275 2.67678 5.73763 2.67678 6.03052 2.96967Z" fill="#5F2691"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5305 2.96967C15.8234 3.26256 15.8234 3.73744 15.5305 4.03033L15.4144 4.14645C15.1712 4.3897 15.1438 4.77479 15.3502 5.05C16.0045 5.92239 15.9177 7.14313 15.1466 7.91421L15.0305 8.03033C14.7376 8.32322 14.2628 8.32322 13.9699 8.03033C13.677 7.73744 13.677 7.26256 13.9699 6.96967L14.086 6.85355C14.3292 6.6103 14.3566 6.22521 14.1502 5.95C13.4959 5.07761 13.5827 3.85687 14.3537 3.08579L14.4699 2.96967C14.7628 2.67678 15.2376 2.67678 15.5305 2.96967Z" fill="#5F2691"></path> </g> </g></svg>        </SwiperSlide>
      </Swiper>
<!--      <div class="about__block-text">-->
<!--        <p class="about__block-text_title text-title">Философия про индивидуальный подход <span class="custom-back">к каждому<span></span></span></p>-->
<!--        <p class="text">DOUBLE CUTS - это место где тебя выслушают и услышат.</p>-->
<!--        <p class="text">Наши мастера регулярно проходят повышение квалификации, чтобы соответствовать современным запросам клиентов.</p>-->
<!--        <p class="text">Так же наши мастера являются преподавателями, судя по отзывам, вполне успешно справляются.</p>-->
<!--      </div>-->
      <img src="../assets/img/about2.png" alt="" class="about__block-image">
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/colors";

.about{
  padding-top: 120px;

  @media (max-width: 768px) {
    margin-top: -90px;
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

    &-slider{
      max-width: 400px;
      width: 100%;
      position: relative;

      @media (max-width: 1100px){
        max-width: unset;
      }
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
      position: relative;

      @media (max-width: 450px) {
        height: 400px;
      }

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

      &_image{
        width: 60px;
        align-self: center;
        border-radius: 20px;
        position: absolute;
        right: 0;
        bottom: 10px;

        &.shield{
          width: 50px;
          margin-top: 0;
          right: 5px;
          bottom: 5px;
        }

        &.cuts{
          bottom: 0;
        }

        &.warranty{
          right: 10px;
          width: 40px;
          bottom: 10px;
        }

        &.tea{
          bottom: 5px;
          right: 5px;
        }
      }
    }
  }
}

.swiper-pagination-bullet-active{
  background: $purple !important;
}
</style>