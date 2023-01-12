import Footer from "./Footer";
import Navbar from "./Navbar";

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashBoardLayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
