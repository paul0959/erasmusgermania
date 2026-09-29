/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AbstractHolographicBackdrop } from './components/AbstractHolographicBackdrop';
import { HeroSection } from './components/HeroSection';
import { Hologram3DStage } from './components/Hologram3DStage';
import { JobShadowingSpotlight } from './components/JobShadowingSpotlight';
import { GallerySection } from './components/GallerySection';
import { OutcomesAndVoices } from './components/OutcomesAndVoices';
import { Footer } from './components/Footer';
import { DayDetailModal } from './components/DayDetailModal';
import { ProjectDossierModal } from './components/ProjectDossierModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { DAILY_JOURNAL } from './data/projectData';
import type { DayJournal, DayPhoto } from './data/projectData';
import { audioSystem } from './utils/audioSystem';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<DayJournal | null>(null);
  const [dossierOpen, setDossierOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<DayPhoto | null>(null);

  const handleSelectDay = (day: DayJournal) => {
    setSelectedDay(day);
    audioSystem.playModalOpenSound();
  };

  const handleSelectDayById = (id: number) => {
    const found = DAILY_JOURNAL.find((d) => d.dayNumber === id);
    if (found) {
      setSelectedDay(found);
      audioSystem.playModalOpenSound();
    }
  };

  const handleSelectPhoto = (photo: DayPhoto) => {
    setActivePhoto(photo);
    audioSystem.playPhotoClickSound();
  };

  const handleNavigateToGeneralGallery = () => {
    const el = document.getElementById('galerie');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    audioSystem.playSelectSound();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      
      <AbstractHolographicBackdrop />

      <Navbar onOpenDossier={() => {
        setDossierOpen(true);
        audioSystem.playSelectSound();
      }} />

      <main className="flex-1 relative z-10">
        <HeroSection 
          onOpenTeacherDossier={() => {
            setDossierOpen(true);
            audioSystem.playSelectSound();
          }}
        />

        <Hologram3DStage
          onSelectDayDetails={handleSelectDay}
          onSelectPhoto={handleSelectPhoto}
          onNavigateToGeneralGallery={handleNavigateToGeneralGallery}
        />

        <JobShadowingSpotlight />

        <GallerySection />

        <OutcomesAndVoices />
      </main>

      <Footer />
      
      <DayDetailModal
        day={selectedDay}
        onClose={() => {
          setSelectedDay(null);
          audioSystem.playSelectSound();
        }}
        onSelectAnotherDay={handleSelectDayById}
        onNavigateToGeneralGallery={handleNavigateToGeneralGallery}
      />

      <ProjectDossierModal
        isOpen={dossierOpen}
        onClose={() => {
          setDossierOpen(false);
          audioSystem.playSelectSound();
        }}
      />

      <PhotoLightboxModal
        photo={activePhoto}
        onClose={() => {
          setActivePhoto(null);
          audioSystem.playSelectSound();
        }}
        onSelectPhoto={handleSelectPhoto}
      />
    </div>
  );
}