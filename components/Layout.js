import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-8 pt-12 bg-white shadow">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
