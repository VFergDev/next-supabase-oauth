import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");

    if (code) {
      const supabase = await createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Error exchanging code for session:", error);
        return NextResponse.redirect(
          `${requestUrl.origin}/auth/login?error=auth_error`
        );
      }
    }

    // ALWAYS redirect to /protected
    return NextResponse.redirect(`${requestUrl.origin}/protected`);
  } catch (error) {
    console.error("Error in auth callback:", error);
    return NextResponse.redirect(
      `${new URL(request.url).origin}/auth/login?error=server_error`
    );
  }
}
