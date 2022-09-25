<script setup lang="ts">
defineProps({
  url: String,
  title: String,
  info: String,
  link: String
})

const redirectLink = (url?: string) => {
  if (url) {
    location.href = url
  }
}
</script>
  
  <template>
    <div class="card w-[320px] rounded-none">
      <figure><img class="h-[237px] w-full" src="../../../assets/cover.png" alt="car!"></figure>
      <div class="card-body mt-12 border-t-[3px]">
        <!-- <h2 class="card-title font-kai text-2xl">{{title}}</h2> -->
        <p class="font-fang-song text-sm leading-8 ml-[-34px] mt-[-24px] w-[316px] font-bold">{{info}}</p>
        <div class="card-actions justify ml-[-34px]">
          <button class="btn btn-primary bg-slate-100 border-slate-100 text-gray-500 hover:bg-slate-200 hover:border-slate-200" @click="redirectLink(link)">前往语料库 ></button>
        </div>
      </div>
    </div>
    <!-- <div class="glass w-[320px]">
      <figure><img class="h-[237px] w-full" :src="url" alt="car!"></figure>
      <div class="">{{info}}</div>
    </div> -->
  </template>