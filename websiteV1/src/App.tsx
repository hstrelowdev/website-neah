import { site } from './data/site';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CommitRail } from './components/layout/CommitRail';
import { Hero } from './components/sections/Hero';
import { Ethos } from './components/sections/Ethos';
import { Pillars } from './components/sections/Pillars';
import { Pipeline } from './components/sections/Pipeline';
import { Diagnostic } from './components/sections/Diagnostic';
import { Projects } from './components/sections/Projects';
import { Engagement } from './components/sections/Engagement';
import { TechStack } from './components/sections/TechStack';
import { Testimonials } from './components/sections/Testimonials';
import { Insights } from './components/sections/Insights';
import { ContactCTA } from './components/sections/ContactCTA';

export default function App() {
  return (
    <div className="w-full">
      <Header
        brand={site.brand}
        navigation={site.navigation}
        languages={site.languages}
        ctaLabel="Let's talk"
      />

      <main className="w-full bg-background pt-20">
        <div className="relative flex w-full flex-col overflow-hidden text-on-surface">
          <CommitRail />
          <Hero content={site.hero} />
          <Ethos content={site.ethos} />
          <Pillars content={site.pillars} />
          <Pipeline content={site.pipeline} />
          <Diagnostic content={site.diagnostic} />
          <Projects content={site.projects} />
          <Engagement content={site.engagement} />
          <TechStack content={site.tech} />
          <Testimonials content={site.testimonials} />
          <Insights content={site.insights} />
          <ContactCTA content={site.contact} />
        </div>
      </main>

      <Footer brand={site.brand} footer={site.footer} />
    </div>
  );
}
