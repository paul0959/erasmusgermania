/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPhoto, ALL_PHOTOS } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';

interface PhotoLightboxModalProps {
  photo: DayPhoto | null;
  onClose: () => void;
  onSelectPhoto: (photo: DayPhoto) => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({ photo, onClose, onSelectPhoto }) => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchDeltaX, setTouchDeltaX] = useState(0);

  // 1. Sistemul automat pentru Muzica de Fundal
  useEffect(() => {
    let bgMusic: HTMLAudioElement | null = null;
    
    // Dacă am deschis o poză (photo există), pornim muzica
    if (photo) {
      bgMusic = new Audio('/muzica.mp3');
      bgMusic.loop = true; // Se repetă la nesfârșit cât timp stai în galerie
      bgMusic.volume = 0.3; // Volum ambiental, plăcut, nu prea tare
      bgMusic.play().catch(err => console.log("Browser-ul a blocat autoplay-ul muzicii.", err));
    }

    // Funcția de 'cleanup' - când închidem galeria, oprim muzica
    return () => {
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }
    };
  }, [!!photo]); // !!photo asigură că muzica pornește o singură dată la deschidere, nu la fiecare poză

  // 2. Gestionarea tastaturii (Escape, Săgeți)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo]);

  if (!photo) return null;

  const currentIndex = ALL_PHOTOS.findIndex((p) => p.id === photo.id);

  const handlePrev = () => { onSelectPhoto(ALL_PHOTOS[(currentIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length]); audioSystem.playSwipeSound(); };
  const handleNext = () => { onSelectPhoto(ALL_PHOTOS[(currentIndex + 1) % ALL_PHOTOS.length]); audioSystem.playSwipeSound(); };

  const handleTouchStart = (e: React.TouchEvent) => { setTouchStartX(e.touches[0].clientX); setTouchDeltaX(0); };
  const handleTouchMove = (e: React.TouchEvent) => { setTouchDeltaX(e.touches[0].clientX - touchStartX); };
  const handleTouchEnd = () => { if (touchDeltaX > 40) handlePrev(); else if (touchDeltaX < -40) handleNext(); setTouchDeltaX(0); };

  return (
    <div 
      // Am mărit z-index-ul la extrem și am coborât flex-ul mai jos (pt-28)
      className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-28 sm:pt-32 pb-6 px-2 sm:px-12 overflow-hidden animate-in fade-in duration-200 select-none touch-pan-y"
      onClick={onClose} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
    >
      {/* Butonul X mutat mult mai jos (top-28) ca să nu se bată cu meniul albastru de sus */}
      <button 
        onClick={onClose} 
        className="absolute top-28 right-4 sm:top-28 sm:right-10 z-[1000000] p-3 sm:p-4 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110 border border-white/20 shadow-2xl"
      >
        <X className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-[1000000] p-3 sm:p-5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 border border-white/20 shadow-2xl"
      >
        <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); handleNext(); }} 
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-[1000000] p-3 sm:p-5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 border border-white/20 shadow-2xl"
      >
        <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>

      {/* Dimensiunea imaginii redusă puțin (max-h-[80vh]) pentru a încăpea perfect dedesubtul meniului */}
      <div className="relative max-w-7xl max-h-[75vh] sm:max-h-[80vh] w-full h-full flex items-center justify-center p-1 sm:p-2" onClick={(e) => e.stopPropagation()}>
        {photo.mediaType === 'video' ? (
          <video src={photo.imageSrc} controls autoPlay className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/10" />
        ) : (
          <img src={photo.imageSrc} alt={photo.title} className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/10" />
        )}
      </div>
    </div>
  );
};