<script setup lang="ts">

</script>

<template>
  <div class="content">
    <div class="content__title">Акции</div>
    <div class="content__list">
      <div class="content__list__item" style="background-image: url(/public/image/Group8.png)"></div>
      <div class="content__list__item" style="background-image: url(/public/image/Group3.png)"></div>
      <div class="content__list__item" style="background-image: url(/public/image/Group9.png)"></div>
      <div class="content__list__item" style="background-image: url(/public/image/Group2.png)"></div>
      <div class="content__list__item" style="background-image: url(/public/image/Group1.png)"></div>
      <div class="content__list__item" style="background-image: url(/public/image/Group4.png)"></div>
      <div class="content__list__item" style="background-image: url(/public/image/Group7.png)"></div>
      <div class="content__list__item" style="background-image: url(/public/image/Group5.png)"></div>
      <div class="content__list__item" style="background-image: url(/public/image/Group6.png)"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    max-width: 1150px;
    margin: 36px auto 0;

    @media (max-width: 1023px) {
      padding: 0 20px;
    }

    @media (max-width: 767px) {
      margin-top: 24px;
      padding: 0 10px;
    }
    
    &__title {
      font-size: 36px;
      font-weight: 700;
      line-height: 42px;
      color: #333333;

      @media (max-width: 767px) {
        font-size: 34px;
        line-height: 28px;
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 34px;
      margin-top: 36px;

      @media (max-width: 1023px) {
        gap: 18px;
      }

      @media (max-width: 767px) {
        margin-top: 24px;
      }
      
      &__item {
        width: 360px;
        height: 203px;
        border-radius: 10px;
        background-size: 426px;
        background-repeat: no-repeat;
        background-position: -32px -27px;
        box-shadow: 0px 6px 30px 4px #2020201A;

        @media (max-width: 1023px) {
          max-width: 355px;
          height: 200px;
        }

        @media (max-width: 767px) {
          max-width: 300px;
          max-height: 169px;
          background-size: 360px;
          background-position: -32px -25px;
        }
      }
    }
  }
</style>