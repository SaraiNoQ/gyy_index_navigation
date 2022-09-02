<script setup lang="ts">
import { ref, watch } from "vue";
import { logLabeled } from "./utils/logger";
import Navbar from "./components/layout/Navbar/index.vue";
import Alert from "./components/layout/Alert/index.vue";
import appStore from "./store";
logLabeled("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*", "log", "", "color: #66ccff");

const dis = ref<boolean>(false);
const alertMessage = ref<string>('');
watch(() => appStore.counter.display, () => {
  dis.value = appStore.counter.display
  alertMessage.value = appStore.counter.displayName
})
</script>

<template>
  <div class="font-chinese antialiased">
    <div class="min-h-screen">
      <div v-if="dis" class="md:flex justify-center">
        <Alert :msg="alertMessage" />
      </div>
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>
