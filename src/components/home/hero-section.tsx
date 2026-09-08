import { existsSync } from "node:fs";
import { join } from "node:path";

import { HeroSectionClient } from "@/components/home/hero-section-client";

const videoPath = join(process.cwd(), "public", "videos", "Afinitive-web01-Final.mp4");

export function HeroSection() {
  return <HeroSectionClient hasVideo={existsSync(videoPath)} />;
}
