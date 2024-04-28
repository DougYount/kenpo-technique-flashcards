<template>
  <div
    class="fullscreen text-center q-pa-md flex flex-center"
    :style="{ backgroundColor: background, color: fontColor }"
  >
    <div style="font-size: 20vh">{{ currentTechnique }}</div>
  </div>
</template>

<script setup lang="ts">
import { BeltColors } from 'src/models/Technique';
import { useKenpoStore } from 'src/stores/kenpoStore';
import { onMounted, ref } from 'vue';

defineOptions({
  name: 'FlashCards',
});

onMounted(async () => {
  await chooseTechniques();
});

const store = useKenpoStore();
const filteredTechniques = ref(store.getFilteredTechniques);
const currentTechnique = ref('');
const background = ref('white');
const fontColor = ref('black');
async function chooseTechniques() {
  let index = ref(0);
  while (true) {
    if (store.randomizeTechniques) {
      let tempIndex = index.value;
      while (tempIndex === index.value) {
        tempIndex = Math.floor(Math.random() * filteredTechniques.value.length);
      }
      index.value = tempIndex;
    }

    currentTechnique.value = filteredTechniques.value[index.value].TechniqueName;

    switch (filteredTechniques.value[index.value].Belt) {
      case BeltColors.Yellow:
        background.value = 'yellow';
        fontColor.value = 'black';
        break;
      case BeltColors.Orange:
        background.value = 'orange';
        fontColor.value = 'black';
        break;
      case BeltColors.Purple:
        background.value = 'purple';
        fontColor.value = 'black';
        break;
      case BeltColors.Blue:
        background.value = 'blue';
        fontColor.value = 'black';
        break;
      case BeltColors.Green:
        background.value = 'green';
        fontColor.value = 'black';
        break;
      case BeltColors.Brown1:
      case BeltColors.Brown2:
      case BeltColors.Brown3:
        background.value = '#5c2e00';
        fontColor.value = 'black';
        break;
      case BeltColors.Black:
        background.value = 'black';
        fontColor.value = 'white';
        break;
      default:
        background.value = 'white';
        fontColor.value = 'black';
    }

    if (store.overrideTimeToPerform) {
      await wait(store.overrideTimeToPerform * 1000);
    } else {
      await wait(filteredTechniques.value[index.value].TimeToPerform * 1000);
    }

    if (!store.randomizeTechniques) {
      if (index.value === filteredTechniques.value.length - 1) {
        index.value = 0;
      } else {
        index.value++;
      }
    }
  }

  function wait(ms: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Done waiting');
        resolve(ms);
      }, ms);
    });
  }
}
</script>

<style scoped></style>
