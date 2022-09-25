<script setup lang="ts">
import ThemeChange from "./components/ThemeChange.vue";
</script>

<template>
  <!-- sticky top-0  -->
  <div
    class="z-50 flex h-30 mb-2 w-full justify-center bg-opacity-90 text-base-content backdrop-blur transition-all duration-100"
  >
    <nav class="navbar w-full items-baseline">
      <div class="flex flex-1 md:gap-1 lg:gap-2">
        <router-link
          to="/"
          aria-current="page"
          aria-label="Homepage"
          class="flex-0 btn btn-ghost px-2  h-[106px]"
        >
          <div
            class="font-title inline-flex text-lg text-primary transition-all duration-200 md:text-3xl"
          >
            <img src="../../../assets/qz.jpg" alt="求真" class="h-24">
            <!-- <span class="text-accent font-kai text-4xl">医药典籍<span class="lowercase"></span></span>
            <span class="text-base-content font-fang-song text-2xl leading-10 ml-1">资源库<span class="lowercase"></span></span> -->
            <span class="text-accent font-fang-song text-3xl font-bold leading-[100px] ml-[-20px] mr-2">求真中医善本古籍异文数据库</span>
          </div>
        </router-link>
      </div>
      <div class="flex-0">
        <span
          class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
          data-tip="中医数据库"
        >
          <div class="flex-none items-center">
            <span class="font-kai text-base btn btn-ghost tracking-wider drawer-button normal-case">首页</span>
          </div>
        </span>
        <span class="ml-2 mr-4">|</span>
        <span class="font-kai text-base tracking-wide mr-4">数据库说明</span>
        <ThemeChange />
      </div>
    </nav>
  </div>
</template>
