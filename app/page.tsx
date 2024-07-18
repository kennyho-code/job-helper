import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>userId:{data.user?.id}</p>
    </main>
  );
}
