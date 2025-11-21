import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const LayoutApp = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
