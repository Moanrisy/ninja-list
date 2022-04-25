import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const Navbar = () => {
  const { user, login } = useContext(AuthContext);
  return (
    <nav>
      <div className="logo">
        <Image alt="logo" src="/logo.png" width={65} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/">
        <a onClick={login} className="button">
          Login/Signup
        </a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
