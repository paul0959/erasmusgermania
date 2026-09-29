/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROJECT_METADATA } from '../data/projectData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-10 sm:pt-12 pb-8 sm:pb-10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-display font-black text-sm shadow-md shrink-0">
                SH
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">
                  Liceul Teoretic „Solomon Haliță”
                </h4>
                <p className="text-[11px] text-blue-400 font-semibold">
                  Sângeorz-Băi · Jud. Bistrița-Năsăud
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Platformă digitală dedicată diseminării rezultatelor mobilității Erasmus+ la Aachen, Germania (19 – 23 Mai 2026).
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-2.5 sm:mb-3">
              Identificatori Proiect
            </h5>
            <ul className="space-y-2 text-xs">
              <li className="flex flex-col">
                <span className="text-slate-500">Acțiune & Apel:</span>
                <span className="font-mono text-blue-400 font-semibold">{PROJECT_METADATA.subtitle}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500">Locație & Gazdă:</span>
                <span className="font-mono text-blue-400">{PROJECT_METADATA.hostSchool}, {PROJECT_METADATA.location}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500">Perioadă Mobilitate:</span>
                <span className="text-white font-semibold">{PROJECT_METADATA.dates}</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-2.5 sm:mb-3">
              Parteneriat Bilateral
            </h5>
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="text-[11px] font-bold text-emerald-500 block">
                Instituția Gazdă:
              </span>
              <p className="font-semibold text-white text-xs">
                Geschwister-Scholl-Gymnasium
              </p>
              <p className="text-[11px] text-slate-500">
                Stolberg / Aachen, Renania de Nord-Westfalia
              </p>
            </div>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Programul Erasmus+
            </h5>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                EU
              </div>
              <div>
                <p className="text-[11px] text-slate-300 font-medium">Finanțat de Uniunea Europeană</p>
                <p className="text-[10px] text-slate-500">ANPCDEFP România</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© 2026 Liceul Teoretic „Solomon Haliță” Sângeorz-Băi · Mobilitate Erasmus+ Aachen (19 – 23 Mai 2026).</p>
          <div className="flex items-center gap-3">
            <span className="text-emerald-500 font-semibold">Think Green</span>
            <span className="text-slate-700">·</span>
            <span className="text-blue-500 font-semibold">STEM Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};