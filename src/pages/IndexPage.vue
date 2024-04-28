<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <q-card flat bordered style="width: 800px; max-width: 800px">
      <q-card-section>
        <q-card-section>
          <div class="text-h5">Technique Flash Cards</div>
          <div>Choose the techniques that you would like to show in the flashcards.</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-scroll-area style="height: 200px">
            <q-list dense class="q-py-xs">
              <q-item-label header>Yellow Belt</q-item-label>
              <q-item v-for="technique in yellowTechniques" :key="technique.TechniqueName">
                <q-item-section side>
                  <q-checkbox v-model="technique.IncludedInFlashcards" />
                </q-item-section>
                <q-item-section class="text-left">
                  <q-item-label>{{ technique.TechniqueName }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item-label header>Orange Belt</q-item-label>
              <q-item v-for="technique in orangeTechniques" :key="technique.TechniqueName">
                <q-item-section side>
                  <q-checkbox v-model="technique.IncludedInFlashcards" />
                </q-item-section>
                <q-item-section class="text-left">
                  <q-item-label>{{ technique.TechniqueName }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-card-section>
        <q-separator />
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col">
            <q-input dense outlined clearable v-model="store.overrideTimeToPerform" label="Override Time to Perform" type="number" />
          </div>
          <div class="col">
            <q-checkbox left-label v-model="store.randomizeTechniques" label="Randomize Order" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="Generate" :to="{ name: 'FlashCards' }" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { BeltColors, Technique } from 'src/models/Technique';
import { useKenpoStore } from 'src/stores/kenpoStore';
import { Ref, ref } from 'vue';

defineOptions({
  name: 'IndexPage',
});

const store = useKenpoStore();
const yellowTechniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Yellow));
const orangeTechniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Orange));
</script>
