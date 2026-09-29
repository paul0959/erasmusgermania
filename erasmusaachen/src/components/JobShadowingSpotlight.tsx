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
      case 'Users2': return Users; // FIX EXTREM DE IMPORTANT PENTRU VERCEL
      default: return Sparkles;
    }
  };

  return (
    <section id="shadowing" className="py-10 sm:py-16 relative bg-[#fbf8f2] text-slate-900 border-t border-b border-[#dfd5c5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#172738] leading-tight">
            Job Shadowing: Matematică, Fizică & Tehnologii
          </h2>
          <p className="text-slate-600 mt-2 sm:mt-4 text-xs sm:text-base leading-relaxed">
            Secțiunea reflectă activitatea de <strong>Job Shadowing</strong> desfășurată de <strong>Prof. Frunză Paul-Adrian</strong> și <strong>Prof. Petrașcu Traian</strong> în perioada <strong>19 – 23 Mai 2026</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
          {PEDAGOGICAL_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            const isSelected = pillar.id === selectedPillarId;

            return (
              <div key={pillar.id} onClick={() => { setSelectedPillarId(pillar.id); audioSystem.playSelectSound(); }}
                className={`rounded-3xl p-5 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between active:scale-95 ${
                  isSelected ? 'bg-white ring-2 ring-[#758467] shadow-xl scale-[1.01] border-[#dfd5c5]' : 'bg-white/85 border border-[#dfd5c5] hover:shadow-md'
                }`}>
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-xs transition-transform ${
                      isSelected ? 'bg-[#758467] text-[#f5ebdc] scale-105' : 'bg-[#e8eff5] text-[#1b2d40]'
                    }`}><Icon className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                  </div>
                  <h3 className="text-base sm:text-xl font-display font-bold text-slate-900 mb-1">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-[#758467] mb-1">{pillar.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-white p-5 sm:p-8 lg:p-10 shadow-xl border border-[#dfd5c5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">{activePillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{activePillar.summary}</p>
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 sm:space-y-3">
                {activePillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-[#f5ebdc] text-[#758467] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-slate-900 text-white p-4 sm:p-6 border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2"><Sliders className="w-4 h-4 text-cyan-400 shrink-0" /><span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider">Simulare Smart Board</span></div>
              </div>
              <div className="relative h-48 sm:h-56 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                <svg viewBox="0 0 300 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                  <path d={`M 20 ${100 - (paramA * Math.pow(-4 - paramH, 2) + paramK * 10)} Q 150 ${100 - paramK * 15} 280 ${100 - (paramA * Math.pow(4 - paramH, 2) + paramK * 10)}`} fill="none" stroke="#22d3ee" strokeWidth="3" />
                  <circle cx={150 + paramH * 15} cy={100 - paramK * 15} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-xs">
                <div><div className="flex justify-between text-slate-300 mb-1"><span>Curbură (Parametru a):</span><span className="font-mono text-cyan-400 font-bold">{paramA}</span></div><input type="range" min="0.2" max="2.5" step="0.1" value={paramA} onChange={(e) => setParamA(parseFloat(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400" /></div>
                <div><div className="flex justify-between text-slate-300 mb-1"><span>Translație Orizontală:</span><span className="font-mono text-cyan-400 font-bold">{paramH}</span></div><input type="range" min="-4" max="4" step="0.5" value={paramH} onChange={(e) => setParamH(parseFloat(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400" /></div>
                <div><div className="flex justify-between text-slate-300 mb-1"><span>Translație Verticală:</span><span className="font-mono text-cyan-400 font-bold">{paramK}</span></div><input type="range" min="-3" max="3" step="0.5" value={paramK} onChange={(e) => setParamK(parseFloat(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};