<template>
  <div class="container">
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
    <h1 class="title">Hello World</h1>
    <todo></todo>
  </div>
</template>

<script>
import Vue from "vue";
import Todo from "./components/todo/Todo.vue";

export default {
  components: {
    //important des elements
    // Carousel: () => import("./carousel/Carousel.vue"),
    // CarouselSlide: () => import("./carousel/CarouselSlide.vue"),
    Todo,
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
