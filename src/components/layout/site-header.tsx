import { existsSync } from "node:fs";
import path from "node:path";
import { HeaderShell } from "@/components/layout/header-shell";

export function SiteHeader() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "logo-afinitive-transparent.png",
  );
  const hasLogo = existsSync(logoPath);

  return <HeaderShell hasLogo={hasLogo} />;
}
