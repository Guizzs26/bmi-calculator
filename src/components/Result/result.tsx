import styles from "./result.module.css";
import { useState } from "react";

import { Category } from "../../Helpers/imc.type";
import { InfoModal } from "../InfoModal";

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
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getClassByCategory = (category: Category | null) => {
    if (!category) return "";

    switch (category.title) {
      case "Underweight":
        return styles.danger;
      case "Normal Weight":
        return styles.normal;
      case "Overweight":
        return styles.attention;
      case "Obesity Grade I":
        return styles.danger;
      case "Obesity Grade II":
        return styles.danger;
      case "Obesity Grade III":
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

        <button onClick={openModal} className={styles.infoButton}>
          More Info
        </button>

        <InfoModal isOpen={modalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export { Result };
