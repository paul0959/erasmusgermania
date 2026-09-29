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
      tagColor: "bg-blue-100 text-blue-700 border-blue-200",
      hoverColor: "hover:border-blue-400 group-hover:text-blue-600"
    },
    {
      id: 2,
      title: "Fizică și Științe Aplicate",
      subtitle: "Prof. Petrașcu Traian",
      badge: "Senzori & Experimente",
      preview: "Am documentat procesul prin care măsurătorile clasice sunt înlocuite de senzori digitali, capabili să genereze și să transmită instantaneu grafice de variație pe tablete.",
      tagColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      hoverColor: "hover:border-emerald-400 group-hover:text-emerald-600"
    },
    {
      id: 3,
      title: "Geografie și Ecologie",
      subtitle: "Prof. Hodoroga Florin",
      badge: "Educație în Natură",
      preview: "Am valorificat spațiul outdoor organizând aplicații practice de orientare geografică, culminând cu studiul în teren la intersecția granițelor celor trei state.",
      tagColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
      hoverColor: "hover:border-indigo-400 group-hover:text-indigo-600"
    }
  ];

  return (
    <section id="acasa" className="relative pt-20 pb-10 sm:pt-28 sm:pb-14 px-3 sm:px-6 lg:px-8 overflow-hidden select-none bg-slate-50 text-slate-900 border-b border-slate-200">
      {/* Fundaluri abstracte tech */}
      <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-emerald-500/10 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badges sus */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] sm:text-xs font-bold shadow-sm">
            <School className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="truncate max-w-[260px] sm:max-w-none">Liceul Teoretic „Solomon Haliță” Sângeorz-Băi</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] sm:text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Proiect Acreditat</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-900 text-white border border-slate-800 text-[11px] sm:text-xs font-mono font-medium shadow-sm">
            <span>Erasmus+ 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.15] mb-3 sm:mb-6">
              Mobilitate Europeană de Job Shadowing & Formare STEM · <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Aachen 2026</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mb-5 sm:mb-8">
              Vă prezentăm sinteza experienței noastre didactice la <strong>Geschwister-Scholl-Gymnasium</strong> din Germania. În perioada <strong>19 – 23 Mai 2026</strong>, am participat la un stagiu de formare profesională și am documentat metode inovatoare de predare a științelor exacte, integrând ecranele interactive, senzorii digitali și patrimoniul european în propria noastră viziune pedagogică.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <a href="#jurnal-hologram" onClick={() => audioSystem.playSelectSound()} className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 border border-transparent">
                <Sparkles className="w-4 h-4 text-blue-100" />
                <span>Consultați Jurnalul de Mobilitate</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#galerie" onClick={() => audioSystem.playSelectSound()} className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95">
                <Images className="w-4 h-4 text-blue-600" />
                <span>Galeria Foto</span>
              </a>

              {onOpenTeacherDossier && (
                <button onClick={() => { onOpenTeacherDossier(); audioSystem.playSelectSound(); }} className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>Dosar Oficial</span>
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 mt-2 sm:mt-0">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-slate-100 shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Datele Mobilității
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Erasmus+ KA122-SCH
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shrink-0">
                    <CalendarDays className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Perioada Proiectului</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white">19 – 23 Mai 2026</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shrink-0">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Grup Țintă Participant</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white">4 Cadre Didactice · 14 Elevi</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shrink-0">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Instituția Gazdă</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white">Geschwister-Scholl-Gymnasium</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Aachen, Renania de Nord-Westfalia (DE)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shrink-0">
                    <BookOpen className="w-4 h-4 text-blue-400" />
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
            <div key={pillar.id} className={`p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all group ${pillar.hoverColor}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${pillar.tagColor}`}>{pillar.badge}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 transition-colors mb-1">{pillar.title}</h3>
              <p className="text-xs font-semibold text-slate-500 mb-2">{pillar.subtitle}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};