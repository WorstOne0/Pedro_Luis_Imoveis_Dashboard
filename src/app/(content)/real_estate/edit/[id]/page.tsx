"use client";

// Next
import { useParams } from "next/navigation";
// Services
import { withAuth, withHydration } from "@/services";

export default withHydration(withAuth(Edit, "all"));
function Edit() {
  const { id } = useParams<{ id: string }>();

  return <div className="h-full w-full">Edit {id}</div>;
}
