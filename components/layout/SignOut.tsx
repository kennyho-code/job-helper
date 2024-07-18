"use client";
import { createClient } from "@/utils/supabase/client";

function SignOut({ userId }: { userId: string | undefined }) {
  const supabase = createClient();

  const handleOnClick = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.href = "/";
  };

  const handleOnClickSignIn = async () => {
    window.location.href = "/login";
  };
  return (
    <div>
      {userId ? (
        <button onClick={handleOnClick}>Sign Out</button>
      ) : (
        <button onClick={handleOnClickSignIn}>Sign In</button>
      )}
    </div>
  );
}

export default SignOut;
