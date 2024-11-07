import Image from "next/image";
import styles from "../../styles/Home.module.css";
import LanguageDropdown from "./LanguageSelector";

const Header = () => (
  <div className={styles.mainHeader}>
    <header className={styles.header}>
      <div className={styles.mobileMenuIcon}>
        <Image
          src="/images/Menu.png"
          alt="Menu"
          width={36}
          height={36}
          priority
        />
      </div>
      <div className={styles.logo}>
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={36}
          height={36}
          priority
        />
      </div>
      <div className={styles.LogoTitile}>
        <span>LOGO</span>
      </div>

      <div className={styles.grid}>
        <Image
          src="/images/vuesax/linear/heart.png"
          alt="heart"
          width={24}
          height={24}
        />
        <Image
          src="/images/vuesax/linear/search-normal.png"
          alt="search"
          width={24}
          height={24}
        />
        <Image
          src="/images/vuesax/linear/shopping-bag.png"
          alt="shopping"
          width={24}
          height={24}
        />
        <Image
          src="/images/vuesax/twotone/profile.png"
          alt="profile"
          width={24}
          height={24}
          className={styles.hideInMobile}
        />
        <LanguageDropdown />
      </div>
    </header>

    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>SHOP</li>
          <li className={styles.navItem}>SKILLS</li>
          <li className={styles.navItem}>STORIES</li>
          <li className={styles.navItem}>ABOUT</li>
          <li className={styles.navItem}>CONTACT US</li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
