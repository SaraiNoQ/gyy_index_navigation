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
    <div class="card w-72 glass">
      <figure><img class="h-72 w-full" :src="url" alt="car!"></figure>
      <div class="card-body">
        <h2 class="card-title font-kai text-2xl">{{title}}</h2>
        <p class="font-fang-song text-base">{{info}}</p>
        <div class="card-actions justify">
          <button class="btn btn-primary" @click="redirectLink(link)">相关资讯</button>
          <button class="btn btn-primary">前往资料库 >></button>
        </div>
      </div>
    </div>
  </template>