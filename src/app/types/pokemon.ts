// types/pokemon.ts

export interface Name {
  fr: string;
  en: string;
  jp: string;
}

export interface Sprites {
  regular: string;
  shiny: string | null;
  gmax: any | null; // Ceci peut être plus détaillé si vous avez la structure exacte
}

export interface Types {
  name: string;
  image: string;
}

export interface Talents {
  name: string;
  tc: boolean;
}

export interface Stats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

export interface Resistances {
  name: string;
  multiplier: number;
}

export interface Evolution {
  pre: EvolutionStep[] | null;
  next: EvolutionStep[] | null;
  mega: MegaEvolution[] | null;
}

export interface EvolutionStep {
  pokedex_id: number;
  name: string;
  condition: string;
}

export interface MegaEvolution {
  orbe: string;
  sprites: Sprites;
}

export interface Sexe {
  male: number;
  female: number;
}

export interface Forme {
  region: string;
  name: Name;
}

export interface Pokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: Name;
  sprites: Sprites;
  types: Types[] | null;
  talents: Talents[] | null;
  stats: Stats | undefined;
  resistances: Resistances[] | null;
  evolution: Evolution | null;
  height: string | null;
  weight: string | null;
  egg_groups: string[] | null;
  sexe: Sexe | null;
  catch_rate: number | null;
  level_100: number | null;
  formes: Forme | null;
}
