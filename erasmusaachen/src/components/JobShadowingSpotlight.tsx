/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Variable, 
  Atom, 
  Users2, 
  Sliders, 
  GraduationCap,
  Sparkles,
  School
} from 'lucide-react';
import { PEDAGOGICAL_PILLARS } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';

export const JobShadowingSpotlight: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('interactive-tech');
  
  // Stare Simulator Matematic Interactiv
  const [paramA, setParamA] = useState<number>(1);
  const [paramH, setParamH] = useState<number>(0);
  const [paramK, setParamK] = useState<number>(0);

  const activePillar = PEDAGOGICAL_PILLARS.find((p) => p.id === selectedPillarId) || PEDAGOGICAL_PILLARS[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Variable':
        return Variable;
      case 'Atom':
        return Atom;
      case 'Users2':
        return Users2;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="shadowing" className="py-14 sm:py-18 relative bg-[#fbf8f2] text-slate-900 border-t border-b border-[#dfd5c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antet Secțiune */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4d5b43] mb-3">
            <span className="px-3 py-1 rounded-full bg-[#f5ebdc] border border-[#d6c7b0] flex items-center gap-1.5 shadow-xs">
              <School className="w-3.5 h-3.5 text-[#758467]" />
              <span>Geschwister-Scholl-Gymnasium Aachen</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-[#172738] font-bold">Didactică & Inovație STEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#172738] leading-tight">
            Job Shadowing: Matematică, Fizică & Tehnologii Interactive
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Această secțiune reflectă în profunzime activitatea de <strong>Job Shadowing</strong> desfășurată de profesorii de științe de la Liceul Tehnologic „Solomon Haliță”: <strong>Prof. Frunză Paul-Adrian</strong> (Matematică & Informatică) și <strong>Prof. Petrașcu Traian</strong> (Fizică), care au asistat direct la ore în perioada <strong>19 – 23 Mai 2026</strong>.
          </p>
        </div>

        {/* 3 Cartonașe de Metodă Didactică în Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {PEDAGOGICAL_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            const isSelected = pillar.id === selectedPillarId;

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  setSelectedPillarId(pillar.id);
                  audioSystem.playSelectSound();
                }}
                className={`rounded-3xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white ring-2 ring-blue-600 shadow-xl scale-[1.02] border-blue-400'
                    : 'bg-white/80 border border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs transition-transform ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-blue-500/25 scale-105'
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      Metoda 0{PEDAGOGICAL_PILLARS.indexOf(pillar) + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 mb-1 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 mb-1">
                    {pillar.observer}
                  </p>
                  <p className="text-xs text-slate-500 mb-3 font-medium">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px] font-mono">
                    {pillar.techStack[0]}
                  </span>
                  <span className={`font-bold ${
                    isSelected ? 'text-blue-600' : 'text-slate-500'
                  }`}>
                    {isSelected ? '✓ Selectat' : 'Deschide detalii →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panou Detalii & Simulator Didactic */}
        <div className="rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stânga: Raport și transfer */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Raport Oficial Job Shadowing
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-500 font-medium">
                    {activePillar.observer}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  {activePillar.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {activePillar.subtitle}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Puncte Didactice Cheie Observate:
                </span>
                {activePillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  Plan de Transfer Didactic la Liceul „Solomon Haliță”:
                </span>
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                  {activePillar.transferToRomania}
                </p>
              </div>
            </div>

            {/* Dreapta: Simulare Ecran Interactiv */}
            <div className="lg:col-span-6 rounded-2xl bg-slate-900 text-white p-6 border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Simulare Ecran Interactiv Smart Board
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                  Didactică Aachen
                </span>
              </div>

              {/* Grafic Parabolă */}
              <div className="relative h-56 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-cyan-500/40" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-cyan-500/40" />

                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                  <path
                    d={`M 20 ${112 - (paramA * Math.pow(-4 - paramH, 2) + paramK * 10)} Q 150 ${112 - paramK * 15} 280 ${112 - (paramA * Math.pow(4 - paramH, 2) + paramK * 10)}`}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="3"
                    filter="drop-shadow(0 0 8px #22d3ee)"
                  />
                  <circle
                    cx={150 + paramH * 15}
                    cy={112 - paramK * 15}
                    r="5"
                    fill="#38bdf8"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>

                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/80 text-xs font-mono text-cyan-300 border border-cyan-500/30">
                  f(x) = {paramA} · (x - {paramH})² + {paramK}
                </div>
              </div>

              {/* Glisoare */}
              <div className="mt-5 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Curbură (Parametru a):</span>
                    <span className="font-mono text-cyan-400 font-bold">{paramA}</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.1"
                    value={paramA}
                    onChange={(e) => setParamA(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Translație Orizontală (Parametru h):</span>
                    <span className="font-mono text-cyan-400 font-bold">{paramH}</span>
                  </div>
                  <input
                    type="range"
                    min="-4"
                    max="4"
                    step="0.5"
                    value={paramH}
                    onChange={(e) => setParamH(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Translație Verticală (Parametru k):</span>
                    <span className="font-mono text-cyan-400 font-bold">{paramK}</span>
                  </div>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={paramK}
                    onChange={(e) => setParamK(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                💡 <strong>Observație Job Shadowing:</strong> Elevii manipulează interactiv funcția pe ecran, după care demonstrează pas cu pas soluția algebrică pe caiet.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
