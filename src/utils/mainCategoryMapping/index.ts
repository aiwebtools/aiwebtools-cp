
import { MainCategory } from "./types";
import { coreCategories } from "./coreCategories";
import { mediaCategories } from "./mediaCategories";
import { businessCategories } from "./businessCategories";
import { technicalCategories } from "./technicalCategories";
import { serviceCategories } from "./serviceCategories";
import { specializedCategories } from "./specializedCategories";

export type { MainCategory } from "./types";

export const mainCategories: MainCategory[] = [
  ...coreCategories,
  ...mediaCategories,
  ...businessCategories,
  ...technicalCategories,
  ...serviceCategories,
  ...specializedCategories
];
