import "@/styles/globals.css";
import Navbar from "./components/NavBar";
import Footer from "@/pages/components/Footer";
import {useState} from 'react';
import context from "./context/context";

export default function App({ Component, pageProps }) {
  let [login,setLogin] = useState(false);
  return (
    <>
    <context.Provider value={{login,setLogin}}>
      <Navbar/>
      <main className="main">
        <Component {...pageProps} />
      </main>

      <Footer />
      </context.Provider>
    </>
  );
}
