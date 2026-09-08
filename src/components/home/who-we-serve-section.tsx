import { existsSync } from "node:fs";
import path from "node:path";
import { clientGroups } from "@/data/client-groups";
import { WhoWeServePanels } from "@/components/home/who-we-serve-panels";

export function WhoWeServeSection() {
  const groups = clientGroups.map((group) => {
    const imagePath = path.join(process.cwd(), "public", group.imageSrc);

    return {
      ...group,
      hasImage: existsSync(imagePath),
    };
  });

  return <WhoWeServePanels groups={groups} />;
}
