import Image from "next/image";
import styles from "../../styles/Home.module.css";

const LanguageSelector = () => {
  return (
    <div className={styles.languageSelector}>
      <span className={styles.languageText}>ENG</span>
      <Image
        src="/images/vuesax/linear/arrow-left.png"
        alt="arrow left"
        width={24}
        height={24}
        className={styles.hideInMobile}
      />
    </div>
  );
};

export default LanguageSelector;
