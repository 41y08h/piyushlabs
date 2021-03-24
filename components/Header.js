import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a
          className="font-extrabold  flex justify-center items-center"
          role="logo"
        >
          <img
            className="w-14 h-14 mr-4"
            src={require("../images/logo.svg")}
            alt="logo"
          />
          <div className="flex flex-col">
            <span className="text-3xl f-mon logo-text">Piyush Labs</span>
            <span className="font-light">Enforcing Learning-by-doing</span>
          </div>
        </a>
      </Link>
    </header>
  );
}
