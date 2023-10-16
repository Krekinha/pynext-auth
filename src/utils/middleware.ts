import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "./prisma";
import { jwtVerify } from "jose";
import { getJwtSecretKey } from "../../lib/constants";

export async function middleware(request: NextRequest) {
  // Pega o token que esta no header da solicitação
  /*const headersInstance = request.headers;
  const token = headersInstance.get("authorization")?.split(" ")[1];

  // Retorna um erro se o token não for encontrado
  if (!token) {
    return Response.json("Token não encontrado");
  }

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );

    return Response.json(verified.payload.id);
  } catch (err: any) {
    return Response.json(err?.message || "Não autorizado");
  }

  //return NextResponse.redirect(new URL('/', request.url))*/
}

/*export const config = {
  matcher: "/api/auth/users/get-profile",
};*/
