import styles from "./hero.module.css";

const Hero = () => {
  return (
    <img
      src="calculator.png"
      alt="Two persons training"
      className={styles.heroImg}
    />
  );
};

export { Hero };
