/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { DAILY_JOURNAL } from '../data/projectData';
import type { DayJournal, DayPhoto } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';
import { PhotoCardViewer } from './PhotoCardViewer';

interface Hologram3DStageProps {
  onSelectDayDetails: (day: DayJournal) => void;
  onSelectPhoto: (photo: DayPhoto) => void;
  onNavigateToGeneralGallery: (dayNumber: number) => void;
}

export const Hologram3DStage: React.FC<Hologram3DStageProps> = ({ onSelectDayDetails }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const daysCount = DAILY_JOURNAL.length;
  const stageRef = useRef<HTMLDivElement>(null);

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
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaX) < 15) return;
    setDragDeltaX(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDeltaX > 40) navigateTo(activeDayIndex - 1);
    else if (dragDeltaX < -40) navigateTo(activeDayIndex + 1);
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

  const getTranslateXSpacing = () => {
    if (windowWidth < 380) return 140;
    if (windowWidth < 640) return 170;
    if (windowWidth < 1024) return 280;
    return 350;
  };

  return (
    <section id="jurnal-hologram" className="relative pt-6 pb-10 sm:pt-8 sm:pb-14 overflow-hidden select-none bg-white text-slate-900 border-t border-b border-slate-200">
      
      <div 
        ref={stageRef}
        className="relative w-full max-w-7xl mx-auto h-[480px] xs:h-[520px] sm:h-[620px] lg:h-[670px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseDown={handleTouchStart} onMouseMove={handleTouchMove} onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
        style={{ perspective: windowWidth < 640 ? '1100px' : '1500px' }}
      >
        <div className="absolute inset-x-0 bottom-4 h-52 sm:h-60 bg-gradient-to-t from-slate-100/50 via-slate-50/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-10 w-3/4 h-16 sm:h-20 bg-blue-500/5 rounded-full blur-[50px] sm:blur-[70px] pointer-events-none" />

        <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
          style={{ transformStyle: 'preserve-3d', transform: `translateX(${dragDeltaX * 0.4}px)` }}>
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
              <div key={day.id} onClick={() => handleCardClick(index)}
                style={{
                  position: 'absolute', transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transformStyle: 'preserve-3d', zIndex: 40 - Math.abs(offset) * 10, opacity: opacity,
                  transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s'
                }}
                className={`w-[275px] xs:w-[305px] sm:w-[395px] lg:w-[440px] h-[440px] xs:h-[475px] sm:h-[560px] lg:h-[600px] rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 lg:p-7 flex flex-col justify-between overflow-visible transition-all duration-300 relative bg-slate-900 border ${
                  isCenter ? 'border-blue-500 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.3)] ring-1 ring-blue-500/50' : 'border-slate-800 shadow-xl cursor-pointer hover:border-blue-500/50'
                }`}>
                
                <div className="absolute top-0 inset-x-0 h-1 sm:h-1.5 rounded-t-[28px] sm:rounded-t-[32px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

                <div>
                  <div className="flex items-center justify-between pb-2 sm:pb-3 mb-2 sm:mb-2.5 border-b border-slate-800">
                    <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full text-white flex items-center gap-1.5 ${
                      day.focus === 'stem' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' : day.focus === 'green' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      Ziua 0{day.dayNumber} · {day.focus === 'stem' ? 'STEM' : day.focus === 'green' ? 'Think Green' : 'Cultural'}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 flex items-center gap-1 bg-slate-800 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-slate-700">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {day.date.split(',')[1]?.trim() || day.date}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-white text-base sm:text-xl lg:text-2xl leading-snug line-clamp-2">
                    {day.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-blue-400 mt-1 line-clamp-1 flex items-center gap-1">
                    <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-400 shrink-0" />
                    <span>{day.location}</span>
                  </p>
                </div>

                <div className="my-1.5 sm:my-2 flex-1 flex flex-col justify-center">
                  {photo1 && (
                    <div onClick={(e) => { e.stopPropagation(); onSelectDayDetails(day); audioSystem.playSelectSound(); }}
                      className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-800 group cursor-pointer hover:border-blue-500/50 transition-all shadow-lg"
                      title="Atingeți pentru deschiderea cartonașului">
                      <PhotoCardViewer photo={photo1} showCaption={false} aspectRatio="video" />
                    </div>
                  )}
                </div>

                <div className="pt-2 sm:pt-3 border-t border-slate-800 flex flex-col gap-2 sm:gap-3">
                  <p className="text-[11px] sm:text-xs lg:text-sm text-slate-400 line-clamp-2 leading-relaxed font-normal">
                    {firstSentence}
                  </p>
                  <button onClick={(e) => { e.stopPropagation(); onSelectDayDetails(day); audioSystem.playSelectSound(); }}
                    className="w-full py-2.5 sm:py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 group border border-blue-500">
                    <span>Deschide Ziua</span>
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={() => navigateTo(activeDayIndex - 1)}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-4 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-xl border border-slate-200 transition-all hover:scale-110 active:scale-95 group">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button onClick={() => navigateTo(activeDayIndex + 1)}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-4 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-xl border border-slate-200 transition-all hover:scale-110 active:scale-95 group">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-4 mt-2 sm:mt-4">
        <div className="flex items-center sm:justify-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 px-1 snap-x">
          {DAILY_JOURNAL.map((d, idx) => (
            <button key={d.id} onClick={() => navigateTo(idx)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 snap-center active:scale-95 ${
                activeDayIndex === idx ? 'bg-blue-600 text-white shadow-md scale-105 border border-blue-500' : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}>
              <span className="font-mono">Ziua 0{d.dayNumber}</span>
              <span className="text-[11px] opacity-80 font-normal hidden sm:inline">({d.location.split('&')[0].trim()})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};