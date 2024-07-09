import styles from "./input-field.module.css";

import { ChangeEvent } from "react";

import { InputFieldProps } from "./types/input.field.type.prop";

const InputField = ({
  label,
  id,
  value,
  onChange,
  unit,
}: InputFieldProps): JSX.Element => {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{label}</label>

      <div className={styles.inputField}>
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
