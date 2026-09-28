/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, Award, BookCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS } from '../data/projectData';

export const OutcomesAndVoices: React.FC = () => {
  const outcomes = [
    {
      title: "100% Certificare Europass Mobilitate",
      description: "Document oficial emis conform standardelor Uniunii Europene ce atestă competențele digitale, științifice și metodice dobândite de toți participanții.",
      icon: Award,
      isGreen: false
    },
    {
      title: "Ghid Didactic de Laborator & Ecrane Interactive",
      description: "Transferul metodologiei observate de Prof. Frunză Paul și Prof. Petrașcu Traian în predarea matematicii și fizicii la clasele liceale.",
      icon: BookCheck,
      isGreen: false
    },
    {
      title: "Inițiative Think Green în Liceul Teoretic Solomon Haliță",
      description: "Transferul bunelor practici de sustenabilitate și reciclare a lânii observate la Aachen în cadrul liceului din Sângeorz-Băi.",
      icon: ShieldCheck,
      isGreen: true
    },
    {
      title: "Punte Educațională Bilaterală Durabilă",
      description: "Parteneriat instituțional de durată între Liceul Teoretic „Solomon Haliță” și Geschwister-Scholl-Gymnasium Aachen.",
      icon: HeartHandshake,
      isGreen: false
    }
  ];

  return (
    <section id="impact" className="py-10 sm:py-16 relative bg-[#172738] text-white border-t border-b border-[#293d55]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Antet Secțiune pe fond Albastru Mai Închis */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5ebdc] mb-2.5 sm:mb-3">
            <span className="w-2 h-2 rounded-full bg-[#758467] animate-pulse" />
            <span className="px-2.5 py-0.5 rounded-full bg-[#24394f] text-[#f5ebdc] border border-[#3b536e]">
              Mărturiile Participanților
            </span>
            <span aria-hidden="true" className="text-white/40 hidden sm:inline">·</span>
            <span className="text-[#f5ebdc]/80">Impact Durabil</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#f5ebdc] leading-tight">
            Vocile Mobilității & Rezultate Concrete
          </h2>
          <p className="text-slate-300 mt-2 sm:mt-3 text-xs sm:text-base leading-relaxed">
            Iată mărturiile profesorilor participanți de la Liceul Teoretic „Solomon Haliță” despre modul în care experiența de la Geschwister-Scholl-Gymnasium Aachen din perioada <strong>19 – 23 Mai 2026</strong> transformă procesul didactic și cooperarea europeană.
          </p>
        </div>

        {/* Grilă Mărturii: Cartonașe Ivory în Contrast cu fundalul Albastru Închis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-5 sm:p-7 flex flex-col justify-between bg-[#f8f5ee] text-slate-900 shadow-2xl border border-[#e4d9c9] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#758467]/40 mb-3 sm:mb-4" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4 sm:mb-5">
                  „{item.quote}”
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-[#dfd5c5]">
                <h4 className="text-xs sm:text-sm font-bold text-[#172738]">
                  {item.author}
                </h4>
                <p className="text-[11px] sm:text-xs font-semibold text-[#758467] mt-0.5">
                  {item.role}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rezultate Instituționale: Bloc Ivory & Sage Green */}
        <div className="rounded-3xl p-5 sm:p-8 lg:p-10 bg-[#f8f5ee] text-slate-900 shadow-2xl border border-[#e4d9c9]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-[#dfd5c5] gap-2">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-[#758467] uppercase tracking-widest block mb-1">
                Livrabile & Validare Instituțională
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#172738]">
                Rezultate Tangibile ale Proiectului Erasmus+
              </h3>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#f5ebdc] text-[#4d5942] text-[11px] sm:text-xs font-mono font-bold border border-[#d6c7b0]">
              2026 · Acreditare UE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {outcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-6 rounded-2xl bg-white border border-[#dfd5c5] shadow-xs flex items-start gap-3 sm:gap-4 hover:border-[#758467] transition-all"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    item.isGreen ? 'bg-[#edf2ea] text-[#758467]' : 'bg-[#e8eff5] text-[#172738]'
                  }`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#172738] mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
