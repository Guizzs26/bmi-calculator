import styles from "./result.module.css";

import { Category } from "../../Helpers/imc.type";

export type ResultProps = {
  bmiResult: number;
  category: Category | null;
  height: number;
  onWeightRange: (height: number, category: Category | null) => string;
};

const Result = ({
  bmiResult,
  category,
  height,
  onWeightRange,
}: ResultProps) => {
  const getClassByCategory = (category: Category | null) => {
    if (!category) return "";

    switch (category.title) {
      case "Underweight":
        return styles.danger;
      case "Normal Weight":
        return styles.normal;
      case "Overweight":
        return styles.attention;
      case "Obesity":
        return styles.danger;
      default:
        return "";
    }
  };

  return (
    <div className={styles.result}>
      <div className={styles.bmi}>
        <span className={`${styles.bmiValue} ${getClassByCategory(category)}`}>
          {bmiResult.toFixed(2)}
        </span>

        <span className={styles.bmiLabel}>Your BMI</span>
      </div>

      <div className={styles.details}>
        <span className={styles.categoryLabel}>
          Category:{" "}
          <span
            className={`${styles.categoryValue} ${getClassByCategory(
              category
            )}`}
          >
            {category?.title}
          </span>
        </span>

        <span className={styles.weightRangeLabel}>
          Weight Range:{" "}
          <span className={styles.weightRangeValue}>
            {onWeightRange(height, category)}
          </span>
        </span>
      </div>
    </div>
  );
};

export { Result };
