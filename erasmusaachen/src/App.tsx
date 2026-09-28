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
import { DAILY_JOURNAL, DayJournal, DayPhoto } from './data/projectData';
import { audioSystem } from './utils/audioSystem';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<DayJournal | null>(null);
  const [dossierOpen, setDossierOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<DayPhoto | null>(null);
  const [galleryDayFilter, setGalleryDayFilter] = useState<number>(0);

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

  const handleNavigateToGeneralGallery = (dayNumber: number) => {
    setGalleryDayFilter(dayNumber);
    const el = document.getElementById('galerie');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    audioSystem.playSelectSound();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* 
        ========================================================================
        FUNDAL ABSTRACT TRANSPARENT PE CROMATICĂ DESCHISĂ
        ========================================================================
      */}
      <AbstractHolographicBackdrop />

      {/* Navigație Instituțională */}
      <Navbar onOpenDossier={() => {
        setDossierOpen(true);
        audioSystem.playSelectSound();
      }} />

      {/* Conținut Principal Structurat Profesional */}
      <main className="flex-1 relative z-10">
        
        {/* 1. Secțiune Hero Instituțională (Titlu, 19–23 Mai 2026, Fără Număr Fotografii la Delegație) */}
        <HeroSection 
          onOpenTeacherDossier={() => {
            setDossierOpen(true);
            audioSystem.playSelectSound();
          }}
        />

        {/* 
          ======================================================================
          2. JURNALUL PE ZILE: CARTONAȘE MARI ÎN CONTRAST CU DERULARE & REFLEXII
          La deschidere: se deschide pe aproape întreaga pagină cu scurt text și poza lângă
          ======================================================================
        */}
        <Hologram3DStage
          onSelectDayDetails={handleSelectDay}
          onSelectPhoto={handleSelectPhoto}
          onNavigateToGeneralGallery={handleNavigateToGeneralGallery}
        />

        {/* 3. Spotlight Job Shadowing (Didactica Matematicii & Fizicii · Prof. Frunză Paul & Prof. Petrașcu Traian) */}
        <JobShadowingSpotlight />

        {/* 
          ======================================================================
          4. GALERIE FOTO (DESIGN IDENTIC CU SCREENSHOT-UL DRIBBLE ÎNCĂRCAT)
          Pastile rotunjite, card central proeminent cu carduri laterale, butoane circulare jos
          La clic pe poze: se deschide doar poza la dimensiune mare, fără text!
          ======================================================================
        */}
        <GallerySection 
          onSelectDayById={handleSelectDayById} 
          externalDayFilter={galleryDayFilter}
        />

        {/* 5. Mărturii ale Cadrelor Didactice & Rezultate Concrete */}
        <OutcomesAndVoices />
      </main>

      {/* Subsol Oficial Erasmus+ & Liceul Solomon Haliță */}
      <Footer />

      {/* 
        ========================================================================
        MODALE INTERACTIVE (Fără fundal continuu de muzică)
        ========================================================================
      */}
      
      {/* Cartonaș Deschis pe Aproape Întreaga Pagină (Scurt Text Activitate + Poză Lângă) */}
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

      {/* Lightbox Galerie Foto: Deschide Doar Pozele la Dimensiuni Mari, Fără Text */}
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
