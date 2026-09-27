import React, { useState } from 'react';
import { ArrowRight, School, MapPin, Calendar, Sparkles, Compass } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const pillars = [
    { label: "Bruxelles & Aachen", desc: "Zilele 1–3" },
    { label: "Dreiländereck & Köln", desc: "Zilele 4–5" },
    { label: "Certificare Europass", desc: "Ziua 6" }
  ];

  return (
    <section id="acasa" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-radial-hero px-4 sm:px-6 lg:px-8">
      
      {/* 
        ========================================================================
        ILUMINARE DE STUDIO 3D & PERSPECTIVĂ VOLUMETRICĂ
        ========================================================================
      */}
      {/* Lumina de contur azurie din fundal */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* 
        ========================================================================
        ELEMENTE GEOMETRICE 3D CU ILUMINARE REALISTĂ (SPECULAR + UMBRE PROIECTATE)
        ========================================================================
      */}

      {/* 1. Poliedru 3D Icosaedric plutitor stânga-sus (Luminat direcțional cu reflexii metalice) */}
      <div className="absolute top-12 left-4 sm:top-16 sm:left-14 w-36 h-36 sm:w-48 sm:h-48 pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] z-0">
        <svg viewBox="0 0 160 160" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <defs>
            <linearGradient id="polyTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="polySide1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="polySide2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="polyBottom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <polygon points="80,10 135,45 115,115 45,115 25,45" fill="url(#polyBottom)" />
          <polygon points="80,10 135,45 80,75" fill="url(#polyTop)" stroke="#93c5fd" strokeWidth="0.5" />
          <polygon points="135,45 115,115 80,75" fill="url(#polySide1)" stroke="#60a5fa" strokeWidth="0.5" />
          <polygon points="115,115 45,115 80,75" fill="url(#polySide2)" stroke="#3b82f6" strokeWidth="0.5" />
          <polygon points="45,115 25,45 80,75" fill="url(#polySide1)" stroke="#60a5fa" strokeWidth="0.5" />
          <polygon points="25,45 80,10 80,75" fill="url(#polyTop)" stroke="#93c5fd" strokeWidth="0.5" />
          {/* Reflexie punctiformă la vertex */}
          <circle cx="80" cy="75" r="3" fill="#ffffff" filter="drop-shadow(0 0 4px #38bdf8)" />
        </svg>
      </div>

      {/* 2. Dodecaedru / Cristal 3D plutitor dreapta-sus */}
      <div className="absolute top-20 right-6 sm:top-28 sm:right-20 w-28 h-28 sm:w-36 sm:h-36 pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] z-0">
        <svg viewBox="0 0 140 140" className="w-full h-full animate-[pulse_7s_ease-in-out_infinite]">
          <defs>
            <linearGradient id="dodecFace1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="dodecFace2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="dodecFace3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <polygon points="70,10 120,40 120,100 70,130 20,100 20,40" fill="#0f172a" />
          <polygon points="70,10 120,40 70,70" fill="url(#dodecFace1)" stroke="#cbd5e1" strokeWidth="0.6" />
          <polygon points="120,40 120,100 70,70" fill="url(#dodecFace2)" stroke="#94a3b8" strokeWidth="0.6" />
          <polygon points="120,100 70,130 70,70" fill="url(#dodecFace3)" stroke="#64748b" strokeWidth="0.6" />
          <polygon points="70,130 20,100 70,70" fill="url(#dodecFace2)" stroke="#94a3b8" strokeWidth="0.6" />
          <polygon points="20,100 20,40 70,70" fill="url(#dodecFace1)" stroke="#cbd5e1" strokeWidth="0.6" />
          <circle cx="70" cy="70" r="2.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* 3. Con 3D cu bază eliptică și umbră de contact pe podea dreapta-jos */}
      <div className="absolute bottom-6 right-8 sm:bottom-12 sm:right-28 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] z-0">
        <svg viewBox="0 0 130 130" className="w-full h-full">
          <defs>
            <linearGradient id="coneLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="60%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="coneRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="60%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          {/* Umbra conului pe podea */}
          <ellipse cx="65" cy="115" rx="46" ry="10" fill="#030712" opacity="0.8" />
          {/* Corpul conului */}
          <polygon points="65,15 110,105 65,95" fill="url(#coneRight)" />
          <polygon points="65,15 20,105 65,95" fill="url(#coneLeft)" />
          {/* Baza eliptică rotunjită */}
          <path d="M 20 105 Q 65 120 110 105 Q 65 92 20 105" fill="#475569" opacity="0.6" />
          {/* Punct de lumină în vârf */}
          <circle cx="65" cy="15" r="2" fill="#ffffff" filter="drop-shadow(0 0 3px #60a5fa)" />
        </svg>
      </div>

      {/* 
        ========================================================================
        PANOU PRINCIPAL FLOATING CARD (High-End Dark Frosted Glass)
        ========================================================================
      */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="relative rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 overflow-hidden border border-slate-800/90 bg-slate-900/70 backdrop-blur-2xl shadow-[0_30px_90px_-15px_rgba(0,0,0,0.85)] card-specular-edge">
          
          {/* Podea Studio (Reflexie plan de adâncime cu linie de orizont) */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent border-t border-slate-800/60 pointer-events-none" />

          {/* Watermark Tipografic în Fundal ("3D" volumetric) */}
          <div className="absolute bottom-2 right-6 font-display font-extrabold text-[120px] sm:text-[180px] lg:text-[230px] text-white/[0.03] select-none pointer-events-none tracking-tighter leading-none">
            3D
          </div>

          {/* Bara Superioară din interiorul cardului */}
          <div className="flex items-center justify-between pb-6 mb-4 border-b border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <span className="font-display font-extrabold text-xl tracking-tight text-white">Qa</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium">Mobilitate Oficială Erasmus+ KA122-SCH</span>
            </div>

            <div className="hidden sm:flex items-center gap-5 text-xs text-slate-400">
              <a href="#misiune" className="hover:text-white transition-colors">Think Green</a>
              <a href="#jurnal" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">Jurnal 6 Zile</a>
              <a href="#job-shadowing" className="hover:text-white transition-colors">Job Shadowing</a>
              <a href="#galerie" className="hover:text-white transition-colors">Galerie Foto</a>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <School className="w-4 h-4 text-blue-400" />
              <span className="text-[11px] font-medium hidden md:inline">Geschwister-Scholl-Gymnasium Aachen</span>
            </div>
          </div>

          {/* Grilă Centrală (Stânga - Sferă 3D - Dreapta) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px] relative z-10">
            
            {/* ================================================================
                STÂNGA: Titluri & Paginare
                ================================================================ */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Overline & Linie Fină */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xs sm:text-sm font-medium text-blue-400 tracking-wide">
                    Mobilitate Erasmus+ · <strong className="text-white font-semibold">17 – 23 Mai 2026</strong>
                  </span>
                  <div className="w-8 h-px bg-blue-500/50" />
                </div>

                {/* Titlu Principal Alb, Arhitectural, de Impact */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.06] mb-4">
                  Think Green <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                    Learn Digital
                  </span> <br />
                  Act European
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
                  Aachen, Germania. O experiență educațională și de job shadowing trăită de cei 14 elevi și 4 profesori de la <strong className="font-medium text-white">Liceul Teoretic „Solomon Haliță”</strong> din Sângeorz-Băi.
                </p>
              </div>

              {/* Indicatori de Paginare & Mică Sferă Iluminată */}
              <div className="flex items-center gap-3 pt-4">
                <div className="flex items-center gap-2">
                  {pillars.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeTab === idx
                          ? 'w-7 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Vezi etapa ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Mică sferă perlată cu reflexie */}
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-300 to-white shadow-[0_0_8px_rgba(56,189,248,0.6)] ml-2" />
                
                <span className="text-xs font-medium text-slate-300">
                  {pillars[activeTab].label}
                </span>
              </div>
            </div>

            {/* ================================================================
                CENTRU: SFERA 3D CU IRIS SPIRALAT (HIGH-TECH 3D CENTERPIECE)
                ================================================================ */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-6 lg:py-0">
              <div 
                className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Contact Shadow Volumetric pe podea */}
                <div className="absolute -bottom-8 w-56 h-12 bg-black/90 rounded-full blur-xl transform scale-y-50" />
                {/* Rim light albastru în spatele sferei */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-colors duration-700" />

                {/* Sfera 3D SVG cu gradienți de adâncime și reflexii de studio */}
                <svg
                  viewBox="0 0 320 320"
                  className={`w-full h-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out ${
                    isHovered ? 'scale-105 rotate-3' : 'scale-100 rotate-0'
                  }`}
                >
                  <defs>
                    {/* Gradient sferă exterioară (Cobalt Blue profund cu rim light) */}
                    <radialGradient id="sphereBlue3D" cx="32%" cy="28%" r="72%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="25%" stopColor="#2563eb" />
                      <stop offset="60%" stopColor="#1d4ed8" />
                      <stop offset="85%" stopColor="#0f2b82" />
                      <stop offset="100%" stopColor="#061238" />
                    </radialGradient>

                    {/* Gradient interior cavitate iris */}
                    <radialGradient id="irisCavityDark" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1e3a8a" />
                      <stop offset="40%" stopColor="#0f172a" />
                      <stop offset="85%" stopColor="#020617" />
                      <stop offset="100%" stopColor="#000000" />
                    </radialGradient>

                    {/* Gradient lamele spiralate (Argintiu-Cyan & Electric Blue) */}
                    <linearGradient id="finGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#bae6fd" />
                      <stop offset="80%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>

                    <linearGradient id="finGradDark" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#93c5fd" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                  </defs>

                  {/* Sfera exterioară albastră */}
                  <circle cx="160" cy="160" r="138" fill="url(#sphereBlue3D)" stroke="#38bdf8" strokeWidth="0.8" opacity="0.98" />

                  {/* Cavitatea interioară circulară de adâncime */}
                  <ellipse cx="168" cy="158" rx="100" ry="100" fill="url(#irisCavityDark)" stroke="#1e40af" strokeWidth="1" />

                  {/* Lamelele spiralate ale irisului (Turbina geometrică 3D) */}
                  <g className="transition-transform duration-1000 ease-out" transform="translate(168, 158)">
                    {[...Array(40)].map((_, i) => {
                      const angle = (i * 9 * Math.PI) / 180;
                      const length = 92;
                      const x1 = Math.cos(angle) * 34;
                      const y1 = Math.sin(angle) * 34;
                      const x2 = Math.cos(angle + 0.58) * length;
                      const y2 = Math.sin(angle + 0.58) * length;
                      
                      return (
                        <path
                          key={i}
                          d={`M ${x1} ${y1} Q ${(x1 + x2) / 2 + 8} ${(y1 + y2) / 2 - 4} ${x2} ${y2}`}
                          stroke={i % 2 === 0 ? "url(#finGradLight)" : "url(#finGradDark)"}
                          strokeWidth={i % 3 === 0 ? "2" : "1.2"}
                          fill="none"
                          opacity={0.92}
                        />
                      );
                    })}

                    {/* Miezul central profund cu stea simetrică */}
                    <polygon
                      points="0,-22 14,-7 22,8 7,22 -10,18 -22,3 -16,-14"
                      fill="#020617"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                    />
                    <circle cx="0" cy="0" r="5" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)" />
                  </g>

                  {/* Reflexie de lumină sferică stânga-sus (Gloss specular) */}
                  <ellipse cx="108" cy="88" rx="38" ry="22" fill="#ffffff" opacity="0.32" transform="rotate(-30 108 88)" />
                  <ellipse cx="96" cy="80" rx="16" ry="8" fill="#ffffff" opacity="0.6" transform="rotate(-30 96 80)" />
                </svg>
              </div>
            </div>

            {/* ================================================================
                DREAPTA: Avataruri, Paragraf & Acțiune Curată
                ================================================================ */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                
                {/* 3 Avataruri Rotunde Suprapuse */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-800 bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      14
                    </div>
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-800 bg-indigo-700 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      04
                    </div>
                    <div className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-800 bg-slate-800 flex items-center justify-center text-xs font-bold text-blue-300 shadow-lg border border-slate-700">
                      RO
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      14 Elevi & 4 Profesori
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Delegația din Sângeorz-Băi
                    </span>
                  </div>
                </div>

                {/* Paragraf Descriptiv în Limba Română */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  14 elevi și 4 profesori de la <strong className="font-semibold text-white">Liceul Teoretic „Solomon Haliță”</strong> într-o mobilitate de învățare și job shadowing la <strong className="font-semibold text-white">Geschwister-Scholl-Gymnasium</strong> din Aachen, Germania.
                </p>

                {/* Buton de Acțiune Primară */}
                <div className="pt-2">
                  <a
                    href="#jurnal"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-900/40 hover:scale-[1.02]"
                  >
                    <span>Explorează Jurnalul (Zilele 1–6)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Repere Rapide (Zero-pill typography) */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>3 Țări Vizitate</span>
                <span aria-hidden="true">·</span>
                <span>Geschwister-Scholl</span>
                <span aria-hidden="true">·</span>
                <span>6 Zile Intensive</span>
              </div>
            </div>

          </div>

          {/* Subsol Card */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:row items-center justify-between gap-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-4 font-mono font-medium">
              <span className="text-slate-300">RO</span>
              <span>·</span>
              <span className="text-slate-300">BE</span>
              <span>·</span>
              <span className="text-slate-300">DE</span>
              <span>·</span>
              <span className="text-slate-300">NL</span>
            </div>

            <div className="text-slate-400 text-center sm:text-right font-light">
              Liceul Teoretic „Solomon Haliță” · Sângeorz-Băi & Geschwister-Scholl-Gymnasium Aachen
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
