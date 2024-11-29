import Link from "next/link";

function Nav() {
    return (
        <nav className="w-screen h-24 flex justify-between items-center">
            <ul className="w-full flex justify-between items-center text-xl gap-4 py-4 px-10">
                <li><Link href="/">LINK UP</Link></li>
                <li className="absolute left-1/2 transform -translate-x-1/2 text-3xl border-2 px-8 py-4 rounded-xl"><Link href="/">Logo</Link></li>
                <div className="flex gap-4">
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/findus">Find us</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                </div>
            </ul>
        </nav>
    );
}

export default Nav;
