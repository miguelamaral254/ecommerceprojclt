import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/','/product(.*)','/sign-in','/sign-up'],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};