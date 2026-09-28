/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Camera, Expand, Sparkles, Building2, Trees, GraduationCap, MapPin } from 'lucide-react';
import { DayPhoto } from '../data/projectData';

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

  // Fallback vector illustrations for each theme
  const renderFallbackIllustration = () => {
    switch (photo.fallbackType) {
      case 'atomium':
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)]" />
            <svg viewBox="0 0 160 160" className="w-28 h-28 text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              {/* Atomium 9 spheres & connecting tubes */}
              <line x1="80" y1="20" x2="80" y2="140" stroke="#38bdf8" strokeWidth="4" />
              <line x1="20" y1="80" x2="140" y2="80" stroke="#38bdf8" strokeWidth="4" />
              <line x1="38" y1="38" x2="122" y2="122" stroke="#38bdf8" strokeWidth="4" />
              <line x1="122" y1="38" x2="38" y2="122" stroke="#38bdf8" strokeWidth="4" />
              {/* Spheres */}
              <circle cx="80" cy="80" r="16" fill="url(#metalCenter)" stroke="#e0f2fe" strokeWidth="2" />
              <circle cx="80" cy="20" r="12" fill="#7dd3fc" />
              <circle cx="80" cy="140" r="12" fill="#7dd3fc" />
              <circle cx="20" cy="80" r="12" fill="#7dd3fc" />
              <circle cx="140" cy="80" r="12" fill="#7dd3fc" />
              <circle cx="38" cy="38" r="11" fill="#bae6fd" />
              <circle cx="122" cy="122" r="11" fill="#bae6fd" />
              <circle cx="122" cy="38" r="11" fill="#bae6fd" />
              <circle cx="38" cy="122" r="11" fill="#bae6fd" />
              <defs>
                <radialGradient id="metalCenter" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0369a1" />
                </radialGradient>
              </defs>
            </svg>
            <span className="absolute bottom-3 left-4 text-[11px] font-mono text-sky-200/80 tracking-wider">
              BRUXELLES · ATOMIUM STEM
            </span>
          </div>
        );

      case 'dom':
      case 'cathedral':
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-950 via-slate-900 to-stone-900 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_70%)]" />
            <svg viewBox="0 0 160 160" className="w-32 h-32 text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]">
              {/* Aachen Dom Gothic & Carolingian Choir */}
              <polygon points="80,10 95,50 65,50" fill="#f59e0b" />
              <rect x="68" y="50" width="24" height="90" fill="#78350f" stroke="#d97706" strokeWidth="1" />
              <polygon points="30,70 50,40 70,70" fill="#b45309" />
              <rect x="35" y="70" width="30" height="70" fill="#451a03" />
              <polygon points="90,70 110,40 130,70" fill="#b45309" />
              <rect x="95" y="70" width="30" height="70" fill="#451a03" />
              {/* Rosette & Lancet Windows */}
              <circle cx="80" cy="75" r="8" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
              <path d="M74 100 Q80 90 86 100 L86 125 L74 125 Z" fill="#fef3c7" opacity="0.8" />
            </svg>
            <span className="absolute bottom-3 left-4 text-[11px] font-mono text-amber-200/80 tracking-wider">
              AACHEN · DOMUL UNESCO
            </span>
          </div>
        );

      case 'classroom':
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2),transparent_70%)]" />
            <svg viewBox="0 0 180 120" className="w-36 h-28 text-cyan-400">
              {/* Interactive Smart Display Board */}
              <rect x="20" y="15" width="140" height="80" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              {/* Math Equation & Graph */}
              <path d="M 35 65 Q 65 30 95 65 T 145 65" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="3 3" />
              <text x="35" y="42" fill="#f8fafc" fontSize="11" fontFamily="monospace">x + 2y = 12</text>
              <text x="35" y="55" fill="#38bdf8" fontSize="10" fontFamily="monospace">x = 12 - 2y</text>
              {/* Interactive touch indicator */}
              <circle cx="95" cy="65" r="4" fill="#f43f5e" />
              <circle cx="95" cy="65" r="8" stroke="#f43f5e" strokeWidth="1" fill="none" />
              {/* Stand */}
              <line x1="90" y1="95" x2="90" y2="110" stroke="#64748b" strokeWidth="3" />
              <line x1="60" y1="110" x2="120" y2="110" stroke="#64748b" strokeWidth="3" />
            </svg>
            <span className="absolute bottom-3 left-4 text-[11px] font-mono text-cyan-200/80 tracking-wider">
              GESCHWISTER-SCHOLL · STEM
            </span>
          </div>
        );

      case 'cologne':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-teal-950 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.18),transparent_70%)]" />
            <svg viewBox="0 0 160 160" className="w-32 h-32 text-teal-300">
              {/* Twin Spires of Kölner Dom & Cable Car */}
              <polygon points="50,15 65,70 35,70" fill="#2dd4bf" />
              <rect x="40" y="70" width="20" height="70" fill="#0f766e" />
              <polygon points="90,15 105,70 75,70" fill="#2dd4bf" />
              <rect x="80" y="70" width="20" height="70" fill="#0f766e" />
              {/* Cable Car Cable */}
              <line x1="10" y1="30" x2="150" y2="60" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="110" y="52" width="16" height="12" rx="3" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
            </svg>
            <span className="absolute bottom-3 left-4 text-[11px] font-mono text-teal-200/80 tracking-wider">
              KÖLN · CATEDRALĂ & RIN
            </span>
          </div>
        );

      case 'nature':
      case 'green':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.2),transparent_70%)]" />
            <svg viewBox="0 0 160 140" className="w-32 h-28 text-emerald-400">
              {/* Dreiländereck Monolith & Forest Trees */}
              <polygon points="80,20 90,110 70,110" fill="#e2e8f0" stroke="#34d399" strokeWidth="1.5" />
              {/* 3 flags/country points */}
              <circle cx="80" cy="20" r="3.5" fill="#f59e0b" />
              {/* Pine Trees */}
              <polygon points="35,60 45,95 25,95" fill="#059669" />
              <polygon points="125,50 138,95 112,95" fill="#047857" />
              <path d="M 10 110 Q 80 100 150 110" stroke="#10b981" strokeWidth="3" fill="none" />
            </svg>
            <span className="absolute bottom-3 left-4 text-[11px] font-mono text-emerald-200/80 tracking-wider">
              DREILÄNDERECK · DE · BE · NL
            </span>
          </div>
        );

      case 'celebration':
      case 'gelateria':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_70%)]" />
            <svg viewBox="0 0 160 140" className="w-32 h-28 text-purple-300">
              {/* Europass Certificate / Ribbon */}
              <rect x="40" y="25" width="80" height="90" rx="4" fill="#ffffff" opacity="0.9" />
              <line x1="50" y1="45" x2="110" y2="45" stroke="#4f46e5" strokeWidth="3" />
              <line x1="50" y1="60" x2="100" y2="60" stroke="#94a3b8" strokeWidth="2" />
              <line x1="50" y1="72" x2="95" y2="72" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="95" cy="95" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
              {/* Stars of Europe */}
              <polygon points="95,88 97,93 102,93 98,96 100,101 95,98 90,101 92,96 88,93 93,93" fill="#ffffff" />
            </svg>
            <span className="absolute bottom-3 left-4 text-[11px] font-mono text-purple-200/80 tracking-wider">
              CERTIFICARE · EUROPASS
            </span>
          </div>
        );
    }
  };

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
      {/* Visual Frame */}
      <div className={`relative w-full ${aspectClasses} overflow-hidden bg-slate-100`}>
        {photo.imageSrc && !imageError ? (
          <img
            src={photo.imageSrc}
            alt={photo.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          renderFallbackIllustration()
        )}

        {/* Holographic light shimmer on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)'
          }}
        />

        {/* Hover zoom overlay */}
        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
            <Expand className="w-3.5 h-3.5 text-blue-600" />
            <span>Mărește Fotografia</span>
          </div>
        </div>

        {/* Day badge & category indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm border border-white/80">
            Ziua {photo.dayNumber}
          </span>
        </div>
      </div>

      {/* Caption Content */}
      {showCaption && (
        <div className="p-4 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="truncate flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-500 shrink-0" />
                <span className="truncate">{photo.location}</span>
              </span>
              <span className="font-mono text-[10px] text-slate-400 shrink-0">{photo.cameraMeta.split('·')[1] || ''}</span>
            </div>
            <h4 className="font-display font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-blue-600 transition-colors">
              {photo.title}
            </h4>
            <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
              {photo.caption}
            </p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-end text-[11px] text-slate-500">
            <span className="text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
              Deschide →
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
