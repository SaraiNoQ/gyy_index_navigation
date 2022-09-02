<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const routeToDetail = () => {
  router.push({
    name: "detail",
  });
};
</script>

<template>
  <div class="hero mt-[-4rem] min-h-screen text-primary-content">
    <!--  <div class="hero min-h-screen from-primary to-secondary" style="background-image: url(https://img.js.design/assets/Resources/background/home-bg-2.png);"> -->
    <div class="hero-overlay place-items-center bg-gradient-to-bl from-primary to-base-100"></div>
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold font-song">古籍药典资源</h1>
        <p class="mb-5">Pharmacopoeia resources of ancient books <sup>(medicine)</sup></p>
        <button class="btn btn-primary" @click="routeToDetail">快速查看<span class="font-black pb-[2px] pl-[2px]">→</span></button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
