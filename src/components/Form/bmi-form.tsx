import styles from "./bmi-form.module.css";

import { useState, FormEvent } from "react";
import { faWeight, faRulerVertical } from "@fortawesome/free-solid-svg-icons";

import { Category } from "../../Helpers/imc.type";
import { getCategory } from "../../Helpers/getCategory";
import { calculateBMI } from "../../Helpers/calculateBMI";
import { calculateWeightRange } from "../../Helpers/calculateWeightRange";
import { isValidNumber } from "../../Helpers/isValidNumber";

import { InputField } from "../InputField/input-field";
import { Result } from "../Result";
import { MoreInfo } from "../MoreInfo";

const BMIForm = () => {
  const [weight, setWeight] = useState<number | string>("");
  const [height, setHeight] = useState<number | string>("");
  const [bmiResult, setBmiResult] = useState<number>(0);
  const [category, setCategory] = useState<Category | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleCalculateBMI = () => {
    const weightValue =
      typeof weight === "string" ? parseFloat(weight) : weight;
    const heightValue =
      typeof height === "string" ? parseFloat(height) : height;

    if (isValidNumber(weightValue) && isValidNumber(heightValue)) {
      const bmiValue = calculateBMI(weightValue, heightValue);

      setBmiResult(bmiValue);
      setCategory(getCategory(bmiValue));
      setShowResult(true);
    } else {
      alert("Please enter valid numeric values for weight and height.");
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

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmiResult(0);
    setCategory(null);
    setShowResult(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputField
        id="weight"
        value={weight}
        onChange={(value) => setWeight(value)}
        unit="Kg"
        icon={faWeight}
      >
        Weight in Kg
      </InputField>

      <InputField
        id="height"
        value={height}
        onChange={(value) => setHeight(value)}
        unit="Cm"
        icon={faRulerVertical}
      >
        Height in Cm
      </InputField>

      <button type="submit" className={styles.calculate}>
        Calculate
      </button>

      {showResult && (
        <>
          <button onClick={handleReset} className={styles.recalculate}>
            Re-Calculate
          </button>

          <Result
            bmiResult={bmiResult}
            category={category}
            height={typeof height === "string" ? parseFloat(height) : height}
            onWeightRange={handleWeightRange}
          />
        </>
      )}

      <MoreInfo />
    </form>
  );
};

export { BMIForm };
