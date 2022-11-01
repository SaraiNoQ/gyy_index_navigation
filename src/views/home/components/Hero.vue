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
  <!-- <div class="hero mt-[-4rem] min-h-screen text-primary-content">
    <div class="hero-overlay place-items-center bg-gradient-to-bl from-primary to-base-100"></div>
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold font-song">古籍药典资源</h1>
        <p class="mb-5">Pharmacopoeia resources of ancient books <sup>(medicine)</sup></p>
        <button class="btn btn-primary" @click="routeToDetail">快速查看<span class="font-black pb-[2px] pl-[2px]">→</span></button>
      </div>
    </div>
  </div> -->
  <div class="h-full min-w-screen">
    <div class="mx-14 leading-8 text-base font-kai">本数据库依托国家社科基金项目“基于图文语料库的宋校医书方剂文献异文研究”（21BTQ026），教育部人文社科项目“中外古本《千金要方》异文汇证与研究” （20YJAZH003）等课题，以北宋校正医书局所校医书为中心，收录汉唐至明清二十余种中医善本古籍，严格校勘，整理汇编了部分医籍的两书异文、版本异文等，进行电子化资源建设，提供了可靠信实的文献基础资料，以及阅览、检索、征引等使用功能。此外收录1949年至今的中医文献异文研究相关学术论文。</div>
  </div>
</template>

<style scoped></style>
