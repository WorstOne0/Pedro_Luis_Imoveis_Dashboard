"use client";

// Services
import { withAuth, withHydration } from "@/services";

export default withHydration(withAuth(Analytics, "all"));
function Analytics() {
  return <div className="h-full w-full">Analytics</div>;
}
