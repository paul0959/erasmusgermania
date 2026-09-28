/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROJECT_METADATA } from '../data/projectData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#101c28] text-slate-300 text-xs border-t border-[#1d2f44] pt-10 sm:pt-12 pb-8 sm:pb-10 overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          
          {/* Col 1: Instituție & Program */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-2xl bg-[#f5ebdc] text-[#101c28] flex items-center justify-center font-display font-black text-sm shadow-md border border-[#c8b28a]/40 shrink-0">
                SH
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-[#f5ebdc]">
                  Liceul Teoretic „Solomon Haliță”
                </h4>
                <p className="text-[11px] text-[#758467] font-semibold">
                  Sângeorz-Băi · Jud. Bistrița-Năsăud
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Platformă digitală dedicată diseminării rezultatelor mobilității Erasmus+ la Aachen, Germania (19 – 23 Mai 2026).
            </p>
          </div>

          {/* Col 2: Date Oficiale Proiect */}
          <div>
            <h5 className="font-bold text-[#f5ebdc] uppercase tracking-wider text-xs mb-2.5 sm:mb-3">
              Identificatori Proiect
            </h5>
            <ul className="space-y-2 text-xs">
              <li className="flex flex-col">
                <span className="text-slate-400">Acțiune & Apel:</span>
                <span className="font-mono text-cyan-300 font-semibold">{PROJECT_METADATA.subtitle}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-400">Locație & Gazdă:</span>
                <span className="font-mono text-cyan-300">{PROJECT_METADATA.hostSchool}, {PROJECT_METADATA.location}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-400">Perioadă Mobilitate:</span>
                <span className="text-[#f5ebdc] font-semibold">{PROJECT_METADATA.dates}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Parteneri & Gazdă */}
          <div>
            <h5 className="font-bold text-[#f5ebdc] uppercase tracking-wider text-xs mb-2.5 sm:mb-3">
              Parteneriat Bilateral
            </h5>
            <div className="p-3.5 rounded-2xl bg-[#172738] border border-[#273a4e] space-y-1.5">
              <span className="text-[11px] font-bold text-[#758467] block">
                Instituția Gazdă:
              </span>
              <p className="font-semibold text-white text-xs">
                Geschwister-Scholl-Gymnasium
              </p>
              <p className="text-[11px] text-slate-400">
                Stolberg / Aachen, Renania de Nord-Westfalia
              </p>
            </div>
          </div>

          {/* Col 4: Finanțare & Cadrul Erasmus+ */}
          <div className="space-y-2.5 sm:space-y-3">
            <h5 className="font-bold text-[#f5ebdc] uppercase tracking-wider text-xs">
              Programul Erasmus+
            </h5>
            <div className="p-3 rounded-2xl bg-[#172738] border border-[#273a4e] flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#758467] text-[#f5ebdc] flex items-center justify-center font-bold text-xs shrink-0">
                EU
              </div>
              <div>
                <p className="text-[11px] text-slate-300 font-medium">Finanțat de Uniunea Europeană</p>
                <p className="text-[10px] text-slate-500">ANPCDEFP România</p>
              </div>
            </div>
          </div>

        </div>

        {/* Notă Copyright & Disclaimer */}
        <div className="pt-6 sm:pt-8 border-t border-[#1d2f44] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
          <p>
            © 2026 Liceul Teoretic „Solomon Haliță” Sângeorz-Băi · Mobilitate Erasmus+ Aachen (19 – 23 Mai 2026).
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#758467] font-semibold">Think Green</span>
            <span className="text-slate-600">·</span>
            <span className="text-[#f5ebdc] font-semibold">STEM Digital</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
