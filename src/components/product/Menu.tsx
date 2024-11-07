import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.sortLabel} onClick={handleToggle}>
        Recommended <span className={styles.dropdownIcon}>&#9660;</span>
      </div>
      
      <div
        className={`${styles.menuDropdown} ${isOpen ? styles.show : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.menuOption}>Recommended</div>
        <div className={styles.menuOption}>Newest First</div>
        <div className={styles.menuOption}>Popular</div>
        <div className={styles.menuOption}>Price: High to Low</div>
        <div className={styles.menuOption}>Price: Low to High</div>
      </div>
    </div>
  );
}
