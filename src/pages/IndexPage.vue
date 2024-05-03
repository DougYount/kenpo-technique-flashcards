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
          <q-scroll-area style="height: 400px">
            <q-list dense class="q-py-xs">
              <q-item v-ripple clickable @click="yellowShow = !yellowShow">
                <q-checkbox
                  v-model="yellowAll"
                  label="Yellow Belt"
                  @update:model-value="setTechniques(yellowAll, yellowTechniques)"
                />
                <q-icon :name="yellowShow ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in yellowTechniques" :key="technique.TechniqueName" v-show="yellowShow">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable @click="orangeShow = !orangeShow">
                <q-checkbox
                  v-model="orangeAll"
                  label="Orange Belt"
                  @update:model-value="setTechniques(orangeAll, orangeTechniques)"
                />
                <q-icon :name="orangeShow ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in orangeTechniques" v-show="orangeShow" :key="technique.TechniqueName">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable @click="purpleShow = !purpleShow">
                <q-checkbox
                  v-model="purpleAll"
                  label="Purple Belt"
                  @update:model-value="setTechniques(purpleAll, purpleTechniques)"
                />
                <q-icon :name="purpleShow ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in purpleTechniques" v-show="purpleShow" :key="technique.TechniqueName">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable @click="blueShow = !blueShow">
                <q-checkbox
                  v-model="blueAll"
                  label="Blue Belt"
                  @update:model-value="setTechniques(blueAll, blueTechniques)"
                />
                <q-icon :name="blueShow ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in blueTechniques" v-show="blueShow" :key="technique.TechniqueName">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable @click="greenShow = !greenShow">
                <q-checkbox
                  v-model="greenAll"
                  label="Green Belt"
                  @update:model-value="setTechniques(greenAll, greenTechniques)"
                />
                <q-icon :name="greenShow ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in greenTechniques" v-show="greenShow" :key="technique.TechniqueName">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable @click="brown3Show = !brown3Show">
                <q-checkbox
                  v-model="brown3All"
                  label="3rd Brown Belt"
                  @update:model-value="setTechniques(brown3All, brown3Techniques)"
                />
                <q-icon :name="brown3Show ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in brown3Techniques" v-show="brown3Show" :key="technique.TechniqueName">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable @click="brown2Show = !brown2Show">
                <q-checkbox
                  v-model="brown2All"
                  label="2nd Brown Belt"
                  @update:model-value="setTechniques(brown2All, brown2Techniques)"
                />
                <q-icon :name="brown2Show ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in brown2Techniques" v-show="brown2Show" :key="technique.TechniqueName">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable @click="brown1Show = !brown1Show">
                <q-checkbox
                  v-model="brown1All"
                  label="1st Brown Belt"
                  @update:model-value="setTechniques(brown1All, brown1Techniques)"
                />
                <q-icon :name="brown1Show ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in brown1Techniques" v-show="brown1Show" :key="technique.TechniqueName">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable @click="blackShow = !blackShow">
                <q-checkbox
                  v-model="blackAll"
                  label="Black Belt"
                  @update:model-value="setTechniques(blackAll, blackTechniques)"
                />
                <q-icon :name="blackShow ? 'mdi-menu-up' : 'mdi-menu-down'" size="lg" />
              </q-item>
              <q-item v-for="technique in blackTechniques" v-show="blackShow" :key="technique.TechniqueName">
                <q-item-section>
                  <q-checkbox v-model="technique.IncludedInFlashcards" :label="technique.TechniqueName" />
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
            <q-input
              dense
              outlined
              clearable
              v-model="store.overrideTimeToPerform"
              label="Override Time to Perform"
              type="number"
            />
          </div>
          <div class="col">
            <q-checkbox left-label v-model="store.randomizeTechniques" label="Randomize Order" />
          </div>
          <div class="col">
            <q-checkbox left-label v-model="store.displayOpponentInteraction" label="Display Opponent Interaction" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Clear All" @click="clearAll" />
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
const purpleTechniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Purple));
const blueTechniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Blue));
const greenTechniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Green));
const brown1Techniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Brown1));
const brown2Techniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Brown2));
const brown3Techniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Brown3));
const blackTechniques: Ref<Technique[]> = ref(store.getTechniquesByBelt(BeltColors.Black));

const yellowAll = ref(false);
const yellowShow = ref(false);
const orangeAll = ref(false);
const orangeShow = ref(false);
const purpleAll = ref(false);
const purpleShow = ref(false);
const blueAll = ref(false);
const blueShow = ref(false);
const greenAll = ref(false);
const greenShow = ref(false);
const brown1All = ref(false);
const brown1Show = ref(false);
const brown2All = ref(false);
const brown2Show = ref(false);
const brown3All = ref(false);
const brown3Show = ref(false);
const blackAll = ref(false);
const blackShow = ref(false);

function setTechniques(includeAll: boolean, techniques: Technique[]) {
  techniques.map((technique) => (technique.IncludedInFlashcards = includeAll));
}
function clearAll() {
  store.techniques.map((technique) => (technique.IncludedInFlashcards = false));
  yellowAll.value = false;
  orangeAll.value = false;
  purpleAll.value = false;
  blueAll.value = false;
  greenAll.value = false;
  brown3All.value = false;
  brown2All.value = false;
  brown1All.value = false;
  blackAll.value = false;
}
</script>
