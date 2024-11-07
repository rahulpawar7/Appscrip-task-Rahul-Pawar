import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://appscrip-task-rahul-pawar.vercel.app/"
        />
        <link
          rel="alternate"
          href="https://appscrip-task-rahul-pawar.vercel.app/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://appscrip-task-rahul-pawar.vercel.app/es"
          hrefLang="es"
        />
        <title>Discover Our Products - mettā muse</title>
        <meta name="robots" content="index, follow" />
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
