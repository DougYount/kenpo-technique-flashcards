export interface Technique {
  Belt: BeltColors;
  TechniqueName: string;
  TimeToPerform: number;
  IncludedInFlashcards: boolean;
}

export enum BeltColors {
  Yellow,
  Orange,
  Purple,
  Blue,
  Green,
  Brown3,
  Brown2,
  Brown1,
  Black,
}
