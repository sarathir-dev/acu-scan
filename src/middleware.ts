import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Match all routes except static assets and auth
    "/((?!_next/static|_next/image|favicon.ico|auth).*)",
  ],
};
