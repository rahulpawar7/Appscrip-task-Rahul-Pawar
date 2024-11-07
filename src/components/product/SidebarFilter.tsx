import { useState } from "react";
import styles from "../../styles/Home.module.css";
interface SidebarFiltertProps {
  isOpen: boolean;
}

// Define a type for the filters object
interface Filters {
  idealFor: boolean;
  occasion: boolean;
  work: boolean;
  fabric: boolean;
  segment: boolean;
  suitableFor: boolean;
  rawMaterials: boolean;
  pattern: boolean;
}

const SidebarFilter = ({ isOpen }: SidebarFiltertProps) => {
  const [filters, setFilters] = useState<Filters>({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  // Toggle filter section visibility
  const toggleFilter = (filter: keyof Filters) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? "" : styles.closed}`}>
      {/* Customizable Checkbox */}
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" id="customizable" className={styles.checkbox} />
        <label htmlFor="customizable" className={styles.label}>
          CUSTOMIZABLE
        </label>
      </div>

      {/* Filter Sections */}
      {(Object.keys(filters) as (keyof Filters)[]).map((filterKey, index) => (
        <div key={index} className={styles.filterSection}>
          <div
            className={styles.filterHeader}
            onClick={() => toggleFilter(filterKey)}
          >
            <span>{filterKey.replace(/([A-Z])/g, " $1").toUpperCase()}</span>
            <span className={styles.arrow}>
              {filters[filterKey] ? "▲" : "▼"}
            </span>
          </div>
          {filters[filterKey] && (
            <div className={styles.filterContent}>
              <span>All</span>
              <p className={styles.unSelectAll}>Unselect all</p>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="customizable"
                  className={styles.checkbox}
                />
                <label htmlFor="customizable" className={styles.label}>
                  Men
                </label>
              </div>

              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="customizable"
                  className={styles.checkbox}
                />
                <label htmlFor="customizable" className={styles.label}>
                  Women
                </label>
              </div>

              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="customizable"
                  className={styles.checkbox}
                />
                <label htmlFor="customizable" className={styles.label}>
                  Baby & Kids
                </label>
              </div>
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default SidebarFilter;
