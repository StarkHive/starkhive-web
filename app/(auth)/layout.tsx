import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
