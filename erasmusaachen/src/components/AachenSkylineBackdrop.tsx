/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

export const AachenSkylineBackdrop: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax effect (within 8px)
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-transform duration-700 ease-out"
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`
      }}
      aria-hidden="true"
    >
      {/* Radiant light gradient atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]/60" />

      {/* Sun glow over historic Aachen skyline */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-200/25 via-blue-200/20 to-transparent rounded-full blur-[100px]" />
      <div className="absolute top-24 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-indigo-200/20 via-sky-100/30 to-transparent rounded-full blur-[90px]" />

      {/* Atmospheric Clouds (Soft, subtle vectors) */}
      <svg className="absolute top-8 left-0 right-0 w-full h-48 opacity-30 text-white" viewBox="0 0 1440 200" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,80 C120,40 240,60 360,75 C480,90 600,45 720,60 C840,75 960,30 1080,50 C1200,70 1320,45 1440,60 L1440,0 L0,0 Z" />
      </svg>

      {/* 
        ========================================================================
        ULTRA-HD ARCHITECTURAL PANORAMA OF AACHEN (GERMANY)
        Featuring:
        1. Aachener Dom (Octagonal Palatine Chapel of Charlemagne & Gothic Choir)
        2. Aachen Rathaus (Historic Town Hall with Granusturm & Marktturm)
        3. Historic Altstadt Gabled Houses, Copper Spires, and Cobblestone Terraces
        ========================================================================
      */}
      <div className="absolute bottom-0 inset-x-0 w-full h-[520px] sm:h-[620px] lg:h-[720px] opacity-35 sm:opacity-45 mix-blend-multiply">
        <svg 
          viewBox="0 0 1920 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-bottom"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            {/* Gradients for architectural depth */}
            <linearGradient id="aachenSkyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="domCopperSpire" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0f766e" stopOpacity="0.5" />
            </linearGradient>

            <linearGradient id="domStoneFacade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#334155" stopOpacity="0.55" />
            </linearGradient>

            <linearGradient id="rathausGothic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#475569" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.5" />
            </linearGradient>

            <linearGradient id="hologramGridHaze" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background hills around Aachen (Vaalserberg & Eifel foothills) */}
          <path 
            d="M0 450 Q 240 380 480 430 T 960 410 T 1440 390 T 1920 440 L 1920 600 L 0 600 Z" 
            fill="#cbd5e1" 
            opacity="0.3" 
          />
          <path 
            d="M0 480 Q 300 420 600 460 T 1200 440 T 1800 450 L 1920 470 L 1920 600 L 0 600 Z" 
            fill="#94a3b8" 
            opacity="0.25" 
          />

          {/* Distant European rooftops and secondary spires */}
          <g opacity="0.35" fill="#64748b">
            {/* Left side church towers (St. Peter, St. Foillan) */}
            <polygon points="120,490 135,390 150,490" />
            <rect x="130" y="490" width="10" height="80" />
            <polygon points="210,480 220,340 230,480" />
            <rect x="215" y="480" width="10" height="90" />
            <polygon points="340,490 355,410 370,490" />
            
            {/* Right side spires (St. Jakob, Frankenberger Viertel) */}
            <polygon points="1560,490 1575,370 1590,490" />
            <polygon points="1720,500 1735,420 1750,500" />
            <polygon points="1840,480 1850,390 1860,480" />
          </g>

          {/* 
            --------------------------------------------------------------------
            CENTRAL ICON 1: AACHENER RATHAUS (HISTORIC TOWN HALL)
            Left-Center positioning (X: 380 - 680)
            --------------------------------------------------------------------
          */}
          <g id="aachenRathaus" opacity="0.8">
            {/* Rathaus Main Hall Block */}
            <rect x="420" y="320" width="220" height="230" fill="url(#rathausGothic)" />

            {/* Granusturm (Left Tower) */}
            <rect x="390" y="240" width="50" height="310" fill="url(#rathausGothic)" />
            <polygon points="390,240 415,130 440,240" fill="url(#domCopperSpire)" />
            <line x1="415" y1="130" x2="415" y2="105" stroke="#0d9488" strokeWidth="2" />
            {/* Windows in Granusturm */}
            <rect x="408" y="260" width="14" height="26" rx="7" fill="#ffffff" opacity="0.6" />
            <rect x="408" y="310" width="14" height="26" rx="7" fill="#ffffff" opacity="0.6" />

            {/* Marktturm (Right Tower) */}
            <rect x="620" y="240" width="50" height="310" fill="url(#rathausGothic)" />
            <polygon points="620,240 645,130 670,240" fill="url(#domCopperSpire)" />
            <line x1="645" y1="130" x2="645" y2="105" stroke="#0d9488" strokeWidth="2" />
            {/* Windows in Marktturm */}
            <rect x="638" y="260" width="14" height="26" rx="7" fill="#ffffff" opacity="0.6" />
            <rect x="638" y="310" width="14" height="26" rx="7" fill="#ffffff" opacity="0.6" />

            {/* Central Rathaus Roof & Belfry Spire */}
            <polygon points="435,320 530,230 625,320" fill="#334155" opacity="0.7" />
            <polygon points="520,230 530,160 540,230" fill="url(#domCopperSpire)" />
            <line x1="530" y1="160" x2="530" y2="140" stroke="#0d9488" strokeWidth="1.5" />

            {/* Rathaus Gothic Lancet Windows (Reichssaal arcade) */}
            <g fill="#ffffff" opacity="0.65">
              <path d="M455 350 Q465 330 475 350 L475 400 L455 400 Z" />
              <path d="M490 350 Q500 330 510 350 L510 400 L490 400 Z" />
              <path d="M525 350 Q535 330 545 350 L545 400 L525 400 Z" />
              <path d="M560 350 Q570 330 580 350 L580 400 L560 400 Z" />
              <path d="M595 350 Q605 330 615 350 L615 400 L595 400 Z" />

              {/* Lower Level Windows */}
              <rect x="455" y="430" width="20" height="35" rx="3" />
              <rect x="490" y="430" width="20" height="35" rx="3" />
              <rect x="525" y="430" width="20" height="35" rx="3" />
              <rect x="560" y="430" width="20" height="35" rx="3" />
              <rect x="595" y="430" width="20" height="35" rx="3" />
            </g>
          </g>

          {/* 
            --------------------------------------------------------------------
            CENTRAL ICON 2: AACHENER DOM (AACHEN CATHEDRAL - UNESCO MONUMENT #1)
            Right-Center positioning (X: 780 - 1240)
            --------------------------------------------------------------------
          */}
          <g id="aachenDom" opacity="0.9">
            {/* Western Gothic Tower & Spire */}
            <rect x="800" y="210" width="80" height="340" fill="url(#domStoneFacade)" />
            <polygon points="790,210 840,60 890,210" fill="url(#domCopperSpire)" />
            <line x1="840" y1="60" x2="840" y2="30" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx="840" cy="30" r="3" fill="#fbbf24" />

            {/* Western Tower Details (Tracery & Arches) */}
            <g fill="#ffffff" opacity="0.7">
              <path d="M825 240 Q840 215 855 240 L855 310 L825 310 Z" />
              <circle cx="840" cy="235" r="5" stroke="#334155" strokeWidth="1" fill="none" />
              <rect x="828" y="340" width="24" height="40" rx="4" />
            </g>

            {/* Palatine Chapel (Carolingian Octagon Dome) */}
            <polygon points="880,310 930,220 990,220 1040,310" fill="#475569" opacity="0.6" />
            <rect x="890" y="310" width="140" height="240" fill="url(#domStoneFacade)" />
            {/* Lantern on top of the Octagon */}
            <polygon points="945,220 960,170 975,220" fill="url(#domCopperSpire)" />
            <line x1="960" y1="170" x2="960" y2="150" stroke="#0d9488" strokeWidth="2" />
            <circle cx="960" cy="150" r="2.5" fill="#f59e0b" />

            {/* Carolingian Gallery Arches */}
            <g fill="#ffffff" opacity="0.7">
              <path d="M910 270 Q920 250 930 270 L930 300 L910 300 Z" />
              <path d="M940 270 Q950 250 960 270 L960 300 L940 300 Z" />
              <path d="M970 270 Q980 250 990 270 L990 300 L970 300 Z" />
              <path d="M1000 270 Q1010 250 1020 270 L1020 300 L1000 300 Z" />
            </g>

            {/* Gothic Choir Hall (Kölner Dom style Glass House / Chorhalle) */}
            <rect x="1030" y="230" width="150" height="320" fill="url(#domStoneFacade)" />
            <polygon points="1030,230 1105,140 1180,230" fill="#334155" opacity="0.75" />
            {/* Copper Ridge Crest */}
            <line x1="1105" y1="140" x2="1105" y2="120" stroke="#0d9488" strokeWidth="2" />
            <circle cx="1105" cy="120" r="2" fill="#fbbf24" />

            {/* Monumental Gothic Lancet Windows of the Glass Choir */}
            <g fill="#bae6fd" opacity="0.8">
              <path d="M1045 250 Q1055 235 1065 250 L1065 420 L1045 420 Z" />
              <path d="M1075 250 Q1085 235 1095 250 L1095 420 L1075 420 Z" />
              <path d="M1105 250 Q1115 235 1125 250 L1125 420 L1105 420 Z" />
              <path d="M1135 250 Q1145 235 1155 250 L1155 420 L1135 420 Z" />
            </g>

            {/* Flying Buttresses (Arce Butante Gotice) */}
            <path d="M1030 280 Q1010 320 1000 370" stroke="#475569" strokeWidth="4" fill="none" opacity="0.6" />
            <path d="M1180 280 Q1200 320 1210 370" stroke="#475569" strokeWidth="4" fill="none" opacity="0.6" />
            <rect x="1195" y="360" width="25" height="190" fill="url(#domStoneFacade)" />
            <polygon points="1195,360 1207,310 1220,360" fill="url(#domCopperSpire)" />
          </g>

          {/* 
            --------------------------------------------------------------------
            ALTSTADT GABLE HOUSES & COBBLESTONE TERRACES (Surrounding Streets)
            --------------------------------------------------------------------
          */}
          <g fill="#475569" opacity="0.45">
            {/* Left Altstadt Rows (Markt, Pontstraße) */}
            <polygon points="40,490 80,440 120,490" />
            <rect x="40" y="490" width="80" height="110" />
            <polygon points="120,500 165,430 210,500" />
            <rect x="120" y="500" width="90" height="100" />
            <polygon points="240,480 285,410 330,480" />
            <rect x="240" y="480" width="90" height="120" />
            <polygon points="330,510 365,450 400,510" />
            <rect x="330" y="510" width="70" height="90" />

            {/* Connecting Altstadt between Rathaus and Dom (Katschhof) */}
            <polygon points="680,520 720,460 760,520" />
            <rect x="680" y="520" width="80" height="80" />
            <polygon points="750,510 780,440 810,510" />
            <rect x="750" y="510" width="60" height="90" />

            {/* Right Altstadt Rows (Münsterplatz, Schmiedstraße) */}
            <polygon points="1220,500 1265,430 1310,500" />
            <rect x="1220" y="500" width="90" height="100" />
            <polygon points="1320,480 1370,410 1420,480" />
            <rect x="1320" y="480" width="100" height="120" />
            <polygon points="1430,510 1475,440 1520,510" />
            <rect x="1430" y="510" width="90" height="90" />
            <polygon points="1600,490 1645,420 1690,490" />
            <rect x="1600" y="490" width="90" height="110" />
          </g>

          {/* Historic Street Cobblestone & Paved Base Horizon */}
          <rect x="0" y="550" width="1920" height="50" fill="#64748b" opacity="0.3" />
          <line x1="0" y1="550" x2="1920" y2="550" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />

          {/* Upward Hologram Gradient Mask to blend cleanly with light content */}
          <rect x="0" y="250" width="1920" height="350" fill="url(#hologramGridHaze)" />
        </svg>
      </div>

      {/* Hologram Light Grid Lines (subtle isometric perspective) */}
      <div 
        className="absolute inset-x-0 bottom-0 h-96 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37,99,235,0.2) 1px, transparent 1px),
            linear-gradient(to top, rgba(37,99,235,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to top, black 20%, transparent 90%)'
        }}
      />

      {/* Floating Holographic Micro-Sparkles */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-blue-400/40 animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-indigo-400/35 animate-pulse" />
      <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-amber-400/30 animate-bounce" />
    </div>
  );
};
