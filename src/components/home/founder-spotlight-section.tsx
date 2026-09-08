import { existsSync } from "node:fs";
import path from "node:path";
import { FounderSpotlightSectionClient } from "@/components/home/founder-spotlight-section-client";

export function FounderSpotlightSection() {
  const imagePath = path.join(
    process.cwd(),
    "public",
    "images",
    "team",
    "ricardo-bertalmio.png",
  );

  return <FounderSpotlightSectionClient hasImage={existsSync(imagePath)} />;
}
