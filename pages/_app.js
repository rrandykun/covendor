import "../styles/main.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* AOS Animation */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        {/* Bootstrap JS */}
        <script src="/scripts/vendor/jquery/jquery.slim.min.js"></script>
        <script src="/scripts/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        {/* Navbar Scroll JS */}
        <script src="/scripts/navbar-scroll.js"></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
