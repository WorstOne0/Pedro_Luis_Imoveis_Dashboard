import jwt, { Secret } from "jsonwebtoken";

export function verifyToken(token: string | undefined): any {
  if (!token) return {};

  const secret = process.env.NEXT_PUBLIC_ACCESS_TOKEN_JWT as Secret;
  const decoded = jwt.verify(token, secret);

  return decoded;
}
