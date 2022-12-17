"use client";

import Link from "next/link";
import { ReactNode } from "react";

export function LinkRoute({
  children,
  route,
}: {
  children: ReactNode;
  route: string;
}) {
  return <Link href={route}>{children}</Link>;
}
