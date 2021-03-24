import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="overflow-hidden bg-blue-100 h-1 grid grid-cols-12">
        <div className="bg-red-500 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-orange-500 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-yellow-500 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-green-400 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-green-500 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-lime-500 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-blue-400 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-blue-500 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-blue-600 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-indigo-600 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-purple-400 h-12 transform rotate-12 -mt-4 -mx-6" />
        <div className="bg-purple-500 h-12 transform rotate-12 -mt-4 -mx-6" />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="p-8 pt-12 bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
