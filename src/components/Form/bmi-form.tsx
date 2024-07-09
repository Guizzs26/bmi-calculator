import styles from "./bmi-form.module.css";
import { FormEvent, useState } from "react";

import { Category } from "../../Helpers/imc.type";
import { getCategory } from "../../Helpers/getCategory";

import { InputField } from "../InputField/input-field";

const BMIForm = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  const handleCalculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);

      setBmiResult(bmiValue);
      setCategory(getCategory(bmiValue));
    } else {
      alert("Please enter a valid weight and height");
    }
  };

  const getWeightRange = (
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
        return `${minWeight(18.5).toFixed(2)} - ${maxWeight(24.9).toFixed(
          2
        )} kg`;
      case "Overweight":
        return `${minWeight(25).toFixed(2)} - ${maxWeight(29.9).toFixed(2)} kg`;
      case "Obesity":
        return `> ${minWeight(30).toFixed(2)} kg`;
      default:
        return "";
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleCalculateBMI();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputField
        label="Weight in Kg"
        id="weight"
        value={weight}
        onChange={(value) => setWeight(Number(value))}
        unit="Kg"
      />

      <InputField
        label="Height in cm"
        id="height"
        value={height}
        onChange={(value) => setHeight(Number(value))}
        unit="Cm"
      />

      <button type="submit">Calculate</button>

      {bmiResult !== null && (
        <div className={styles.result}>
          <h2>Result: </h2>
          <p>Your BMI is: {bmiResult}</p>
          <p>Category: {category?.title}</p>
          <p>Intervalo de peso: {getWeightRange(height, category)}</p>
        </div>
      )}
    </form>
  );
};

export { BMIForm };