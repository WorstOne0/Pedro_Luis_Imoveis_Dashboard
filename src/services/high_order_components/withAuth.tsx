/* eslint-disable @typescript-eslint/no-explicit-any */

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

const ROUTE_ROLES = ["public", "protected"] as const;
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
      if (routeRole === "public") return;
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
        if (routeRole === "public") router.replace(HOME_ROUTE);
      }

      // Prevent unauthenticated user from accessing protected pages
      if (!isAuthenticated) {
        if (routeRole === "protected") router.replace(`${LOGIN_ROUTE}`);
      }
    }, [user, isAuthenticated, isLoading, router]);

    if (routeRole === "protected" && isLoading) return <div className="h-screen w-screen flex justify-center items-center">Loading</div>;

    return <Component {...(props as unknown as T)} ref={ref} user={user} />;
  });

  ComponentWithAuth.displayName = `withAuth(${Component.displayName || Component.name || "Component"})`;
  return ComponentWithAuth;
}
