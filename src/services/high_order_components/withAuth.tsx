// Next
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { verifyToken } from "@/lib/jwt";
// Store
import { useAuthStore } from "@/store";

export interface WithAuthProps {
  user: any;
}

const HOME_ROUTE = "/dashboard";
const LOGIN_ROUTE = "/login";

const ROUTE_ROLES = [
  /**
   * For authentication pages
   * @example /login /register
   */
  "auth",
  /**
   * Optional authentication
   * It doesn't push to login page if user is not authenticated
   */
  "optional",
  /**
   * For all authenticated user
   * will push to login if user is not authenticated
   */
  "all",
] as const;
type RouteRole = (typeof ROUTE_ROLES)[number];

/**
 * Add role-based access control to a component
 * @see https://theodorusclarence.com/blog/nextjs-auth-hoc
 * @see https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/
 * @see https://github.com/mxthevs/nextjs-auth/blob/main/src/components/withAuth.tsx
 */

export default function withAuth<T extends WithAuthProps = WithAuthProps>(Component: React.ComponentType<T>, routeRole: RouteRole) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();

    const { isAuthenticated, user, setIsAuthenticated } = useAuthStore((state) => state);

    const checkAuth = useCallback(() => {
      const accessToken = Cookies.get("accessToken");
      const { isValid } = verifyToken(accessToken);

      console.log("isValid", isValid);

      setIsAuthenticated(isValid);

      if (!isValid) return;

      // Get Session
      // api.get("/get_session");
    }, [setIsAuthenticated]);

    // Handle Auth
    useEffect(() => {
      console.log("Handle Auth");
      // Run checkAuth every page visit
      checkAuth();

      // Run checkAuth every focus changes
      window.addEventListener("focus", checkAuth);
      return () => window.removeEventListener("focus", checkAuth);
    }, [checkAuth]);

    // Handle Redirect
    useEffect(() => {
      console.log("Handle Redirect");
      console.log("isAuthenticated", isAuthenticated);

      if (isAuthenticated) {
        // Prevent authenticated user from accessing auth or other role pages
        if (routeRole === "auth") {
          router.replace(HOME_ROUTE);
        }
      }

      if (!isAuthenticated) {
        console.log("routeRole", routeRole);
        // Prevent unauthenticated user from accessing protected pages
        if (routeRole !== "auth" && routeRole !== "optional") {
          console.log("router.replace");
          router.replace(`${LOGIN_ROUTE}`);
        }
      }
    }, [isAuthenticated, router, user]);

    return <Component {...(props as T)} user={user} />;
  };

  return ComponentWithAuth;
}
