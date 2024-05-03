import { defineStore } from 'pinia';
import { BeltColors, Technique } from 'src/models/Technique';
import { techniques } from 'src/data/TechniqueData';

export const useKenpoStore = defineStore('kenpo', {
  state: () => ({
    techniques: techniques as Technique[],
    randomizeTechniques: false,
    displayOpponentInteraction: true,
    overrideTimeToPerform: null as null | number,
  }),
  getters: {
    getTechniquesByBelt: (state) => {
      return (belt: BeltColors) => state.techniques.filter((technique) => technique.Belt === belt);
    },
    getFilteredTechniques: (state) => state.techniques.filter((technique) => technique.IncludedInFlashcards === true),
  },
});
