"use client";

// Services
import { withAuth, withHydration } from "@/services";

export default withHydration(withAuth(Settings, "all"));
function Settings() {
  return <div className="h-full w-full">Settings</div>;
}
