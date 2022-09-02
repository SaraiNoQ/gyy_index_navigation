<script setup lang="ts">
import Footer from "~/components/layout/Footer/index.vue";
import Card from "~/components/layout/Card/index.vue"

const infoArr = [{
  url: 'http://www.epicq.top/images/gyy/%E5%A4%87%E6%80%A5%E5%8D%83%E9%87%91%E8%A6%81%E6%96%3F%E5%AE%8B%E6%A0%A1%E6%9C%3F.png',
  title: '汉代医药典籍资源',
  info: '本資料庫收錄了在甲骨、金文及簡牘中出現的各種詞彙，特色在於打破材質與時代的限制，以詞彙本身為焦點，提供簡便的查詢，以觀察詞彙的流變。'
}, {
  url: 'http://www.epicq.top/images/gyy/%E5%A4%87%E6%80%A5%E5%8D%83%E9%87%91%E8%A6%81%E6%96%3F%E5%AE%8B%E6%A0%A1%E6%9C%3F.png',
  title: '唐代医药典籍资源',
  info: '殷周金文暨青銅器資料庫」收錄《殷周金文集成》、《新收殷周青銅器銘文暨器影彙編》，兩書共約14000件青銅器資料，完整呈現每件青銅器的背景訊息，供研究者使用（資料庫需申請帳號、密碼）。'
}, {
  url: 'http://www.epicq.top/images/gyy/%E5%A4%87%E6%80%A5%E5%8D%83%E9%87%91%E8%A6%81%E6%96%3F%E5%AE%8B%E6%A0%A1%E6%9C%3F.png',
  title: '宋代医药典籍资源',
  info: '本資料庫與台大藝術史研究所、倫敦大學亞非學院(SOAS)合作，進行銅器紋飾的分類工作，與「殷周金文暨青銅器資料庫」交互使用，更能全面了解青銅器。目前僅開放「紋飾分類樹狀圖」及「紋飾名稱權威檔」部份。'
}, {
  url: 'http://www.epicq.top/images/gyy/%E5%A4%87%E6%80%A5%E5%8D%83%E9%87%91%E8%A6%81%E6%96%3F%E5%AE%8B%E6%A0%A1%E6%9C%3F.png',
  title: '明清医药典籍资源',
  info: '本資料庫收錄了在甲骨、金文及簡牘中出現的各種詞彙，特色在於打破材質與時代的限制，以詞彙本身為焦點，提供簡便的查詢，以觀察詞彙的流變。'
}, {
  url: 'http://www.epicq.top/images/gyy/%E5%A4%87%E6%80%A5%E5%8D%83%E9%87%91%E8%A6%81%E6%96%3F%E5%AE%8B%E6%A0%A1%E6%9C%3F.png',
  title: '其他医药典籍资源',
  info: '本資料庫收錄了在甲骨、金文及簡牘中出現的各種詞彙，特色在於打破材質與時代的限制，以詞彙本身為焦點，提供簡便的查詢，以觀察詞彙的流變。'
}]
</script>

<template>
  <div class="flex flex-wrap gap-20 py-16 justify-center">
    <Card v-for="(item, index) in infoArr" :key="index" :url="item.url" :title="item.title" :info="item.info"  />

    <div v-if="infoArr.length%3 !== 0">
      <div v-for="index in (3-infoArr.length%3)" :key="index">
        <div class="w-72"></div>
      </div>
    </div>
  </div>

  <Footer />
</template>
