"use client";

// Services
import { withAuth, withHydration } from "@/services";

export default withHydration(withAuth(RealEstate, "all"));
function RealEstate() {
  return <div className="h-full w-full">RealEstate</div>;
}
