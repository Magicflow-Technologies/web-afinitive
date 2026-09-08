import { existsSync } from "node:fs";
import path from "node:path";
import { ConversationSectionClient } from "@/components/home/conversation-section-client";

export function ConversationSection() {
  const imagePath = path.join(
    process.cwd(),
    "public",
    "images",
    "contact",
    "conversemos.png",
  );

  return <ConversationSectionClient hasImage={existsSync(imagePath)} />;
}
