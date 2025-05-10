// "use client";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }
  return (
    <div className="p-16">
      <h1 className="mt-16">From Chat Page</h1>
      <h3>{data.user.email}</h3>
    </div>
  );
}
