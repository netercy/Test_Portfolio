import Footer from '@/components/Footer';
import GoTop from '@/components/GoTop';
import NavBar from '@/components/Navbar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
        <GoTop />
      </main>
    </>
  );
};

export default App;
