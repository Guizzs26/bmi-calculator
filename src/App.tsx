import styles from "./App.module.css";

import { FunctionComponent } from "react";

import { Hero } from "./components/Hero";
import { Title } from "./components/Title/index";
import { BMIForm } from "./components/Form";
import { MoreInfo } from "./components/MoreInfo";

const App: FunctionComponent = () => {
  return (
    <div className={styles.appContainer}>
      <Hero />

      <div className={styles.rightBox}>
        <Title />
        <BMIForm />
        <MoreInfo />
      </div>
    </div>
  );
};

export { App };
