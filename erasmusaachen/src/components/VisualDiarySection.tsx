/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ALL_PHOTOS, DayPhoto } from '../data/projectData';
import { PhotoCardViewer } from './PhotoCardViewer';
import { PhotoLightboxModal } from './PhotoLightboxModal';
import { audioSystem } from '../utils/audioSystem';

export const VisualDiarySection: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<DayPhoto | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentPhotos = ALL_PHOTOS;
  const totalCount = currentPhotos.length;
  const safeIndex = activePhotoIndex % Math.max(1, totalCount);

  const handlePrev = () => { setActivePhotoIndex((prev) => (prev - 1 + totalCount) % totalCount); audioSystem.playSwipeSound(); };
  const handleNext = () => { setActivePhotoIndex((prev) => (prev + 1) % totalCount); audioSystem.playSwipeSound(); };

  const handleCardClick = (photo: DayPhoto) => { setLightboxPhoto(photo); audioSystem.playPhotoClickSound(); };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX); setDragDeltaX(0);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragDeltaX(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDeltaX > 50) handlePrev(); else if (dragDeltaX < -50) handleNext();
    setDragDeltaX(0);
  };

  const getTranslateSpacing = () => {
    if (windowWidth < 380) return 130;
    if (windowWidth < 640) return 155;
    if (windowWidth < 1024) return 260;
    return 330;
  };

  return (
    <section id="galerie" className="py-10 sm:py-16 relative bg-[#fbf8f2] text-slate-900 overflow-hidden select-none border-t border-b border-[#dfd5c5]/80">
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-44 bg-gradient-to-r from-[#fbf8f2] via-[#fbf8f2]/80 to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-44 bg-gradient-to-l from-[#fbf8f2] via-[#fbf8f2]/80 to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#758467] uppercase block mb-1.5 sm:mb-2">GALERIE MEDIA</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#172738] tracking-tight">Arhiva Completă</h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto h-[360px] xs:h-[400px] sm:h-[500px] lg:h-[540px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
          onMouseDown={handleDragStart} onMouseMove={handleDragMove} onMouseUp={handleDragEnd} onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart} onTouchMove={handleDragMove} onTouchEnd={handleDragEnd}>
          
          <div className="relative w-full h-full flex items-center justify-center">
            {currentPhotos.map((photo, idx) => {
              let offset = idx - safeIndex;
              if (offset > totalCount / 2) offset -= totalCount;
              if (offset < -totalCount / 2) offset += totalCount;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              const baseTranslateX = offset * getTranslateSpacing();
              const translateX = baseTranslateX + (isDragging ? dragDeltaX * 0.7 : 0);
              const scale = isCenter ? (windowWidth < 640 ? 1.02 : 1.06) : 0.85;

              return (
                <div key={photo.id} onClick={() => { if(!isDragging || Math.abs(dragDeltaX) < 10) { isCenter ? handleCardClick(photo) : setActivePhotoIndex(idx); audioSystem.playSelectSound(); } }}
                  style={{ 
                    position: 'absolute', transform: `translate3d(${translateX}px, 0, 0) scale(${scale})`, 
                    zIndex: isCenter ? 30 : 20 - Math.abs(offset) * 5, 
                    opacity: isCenter ? 1 : Math.max(0.45, 1 - Math.abs(offset) * 0.28), 
                    transition: isDragging ? 'none' : 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.35s ease-out', willChange: 'transform, opacity'
                  }}
                  className={`w-[210px] xs:w-[240px] sm:w-[320px] lg:w-[360px] h-[300px] xs:h-[340px] sm:h-[440px] lg:h-[490px] rounded-[20px] sm:rounded-[28px] overflow-hidden transition-shadow duration-300 bg-slate-900 ${isCenter ? 'shadow-xl shadow-[#1b2d40]/20 ring-1 ring-[#1b2d40]/10' : 'shadow-md hover:opacity-90'}`}>
                  <PhotoCardViewer photo={photo} showCaption={false} aspectRatio="square" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8 relative z-30">
          <button onClick={handlePrev} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-300 hover:border-[#1b2d40] bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all hover:scale-110 shadow-sm"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={handleNext} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-300 hover:border-[#1b2d40] bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all hover:scale-110 shadow-sm"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
      <PhotoLightboxModal photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)} onSelectPhoto={(p) => setLightboxPhoto(p)} />
    </section>
  );
};