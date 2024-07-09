// BMIForm.tsx

import styles from "./bmi-form.module.css";
import { FormEvent, useState } from "react";

import { Category } from "../../Helpers/imc.type";
import { getCategory } from "../../Helpers/getCategory";
import { calculateBMI } from "../../Helpers/calculateBMI";
import { calculateWeightRange } from "../../Helpers/calculateWeightRange";

import { faWeight, faRulerVertical } from "@fortawesome/free-solid-svg-icons";

import { InputField } from "../InputField/input-field";
import { Result } from "../Result";
import { MoreInfo } from "../MoreInfo";

const BMIForm = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  const handleCalculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmiValue = calculateBMI(weight, height);

      setBmiResult(bmiValue);
      setCategory(getCategory(bmiValue));
    } else {
      alert("Please enter a valid weight and height");
    }
  };

  const handleWeightRange = (
    height: number,
    category: Category | null
  ): string => {
    return calculateWeightRange(height, category);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCalculateBMI();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputField
        id="weight"
        value={weight}
        onChange={(value) => setWeight(Number(value))}
        unit="Kg"
        icon={faWeight}
      >
        Weight in Kg
      </InputField>

      <InputField
        id="height"
        value={height}
        onChange={(value) => setHeight(Number(value))}
        unit="Cm"
        icon={faRulerVertical}
      >
        Height in Cm
      </InputField>

      <button type="submit" className={styles.calculate}>
        Calculate
      </button>

      {bmiResult !== null && (
        <Result
          bmiResult={bmiResult}
          category={category}
          height={height}
          onWeightRange={handleWeightRange}
        />
      )}

      <MoreInfo />
    </form>
  );
};

export { BMIForm };
