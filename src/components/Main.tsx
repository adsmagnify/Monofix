"use client";

import { usePathname } from "next/navigation";

export function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      id="main"
      style={isHome ? undefined : { paddingTop: "var(--header-h, 7.5rem)" }}
    >
      {children}
    </main>
  );
}
