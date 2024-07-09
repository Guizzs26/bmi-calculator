import { Category } from "./imc.type";

export const categories: Category[] = [
  {
    title: "Underweight",
    bmiRange: [0, 18.5],
    description:
      "Below normal weight. Consider consulting a healthcare provider for evaluation.",
    image: "/imc_06.png",
  },
  {
    title: "Normal Weight",
    bmiRange: [18.6, 24.9],
    description:
      "Congratulations! Your weight is considered normal. Maintain a healthy lifestyle.",
    image: "/imc_05.png",
  },
  {
    title: "Overweight",
    bmiRange: [25, 29.9],
    description:
      "Above normal weight. Consider making changes to your diet and exercise habits.",
    image: "/imc_04.png",
  },
  {
    title: "Obesity Grade I",
    bmiRange: [30, 34.9],
    description:
      "Sign of alert! It's time to take care of yourself, even if your tests are normal. Let's start changes today! Take care of your diet. You need to start monitoring with a nutritionist and / or endocrinologist.",
    image: "/imc_03.png",
  },
  {
    title: "Obesity Grade II",
    bmiRange: [35, 39.9],
    description:
      "Even if your tests appear to be normal, it's time to take care of yourself, starting lifestyle changes with close follow-up from healthcare professionals.",
    image: "/imc_02.png",
  },
  {
    title: "Obesity Grade III",
    bmiRange: [40, 99],
    description:
      "It's severely above normal weight. Immediate action may be required. Consult a healthcare professional.",
    image: "/imc_01.png",
  },
];

export const getCategory = (bmi: number): Category | null => {
  for (const category of categories) {
    if (bmi >= category.bmiRange[0] && bmi < category.bmiRange[1]) {
      const categoryCopy: Category = { ...category };

      return categoryCopy;
    }
  }

  return null;
};
