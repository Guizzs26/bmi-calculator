import { Category } from "./imc.type";

export const calculateWeightRange = (
  height: number,
  category: Category | null,
  bmi: number
): string => {
  if (!category) return "";

  const heightInMeters = height / 100;

  const minWeight = (bmi: number) => bmi * heightInMeters * heightInMeters;
  const maxWeight = (bmi: number) => bmi * heightInMeters * heightInMeters;

  switch (category.title) {
    case "Underweight":
      if (bmi < 18.5) {
        return `< ${maxWeight(18.5).toFixed(2)} kg`;
      }
      break;
    case "Normal Weight":
      if (bmi >= 18.5 && bmi <= 24.9) {
        return `${minWeight(18.5).toFixed(2)} - ${maxWeight(24.9).toFixed(
          2
        )} kg`;
      }
      break;
    case "Overweight":
      if (bmi >= 25 && bmi <= 29.9) {
        return `${minWeight(25).toFixed(2)} - ${maxWeight(29.9).toFixed(2)} kg`;
      }
      break;
    case "Obesity Grade I":
      if (bmi >= 30 && bmi <= 34.9) {
        return `> ${minWeight(30).toFixed(2)} kg`;
      }
      break;
    case "Obesity Grade II":
      if (bmi >= 35 && bmi <= 39.9) {
        return `> ${minWeight(35).toFixed(2)} kg`;
      }
      break;
    case "Obesity Grade III":
      if (bmi >= 40) {
        return `> ${minWeight(40).toFixed(2)} kg`;
      }
      break;
    default:
      return "";
  }

  return "";
};
