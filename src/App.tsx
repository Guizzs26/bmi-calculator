import { FunctionComponent } from "react";
import styles from "./App.module.css";
import { Hero } from "./components/Hero";

import { Title } from "./components/Title/index";
import { BMIForm } from "./components/Form";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.leftBox}>
        <Hero />
      </div>

      <div className={styles.rightBox}>
        <Title />
        <BMIForm />
      </div>
    </div>
  );
};

export { App };
