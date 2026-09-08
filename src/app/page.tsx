import { AboutSection } from "@/components/home/about-section";
import { ConversationSection } from "@/components/home/conversation-section";
import { EssenceSection } from "@/components/home/essence-section";
import { ExpertiseRibbonSection } from "@/components/home/expertise-ribbon-section";
import { FounderSpotlightSection } from "@/components/home/founder-spotlight-section";
import { HeroSection } from "@/components/home/hero-section";
import { HistoryIntroSection } from "@/components/home/history-intro-section";
import { KeyFiguresSection } from "@/components/home/key-figures-section";
import { NewProjectsSection } from "@/components/home/new-projects-section";
import { OfficeLocationSection } from "@/components/home/office-location-section";
import { PioneerApproachSection } from "@/components/home/pioneer-approach-section";
import { RegulatorsSection } from "@/components/home/regulators-section";
import { StakeholdersSection } from "@/components/home/stakeholders-section";
import { TeamSection } from "@/components/home/team-section";
import { ValueDifferentialSection } from "@/components/home/value-differential-section";
import { WhoWeServeSection } from "@/components/home/who-we-serve-section";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      <HeroSection />
      <ExpertiseRibbonSection />
      <AboutSection />
      <KeyFiguresSection />
      <HistoryIntroSection />
      <EssenceSection />
      <TeamSection />
      <WhoWeServeSection />
      <PioneerApproachSection />
      <ValueDifferentialSection />
      <NewProjectsSection />
      <RegulatorsSection />
      <StakeholdersSection />
      <FounderSpotlightSection />
      <OfficeLocationSection />
      <ConversationSection />
    </main>
  );
}
