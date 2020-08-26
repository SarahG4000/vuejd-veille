<template>
  <div class="container">
    <!-- <h1 class="title">{{bundler}}</h1> -->
    <todos></todos>
  </div>
</template>

<script>
import Vue from "vue";
import Todos from "./components/Todos";

export default {
  data() {
    return {
      bundler: "Hello wordl",
    };
  },
  components: {
    Todos,
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

// .box
//   position: absolute;
//   z-index: 20;
//   margin-left: 39%;
//   border-radius: 0 !important;
//   box-shadow: none !important;
//   color: #646363 !important;
//   border: #646363 1px solid !important;
//
</style>


 <!-- <carousel>
      <CarouselSlide>
        <div class="box">
          <h1 class="title">{{bundler1}}</h1>
          <img src="../assets/59721fc6556512ad171bd117ad7ccf9d.gif" />
        </div>
      </CarouselSlide>
      <CarouselSlide>
        <div class="box">
          <h1 class="title">{{bundler2}}</h1>
          <img src="../assets/59721fc6556512ad171bd117ad7ccf9d.gif" />
        </div>
      </CarouselSlide>
      <CarouselSlide>
        <div class="box">
          <h1 class="title">{{bundler3}}</h1>
          <img src="../assets/59721fc6556512ad171bd117ad7ccf9d.gif" />
        </div>
      </CarouselSlide>
      <CarouselSlide>
        <div class="box">
          <h1 class="title">{{bundler4}}</h1>
          <img src="../assets/59721fc6556512ad171bd117ad7ccf9d.gif" />
        </div>
      </CarouselSlide>
    </carousel>-->