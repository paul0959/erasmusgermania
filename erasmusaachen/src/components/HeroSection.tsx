/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, School, Sparkles, Images, CheckCircle2, FileText, CalendarDays, Users, MapPin, BookOpen } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

interface HeroSectionProps { onOpenTeacherDossier?: () => void; }

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTeacherDossier }) => {
  const interactiveHologramPillars = [
    { id: 1, title: "Didactica Matematicii", subtitle: "Prof. Frunză Paul-Adrian", badge: "Ecrane Interactive", preview: "Am apreciat felul natural în care profesorul și elevul colaborează direct pe ecranele tactile.", tagColor: "bg-[#e8eff5] text-[#1b2d40] border-[#c5d5e4]" },
    { id: 2, title: "Fizică și Științe Aplicate", subtitle: "Prof. Petrașcu Traian", badge: "Senzori & Experimente", preview: "Am observat cum elevii efectuează măsurători precise cu senzori digitali pe tablete.", tagColor: "bg-[#edf5f0] text-[#2c533c] border-[#c3ded0]" },
    { id: 3, title: "Geografie și Ecologie", subtitle: "Prof. Hodoroga Florin", badge: "Educație în Natură", preview: "Am organizat aplicații practice de orientare direct în natură la granița celor trei țări.", tagColor: "bg-[#f5ebdc] text-[#556349] border-[#c8b28a]" }
  ];

  return (
    <section id="acasa" className="relative pt-20 pb-10 sm:pt-28 sm:pb-14 px-3 sm:px-6 lg:px-8 overflow-hidden select-none bg-[#fbf8f2] text-slate-900 border-b border-[#dfd5c5]">
      <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#758467]/10 blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#f5ebdc] border border-[#d6c7b0] text-[#4d5942] text-[11px] sm:text-xs font-bold shadow-xs">
            <School className="w-3.5 h-3.5 text-[#758467]" /><span>Liceul Teoretic „Solomon Haliță” Sângeorz-Băi</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#1b2d40] text-[#f5ebdc] border border-[#2d455d] text-[11px] sm:text-xs font-mono font-medium shadow-xs">
            <span>Erasmus+ 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#1b2d40] tracking-tight leading-[1.15] mb-3 sm:mb-6">
              Mobilitate Europeană de Job Shadowing & Formare STEM · <span className="text-[#758467]">Aachen 2026</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-3xl mb-5 sm:mb-8">
              Documentarea oficială a experienței didactice a delegației de cadre didactice și elevi la <strong>Geschwister-Scholl-Gymnasium Aachen</strong> (Germania), în perioada <strong>19 – 23 Mai 2026</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <a href="#jurnal-hologram" className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#1b2d40] hover:bg-[#121f2d] text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all">
                <Sparkles className="w-4 h-4 text-[#f5ebdc]" /><span>Explorează Jurnalul</span><ArrowRight className="w-4 h-4" />
              </a>
              <a href="#galerie" className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#f5ebdc] hover:bg-[#ede1ce] text-[#4d5942] border border-[#d6c7b0] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs">
                <Images className="w-4 h-4 text-[#758467]" /><span>Galerie Foto</span>
              </a>
              {onOpenTeacherDossier && (
                <button onClick={onOpenTeacherDossier} className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white text-slate-700 border border-[#dfd5c5] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4 text-[#758467]" /><span>Dosar Oficial</span>
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 mt-2 sm:mt-0">
            <div className="p-6 rounded-3xl bg-[#0f172a] text-white shadow-2xl border border-[#334155] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 text-[#e2e8f0]"><CheckCircle2 className="w-4 h-4 text-[#c5a769]" />Datele Mobilității</span>
              </div>
              <div className="space-y-3.5">
                <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><CalendarDays className="w-4 h-4 text-[#c5a769]" /></div><div><div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Perioada</div><div className="text-sm font-semibold text-white">19 – 23 Mai 2026</div></div></div>
                <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><Users className="w-4 h-4 text-[#c5a769]" /></div><div><div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Delegația</div><div className="text-sm font-semibold text-white">4 Profesori · 14 Elevi</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};