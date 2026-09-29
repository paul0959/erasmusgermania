/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Variable, Atom, Users, Sliders, GraduationCap, Sparkles, School } from 'lucide-react';
import { PEDAGOGICAL_PILLARS } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';

export const JobShadowingSpotlight: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('interactive-tech');
  const [paramA, setParamA] = useState<number>(1);
  const [paramH, setParamH] = useState<number>(0);
  const [paramK, setParamK] = useState<number>(0);

  const activePillar = PEDAGOGICAL_PILLARS.find((p) => p.id === selectedPillarId) || PEDAGOGICAL_PILLARS[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Variable': return Variable;
      case 'Atom': return Atom;
      case 'Users2': return Users;
      default: return Sparkles;
    }
  };

  return (
    <section id="shadowing" className="py-10 sm:py-16 relative bg-white text-slate-900 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5 sm:mb-3">
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 flex items-center gap-1.5 shadow-sm">
              <School className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Geschwister-Scholl-Gymnasium Aachen</span>
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-slate-900 font-bold">Didactică & Inovație STEM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight">
            Job Shadowing: Matematică, Fizică & Tehnologii Interactive
          </h2>
          <p className="text-slate-600 mt-2 sm:mt-4 text-xs sm:text-base leading-relaxed">
            Această secțiune reflectă în profunzime activitatea de <strong>Job Shadowing</strong> desfășurată de profesorii de științe de la Liceul Teoretic „Solomon Haliță”: <strong>Prof. Frunză Paul-Adrian</strong> (Matematică & Informatică) și <strong>Prof. Petrașcu Traian</strong> (Fizică), care au asistat direct la ore în perioada <strong>19 – 23 Mai 2026</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
          {PEDAGOGICAL_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            const isSelected = pillar.id === selectedPillarId;

            return (
              <div key={pillar.id} onClick={() => { setSelectedPillarId(pillar.id); audioSystem.playSelectSound(); }}
                className={`rounded-3xl p-5 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between active:scale-95 ${
                  isSelected ? 'bg-white ring-2 ring-blue-600 shadow-xl scale-[1.01] border-transparent' : 'bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md'
                }`}>
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-sm transition-transform ${
                      isSelected ? 'bg-blue-600 text-white shadow-blue-500/25 scale-105' : 'bg-white text-blue-600 border border-slate-200'
                    }`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600">
                      Metoda 0{PEDAGOGICAL_PILLARS.indexOf(pillar) + 1}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-display font-bold text-slate-900 mb-1 leading-snug">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-1">{pillar.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.summary}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>{isSelected ? '✓ Metodă Selectată' : 'Atingeți pentru detalii'}</span>
                  <span className="font-mono text-slate-400">Aachen 2026</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-slate-50 p-5 sm:p-8 lg:p-10 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Focus Metodic & Asistență la Clasă</span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">{activePillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{activePillar.summary}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5 sm:space-y-3">
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider block">Puncte Didactice Cheie Observate:</span>
                {activePillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] sm:text-xs font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 border border-blue-100 space-y-2">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />Plan de Transfer Didactic la Liceul „Solomon Haliță”:</span>
                <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">{activePillar.transferToRomania}</p>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-slate-900 text-white p-4 sm:p-6 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2"><Sliders className="w-4 h-4 text-blue-400 shrink-0" /><span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider">Simulare Smart Board</span></div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono border border-blue-500/30">Didactică Aachen</span>
              </div>
              <div className="relative h-48 sm:h-56 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:24px_24px] opacity-40" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-blue-500/40" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-blue-500/40" />
                <svg viewBox="0 0 300 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                  <path d={`M 20 ${100 - (paramA * Math.pow(-4 - paramH, 2) + paramK * 10)} Q 150 ${100 - paramK * 15} 280 ${100 - (paramA * Math.pow(4 - paramH, 2) + paramK * 10)}`} fill="none" stroke="#3b82f6" strokeWidth="3" filter="drop-shadow(0 0 6px #3b82f6)" />
                  <circle cx={150 + paramH * 15} cy={100 - paramK * 15} r="5" fill="#60a5fa" stroke="#ffffff" strokeWidth="2" />
                </svg>
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2.5 sm:px-3 py-1 rounded-lg bg-black/80 text-[11px] sm:text-xs font-mono text-blue-300 border border-blue-500/30">f(x) = {paramA} · (x - {paramH})² + {paramK}</div>
              </div>
              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-xs">
                <div><div className="flex justify-between text-slate-300 mb-1"><span>Curbură (Parametru a):</span><span className="font-mono text-blue-400 font-bold">{paramA}</span></div><input type="range" min="0.2" max="2.5" step="0.1" value={paramA} onChange={(e) => setParamA(parseFloat(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400" /></div>
                <div><div className="flex justify-between text-slate-300 mb-1"><span>Translație Orizontală (Parametru h):</span><span className="font-mono text-blue-400 font-bold">{paramH}</span></div><input type="range" min="-4" max="4" step="0.5" value={paramH} onChange={(e) => setParamH(parseFloat(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400" /></div>
                <div><div className="flex justify-between text-slate-300 mb-1"><span>Translație Verticală (Parametru k):</span><span className="font-mono text-blue-400 font-bold">{paramK}</span></div><input type="range" min="-3" max="3" step="0.5" value={paramK} onChange={(e) => setParamK(parseFloat(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400" /></div>
              </div>
              <div className="mt-3.5 p-2.5 sm:p-3 rounded-xl bg-slate-800 text-[11px] text-slate-300 border border-slate-700">💡 <strong>Observație Job Shadowing:</strong> Elevii manipulează interactiv funcția pe ecran, după care demonstrează pas cu pas soluția algebrică pe caiet.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};