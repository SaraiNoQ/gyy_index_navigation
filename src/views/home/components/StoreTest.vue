<script setup lang="ts">
import Footer from "~/components/layout/Footer/index.vue";
import Card from "~/components/layout/Card/index.vue"

const infoArr = [{
  url: '../../../assets/cover.png',
  title: '宋校医书方剂文献异文图文语料库',
  info: '本库收录宋校《伤寒论》《金匮要略》《金匮玉函经》《备急千金要方》《千金翼方》《外台秘要》6书方剂文献异文共计？处，以异文关联标注、电子文本与善本古籍图像互参的形式呈现。'
}, {
  url: '../../../assets/cover.png',
  title: '《千金要方》版本异文语料库',
  info: '本库以通行本宋校《备急千金要方》为底本，以早期传本新雕本、日藏真本及英藏本、俄藏本为校本，汇集5种版本的异文约计?处。'
}, {
  url: '../../../assets/cover.png',
  title: '《千金要方》宋校本与新雕本方剂异文语料库',
  info: '本库汇集通行本宋校《备急千金要方》与早期传本《新雕孙真人千金方》方剂异文约计?处。'
}, {
  url: '../../../assets/cover.png',
  title: '《新雕孙真人千金方》与《千金翼方》方剂异文语料库',
  info: '本库汇集《千金要方》早期传本《新雕孙真人千金方》与《千金翼方》方剂异文约计?处。'
}, {
  url: '../../assets/cover.png',
  title: '中医文献异文研究相关论文数据库',
  info: '本库收录1949年至今中医文献异文研究相关学术论文，按照发表时间先后排序。'
}, {
  url: '~/assets/cover.png',
  title: '求真中医善本古籍原文数据库',
  info: '本库汇集《素问》《灵枢》《备急千金要方》《外台秘要》等二十余种中医善本古籍原文，提供了阅览、检索、征引等功能。'
}]
</script>

<template>
  <div class="flex flex-wrap gap-20 mt-4 py-4 mx-auto justify-center max-w-[1520px] min-w-[1280px]">
    <Card v-for="(item, index) in infoArr" :key="index" :url="item.url" :title="item.title" :info="item.info"  />

    <div v-if="infoArr.length%3 !== 0">
      <div v-for="index in (3-infoArr.length%3)" :key="index">
        <div class="w-72"></div>
      </div>
    </div>
  </div>

  <Footer />
</template>
