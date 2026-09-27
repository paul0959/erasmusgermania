/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutMission } from './components/AboutMission';
import { DailyJournal } from './components/DailyJournal';
import { JobShadowingSpotlight } from './components/JobShadowingSpotlight';
import { GallerySection } from './components/GallerySection';
import { OutcomesAndVoices } from './components/OutcomesAndVoices';
import { Footer } from './components/Footer';
import { DayDetailModal } from './components/DayDetailModal';
import { ProjectDossierModal } from './components/ProjectDossierModal';
import { DAILY_JOURNAL, DayJournal } from './data/projectData';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<DayJournal | null>(null);
  const [dossierOpen, setDossierOpen] = useState(false);

  const handleSelectDayById = (id: number) => {
    const found = DAILY_JOURNAL.find((d) => d.dayNumber === id);
    if (found) {
      setSelectedDay(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#080c17] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Navigație Superioară Ultra-Modernă */}
      <Navbar onOpenDossier={() => setDossierOpen(true)} />

      {/* Conținut Principal */}
      <main className="flex-1">
        {/* 1. Secțiune Hero Ultra-Modernă cu elemente 3D volumetrice și iluminare de studio */}
        <HeroSection />

        {/* 2. Despre Misiune & Obiective (Think Green, Learn Digital, Act European) */}
        <AboutMission />

        {/* 3. Jurnalul Zilnic (Zilele 1-6 cu orar detaliat pe ore) */}
        <DailyJournal onSelectDay={(day) => setSelectedDay(day)} />

        {/* 4. Spotlight Job Shadowing (Matematică & Fizică cu pedagogie hibridă) */}
        <JobShadowingSpotlight />

        {/* 5. Galerie Foto Documentară Organizată Ultra-Profesional */}
        <GallerySection onSelectDayById={handleSelectDayById} />

        {/* 6. Mărturii ale Participanților & Rezultate Concrete */}
        <OutcomesAndVoices />
      </main>

      {/* 7. Subsol Oficial Erasmus+ & Liceul Solomon Haliță */}
      <Footer />

      {/* Interactive Modals */}
      <DayDetailModal
        day={selectedDay}
        onClose={() => setSelectedDay(null)}
        onSelectAnotherDay={handleSelectDayById}
      />

      <ProjectDossierModal
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
      />
    </div>
  );
}
