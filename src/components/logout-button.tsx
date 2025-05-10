"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh(); // Refresh to update session state
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
