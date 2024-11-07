import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Menu from "@/components/product/Menu";
import ProductList from "@/components/product/ProductList";
import FilterSidebar from "@/components/product/SidebarFilter";
import { GetServerSideProps } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  isNew: string;
  isOutOfStock: string;
  description: string;
}

interface HomePageProps {
  initialProducts: Product[];
}

const Home = ({ initialProducts }: HomePageProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Company Name",
    url: "https://appscrip-task-rahul-pawar.vercel.app/",
    logo: "https://appscrip-task-rahul-pawar.vercel.app/logo.png",
    sameAs: [
      "https://www.facebook.com/yourcompany",
      "https://www.instagram.com/yourcompany",
      "https://twitter.com/yourcompany",
    ],
  };

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Your homepage description" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className={styles.homeMain}>
        <Header />
        <section className={styles.section}>
          <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </section>

        <div className={styles.containerSidebar}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <div className={styles.itemCount}>3425 ITEMS</div>
            <div className={styles.filterToggle} onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className={styles.icon}
              >
                <path d="M8 12a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-1 0v7a.5.5 0 0 0 .5.5zm-4-3a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5zm8 0a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z" />
              </svg>
              HIDE FILTER
            </div>
          </div>

          <div className={styles.leftSectionForMobile}>
            <div className={styles.sortLabel}>
              FILTER
              <span className={styles.dropdownIcon}>&#9660;</span>
            </div>
          </div>
          {/* Right Section */}
          <div className={styles.rightSection}>
            <Menu />
          </div>
        </div>

        <main className={styles.main}>
          <FilterSidebar isOpen={isOpen} />
          <section className={styles.content}>
            <ProductList initialProducts={initialProducts} initialLimit={10} />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const response = await fetch(`https://fakestoreapi.com/products?limit=10`);
  const initialProducts = await response.json();
  res.setHeader("X-Robots-Tag", "index, follow");

  return {
    props: {
      initialProducts,
    },
  };
};
