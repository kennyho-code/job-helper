import { createClient } from "@/utils/supabase/server";

async function getUserId() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return data.user?.id;
}

async function Header() {
  const userId = await getUserId();
  return (
    <div className="bg-red-300 flex justify-between">
      <div>Logo</div>
      <div>userId: {userId}</div>
    </div>
  );
}

export default Header;
