import styles from "./more-info.module.css";

const MoreInfo = (props: MoreInfoProps) => {
  return (
    <footer className={styles.moreInfo}>
      <a
        href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html"
        target="_blank"
        className={styles.bmiLink}
      >
        More information about BMI
      </a>
    </footer>
  );
};

export { MoreInfo };
