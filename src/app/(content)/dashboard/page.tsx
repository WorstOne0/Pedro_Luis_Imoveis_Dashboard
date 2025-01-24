"use client";

// Services
import { withAuth, withHydration } from "@/services";

export default withHydration(withAuth(Dashboard, "all"));
function Dashboard() {
  return <div className="h-full w-full">dashboard</div>;
}
