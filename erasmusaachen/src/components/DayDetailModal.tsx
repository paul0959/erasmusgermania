/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Images, 
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { DayJournal } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';

interface DayDetailModalProps {
  day: DayJournal | null;
  onClose: () => void;
  onSelectAnotherDay: (id: number) => void;
  onNavigateToGeneralGallery?: (dayNumber: number) => void;
}

/**
 * CARTONAȘ DESCHIS PE APROAPE ÎNTREAGA PAGINĂ - ADAPTAT PENTRU MOBIL & DESKTOP
 * 1. "La cartonasele tip holograma, la deschidera, sa nu apara informatii despre poza, ci un scurt text despre activitate si poza langa. (sa se deschida cartonasul pe aproape intreaga pagina a site-uli"
 * 2. "La deschiderea cartonasului, poza sa se poata mari cat este chenarul"
 * 3. Fără nume de profesor pe fotografii
 * 4. Adaptat pe mobil (structură fluidă, scroll lin, butoane tactile optimizate)
 */
export const DayDetailModal: React.FC<DayDetailModalProps> = ({
  day,
  onClose,
  onSelectAnotherDay,
  onNavigateToGeneralGallery,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isPhotoMaximized, setIsPhotoMaximized] = useState(false);
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('contain');

  // Gesturi touch swipe pe poza mare
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchDeltaX, setTouchDeltaX] = useState(0);

  if (!day) return null;

  const currentPhoto = day.photos[selectedPhotoIndex] || day.photos[0];

  const handleOpenGallery = () => {
    if (onNavigateToGeneralGallery) {
      onNavigateToGeneralGallery(day.dayNumber);
    }
    onClose();
    audioSystem.playSelectSound();
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + day.photos.length) % day.photos.length);
    audioSystem.playSelectSound();
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % day.photos.length);
    audioSystem.playSelectSound();
  };

  const toggleMaximize = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsPhotoMaximized(!isPhotoMaximized);
    audioSystem.playSelectSound();
  };

  const handlePhotoTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };

  const handlePhotoTouchMove = (e: React.TouchEvent) => {
    setTouchDeltaX(e.touches[0].clientX - touchStartX);
  };

  const handlePhotoTouchEnd = () => {
    if (touchDeltaX > 40) {
      handlePrevPhoto();
    } else if (touchDeltaX < -40) {
      handleNextPhoto();
    }
    setTouchDeltaX(0);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0e1724]/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Container pe aproape întreaga pagină (96vw mobil / 95vw desktop, 92vh / 88vh) */}
      <div 
        className="relative w-[96vw] sm:w-[95vw] max-w-7xl h-[92vh] sm:h-[88vh] bg-white rounded-[28px] sm:rounded-[32px] shadow-2xl border border-[#dfd5c5] overflow-hidden flex flex-col text-slate-900 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Antet Modal în nuanță Ivory caldă */}
        <div className="px-3.5 sm:px-7 py-2.5 sm:py-3.5 bg-[#f8f5ee] border-b border-[#dfd5c5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap">
            <span className={`px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-xs ${
              day.focus === 'green' ? 'bg-[#758467] text-[#f5ebdc]' : 'bg-[#172738] text-[#f5ebdc]'
            }`}>
              Ziua 0{day.dayNumber}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#758467] shrink-0" />
              <span>{day.date}</span>
            </span>
            <span className="text-slate-300 hidden md:inline">·</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#758467] shrink-0" />
              <span>{day.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Buton Mărește / Restrânge poza pe tot chenarul */}
            <button
              onClick={toggleMaximize}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                isPhotoMaximized
                  ? 'bg-[#758467] hover:bg-[#627055] text-[#f5ebdc]'
                  : 'bg-[#172738] hover:bg-[#0f1a26] text-[#f5ebdc] border border-[#2d455d]'
              }`}
              title={isPhotoMaximized ? 'Restrânge pentru a vedea textul activității' : 'Mărește poza cât este chenarul'}
            >
              {isPhotoMaximized ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Restrânge Chenarul</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mărește Poza Cât Chenarul</span>
                </>
              )}
            </button>

            <button
              onClick={handleOpenGallery}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f5ebdc] hover:bg-[#ede1ce] text-[#4d5942] font-bold text-xs border border-[#d6c7b0] transition-colors"
            >
              <Images className="w-3.5 h-3.5 text-[#758467]" />
              <span>Galerie</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors border border-[#dfd5c5]"
              aria-label="Închide fereastra"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 
          CORP: 
          - Dacă isPhotoMaximized: POZA OCUPĂ TOT CHENARUL!
          - Altfel: 
            Pe mobil: scroll vertical lin (poza sus, scurt text jos)
            Pe desktop: 2 coloane (stânga = scurt text activitate, dreapta = poza lângă)
        */}
        {isPhotoMaximized ? (
          /* VIZUALIZARE MAXIMIZATĂ PE TOT CHENARUL */
          <div 
            className="flex-1 relative bg-slate-950 flex items-center justify-center overflow-hidden touch-pan-y"
            onTouchStart={handlePhotoTouchStart}
            onTouchMove={handlePhotoTouchMove}
            onTouchEnd={handlePhotoTouchEnd}
          >
            {/* Buton comutare mod scalare (Fit vs Fill) */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md p-1 sm:p-1.5 rounded-2xl border border-white/20 text-white text-[10px] sm:text-xs">
              <button
                onClick={() => setFitMode('contain')}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl font-bold transition-all ${
                  fitMode === 'contain' ? 'bg-[#758467] text-[#f5ebdc]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Proporțional
              </button>
              <button
                onClick={() => setFitMode('cover')}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl font-bold transition-all ${
                  fitMode === 'cover' ? 'bg-[#758467] text-[#f5ebdc]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Umple Tot
              </button>
            </div>

            {/* Buton plutitor Înapoi la text */}
            <button
              onClick={toggleMaximize}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-[#f5ebdc] hover:bg-white text-[#172738] font-bold text-[11px] sm:text-xs shadow-xl transition-all border border-[#c8b28a]"
            >
              <Minimize2 className="w-3.5 h-3.5 text-[#758467]" />
              <span>Restrânge</span>
            </button>

            {/* Fotografia mare extinsă pe tot chenarul */}
            <div className="w-full h-full flex items-center justify-center p-2">
              <img
                src={currentPhoto.imageSrc}
                alt={currentPhoto.title}
                className={`w-full h-full transition-all duration-300 ${
                  fitMode === 'contain' ? 'object-contain' : 'object-cover'
                }`}
              />
            </div>

            {/* Săgeți de navigare foto dacă sunt mai multe poze */}
            {day.photos.length > 1 && (
              <>
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
                  aria-label="Fotografia anterioară"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
                  aria-label="Fotografia următoare"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Bară inferioară discretă de selecție fotografii */}
            {day.photos.length > 1 && (
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-1.5 sm:gap-2 z-30 px-2 overflow-x-auto no-scrollbar">
                {day.photos.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all shadow-lg shrink-0 ${
                      selectedPhotoIndex === idx
                        ? 'bg-[#758467] text-[#f5ebdc] ring-2 ring-white/60 scale-105'
                        : 'bg-black/60 text-white/80 hover:bg-black/80 backdrop-blur-md'
                    }`}
                  >
                    Poza 0{idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* VIZUALIZARE STANDARD: SCURT TEXT ACTIVITATE ȘI POZA LÂNGĂ (ADAPTAT PE MOBIL) */
          <div className="flex-1 overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Pe mobil: poza apare prima sau lângă; pe desktop coloana stângă are textul */}
            <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 order-2 lg:order-1 overflow-y-auto flex flex-col justify-between space-y-4 sm:space-y-6 bg-white lg:border-r border-[#dfd5c5]">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#758467] mb-1">
                    <span>Jurnal de Activitate · Aachen 2026</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-[#172738] leading-tight">
                    {day.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#758467]" />
                    <span>{day.location}</span>
                  </div>
                </div>

                {/* Scurt text descriptiv despre activitate */}
                <div className="p-4 rounded-2xl bg-[#fbf8f2] border border-[#dfd5c5] text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                  <span className="font-bold text-[#172738] block text-xs uppercase tracking-wider">
                    Descrierea Activității:
                  </span>
                  <p>{day.description}</p>
                </div>

                {/* Activități Cheie / Agenda Zilei */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Repere Didactice & Formare:
                  </span>
                  <div className="space-y-1.5">
                    {day.schedule.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="w-4 h-4 rounded-full bg-[#f5ebdc] text-[#758467] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </span>
                        <div>
                          <span className="font-semibold text-slate-800 mr-1.5">{item.time}</span>
                          <span>{item.activity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buton Mărește poza cât chenarul */}
              <div className="pt-2 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={toggleMaximize}
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-[#172738] hover:bg-[#25394e] text-[#f5ebdc] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 border border-[#2d455d]"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#c5a769]" />
                  <span>Mărește Poza Cât Este Chenarul</span>
                </button>
              </div>
            </div>

            {/* COLOANA DREAPTĂ (PE MOBIL APARE SUS PENTRU IMPACT VIZUAL): POZA LÂNGĂ TEXT */}
            <div className="lg:col-span-7 bg-slate-950 p-3 sm:p-5 lg:p-6 flex flex-col justify-center items-center relative order-1 lg:order-2 min-h-[260px] sm:min-h-[360px] lg:min-h-full">
              <div 
                onClick={toggleMaximize}
                className="relative w-full h-full max-h-[320px] sm:max-h-[460px] lg:max-h-full rounded-2xl overflow-hidden flex items-center justify-center bg-black/60 group cursor-pointer border border-white/10"
                title="Apasă pentru a mări poza cât este tot chenarul"
              >
                <img
                  src={currentPhoto.imageSrc}
                  alt={currentPhoto.title}
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                />

                {/* Overlay discret la hover pentru mărire cât chenarul */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-[#f5ebdc] text-[#172738] text-xs font-bold shadow-xl flex items-center gap-2 transform scale-95 group-hover:scale-100 transition-transform border border-[#c8b28a]">
                    <Maximize2 className="w-4 h-4 text-[#758467]" />
                    <span>Mărește Cât Este Chenarul</span>
                  </div>
                </div>

                {/* Săgeți foto stânga / dreapta dacă există mai multe poze */}
                {day.photos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-md"
                      aria-label="Fotografia anterioară"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-md"
                      aria-label="Fotografia următoare"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Selector discret de fotografii la baza chenarului */}
              {day.photos.length > 1 && (
                <div className="mt-2.5 sm:mt-3 flex items-center justify-center gap-1.5 sm:gap-2 z-20 px-2 overflow-x-auto no-scrollbar">
                  {day.photos.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedPhotoIndex(idx);
                        audioSystem.playSelectSound();
                      }}
                      className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all shadow-md shrink-0 ${
                        selectedPhotoIndex === idx
                          ? 'bg-[#758467] text-[#f5ebdc] ring-1 ring-[#f5ebdc]/70 scale-105'
                          : 'bg-black/60 text-white/80 hover:bg-black/80 backdrop-blur-md'
                      }`}
                    >
                      Poza 0{idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* Bară rapidă de navigare între zile la baza cartonașului în nuanță Ivory */}
        <div className="px-3 sm:px-7 py-2 sm:py-3 bg-[#f8f5ee] border-t border-[#dfd5c5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">Zile:</span>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => {
                  onSelectAnotherDay(num);
                  setSelectedPhotoIndex(0);
                  setIsPhotoMaximized(false);
                  audioSystem.playSelectSound();
                }}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center shrink-0 active:scale-95 ${
                  day.dayNumber === num
                    ? 'bg-[#172738] text-[#f5ebdc] shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-[#f5ebdc] border border-[#dfd5c5]'
                }`}
              >
                0{num}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-3 sm:px-4 py-1.5 rounded-xl bg-[#f5ebdc] hover:bg-[#ede1ce] text-[#4d5942] font-semibold text-xs transition-colors border border-[#d6c7b0] shrink-0"
          >
            Închide
          </button>
        </div>

      </div>
    </div>
  );
};
