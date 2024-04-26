import { useCartStore } from "@/store";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Cart from "./Cart";
import Image from "next/image";
import logo from "@/../public/assets/images/logo-senac-store.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-white border-b-4 border-orange-500">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        <Image src={logo} alt="logo" className="p-3" />
      </Link>
      <div className="flex text-orange-500 items-center gap-8">
        <Cart />
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="uppercase rounded-md border bg-white border-orange-500 px-3 py-2 hover:bg-orange-500 hover:text-white">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};
