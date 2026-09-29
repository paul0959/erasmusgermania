/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Expand, MapPin } from 'lucide-react';
import type { DayPhoto } from '../data/projectData';

interface PhotoCardViewerProps {
  photo: DayPhoto;
  onClick?: () => void;
  showCaption?: boolean;
  aspectRatio?: 'video' | 'square' | 'portrait';
  className?: string;
}

export const PhotoCardViewer: React.FC<PhotoCardViewerProps> = ({
  photo,
  onClick,
  showCaption = true,
  aspectRatio = 'video',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const aspectClasses = {
    video: 'aspect-[16/10]',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]'
  }[aspectRatio];

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-slate-200/90 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.18)] hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <div className={`relative w-full ${aspectClasses} overflow-hidden bg-slate-100`}>
        {photo.imageSrc && !imageError ? (
          photo.mediaType === 'video' ? (
            <video
              src={photo.imageSrc}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <img
              src={photo.imageSrc}
              alt={photo.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          )
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-xs text-slate-400">Media indisponibilă</div>
        )}

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)' }} />

        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
            <Expand className="w-3.5 h-3.5 text-blue-600" />
            <span>Deschide</span>
          </div>
        </div>
      </div>
    </div>
  );
};