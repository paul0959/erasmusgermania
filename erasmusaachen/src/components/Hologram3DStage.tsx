/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { DAILY_JOURNAL, DayJournal, DayPhoto } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';
import { PhotoCardViewer } from './PhotoCardViewer';

interface Hologram3DStageProps {
  onSelectDayDetails: (day: DayJournal) => void;
  onSelectPhoto: (photo: DayPhoto) => void;
  onNavigateToGeneralGallery: (dayNumber: number) => void;
}

/**
 * SCENĂ HOLOGRAFICĂ 3D PE FUNDAL DESCHIS - OPTIMIZATĂ COMPLET PENTRU MOBIL
 * Conform cerințelor:
 * 1. "Adapteaza bara meniului din antent pentru versiunea mobila si intreaga structura a site-ului pentru varianta mobila"
 * 2. "Sectiune cu cartonasele tip holograma trebuie sa aiba un fundal deschi pentru a iesi in evidenta cartonasele 3D"
 * 3. Fără instrucțiuni pe ecran (eliminat conform solicitării)
 * 4. Fără nume de profesor pe fotografii
 */
export const Hologram3DStage: React.FC<Hologram3DStageProps> = ({
  onSelectDayDetails,
}) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const daysCount = DAILY_JOURNAL.length;
  const stageRef = useRef<HTMLDivElement>(null);

  // Monitorizare dinamică a lățimii ecranului pentru scalare perfectă pe telefoane
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigateTo = (newIndex: number) => {
    const target = (newIndex + daysCount) % daysCount;
    setActiveDayIndex(target);
    audioSystem.playSelectSound();
  };

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStartX(clientX);
    setDragStartY(clientY);
    setDragDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const deltaX = clientX - dragStartX;
    const deltaY = clientY - dragStartY;

    // Dacă utilizatorul derulează vertical pe mobil, nu intervenim
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaX) < 15) {
      return;
    }

    setDragDeltaX(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragDeltaX > 40) {
      navigateTo(activeDayIndex - 1);
    } else if (dragDeltaX < -40) {
      navigateTo(activeDayIndex + 1);
    }
    setDragDeltaX(0);
  };

  const handleCardClick = (index: number) => {
    if (index === activeDayIndex) {
      onSelectDayDetails(DAILY_JOURNAL[index]);
      audioSystem.playSelectSound();
    } else {
      navigateTo(index);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateTo(activeDayIndex - 1);
      if (e.key === 'ArrowRight') navigateTo(activeDayIndex + 1);
      if (e.key === 'Enter') {
        onSelectDayDetails(DAILY_JOURNAL[activeDayIndex]);
        audioSystem.playSelectSound();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeDayIndex]);

  // Calcul distanță orizontală 3D pe bază de viewport
  const getTranslateXSpacing = () => {
    if (windowWidth < 380) return 140;
    if (windowWidth < 640) return 170;
    if (windowWidth < 1024) return 280;
    return 350;
  };

  return (
    <section 
      id="jurnal-hologram" 
      className="relative pt-6 pb-10 sm:pt-8 sm:pb-14 overflow-hidden select-none bg-white text-slate-900 border-t border-b border-[#dfd5c5]/80"
    >
      
      {/* 
        ========================================================================
        SCENĂ HOLOGRAFICĂ 3D COVER FLOW PE FUNDAL DESCHIS
        Cartonașe în contrast pe fundal luminos, optimizate tactil pentru mobil
        ========================================================================
      */}
      <div 
        ref={stageRef}
        className="relative w-full max-w-7xl mx-auto h-[480px] xs:h-[520px] sm:h-[620px] lg:h-[670px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: windowWidth < 640 ? '1100px' : '1500px' }}
      >
        {/* Pardoseală reflectorizantă luminoasă cu reflexii în oglindă */}
        <div className="absolute inset-x-0 bottom-4 h-52 sm:h-60 bg-gradient-to-t from-slate-200/50 via-slate-100/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-10 w-3/4 h-16 sm:h-20 bg-[#758467]/10 rounded-full blur-[50px] sm:blur-[70px] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-6 h-px bg-gradient-to-r from-transparent via-[#758467]/25 to-transparent pointer-events-none" />

        {/* 3D Cards Carousel */}
        <div 
          className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateX(${dragDeltaX * 0.4}px)`
          }}
        >
          {DAILY_JOURNAL.map((day, index) => {
            let offset = index - activeDayIndex;
            if (offset > daysCount / 2) offset -= daysCount;
            if (offset < -daysCount / 2) offset += daysCount;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            const spacing = getTranslateXSpacing();
            const translateX = offset * spacing;
            const translateZ = -Math.abs(offset) * (windowWidth < 640 ? 120 : 180);
            const rotateY = offset * (windowWidth < 640 ? -22 : -28);
            const opacity = isCenter ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.25);
            const scale = isCenter ? 1 : Math.max(0.78, 1 - Math.abs(offset) * 0.12);

            const photo1 = day.photos[0];
            const firstSentence = day.description.split('.')[0] + '.';

            return (
              <div
                key={day.id}
                onClick={() => handleCardClick(index)}
                style={{
                  position: 'absolute',
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transformStyle: 'preserve-3d',
                  zIndex: 40 - Math.abs(offset) * 10,
                  opacity: opacity,
                  transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s'
                }}
                className={`w-[275px] xs:w-[305px] sm:w-[395px] lg:w-[440px] h-[440px] xs:h-[475px] sm:h-[560px] lg:h-[600px] rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 lg:p-7 flex flex-col justify-between overflow-visible transition-all duration-300 relative bg-[#0e1724] border ${
                  isCenter 
                    ? 'border-cyan-400 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.45),0_0_25px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/60' 
                    : 'border-slate-800 shadow-xl cursor-pointer hover:border-cyan-400/60'
                }`}
              >
                {/* Sclipire pe marginea superioară */}
                <div className="absolute top-0 inset-x-0 h-1 sm:h-1.5 rounded-t-[28px] sm:rounded-t-[32px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                {/* Card Top: Antet & Titlu */}
                <div>
                  <div className="flex items-center justify-between pb-2 sm:pb-3 mb-2 sm:mb-2.5 border-b border-cyan-500/20">
                    <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full text-white shadow-md flex items-center gap-1.5 ${
                      day.focus === 'stem' 
                        ? 'bg-[#1b2d40] border border-cyan-400/40 text-cyan-200' 
                        : day.focus === 'green' 
                        ? 'bg-[#758467] text-[#f5ebdc] border border-[#c5a769]/40' 
                        : 'bg-indigo-700 text-white shadow-indigo-500/30'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      Ziua 0{day.dayNumber} · {day.focus === 'stem' ? 'STEM' : day.focus === 'green' ? 'Think Green' : 'Cultural'}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 flex items-center gap-1 bg-slate-800/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-slate-700/60">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {day.date.split(',')[1]?.trim() || day.date}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-white text-base sm:text-xl lg:text-2xl leading-snug line-clamp-2">
                    {day.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-cyan-300 mt-1 line-clamp-1 flex items-center gap-1">
                    <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyan-400 shrink-0" />
                    <span>{day.location}</span>
                  </p>
                </div>

                {/* Card Middle: Poza Reprezentativă (Fără nume de profesor!) */}
                <div className="my-1.5 sm:my-2 flex-1 flex flex-col justify-center">
                  {photo1 && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDayDetails(day);
                        audioSystem.playSelectSound();
                      }}
                      className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-cyan-500/30 group cursor-pointer hover:border-cyan-400 transition-all shadow-lg"
                      title="Atingeți pentru deschiderea cartonașului"
                    >
                      <PhotoCardViewer
                        photo={photo1}
                        showCaption={false}
                        aspectRatio="video"
                      />
                    </div>
                  )}
                </div>

                {/* Card Bottom: Doar descriere și buton de deschidere */}
                <div className="pt-2 sm:pt-3 border-t border-cyan-500/20 flex flex-col gap-2 sm:gap-3">
                  <p className="text-[11px] sm:text-xs lg:text-sm text-slate-300 line-clamp-2 leading-relaxed font-normal">
                    {firstSentence}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDayDetails(day);
                      audioSystem.playSelectSound();
                    }}
                    className="w-full py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-[#172738] via-[#243a50] to-[#172738] hover:from-[#1b2d40] hover:to-[#2b445e] text-[#f5ebdc] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/30 active:scale-95 group border border-[#c5a769]/40"
                    title="Deschide cartonașul pe aproape întreaga pagină"
                  >
                    <span>Deschide Ziua</span>
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform text-[#c5a769]" />
                  </button>
                </div>

                {/* Umbra de reflexie dedesubt */}
                <div 
                  className="absolute -bottom-[260px] sm:-bottom-[320px] left-0 right-0 h-[250px] sm:h-[310px] rounded-[28px] sm:rounded-[32px] pointer-events-none transform scale-y-[-1] overflow-hidden select-none"
                  style={{
                    opacity: isCenter ? 0.22 : 0.1,
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 80%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 80%)'
                  }}
                  aria-hidden="true"
                >
                  <div className="w-full h-full bg-gradient-to-b from-[#0e1724] to-[#152336] p-4 sm:p-6 flex flex-col justify-between border border-cyan-500/20 rounded-[28px] sm:rounded-[32px]">
                    <div className="h-5 sm:h-6 bg-cyan-400/20 rounded-full w-2/3" />
                    <div className="h-24 sm:h-32 bg-cyan-500/10 rounded-2xl border border-cyan-400/15" />
                    <div className="h-7 sm:h-8 bg-blue-500/15 rounded-xl" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Butoane circulare de derulare pe margini Adaptate pe Mobil */}
        <button
          onClick={() => navigateTo(activeDayIndex - 1)}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-4 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-[#dfd5c5] transition-all hover:scale-110 active:scale-95 group"
          title="Derulează la ziua anterioară"
          aria-label="Ziua anterioară"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#172738] group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={() => navigateTo(activeDayIndex + 1)}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-4 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-[#dfd5c5] transition-all hover:scale-110 active:scale-95 group"
          title="Derulează la ziua următoare"
          aria-label="Ziua următoare"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#172738] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bară de selecție rapidă a zilelor cu scroll orizontal fluid pe mobil */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 mt-2 sm:mt-4">
        <div className="flex items-center sm:justify-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 px-1 snap-x">
          {DAILY_JOURNAL.map((d, idx) => (
            <button
              key={d.id}
              onClick={() => navigateTo(idx)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 snap-center active:scale-95 ${
                activeDayIndex === idx
                  ? 'bg-[#172738] text-[#f5ebdc] shadow-md shadow-[#172738]/30 scale-105 border border-[#c5a769]/50'
                  : 'bg-[#fbf8f2] text-[#4d5942] border border-[#dfd5c5] hover:bg-[#f5ebdc]'
              }`}
            >
              <span className="font-mono">Ziua 0{d.dayNumber}</span>
              <span className="text-[11px] opacity-80 font-normal hidden sm:inline">
                ({d.location.split('&')[0].trim()})
              </span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
};
