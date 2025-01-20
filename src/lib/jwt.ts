import { decodeToken } from "react-jwt";

interface Payload {
  isValid: boolean;
  user: any;
}

export function verifyToken(token: string | undefined): Payload {
  if (!token) return { isValid: false, user: {} };

  const decoded = decodeToken(token);

  return {
    isValid: typeof decoded === "object" && decoded !== null,
    user: decoded,
  };
}
