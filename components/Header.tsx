import Link from "next/link";

const Header = () => {
  return (
    <header className=" border-b-2 border-gray-500 text-gray-700 p-4">
      <nav className="flex justify-center space-x-10  text-xl font-bold">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <Link href="/joke" className="hover:text-gray-900">
          Joke
        </Link>
        <Link href="/about" className="hover:text-gray-900">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
