import styles from "./more-info.module.css";

const MoreInfo = () => {
  return (
    <footer className={styles.moreInfo}>
      <a
        href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html"
        target="_blank"
        className={styles.bmiLink}
      >
        More information about BMI
      </a>

      <div className={styles.notes}>
        <p>
          Note*: The BMI calculation does not take body composition into
          account. For this reason, people with a lot of muscle mass, such as
          some athletes, may have a higher BMI than normal. It is best to
          consult a nutritionist for a more detailed assessment.
        </p>

        <p>Note**: This calculator is for calculating BMI in adults.</p>
      </div>
    </footer>
  );
};

export { MoreInfo };
