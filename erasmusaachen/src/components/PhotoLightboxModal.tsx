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

  // 1. Sistem pentru Muzica de Fundal
  useEffect(() => {
    let bgMusic: HTMLAudioElement | null = null;
    
    if (photo) {
      bgMusic = new Audio('/muzica.mp3');
      bgMusic.loop = true;
      bgMusic.volume = 0.35;
      bgMusic.play().catch(err => console.log("Autoplay-ul audio a fost blocat.", err));
    }

    return () => {
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }
    };
  }, [!!photo]);

  // 2. Rularea Automată la 2 secunde
  useEffect(() => {
    if (!photo) return;
    
    // Setăm cronometrul la 2 secunde (2000 ms)
    const timer = setTimeout(() => {
      const currentIndex = ALL_PHOTOS.findIndex((p) => p.id === photo.id);
      const nextIndex = (currentIndex + 1) % ALL_PHOTOS.length;
      onSelectPhoto(ALL_PHOTOS[nextIndex]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [photo?.id]);

  // 3. Navigare manuală din taste
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

  const handlePrev = () => { 
    onSelectPhoto(ALL_PHOTOS[(currentIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length]); 
  };
  const handleNext = () => { 
    onSelectPhoto(ALL_PHOTOS[(currentIndex + 1) % ALL_PHOTOS.length]); 
  };

  const handleTouchStart = (e: React.TouchEvent) => { setTouchStartX(e.touches[0].clientX); setTouchDeltaX(0); };
  const handleTouchMove = (e: React.TouchEvent) => { setTouchDeltaX(e.touches[0].clientX - touchStartX); };
  const handleTouchEnd = () => { 
    if (touchDeltaX > 50) handlePrev(); 
    else if (touchDeltaX < -50) handleNext(); 
    setTouchDeltaX(0); 
  };

  return (
    <div 
      // Am adăugat "pt-24 sm:pt-28" pentru a coborî totul sub antetul meniului
      className="fixed inset-0 z-[999999] bg-black flex flex-col items-center justify-center pt-24 sm:pt-28 pb-4 px-2 overflow-hidden touch-pan-y"
      onClick={onClose} 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {photo.mediaType === 'video' ? (
          <video 
            key={photo.id}
            src={photo.imageSrc} 
            controls 
            autoPlay 
            // max-h-[75vh] limitează înălțimea pozei ca să nu urce sub meniu
            className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain animate-in fade-in duration-500" 
            onClick={(e) => e.stopPropagation()} 
          />
        ) : (
          <img 
            key={photo.id}
            src={photo.imageSrc} 
            alt={photo.title} 
            className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain animate-in fade-in duration-500" 
            onClick={(e) => e.stopPropagation()} 
          />
        )}
      </div>

      {/* Butonul Exit poziționat mai jos pentru a nu se suprapune cu meniul */}
      <button 
        onClick={onClose} 
        className="absolute top-24 right-4 sm:top-28 sm:right-8 z-[1000000] p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/80 text-white transition-all hover:scale-110 border border-white/20 shadow-2xl"
      >
        <X className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Săgețile de navigare */}
      <button 
        onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 mt-12 z-[1000000] p-3 sm:p-5 rounded-full bg-black/20 hover:bg-black/60 text-white opacity-0 hover:opacity-100 transition-all border border-white/10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); handleNext(); }} 
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 mt-12 z-[1000000] p-3 sm:p-5 rounded-full bg-black/20 hover:bg-black/60 text-white opacity-0 hover:opacity-100 transition-all border border-white/10"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};