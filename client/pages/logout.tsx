import React, { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useStoreActions } from "../store";

const LogoutPage: FC = () => {
  const logout = useStoreActions((s) => s.auth.logout);
  const reset = useStoreActions((s) => s.reset);
  const router = useRouter();

  useEffect(() => {
    logout();
    reset();
    router.push("/");
  }, [logout, reset, router]);

  return <div />;
};

export default LogoutPage;
