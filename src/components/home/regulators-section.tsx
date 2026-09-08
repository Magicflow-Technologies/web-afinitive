import { existsSync } from "node:fs";
import path from "node:path";
import { regulators } from "@/data/regulators";
import { RegulatorsSectionClient } from "@/components/home/regulators-section-client";

export function RegulatorsSection() {
  const regulatorsWithAssets = regulators.map((regulator) => {
    const imagePath = path.join(process.cwd(), "public", regulator.imageSrc);

    return {
      ...regulator,
      hasImage: existsSync(imagePath),
    };
  });

  return <RegulatorsSectionClient regulators={regulatorsWithAssets} />;
}
