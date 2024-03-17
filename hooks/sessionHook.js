// useSession.js
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const useSessionHook = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return { loading: true };
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/signin");
    return { authenticated: false };
  }

  if (session.status === "authenticated") {
    return { authenticated: true, user: session.user };
  }
};

export default useSessionHook;
