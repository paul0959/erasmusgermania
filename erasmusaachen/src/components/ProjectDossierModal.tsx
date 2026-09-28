/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, School, MapPin, Users, Award, ShieldCheck, FileText, CheckCircle2, Calendar } from 'lucide-react';
import { PROJECT_METADATA, PARTICIPATING_TEACHERS } from '../data/projectData';
import { audioSystem } from '../utils/audioSystem';

interface ProjectDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * DOSARUL OFICIAL AL MOBILITĂȚII ERASMUS+
 * Conform cerinței exprese a utilizatorului:
 * "Pentru orice versiune, cromatica dosarului oficial la deschidere sa fie un deschisa, din culorile site-ului"
 * - Cromatică deschisă pe toate versiunile (Mobile & Desktop)
 * - Nuanțe din paleta site-ului: Ivory / Warm Cream (#fbf8f2, #f8f5ee, #f5ebdc), Sage Green (#758467),
 *   Albastru Închis (#172738 / #142232) pentru contrast și tipografie, accente aurii fine (#c5a769).
 * - Structură 100% responsivă pe mobil (touch targets mari, scroll fluid, fără debordare).
 */
export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#142232]/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200 select-none"
      onClick={() => {
        onClose();
        audioSystem.playSelectSound();
      }}
    >
      <div 
        className="relative max-w-3xl w-full bg-[#fbf8f2] rounded-3xl shadow-2xl border-2 border-[#dfd5c5] overflow-hidden my-auto text-slate-900 flex flex-col max-h-[92vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Dosar Oficial: Cromatică Deschisă Ivory & Sage Green */}
        <div className="p-4 sm:p-6 md:p-7 bg-[#f5ebdc] border-b border-[#dfd5c5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#758467] text-[#fbf8f2] flex items-center justify-center shadow-md border border-[#c5a769]/50 shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#556349] block">
                  Specificații Oficiale · Erasmus+
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#758467]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-[#172738] tracking-tight leading-tight">
                Dosarul Oficial al Mobilității
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              audioSystem.playSelectSound();
            }}
            className="p-2 sm:p-2.5 rounded-xl bg-white/80 hover:bg-white text-slate-700 hover:text-[#172738] transition-colors border border-[#d6c7b0] shadow-xs active:scale-95 shrink-0"
            aria-label="Închide dosarul oficial"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Dosar Oficial: Cromatică Deschisă, Carduri Albe & Ivory, Detalii Clare */}
        <div className="p-4 sm:p-6 md:p-7 space-y-5 overflow-y-auto text-xs sm:text-sm text-slate-700 flex-1">
          
          {/* Badge Rezumat Institutional */}
          <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#edf2ea] border border-[#ccd9c6] text-[#38482d]">
            <CheckCircle2 className="w-4 h-4 text-[#758467] shrink-0" />
            <span className="font-semibold text-xs">
              Proiect Acreditat Erasmus+ · Mobilitate de Job Shadowing & Didactică STEM la Aachen, Germania
            </span>
          </div>

          {/* Grilă Date Cheie / Fișă Tehnică pe Carduri Albe Luminoase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#dfd5c5] shadow-xs">
            <div className="p-3 rounded-xl bg-[#fbf8f2] border border-[#eee5d6]">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#556349] block mb-1">
                Titlul Proiectului
              </span>
              <span className="font-bold text-[#172738] text-xs sm:text-sm leading-snug block">
                {PROJECT_METADATA.title}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#fbf8f2] border border-[#eee5d6]">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#556349] block mb-1">
                Tipul Acțiunii
              </span>
              <span className="font-bold text-[#172738] text-xs sm:text-sm leading-snug block">
                {PROJECT_METADATA.subtitle}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#fbf8f2] border border-[#eee5d6]">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#556349] block mb-1">
                Școala Beneficiară
              </span>
              <span className="font-bold text-[#172738] text-xs sm:text-sm leading-snug block">
                {PROJECT_METADATA.sendingSchool}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#fbf8f2] border border-[#eee5d6]">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#556349] block mb-1">
                Instituția Gazdă
              </span>
              <span className="font-bold text-[#758467] text-xs sm:text-sm leading-snug block">
                {PROJECT_METADATA.hostSchool}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#fbf8f2] border border-[#eee5d6]">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#556349] block mb-1">
                Locație & Țări
              </span>
              <span className="font-bold text-[#172738] text-xs sm:text-sm leading-snug block">
                {PROJECT_METADATA.location} ({PROJECT_METADATA.visitedCountries.join(', ')})
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#fbf8f2] border border-[#eee5d6]">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#556349] block mb-1">
                Perioadă Desfășurare
              </span>
              <span className="font-mono font-bold text-[#758467] text-xs sm:text-sm leading-snug block">
                {PROJECT_METADATA.dates}
              </span>
            </div>
          </div>

          {/* Echipa Pedagogică Participantă: Carduri Luminoase cu Accente Sage Green */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-[#172738] text-sm sm:text-base flex items-center gap-2">
                <Users className="w-4 h-4 text-[#758467]" />
                <span>Echipa Pedagogică Participantă</span>
              </h4>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f5ebdc] text-[#556349] border border-[#dfd5c5]">
                4 Profesori
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PARTICIPATING_TEACHERS.map((teacher, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#dfd5c5] shadow-xs hover:border-[#758467] transition-all">
                  <div className="font-bold text-[#172738] text-xs sm:text-sm">{teacher.name}</div>
                  <div className="text-[11px] text-[#758467] font-bold mt-0.5">{teacher.role} · {teacher.disciplines}</div>
                  <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">{teacher.jobShadowingFocus}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Grupul de Elevi Însoțiți: Casetă Sage Green & Ivory Luminoasă */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#edf2ea] border border-[#ccd9c6] text-[#38482d] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base text-[#2c3d22]">Grupul de Elevi Însoțiți:</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white text-[#4d5b43] border border-[#b8cbb0]">
                14 Elevi
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-[#435239]">
              14 elevi selectați din clasele IX-XII ai Liceului Teoretic „Solomon Haliță”, profilurile real, matematică-informatică și științe ale naturii, însoțiți de diriginți și cadre didactice de specialitate pentru ateliere STEM, orientare geografică și activități culturale europene.
            </p>
          </div>

        </div>

        {/* Footer Dosar Oficial: Cromatică Deschisă Ivory & Sage Green */}
        <div className="p-3.5 sm:p-5 bg-[#f5ebdc] border-t border-[#dfd5c5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#556349] font-mono">
            <Award className="w-4 h-4 text-[#758467]" />
            <span>Certificări Europass: {PROJECT_METADATA.stats.europassCertificates}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              audioSystem.playSelectSound();
            }}
            className="px-5 py-2 sm:py-2.5 rounded-xl bg-[#758467] hover:bg-[#637256] text-[#fbf8f2] text-xs font-bold transition-all shadow-md active:scale-95 border border-[#c5a769]/50"
          >
            Închide Dosarul
          </button>
        </div>

      </div>
    </div>
  );
};
