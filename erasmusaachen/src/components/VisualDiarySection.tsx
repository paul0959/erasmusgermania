/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { ALL_PHOTOS, DayPhoto } from '../data/projectData';
import { PhotoCardViewer } from './PhotoCardViewer';
import { PhotoLightboxModal } from './PhotoLightboxModal';
import { audioSystem } from '../utils/audioSystem';

interface GallerySectionProps {
  onSelectDayById?: (id: number) => void;
  externalDayFilter?: number;
}

/**
 * GALERIE FOTO OPTIMIZATĂ PENTRU MOBIL & DESKTOP
 * Conform cerințelor:
 * 1. "Adapteaza bara meniului din antent pentru versiunea mobila si intreaga structura a site-ului pentru varianta mobila"
 * 2. Gesturi tactile de glisare (swipe) pe telefoane
 * 3. Filtre orizontale fluide cu derulare lină pe mobil
 * 4. La clic pe poze: se deschide doar poza la dimensiuni mari, fără text!
 */
export const VisualDiarySection: React.FC<GallerySectionProps> = () => {
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<DayPhoto | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Stare gesturi touch swipe pe mobil
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Suport touch swipe direct pe mobil
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsSwiping(true);
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    const delta = e.touches[0].clientX - touchStartX;
    setTouchDeltaX(delta);
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    setIsSwiping(false);
    if (touchDeltaX > 40) {
      handlePrev();
    } else if (touchDeltaX < -40) {
      handleNext();
    }
    setTouchDeltaX(0);
  };

  const getTranslateSpacing = () => {
    if (windowWidth < 380) return 130;
    if (windowWidth < 640) return 165;
    if (windowWidth < 1024) return 260;
    return 330;
  };

  return (
    <section 
      id="galerie" 
      className="py-10 sm:py-16 relative bg-white text-slate-900 overflow-hidden select-none border-t border-b border-[#dfd5c5]/80"
    >
      
      {/* Halo-uri atmosferice difuze pe marginile laterale */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-44 bg-gradient-to-r from-purple-400/20 via-indigo-300/10 to-transparent pointer-events-none blur-2xl" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-44 bg-gradient-to-l from-purple-400/20 via-indigo-300/10 to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Antet Galerie Foto */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-8">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase block mb-1.5 sm:mb-2">
            GALERIE FOTO
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#172738] tracking-tight">
            Galerie Foto
          </h2>
          <p className="text-slate-500 text-xs sm:text-base mt-1.5 sm:mt-2 leading-relaxed">
            Descoperiți mobilitatea prin obiectiv: momente și activități în fotografii
          </p>
        </div>

        {/* 
          BARĂ DE PASTILE (FILTRE) ROTUNJITE CU SCROLL ORIZONTAL LIN PE MOBIL
        */}
        <div className="flex items-center sm:justify-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 px-1 mb-6 sm:mb-10 snap-x">
          {filters.map((f) => {
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => handleSelectFilter(f.id)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all shrink-0 snap-center active:scale-95 ${
                  isActive
                    ? 'bg-[#172738] text-[#f5ebdc] shadow-md border border-[#2d455d]'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#758467] hover:bg-[#f8f5ee]'
                }`}
              >
                {f.label}
              </button>
            );
          })}

          <button
            onClick={() => handleSelectFilter(0)}
            className="flex items-center gap-1 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all shrink-0 snap-center active:scale-95"
          >
            <span>Toate</span>
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </button>
        </div>

        {/* 
          SHOWCASE CAROUSEL CU CARD CENTRAL PROEMINENT & GESTURI TOUCH SWIPE PE MOBIL
        */}
        <div 
          className="relative w-full max-w-6xl mx-auto h-[380px] xs:h-[420px] sm:h-[500px] lg:h-[540px] flex items-center justify-center overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          <div className="relative w-full h-full flex items-center justify-center">
            {currentPhotos.map((photo, idx) => {
              let offset = idx - safeIndex;
              if (offset > totalCount / 2) offset -= totalCount;
              if (offset < -totalCount / 2) offset += totalCount;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              const spacing = getTranslateSpacing();
              const translateX = offset * spacing;
              const scale = isCenter ? (windowWidth < 640 ? 1.03 : 1.06) : 0.85;
              const zIndex = isCenter ? 30 : 20 - Math.abs(offset) * 5;
              const opacity = isCenter ? 1 : Math.max(0.45, 1 - Math.abs(offset) * 0.28);

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
                    transition: isSwiping ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s'
                  }}
                  className={`w-[230px] xs:w-[260px] sm:w-[320px] lg:w-[360px] h-[330px] xs:h-[370px] sm:h-[440px] lg:h-[490px] rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer transition-shadow duration-300 bg-slate-900 ${
                    isCenter 
                      ? 'shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/10' 
                      : 'shadow-md hover:opacity-90'
                  }`}
                  title="Atingeți pentru a mări fotografia la dimensiuni mari"
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

        {/* BUTOANE CIRCULARE DE NAVIGARE CENTRATE DEDESUBT */}
        <div className="flex items-center justify-center gap-3 mt-4 sm:mt-7">
          <button
            onClick={handlePrev}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
            aria-label="Fotografia anterioară"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
            aria-label="Fotografia următoare"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Modal Lightbox la clic (doar poza mare, fără text) */}
      <PhotoLightboxModal
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
        onSelectPhoto={(p) => setLightboxPhoto(p)}
      />
    </section>
  );
};

export { VisualDiarySection as GallerySection };
