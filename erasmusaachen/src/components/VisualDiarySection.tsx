/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { ALL_PHOTOS, DAILY_JOURNAL, DayPhoto } from '../data/projectData';
import { PhotoCardViewer } from './PhotoCardViewer';
import { PhotoLightboxModal } from './PhotoLightboxModal';
import { audioSystem } from '../utils/audioSystem';

interface GallerySectionProps {
  onSelectDayById?: (id: number) => void;
  externalDayFilter?: number;
}

/**
 * GALERIE FOTO IDENTICĂ CU MODELUL DIN IMAGINEA ÎNCĂRCATĂ
 * Conform cerințelor exprese:
 * 1. "Inlocuieste my visual diary cu galerie fotot. (totate cuvintele sa fie in limba romana."
 * 2. "in galeria foto, sa se deschida doar pozele, la dimensiuni mari, fara text."
 * 3. "galeria foto, trebuie sa aiba template-ul (designul) identic cu cel din poza aceasta incarcata"
 * 4. "Cromatica site-ului sa fie cu culori deschise, mai ales fundalul, iar cartonasele in contrast"
 */
export const VisualDiarySection: React.FC<GallerySectionProps> = () => {
  // Filtru activ (0 = Toate, 1 = Bruxelles, 2 = Gymnasium, etc.)
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<DayPhoto | null>(null);

  // Filtre în limba română conform cerinței
  const filters = [
    { id: 0, label: 'Toate' },
    { id: 1, label: 'Bruxelles' },
    { id: 2, label: 'Gymnasium' },
    { id: 3, label: 'Domul Aachen' },
    { id: 4, label: 'Dreiländereck' },
    { id: 5, label: 'Köln' },
    { id: 6, label: 'Europass' }
  ];

  const currentPhotos = selectedFilter === 0 
    ? ALL_PHOTOS 
    : ALL_PHOTOS.filter((p) => p.dayNumber === selectedFilter);

  const safeIndex = activePhotoIndex % Math.max(1, currentPhotos.length);
  const totalCount = currentPhotos.length;

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + totalCount) % totalCount);
    audioSystem.playSwipeSound();
  };

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev + 1) % totalCount);
    audioSystem.playSwipeSound();
  };

  const handleSelectFilter = (id: number) => {
    setSelectedFilter(id);
    setActivePhotoIndex(0);
    audioSystem.playSelectSound();
  };

  const handleCardClick = (photo: DayPhoto) => {
    setLightboxPhoto(photo);
    audioSystem.playPhotoClickSound();
  };

  return (
    <section id="galerie" className="py-14 sm:py-18 relative bg-white text-slate-900 overflow-hidden select-none border-t border-b border-[#dfd5c5]/80">
      
      {/* 
        Halo-uri atmosferice difuze mov/indigo pe marginile laterale
        (Identic cu screenshot-ul încărcat din Dribbble)
      */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-purple-400/25 via-indigo-300/10 to-transparent pointer-events-none blur-2xl" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-purple-400/25 via-indigo-300/10 to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 
          ======================================================================
          ANTET IDENTIC CU MODELUL DIN POZĂ:
          Etichetă fină sus: GALERIE FOTO
          Titlu mare: Galerie Foto
          Subtitlu: Descoperiți mobilitatea prin obiectiv: momente și activități în fotografii
          ======================================================================
        */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase block mb-2">
            GALERIE FOTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#172738] tracking-tight">
            Galerie Foto
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 leading-relaxed">
            Descoperiți mobilitatea prin obiectiv: momente și activități în fotografii
          </p>
        </div>

        {/* 
          ======================================================================
          BARĂ DE PASTILE (FILTRE) ROTUNJITE ORIZONTALE
          Exact ca în screenshot: primul negru/bleu închis plin, celelalte albe cu ramă subțire
          ======================================================================
        */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-8 sm:mb-10">
          {filters.map((f) => {
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => handleSelectFilter(f.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#172738] text-[#f5ebdc] shadow-md border border-[#2d455d]'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#758467] hover:bg-[#f8f5ee]'
                }`}
              >
                {f.label}
              </button>
            );
          })}

          {/* Buton "Vezi mai multe" identic cu screenshot-ul */}
          <button
            onClick={() => handleSelectFilter(0)}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            <span>Vezi mai multe</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 
          ======================================================================
          SHOWCASE ORIZONTAL CU CARD CENTRAL PROEMINENT ȘI CARDURI LATERALE
          Exact ca în screenshot-ul încărcat din Dribbble!
          ======================================================================
        */}
        <div className="relative w-full max-w-6xl mx-auto h-[460px] sm:h-[540px] flex items-center justify-center overflow-hidden">
          
          <div className="relative w-full h-full flex items-center justify-center">
            {currentPhotos.map((photo, idx) => {
              let offset = idx - safeIndex;
              if (offset > totalCount / 2) offset -= totalCount;
              if (offset < -totalCount / 2) offset += totalCount;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Calcule de poziționare conform layout-ului din screenshot:
              // Cardul central: lat ~360px, înălțime ~500px, z-index 30, scale 1.05, shadow mare
              // Cardurile adiacente: deplasate orizontal, ușor mai mici, scalate și parțial ascunse
              const translateX = offset * (window.innerWidth < 640 ? 160 : window.innerWidth < 1024 ? 260 : 330);
              const scale = isCenter ? 1.06 : 0.85;
              const zIndex = isCenter ? 30 : 20 - Math.abs(offset) * 5;
              const opacity = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.25);

              return (
                <div
                  key={photo.id}
                  onClick={() => {
                    if (isCenter) {
                      handleCardClick(photo);
                    } else {
                      setActivePhotoIndex(idx);
                      audioSystem.playSelectSound();
                    }
                  }}
                  style={{
                    position: 'absolute',
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s'
                  }}
                  className={`w-[260px] sm:w-[320px] lg:w-[360px] h-[380px] sm:h-[460px] lg:h-[490px] rounded-[28px] overflow-hidden cursor-pointer transition-shadow duration-300 bg-slate-900 ${
                    isCenter 
                      ? 'shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/10' 
                      : 'shadow-md hover:opacity-90'
                  }`}
                  title="Faceți clic pentru a deschide fotografia la dimensiuni mari"
                >
                  <PhotoCardViewer
                    photo={photo}
                    showCaption={false}
                    aspectRatio="square"
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* 
          ======================================================================
          BUTOANE CIRCULARE DE NAVIGARE CENTRATE DEDESUBT (← și →)
          Exact ca în screenshot-ul încărcat din Dribbble!
          ======================================================================
        */}
        <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
            aria-label="Fotografia anterioară"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
            aria-label="Fotografia următoare"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* 
        Modal care deschide doar fotografia la dimensiuni mari, fără text
        Conform cerinței: "in galeria foto, sa se deschida doar pozele, la dimensiuni mari, fara text."
      */}
      <PhotoLightboxModal
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
        onSelectPhoto={(p) => setLightboxPhoto(p)}
      />
    </section>
  );
};

export { VisualDiarySection as GallerySection };
