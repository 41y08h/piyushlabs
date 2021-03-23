import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-8 pt-12 bg-white">
        <Header />
        {children}
      </div>
    </div>
  );
}
