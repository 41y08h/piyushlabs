import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a className=" flex justify-center items-center">
          <img
            className="w-14 h-14 mr-4"
            src={require("../images/logo.svg")}
            alt="logo"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-3xl logo-text">
              Piyush Labs
            </span>
            <span className="font-light">Enforcing Learning-by-doing</span>
          </div>
        </a>
      </Link>
    </header>
  );
}
