import { useCartStore } from "@/store";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Cart from "./Cart";

export const Navbar = () => {
  //  const useStore = useCartStore();
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-sky-700 text-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        Senac store
      </Link>
      <div className="flex items-center gap-8">
        <Cart />
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="uppercase rounded-md border-gray-400 px-3 py-2">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};
