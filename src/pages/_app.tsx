import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Discover Our Products - mettā muse</title>
        <meta
          name="description"
          content="Discover a variety of quality products at mettā muse. Find unique items tailored to your needs."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
