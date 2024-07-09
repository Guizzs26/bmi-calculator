import styles from "./title.module.css";

import { FunctionComponent } from "react";

const Title: FunctionComponent = (): JSX.Element => {
  return <h1 className={styles.title}>BMI - Calculator</h1>;
};

export { Title };
