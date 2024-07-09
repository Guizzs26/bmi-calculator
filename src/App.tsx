import styles from "./App.module.css";

import { FunctionComponent } from "react";

import { Hero } from "./components/Hero";
import { Title } from "./components/Title/index";
import { BMIForm } from "./components/Form";

const App: FunctionComponent = () => {
  return (
    <div className={styles.appContainer}>
      <Hero />

      <div className={styles.rightBox}>
        <Title />
        <BMIForm />
      </div>
    </div>
  );
};

export { App };
