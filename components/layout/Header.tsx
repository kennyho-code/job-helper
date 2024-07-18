import { createClient } from "@/utils/supabase/server";
import SignOut from "./SignOut";

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
      <div>
        <div>userId: {userId}</div>
        <SignOut userId={userId} />
      </div>
    </div>
  );
}

export default Header;
