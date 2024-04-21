import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/','/product(.*)'],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};