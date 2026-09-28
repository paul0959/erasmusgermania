/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { DayPhoto, ALL_PHOTOS } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';

interface PhotoLightboxModalProps {
  photo: DayPhoto | null;
  onClose: () => void;
  onSelectPhoto: (photo: DayPhoto) => void;
}

/**
 * MODAL FOTOGRAFIE MARE FĂRĂ TEXT - OPTIMIZAT PENTRU MOBIL & DESKTOP
 * Conform cerinței exprese:
 * 1. "in galeria foto, sa se deschida doar pozele, la dimensiuni mari, fara text."
 * 2. Suport complet gesturi tactile de glisare (swipe) pe telefoane
 */
export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photo,
  onClose,
  onSelectPhoto,
}) => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchDeltaX, setTouchDeltaX] = useState(0);

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
    const prevIndex = (currentIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length;
    onSelectPhoto(ALL_PHOTOS[prevIndex]);
    audioSystem.playSwipeSound();
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % ALL_PHOTOS.length;
    onSelectPhoto(ALL_PHOTOS[nextIndex]);
    audioSystem.playSwipeSound();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchDeltaX(e.touches[0].clientX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (touchDeltaX > 40) {
      handlePrev();
    } else if (touchDeltaX < -40) {
      handleNext();
    }
    setTouchDeltaX(0);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/94 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-hidden animate-in fade-in duration-200 select-none touch-pan-y"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Buton Închidere discret în colțul din dreapta-sus */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-7 sm:right-7 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 active:scale-95 border border-white/20 shadow-xl"
        aria-label="Închide fotografia"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Săgeată Navigare Stânga */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 active:scale-95 border border-white/20 shadow-xl"
        aria-label="Fotografia anterioară"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Săgeată Navigare Dreapta */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 active:scale-95 border border-white/20 shadow-xl"
        aria-label="Fotografia următoare"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* 
        ========================================================================
        DOAR POZA LA DIMENSIUNI MARI, FĂRĂ NICIUN TEXT
        ========================================================================
      */}
      <div 
        className="relative max-w-6xl max-h-[92vh] w-full h-full flex items-center justify-center p-1 sm:p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.imageSrc}
          alt={photo.title}
          className="max-w-full max-h-[90vh] object-contain rounded-xl sm:rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] border border-white/10"
        />
      </div>
    </div>
  );
};
