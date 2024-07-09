import { Category } from "./imc.type";

export const categories: Category[] = [
  {
    title: "Underweight",
    bmi: [0, 18.5],
  },
  {
    title: "Normal Weight",
    bmi: [18.6, 24.9],
  },
  {
    title: "Overweight",

    bmi: [25, 30],
  },
  {
    title: "Obesity",
    bmi: [30.1, 99],
  },
];

export const getCategory = (bmi: number): Category | null => {
  for (const category of categories) {
    if (bmi >= category.bmi[0] && bmi < category.bmi[1]) {
      const categoryCopy: Category = { ...category };

      categoryCopy.yourBmi = bmi;

      return categoryCopy;
    }
  }

  return null;
};
