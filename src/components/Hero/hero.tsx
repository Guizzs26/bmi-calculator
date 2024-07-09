import styles from "./hero.module.css";

import { FunctionComponent } from "react";

const Hero: FunctionComponent = (): JSX.Element => {
  return (
    <img
      src="calculator.png"
      alt="Two persons training"
      className={styles.heroImg}
    />
  );
};

export { Hero };
