import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 my-14 xl:px-48 px-5 sm:px-20 md:px-32 lg:mb-0 md:mb-16 lg:px-36">
        <div className="lg:col-span-3 bg-white dark:bg-dark-500 rounded-2xl col-span-12 p-4 text-center h-full text-base shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 flex flex-col overflow-hidden dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
