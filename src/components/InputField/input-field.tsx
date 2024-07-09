import styles from "./input-field.module.css";
import { ChangeEvent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { InputFieldProps } from "./types/input.field.type.prop";

const InputField = ({
  children,
  id,
  value,
  onChange,
  unit,
  icon,
}: InputFieldProps): JSX.Element => {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{children}</label>

      <div className={styles.inputField}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <input
          type="number"
          id={id}
          name={id}
          value={value}
          onChange={handleChangeInput}
          required
        />

        <span>{unit}</span>
      </div>
    </div>
  );
};

export { InputField };
