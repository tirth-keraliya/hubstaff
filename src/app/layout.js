"use client";

import { useRouter } from "next/navigation";
import "./globals.css";
import { Providers } from "./redux/providers";

export default function RootLayout({ children }) {
  const { router } = useRouter();

  // const showHeader = router.pathname === "/" ? false : true;

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
