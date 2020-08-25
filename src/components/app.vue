<template>
  <div class="container">
    <carousel>
      <CarouselSlide>
        <div class="box">
        
        
        </div>
      </CarouselSlide>
      <CarouselSlide>
        <div class="box">
        
        </div>
      </CarouselSlide>
      <CarouselSlide>
        <div class="box">
         
        </div>
      </CarouselSlide>
      <CarouselSlide>
        <div class="box">
         
        </div>
      </CarouselSlide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  data() {
    return {
      bundler: "Sarah Guillaume",
      jobs: "Web developer",
      home: "Contact me",
      competence: "Compétences",
      experience: "Expériences Professionnelles",
      formation: "Formations",
    };
  },
  components: {
    //important des elements
    Carousel: () => import("./carousel/Carousel.vue"),
    CarouselSlide: () => import("./carousel/CarouselSlide.vue"),
  },
};
</script>

<style lang="scss">
.container {
  color: #646363 !important;
  // background: darkblue;
  top: 0;
  max-width: 100% !important;
  max-height: 100% !important;
}

.box {
  position: absolute;
  z-index: 20;
  margin-left: 39%;
  border-radius: 0 !important;
  box-shadow: none !important;
  color: #646363 !important;
  border: #646363 1px solid !important;
  margin-top: 50vh !important; /* poussé de la moitié de hauteur de viewport */
  transform: translateY(-55%) !important;
}


</style>
