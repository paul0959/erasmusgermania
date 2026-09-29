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
      bgMusic.loop = true; // Muzica se repetă
      bgMusic.volume = 0.35; // Volum ambiental
      bgMusic.play().catch(err => console.log("Autoplay-ul audio a fost blocat de browser.", err));
    }

    return () => {
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }
    };
  }, [!!photo]);

  // 2. Rularea Automată (Slideshow Cinematic Reparat)
  useEffect(() => {
    // Dacă nu e deschisă nicio poză, nu facem nimic
    if (!photo) return;
    
    // Setăm un cronometru stabil care trece la următoarea poză după 4 secunde
    const timer = setTimeout(() => {
      const currentIndex = ALL_PHOTOS.findIndex((p) => p.id === photo.id);
      const nextIndex = (currentIndex + 1) % ALL_PHOTOS.length;
      onSelectPhoto(ALL_PHOTOS[nextIndex]);
    }, 4000); // 4000 milisecunde = 4 secunde

    // Curățăm cronometrul vechi când poza se schimbă, pentru a nu se suprapune
    return () => clearTimeout(timer);
    
    // ATENȚIE: Am folosit strict photo.id pentru a preveni resetarea greșită a cronometrului
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
      className="fixed inset-0 z-[999999] bg-black flex items-center justify-center overflow-hidden touch-pan-y"
      onClick={onClose} 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      {/* Container Fullscreen pentru media */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        {photo.mediaType === 'video' ? (
          <video 
            key={photo.id}
            src={photo.imageSrc} 
            controls 
            autoPlay 
            className="w-full h-full object-contain animate-in fade-in duration-1000" 
            onClick={(e) => e.stopPropagation()} 
          />
        ) : (
          <img 
            key={photo.id}
            src={photo.imageSrc} 
            alt={photo.title} 
            className="w-full h-full object-contain animate-in fade-in duration-1000" 
            onClick={(e) => e.stopPropagation()} 
          />
        )}
      </div>

      {/* Buton Exit poziționat sus-dreapta */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-[1000000] p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/80 text-white transition-all hover:scale-110 border border-white/20 shadow-2xl"
      >
        <X className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Săgețile de navigare ascunse pe mobil pentru un ecran curat, vizibile doar pe PC dacă pui mouse-ul pe margine */}
      <button 
        onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[1000000] p-3 sm:p-5 rounded-full bg-black/20 hover:bg-black/60 text-white opacity-0 hover:opacity-100 transition-all border border-white/10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); handleNext(); }} 
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[1000000] p-3 sm:p-5 rounded-full bg-black/20 hover:bg-black/60 text-white opacity-0 hover:opacity-100 transition-all border border-white/10"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};