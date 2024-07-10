import { Category } from "../../../Helpers/imc.type";

export type ResultProps = {
  bmiResult: number;
  category: Category | null;
  height: number;
  onWeightRange: (height: number, category: Category | null) => string;
};
