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
  ArrowRight, 
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { DayJournal, DayPhoto } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';

interface DayDetailModalProps {
  day: DayJournal | null;
  onClose: () => void;
  onSelectAnotherDay: (id: number) => void;
  onNavigateToGeneralGallery?: (dayNumber: number) => void;
}

/**
 * CARTONAȘ DESCHIS PE APROAPE ÎNTREAGA PAGINĂ
 * Cu posibilitate de mărire a pozei cât tot chenarul:
 * 1. "La cartonasele tip holograma, la deschidera, sa nu apara informatii despre poza, ci un scurt text despre activitate si poza langa. (sa se deschida cartonasul pe aproape intreaga pagina a site-uli"
 * 2. "La deschiderea cartonasului, poza sa se poata mari cat este chenarul"
 * 3. "LA poza de pe cartonase sa nu fie nume de profesor"
 * 4. Accente Sage Green & Ivory + Albastru Închis
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

  if (!day) return null;

  const currentPhoto = day.photos[selectedPhotoIndex] || day.photos[0];

  const handleOpenGallery = () => {
    if (onNavigateToGeneralGallery) {
      onNavigateToGeneralGallery(day.dayNumber);
    }
    onClose();
    audioSystem.playSelectSound();
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + day.photos.length) % day.photos.length);
    audioSystem.playSelectSound();
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % day.photos.length);
    audioSystem.playSelectSound();
  };

  const toggleMaximize = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsPhotoMaximized(!isPhotoMaximized);
    audioSystem.playSelectSound();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0e1724]/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Container pe aproape întreaga pagină (95vw, 88vh) */}
      <div 
        className="relative w-[95vw] max-w-7xl h-[88vh] max-h-[88vh] bg-white rounded-[32px] shadow-2xl border border-[#dfd5c5] overflow-hidden flex flex-col text-slate-900 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Antet Modal în nuanță Ivory caldă */}
        <div className="px-5 sm:px-7 py-3.5 bg-[#f8f5ee] border-b border-[#dfd5c5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span className={`px-3.5 py-1 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm ${
              day.focus === 'green' ? 'bg-[#758467] text-[#f5ebdc]' : 'bg-[#172738] text-[#f5ebdc]'
            }`}>
              Ziua 0{day.dayNumber}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#758467]" />
              {day.date}
            </span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 hidden sm:flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#758467]" />
              {day.location}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Buton Mărește / Restrânge poza pe tot chenarul */}
            <button
              onClick={toggleMaximize}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
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
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f5ebdc] hover:bg-[#ede1ce] text-[#4d5942] font-bold text-xs border border-[#d6c7b0] transition-colors"
            >
              <Images className="w-3.5 h-3.5 text-[#758467]" />
              <span>Galerie Foto</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors border border-[#dfd5c5]"
              aria-label="Închide fereastra"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 
          CORP: 
          - Dacă isPhotoMaximized: POZA OCUPĂ TOT CHENARUL!
          - Altfel: 2 COLOANE (Scurt text activitate în stânga, poza în dreapta)
        */}
        {isPhotoMaximized ? (
          /* VIZUALIZARE MAXIMIZATĂ PE TOT CHENARUL */
          <div className="flex-1 relative bg-slate-950 flex items-center justify-center overflow-hidden">
            {/* Buton comutare mod scalare (Fit vs Fill) */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 text-white text-xs">
              <button
                onClick={() => setFitMode('contain')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  fitMode === 'contain' ? 'bg-[#758467] text-[#f5ebdc]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Proporțional (Complet)
              </button>
              <button
                onClick={() => setFitMode('cover')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  fitMode === 'cover' ? 'bg-[#758467] text-[#f5ebdc]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Umple Tot Chenarul
              </button>
            </div>

            {/* Buton plutitor Înapoi la text */}
            <button
              onClick={toggleMaximize}
              className="absolute top-4 right-4 z-30 flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#f5ebdc] hover:bg-white text-[#172738] font-bold text-xs shadow-xl transition-all hover:scale-105 active:scale-95 border border-[#c8b28a]"
            >
              <Minimize2 className="w-4 h-4 text-[#758467]" />
              <span>Restrânge / Vezi Textul</span>
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
                  aria-label="Fotografia anterioară"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
                  aria-label="Fotografia următoare"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Bară inferioară discretă de selecție fotografii */}
            {day.photos.length > 1 && (
              <div className="absolute bottom-5 inset-x-0 flex items-center justify-center gap-2 z-30">
                {day.photos.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-lg ${
                      selectedPhotoIndex === idx
                        ? 'bg-[#758467] text-[#f5ebdc] ring-2 ring-white/60 scale-105'
                        : 'bg-black/60 text-white/80 hover:bg-black/80 backdrop-blur-md'
                    }`}
                  >
                    Fotografia 0{idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* VIZUALIZARE STANDARD: SCURT TEXT ACTIVITATE ȘI POZA LÂNGĂ */
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            
            {/* COLOANA STÂNGĂ: Scurt text despre activitate */}
            <div className="lg:col-span-5 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6 bg-white border-r border-[#dfd5c5]">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#172738] leading-snug">
                    {day.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#758467] mt-1">
                    {day.subtitle}
                  </p>
                </div>

                {/* Scurt text despre activitate */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f5ee] border border-[#dfd5c5]">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Descrierea Activităților
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {day.description}
                  </p>
                </div>

                {/* Program orar sintetic */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Desfășurător pe Ore:
                  </span>
                  <div className="space-y-1.5">
                    {day.schedule.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="font-mono font-bold text-[#4d5942] bg-[#f5ebdc] px-2.5 py-0.5 rounded-md border border-[#d6c7b0]">
                          {item.time}
                        </span>
                        <span className="text-slate-800">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concluzia didactică */}
                <div className="p-4 rounded-xl bg-[#f8f5ee] border border-[#dfd5c5] text-xs sm:text-sm text-[#3d4933] leading-relaxed">
                  <strong>💡 Concluzie didactică:</strong> {day.takeaway}
                </div>
              </div>

              {/* Buton comutare vizualizare la tot chenarul */}
              <div className="pt-4 border-t border-[#dfd5c5] flex flex-col gap-2.5">
                <button
                  onClick={toggleMaximize}
                  className="w-full py-3 rounded-2xl bg-[#172738] hover:bg-[#0f1a26] text-[#f5ebdc] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 border border-[#2d455d]"
                >
                  <Maximize2 className="w-4 h-4 text-[#f5ebdc]" />
                  <span>Mărește Poza Cât Este Chenarul</span>
                </button>
              </div>
            </div>

            {/* COLOANA DREAPTĂ: Poza mare lângă, curată, fără nume de profesor */}
            <div className="lg:col-span-7 bg-slate-950 relative flex flex-col items-center justify-center overflow-hidden p-3 sm:p-5">
              
              {/* Chenarul fotografiei cu buton direct de mărire */}
              <div 
                onClick={toggleMaximize}
                className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-black/60 group cursor-pointer border border-white/10"
                title="Apasă pentru a mări poza cât este tot chenarul"
              >
                <img
                  src={currentPhoto.imageSrc}
                  alt={currentPhoto.title}
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                />

                {/* Overlay discret la hover pentru mărire cât chenarul */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-2xl bg-[#f5ebdc] text-[#172738] text-xs font-bold shadow-xl flex items-center gap-2 transform scale-95 group-hover:scale-100 transition-transform border border-[#c8b28a]">
                    <Maximize2 className="w-4 h-4 text-[#758467]" />
                    <span>Mărește Cât Este Chenarul</span>
                  </div>
                </div>

                {/* Săgeți foto stânga / dreapta dacă există mai multe poze */}
                {day.photos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-md"
                      aria-label="Fotografia anterioară"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-md"
                      aria-label="Fotografia următoare"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Selector discret de fotografii la baza chenarului */}
              {day.photos.length > 1 && (
                <div className="mt-3 flex items-center justify-center gap-2 z-20">
                  {day.photos.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedPhotoIndex(idx);
                        audioSystem.playSelectSound();
                      }}
                      className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all shadow-md ${
                        selectedPhotoIndex === idx
                          ? 'bg-[#758467] text-[#f5ebdc] ring-1 ring-[#f5ebdc]/70 scale-105'
                          : 'bg-black/60 text-white/80 hover:bg-black/80 backdrop-blur-md'
                      }`}
                    >
                      Fotografia 0{idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* Bară rapidă de navigare între zile la baza cartonașului în nuanță Ivory */}
        <div className="px-5 sm:px-7 py-3 bg-[#f8f5ee] border-t border-[#dfd5c5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2 hidden sm:inline">Navighează pe zile:</span>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => {
                  onSelectAnotherDay(num);
                  setSelectedPhotoIndex(0);
                  setIsPhotoMaximized(false);
                  audioSystem.playSelectSound();
                }}
                className={`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center ${
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
            className="px-4 py-1.5 rounded-xl bg-[#f5ebdc] hover:bg-[#ede1ce] text-[#4d5942] font-semibold text-xs transition-colors border border-[#d6c7b0]"
          >
            Închide
          </button>
        </div>

      </div>
    </div>
  );
};
