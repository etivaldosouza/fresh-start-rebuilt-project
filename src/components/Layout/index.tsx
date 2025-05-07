
import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-accent/20">
      <Navbar />
      <main className="flex-1 container py-20 mt-16 animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
