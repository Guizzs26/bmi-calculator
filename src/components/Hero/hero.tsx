import styles from "./hero.module.css";

import { FunctionComponent } from "react";

const Hero: FunctionComponent = (): JSX.Element => {
  return (
    <img
      src="training.png"
      alt="Two persons training"
      className={styles.heroImg}
    />
  );
};

export { Hero };
