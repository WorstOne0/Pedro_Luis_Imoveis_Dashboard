"use client";

// Next
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
// Store
import { useAuthStore } from "@/store";
import React from "react";

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
  const ComponentWithAuth = React.forwardRef<any, Omit<T, keyof WithAuthProps>>((props, ref) => {
    const router = useRouter();

    const { user, isAuthenticated, isLoading, getSession } = useAuthStore((state) => state);

    const checkAuth = useCallback(async () => {
      if (routeRole !== "all") return;

      await getSession();
    }, [getSession]);

    // Handle Auth
    useEffect(() => {
      // Run checkAuth every page visit
      checkAuth();

      // Run checkAuth every focus changes
      window.addEventListener("focus", checkAuth);
      return () => window.removeEventListener("focus", checkAuth);
    }, [checkAuth]);

    // Handle Redirect
    useEffect(() => {
      if (isLoading) return;

      // Prevent authenticated user from accessing auth or other role pages
      if (isAuthenticated) {
        if (routeRole === "auth") router.replace(HOME_ROUTE);
      }

      // Prevent unauthenticated user from accessing protected pages
      if (!isAuthenticated) {
        if (routeRole === "all") router.replace(`${LOGIN_ROUTE}`);
      }
    }, [user, isAuthenticated, isLoading, router]);

    if (routeRole === "all" && isLoading) return <div>Loading</div>;

    return <Component {...(props as unknown as T)} ref={ref} user={user} />;
  });

  return ComponentWithAuth;
}
