import { useCallback, useState } from 'react';
import { site } from './data/site';
import { ContactDialog } from './components/ui/ContactDialog';
import { Footer } from './components/layout/Footer';
import { GitSpine } from './components/layout/GitSpine';
import { Header } from './components/layout/Header';
import { FinalCta } from './components/sections/FinalCta';
import { Hero } from './components/sections/Hero';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { Telemetry } from './components/sections/Telemetry';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <div className="w-full">
      <Header
        brand={site.brand}
        navigation={site.navigation}
        ctaLabel={site.finalCta.cta}
        onContact={openContact}
      />

      <main className="w-full bg-surface pt-20">
        <div className="relative flex w-full flex-col overflow-hidden">
          <GitSpine />
          <Hero onContact={openContact} />
          <Services onContact={openContact} />
          <Telemetry />
          <Process onContact={openContact} />
          <FinalCta onContact={openContact} />
        </div>
      </main>

      <Footer brand={site.brand} footer={site.footer} onContact={openContact} />
      <ContactDialog open={contactOpen} onClose={closeContact} />
    </div>
  );
}
