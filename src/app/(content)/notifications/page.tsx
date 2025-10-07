"use client";

// Services
import { withAuth, withHydration } from "@/services";

export default withHydration(withAuth(Notifiications, "protected"));
function Notifiications() {
  return <div className="h-full w-full">Notifiications</div>;
}
