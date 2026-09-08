import { existsSync } from "node:fs";
import path from "node:path";
import { ValueDifferentialTable } from "@/components/home/value-differential-table";

export function ValueDifferentialSection() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "logo-afinitive-transparent.png",
  );

  return <ValueDifferentialTable hasLogo={existsSync(logoPath)} />;
}
