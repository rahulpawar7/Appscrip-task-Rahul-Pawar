import Image from "next/image";
import {
  default as columnStyles,
  default as iconStyles,
  default as styles,
  default as subscribeStyles,
} from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={`${columnStyles.column}`}>
          <h4 className={columnStyles.columnTitle}>BE THE FIRST TO KNOW</h4>
          <p className={columnStyles.columnText}>
            Sign up for updates from mettä muse.
          </p>
          <div className={subscribeStyles.subscribeContainer}>
            <input
              type="email"
              placeholder="Enter your email..."
              className={subscribeStyles.subscribeInput}
            />
            <button className={subscribeStyles.subscribeButton}>
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className={`${columnStyles.column}`}>
          <h4 className={columnStyles.columnTitle}>CONTACT US</h4>
          <p className={columnStyles.columnText}>+44 221 133 5360</p>
          <p className={columnStyles.columnText}>customercare@mettamuse.com</p>
          <h4 className={columnStyles.columnTitle}>CURRENCY</h4>
          <Image
            src="/images/Language.png"
            alt="CURRENCY"
            width={72}
            height={24}
            priority
          />

          <p className={columnStyles.columnText}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className={styles.footerContent}>
        <div className={`${columnStyles.column}`}>
          <h4 className={columnStyles.columnTitle}>METTA MUSE</h4>
          <p className={columnStyles.columnLink}>About Us</p>
          <p className={columnStyles.columnLink}>Stories</p>
          <p className={columnStyles.columnLink}>Artisans</p>
          <p className={columnStyles.columnLink}>Boutiques</p>
          <p className={columnStyles.columnLink}>Contact Us</p>
          <p className={columnStyles.columnLink}>EU Compliances Docs</p>
        </div>

        <div className={`${columnStyles.column}`}>
          <h4 className={columnStyles.columnTitle}>QUICK LINKS</h4>
          <p className={columnStyles.columnLink}>Orders & Shipping</p>
          <p className={columnStyles.columnLink}>Join/Login as a Seller</p>
          <p className={columnStyles.columnLink}>Payment & Pricing</p>
          <p className={columnStyles.columnLink}>Return & Refunds</p>
          <p className={columnStyles.columnLink}>FAQs</p>
          <p className={columnStyles.columnLink}>Privacy Policy</p>
          <p className={columnStyles.columnLink}>Terms & Conditions</p>
        </div>

        <div className={`${columnStyles.column}`}>
          <h4 className={columnStyles.columnTitle}>FOLLOW US</h4>
          <div className={iconStyles.iconContainer}>
            <Image
              src="/images/Insta.png"
              alt="Instagram"
              width={72}
              height={24}
              priority
              className={iconStyles.iconImage}
            />

            <Image
              src="/images/Link.png"
              alt="LinkedIn"
              width={72}
              height={24}
              priority
              className={iconStyles.iconImage}
            />
          </div>

          <h4 className={columnStyles.columnTitle}>mettā muse ACCEPTS</h4>
          <div className={iconStyles.iconContainer}>
            <Image
              src="/images/Gpay.png"
              alt="Google Pay"
              width={56}
              height={35}
              priority
              className={iconStyles.iconImage}
            />
            <Image
              src="/images/Visa.png"
              alt="Visa"
              width={56}
              height={35}
              priority
              className={iconStyles.iconImage}
            />
            <Image
              src="/images/MasterCard.png"
              alt="MasterCard"
              width={56}
              height={35}
              priority
              className={iconStyles.iconImage}
            />
            <Image
              src="/images/American.png"
              alt="American Express"
              width={56}
              height={35}
              priority
              className={iconStyles.iconImage}
            />
            <Image
              src="/images/Apple.png"
              alt="Apple Pay"
              width={56}
              height={35}
              priority
              className={iconStyles.iconImage}
            />
            <Image
              src="/images/Pay.png"
              alt="Pay"
              width={56}
              height={35}
              priority
              className={iconStyles.iconImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        Copyright © 2023 mettä muse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
