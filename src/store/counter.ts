import { ref } from "vue";
import { defineStore } from "pinia";

export const counter = defineStore("counter", () => {
  const display = ref<boolean>(false)

  const setDisplay = (val: boolean) => {
    display.value = val
  }

  const displayName = ref<string>('')

  const setDisplayName = (val: string) => {
    displayName.value = val
  }

  return { display, setDisplay, displayName, setDisplayName };
});
