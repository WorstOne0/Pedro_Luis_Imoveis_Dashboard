"use client";

// Services
import { withAuth, withHydration } from "@/services";

export default withHydration(withAuth(Notifiications, "all"));
function Notifiications() {
  return <div className="h-full w-full">Notifiications</div>;
}
