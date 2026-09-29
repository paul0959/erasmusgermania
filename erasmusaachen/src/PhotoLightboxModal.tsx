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
      bgMusic.loop = true; // Cântă în buclă cât timp e deschisă galeria
      bgMusic.volume = 0.35; // Volum plăcut ambiental
      bgMusic.play().catch(err => console.log("Autoplay-ul audio a fost blocat de browser.", err));
    }

    return () => {
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }
    };
  }, [!!photo]);

  // 2. Rularea Automată a pozelor (Slideshow tip Film)
  useEffect(() => {
    if (!photo) return;
    
    // Schimbă poza la fiecare 4.5 secunde
    const timer = setInterval(() => {
      const currentIndex = ALL_PHOTOS.findIndex((p) => p.id === photo.id);
      const nextIndex = (currentIndex + 1) % ALL_PHOTOS.length;
      onSelectPhoto(ALL_PHOTOS[nextIndex]);
    }, 4500);

    return () => clearInterval(timer);
  }, [photo, onSelectPhoto]);

  // 3. Navigare manuală din taste (opțional)
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

  // Funcții pentru navigare manuală
  const handlePrev = () => { 
    onSelectPhoto(ALL_PHOTOS[(currentIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length]); 
    audioSystem.playSwipeSound(); 
  };
  const handleNext = () => { 
    onSelectPhoto(ALL_PHOTOS[(currentIndex + 1) % ALL_PHOTOS.length]); 
    audioSystem.playSwipeSound(); 
  };

  // Navigare prin atingere (Swipe pe ecrane tactile)
  const handleTouchStart = (e: React.TouchEvent) => { setTouchStartX(e.touches[0].clientX); setTouchDeltaX(0); };
  const handleTouchMove = (e: React.TouchEvent) => { setTouchDeltaX(e.touches[0].clientX - touchStartX); };
  const handleTouchEnd = () => { 
    if (touchDeltaX > 50) handlePrev(); 
    else if (touchDeltaX < -50) handleNext(); 
    setTouchDeltaX(0); 
  };

  return (
    <div 
      // Z-index masiv și bg-black pentru un aspect cinematic, ocupând 100% din ecran
      className="fixed inset-0 z-[999999] bg-black flex items-center justify-center overflow-hidden touch-pan-y"
      onClick={onClose} 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      {/* Imaginea afișată pe tot ecranul, cu o animație subtilă de intrare (fade-in) pentru senzația de film */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        {photo.mediaType === 'video' ? (
          <video 
            key={photo.id}
            src={photo.imageSrc} 
            controls 
            autoPlay 
            className="w-full h-full object-contain animate-in fade-in duration-700" 
            onClick={(e) => e.stopPropagation()} 
          />
        ) : (
          <img 
            key={photo.id}
            src={photo.imageSrc} 
            alt={photo.title} 
            className="w-full h-full object-contain animate-in fade-in duration-700" 
            onClick={(e) => e.stopPropagation()} 
          />
        )}
      </div>

      {/* Butonul de Exit (X) poziționat sus-dreapta, perfect vizibil */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-[1000000] p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/80 text-white transition-all hover:scale-110 border border-white/20 shadow-2xl"
      >
        <X className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Săgețile de navigare manuală (ascunse pe telefoane mici pentru un aspect curat, lăsând rularea automată să-și facă treaba) */}
      <button 
        onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[1000000] p-3 sm:p-5 rounded-full bg-black/20 hover:bg-black/60 text-white transition-all hover:scale-110 border border-white/10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); handleNext(); }} 
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[1000000] p-3 sm:p-5 rounded-full bg-black/20 hover:bg-black/60 text-white transition-all hover:scale-110 border border-white/10"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

    </div>
  );
};