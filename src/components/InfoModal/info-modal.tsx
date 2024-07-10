import styles from "./info-modal.module.css";

import { InfoModalProps } from "./types/info.modal.type.prop";

import { Category } from "../../Helpers/imc.type";
import { categories } from "../../Helpers/getCategory";

const InfoModal = ({ isOpen, onClose, selectedCategory }: InfoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h1 className={styles.heading}>Understand your result</h1>
          <button className={styles.closeModalBtn} onClick={onClose}>
            &times;
          </button>
        </div>

        <div className={styles.modalContent}>
          {categories.map((category: Category) => (
            <div
              className={`${styles.modalItem} ${
                selectedCategory?.title === category.title
                  ? styles.selected
                  : ""
              }`}
              key={category.title}
            >
              <img src={category.image} alt={category.title} />
              <h2 className={styles.title}>{category.title}</h2>
              <p
                className={styles.range}
              >{`BMI Range: ${category.bmiRange[0]} - ${category.bmiRange[1]}`}</p>
              <p className={styles.description}>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { InfoModal };
