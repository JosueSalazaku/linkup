import Link from "next/link";

function Nav() {
  return (
    <nav className="w-screen flex flex-row justify-start items-center">
      <ul className="w-screen flex flex-row justify-stretch items-center gap-4 py-4  px-4">
        <li><Link href="/">Link Up</Link></li>
        <li><Link href="/">Logo</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/findus">Find us</Link></li>
        <li><Link href="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
