/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, School, Sparkles, Images, CheckCircle2, ShieldCheck } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

interface HeroSectionProps {
  onExploreJournal?: () => void;
  onOpenGallery?: () => void;
  onOpenTeacherDossier?: (teacherName: string) => void;
}

/**
 * SECȚIUNEA HERO & DELEGAȚIA OFICIALĂ
 * Conform cerinței:
 * "Fundalul sectiunii cu delegatia sa aiba aceasta nuanta de sage green. si ivory.
 * pe alocuri mai adauga nunatele de sage green si ivory"
 * "Varianta de albastru sa fie mai inchisa."
 */
export const HeroSection: React.FC<HeroSectionProps> = () => {
  const interactiveHologramPillars = [
    {
      id: 1,
      title: "Job Shadowing Matematică",
      subtitle: "Prof. Frunză Paul-Adrian",
      badge: "Ecrane Interactive & Sisteme",
      preview: "Rezolvarea sistemelor de ecuații în timp real și transferul metodelor digitale la Sângeorz-Băi.",
      tagColor: "bg-[#e8eff5] text-[#1b2d40] border-[#c5d5e4]"
    },
    {
      id: 2,
      title: "Didactica Fizicii & Laborator",
      subtitle: "Prof. Petrașcu Traian",
      badge: "Senzori Digitali & Termodinamică",
      preview: "Măsurători cu senzori în timp real, termodinamică la apa de 52°C și mecanică gotică.",
      tagColor: "bg-[#edf5f0] text-[#2c533c] border-[#c3ded0]"
    },
    {
      id: 3,
      title: "Think Green & Dreiländereck",
      subtitle: "Prof. Hodoroga Florin",
      badge: "Însoțitor Elevi · Sustenabilitate",
      preview: "Ateliere ecologice cu lână, drumeție la granița triplă DE-BE-NL și orientare geografică.",
      tagColor: "bg-[#f5ebdc] text-[#556349] border-[#c8b28a]"
    }
  ];

  return (
    <section 
      id="acasa" 
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-[#fbf8f2] text-slate-900 border-b border-[#dfd5c5]"
    >
      {/* Detaliu discret de fundal Sage Green & Ivory în colț */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#758467]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#f5ebdc] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Pastile Instituționale Sage Green + Ivory + Dark Blue */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5ebdc] border border-[#d6c7b0] text-[#4d5942] text-xs font-bold shadow-xs">
            <School className="w-3.5 h-3.5 text-[#758467]" />
            <span>Liceul Tehnologic „Solomon Haliță” Sângeorz-Băi</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#dfd5c5] text-slate-700 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#758467] animate-pulse" />
            <span>Acreditare Erasmus+ 2021-2027</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b2d40] text-[#f5ebdc] border border-[#2d455d] text-xs font-mono font-medium shadow-xs">
            <span>19 – 23 Mai 2026</span>
          </div>
        </div>

        {/* Titlu Principal & Subtitlu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#1b2d40] tracking-tight leading-[1.1] mb-6">
              Mobilitate Europeană de Job Shadowing & Formare STEM · <span className="text-[#758467]">Aachen 2026</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mb-8">
              Documentarea oficială a experienței didactice a delegației de cadre didactice și elevi la <strong>Geschwister-Scholl-Gymnasium Aachen</strong> (Germania), în perioada <strong>19 – 23 Mai 2026</strong>: integrarea ecranelor tactile interactive la matematică, fizică experimentală cu senzori digitali și valorificarea patrimoniului european.
            </p>

            {/* Butoane CTA cu nuanța de Albastru Închis & Ivory */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#jurnal-hologram"
                onClick={() => audioSystem.playSelectSound()}
                className="px-6 py-3.5 rounded-2xl bg-[#1b2d40] hover:bg-[#121f2d] text-white font-bold text-sm shadow-md shadow-[#1b2d40]/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border border-[#2d455d]"
              >
                <Sparkles className="w-4 h-4 text-[#f5ebdc]" />
                <span>Explorează Jurnalul pe Zile</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#galerie"
                onClick={() => audioSystem.playSelectSound()}
                className="px-6 py-3.5 rounded-2xl bg-[#f5ebdc] hover:bg-[#ede1ce] text-[#4d5942] border border-[#d6c7b0] font-bold text-sm flex items-center gap-2 transition-all shadow-xs"
              >
                <Images className="w-4 h-4 text-[#758467]" />
                <span>Galerie Foto</span>
              </a>

              <a
                href="#shadowing"
                onClick={() => audioSystem.playSelectSound()}
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-[#dfd5c5] font-semibold text-sm transition-all"
              >
                <span>Metode Job Shadowing</span>
              </a>
            </div>
          </div>

          {/* 
            CARD DELEGAȚIE OFICIALĂ:
            Personalizat în nuanțele exacte de SAGE GREEN + IVORY conform mostrei din imagine!
            Fără număr de fotografii la delegație.
          */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#758467] text-white shadow-2xl border-2 border-[#c5a769]/50 relative overflow-hidden">
              
              {/* Accente de aur și umbră decorativă */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a769]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/20">
                <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5ebdc] text-[#45523a] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#758467]" />
                  Delegație Oficială
                </span>
                <span className="text-[11px] font-mono font-bold text-[#f5ebdc]">19 – 23 Mai 2026</span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#67755a]/70 border border-white/10">
                  <span className="text-xs sm:text-sm text-[#f5ebdc] font-medium">Profesori Participanți</span>
                  <span className="text-sm font-bold text-[#3e4833] font-mono bg-[#f5ebdc] px-3 py-1 rounded-xl shadow-xs">
                    4 Profesori
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#67755a]/70 border border-white/10">
                  <span className="text-xs sm:text-sm text-[#f5ebdc] font-medium">Elevi Însoțiți</span>
                  <span className="text-sm font-bold text-[#3e4833] font-mono bg-[#f5ebdc] px-3 py-1 rounded-xl shadow-xs">
                    14 Elevi
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#67755a]/70 border border-white/10">
                  <span className="text-xs sm:text-sm text-[#f5ebdc] font-medium">Perioadă Mobilitate</span>
                  <span className="text-xs font-bold text-[#3e4833] font-mono bg-[#f5ebdc] px-2.5 py-1 rounded-xl shadow-xs">
                    19 – 23 Mai 2026
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#67755a]/70 border border-white/10">
                  <span className="text-xs sm:text-sm text-[#f5ebdc] font-medium">Instituție Gazdă</span>
                  <span className="text-xs font-bold text-[#f5ebdc] bg-[#5a674e] px-2.5 py-1 rounded-xl">
                    Gymnasium Aachen
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/20 text-xs text-[#f5ebdc]/90 flex items-center justify-between">
                <span>Program Erasmus+:</span>
                <span className="font-bold text-[#f5ebdc]">Job Shadowing & STEM</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Didactic Pillars Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {interactiveHologramPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-5 rounded-2xl bg-white border border-[#dfd5c5] hover:border-[#758467] hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${pillar.tagColor}`}>
                  {pillar.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">0{pillar.id}</span>
              </div>
              <h3 className="text-base font-bold text-[#1b2d40] group-hover:text-[#758467] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs font-semibold text-[#758467] mb-2">
                {pillar.subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.preview}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
