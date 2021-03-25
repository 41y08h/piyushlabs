import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a className=" flex items-center">
          <img
            className="w-12 h-12 mr-4"
            src={require("../images/logo.svg")}
            alt="logo"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl logo-text">
              Piyush Labs
            </span>
            <span className="font-light text-sm text-gray-400">
              Enforcing Learning-by-doing
            </span>
          </div>
        </a>
      </Link>
    </header>
  );
}
