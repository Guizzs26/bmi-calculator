import { Category } from "./imc.type";

export const calculateWeightRange = (
  height: number,
  category: Category | null
): string => {
  if (!category) return "";

  const heightInMeters = height / 100;
  const minWeight = (imc: number) => imc * heightInMeters * heightInMeters;
  const maxWeight = (imc: number) => imc * heightInMeters * heightInMeters;

  switch (category.title) {
    case "Underweight":
      return `< ${maxWeight(18.5).toFixed(2)} kg`;
    case "Normal Weight":
      return `${minWeight(18.5).toFixed(2)} - ${maxWeight(24.9).toFixed(2)} kg`;
    case "Overweight":
      return `${minWeight(25).toFixed(2)} - ${maxWeight(29.9).toFixed(2)} kg`;
    case "Obesity":
      return `> ${minWeight(30).toFixed(2)} kg`;
    default:
      return "";
  }
};
