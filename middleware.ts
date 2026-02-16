/*
 *   Copyright (c) 2026 2023 Celadon Development LLC
 *   All rights reserved.
 *   Author Aliaksandr Ziabko <aliaksandr.ziabko@celadonsoft.com>
 */
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
