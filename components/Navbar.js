import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const Navbar = () => {
  const { user, login, logout } = useContext(AuthContext);
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
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
      {!user && (
        <a onClick={login} className="button">
          Login/Signup
        </a>
      )}
      {user && <a>{user.email}</a>}
      {user && (
        <button onClick={logout} className="button">
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
