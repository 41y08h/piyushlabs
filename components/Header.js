import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/">
        <a className="text-3xl font-extrabold f-mon">Piyush Labs</a>
      </Link>
      <div className="my-8 flex text-sm">
        <img
          className="w-16 h-auto rounded-full"
          src={require("../images/piyush.jpg")}
          alt="author"
        />
        <p className="flex flex-col ml-8 justify-center">
          <span>
            Written By <strong>Piyush</strong>, Full-Stack Developer
          </span>
          <span>Enforcing Learning-by-doing</span>
        </p>
      </div>
    </>
  );
}
