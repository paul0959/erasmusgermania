/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, School, Sparkles, Images, CheckCircle2, FileText, CalendarDays, Users, MapPin, BookOpen } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

interface HeroSectionProps {
  onExploreJournal?: () => void;
  onOpenGallery?: () => void;
  onOpenTeacherDossier?: (teacherName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTeacherDossier }) => {
  const interactiveHologramPillars = [
    {
      id: 1,
      title: "Didactica Matematicii",
      subtitle: "Prof. Frunză Paul-Adrian",
      badge: "Ecrane Interactive",
      preview: "Am apreciat modul eficient în care profesorul și elevul colaborează direct pe ecranul tactil, menținând în același timp rigoarea etapelor de calcul scrise în caiete.",
      tagColor: "bg-[#e8eff5] text-[#1b2d40] border-[#c5d5e4]"
    },
    {
      id: 2,
      title: "Fizică și Științe Aplicate",
      subtitle: "Prof. Petrașcu Traian",
      badge: "Senzori & Experimente",
      preview: "Am documentat procesul prin care măsurătorile clasice sunt înlocuite de senzori digitali, capabili să genereze și să transmită instantaneu grafice de variație pe tablete.",
      tagColor: "bg-[#edf5f0] text-[#2c533c] border-[#c3ded0]"
    },
    {
      id: 3,
      title: "Geografie și Ecologie",
      subtitle: "Prof. Hodoroga Florin",
      badge: "Educație în Natură",
      preview: "Am valorificat spațiul outdoor organizând aplicații practice de orientare geografică, culminând cu studiul în teren la intersecția granițelor celor trei state.",
      tagColor: "bg-[#f5ebdc] text-[#556349] border-[#c8b28a]"
    }
  ];

  return (
    <section id="acasa" className="relative pt-20 pb-10 sm:pt-28 sm:pb-14 px-3 sm:px-6 lg:px-8 overflow-hidden select-none bg-[#fbf8f2] text-slate-900 border-b border-[#dfd5c5]">
      <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#758467]/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#f5ebdc] blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#f5ebdc] border border-[#d6c7b0] text-[#4d5942] text-[11px] sm:text-xs font-bold shadow-xs">
            <School className="w-3.5 h-3.5 text-[#758467] shrink-0" />
            <span className="truncate max-w-[260px] sm:max-w-none">Liceul Teoretic „Solomon Haliță” Sângeorz-Băi</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-[#dfd5c5] text-slate-700 text-[11px] sm:text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#758467] animate-pulse shrink-0" />
            <span>Proiect Acreditat</span>
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
              Vă prezentăm sinteza experienței noastre didactice la <strong>Geschwister-Scholl-Gymnasium</strong> din Germania. În perioada <strong>19 – 23 Mai 2026</strong>, am participat la un stagiu de formare profesională și am documentat metode inovatoare de predare a științelor exacte, integrând ecranele interactive, senzorii digitali și patrimoniul european în propria noastră viziune pedagogică.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <a href="#jurnal-hologram" onClick={() => audioSystem.playSelectSound()} className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#1b2d40] hover:bg-[#121f2d] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#1b2d40]/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 border border-[#2d455d]">
                <Sparkles className="w-4 h-4 text-[#f5ebdc]" />
                <span>Consultați Jurnalul de Mobilitate</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#galerie" onClick={() => audioSystem.playSelectSound()} className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#f5ebdc] hover:bg-[#ede1ce] text-[#4d5942] border border-[#d6c7b0] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs active:scale-95">
                <Images className="w-4 h-4 text-[#758467]" />
                <span>Galeria Foto</span>
              </a>

              {onOpenTeacherDossier && (
                <button onClick={() => { onOpenTeacherDossier(); audioSystem.playSelectSound(); }} className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-[#dfd5c5] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-95">
                  <FileText className="w-4 h-4 text-[#758467]" />
                  <span>Dosar Oficial</span>
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 mt-2 sm:mt-0">
            {/* CARTONAȘ DELEGAȚIE - Contrast maxim, culori profunde, date complete */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0b1120] text-slate-100 shadow-2xl border border-[#1e293b] relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#fbbf24]/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#fbbf24]" />
                  Datele Mobilității
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/30">
                  Erasmus+ KA122-SCH
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shrink-0">
                    <CalendarDays className="w-4 h-4 text-[#38bdf8]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Perioada Proiectului</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white">19 – 23 Mai 2026</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shrink-0">
                    <Users className="w-4 h-4 text-[#38bdf8]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Grup Țintă Participant</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white">4 Cadre Didactice · 14 Elevi</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shrink-0">
                    <MapPin className="w-4 h-4 text-[#38bdf8]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Instituția Gazdă</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white">Geschwister-Scholl-Gymnasium</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Aachen, Renania de Nord-Westfalia (DE)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shrink-0">
                    <BookOpen className="w-4 h-4 text-[#38bdf8]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Școala Beneficiară</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white">Lic. Teoretic „Solomon Haliță”</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Sângeorz-Băi, România</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 mt-8 sm:mt-12">
          {interactiveHologramPillars.map((pillar) => (
            <div key={pillar.id} className="p-4 sm:p-5 rounded-2xl bg-white border border-[#dfd5c5] hover:border-[#758467] hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${pillar.tagColor}`}>{pillar.badge}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#1b2d40] group-hover:text-[#758467] transition-colors">{pillar.title}</h3>
              <p className="text-xs font-semibold text-[#758467] mb-1.5">{pillar.subtitle}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};