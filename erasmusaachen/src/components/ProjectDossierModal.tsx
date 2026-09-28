/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, School, MapPin, Users, Award, ShieldCheck } from 'lucide-react';
import { PROJECT_METADATA, PARTICIPATING_TEACHERS } from '../data/projectData';

interface ProjectDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0e1724]/85 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-[#172738] rounded-3xl shadow-2xl border border-[#2d455d] overflow-hidden my-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#111e2c] border-b border-[#24374b] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#758467] block mb-1">
              Specificații Oficiale de Proiect · Erasmus+
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#f5ebdc]">
              Fișa Tehnică a Mobilității
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1c2e42] hover:bg-[#253d57] text-[#f5ebdc] transition-colors border border-[#2d455d]"
            aria-label="Închide fereastra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-sm text-slate-300">
          {/* Key Facts Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#0f1a26] border border-[#24374b]">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 block">Titlul Proiectului</span>
              <span className="font-bold text-[#f5ebdc] text-base">{PROJECT_METADATA.title}</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 block">Tipul Acțiunii</span>
              <span className="font-bold text-[#f5ebdc] text-base">{PROJECT_METADATA.subtitle}</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 block">Școala Beneficiară</span>
              <span className="font-bold text-cyan-300">{PROJECT_METADATA.sendingSchool}</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 block">Instituția Gazdă</span>
              <span className="font-bold text-cyan-300">{PROJECT_METADATA.hostSchool}</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 block">Locație & Țări</span>
              <span className="font-semibold text-cyan-300">{PROJECT_METADATA.location} ({PROJECT_METADATA.visitedCountries.join(', ')})</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 block">Perioadă Mobilitate</span>
              <span className="font-semibold text-[#f5ebdc]">{PROJECT_METADATA.dates}</span>
            </div>
          </div>

          {/* Participating Teachers */}
          <div>
            <h4 className="font-bold text-[#f5ebdc] text-base mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#758467]" />
              Echipa Pedagogică Participantă
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PARTICIPATING_TEACHERS.map((teacher, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0f1a26] border border-[#24374b]">
                  <div className="font-bold text-white text-sm">{teacher.name}</div>
                  <div className="text-xs text-[#758467] font-semibold">{teacher.role} · {teacher.disciplines}</div>
                  <div className="text-xs text-slate-400 mt-1">{teacher.jobShadowingFocus}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Delegation */}
          <div className="p-4 rounded-2xl bg-[#758467]/15 border border-[#758467]/30 text-xs text-slate-300 space-y-1.5">
            <span className="font-bold text-[#f5ebdc] block text-sm">Grupul de Elevi Însoțiți:</span>
            <p>14 elevi selectați din clasele IX-XII ai Liceului Tehnologic „Solomon Haliță”, profilurile real, matematică-informatică și științe ale naturii, însoțiți de diriginți și cadre didactice de specialitate.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#111e2c] border-t border-[#24374b] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Certificări Europass: {PROJECT_METADATA.stats.europassCertificates}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#758467] hover:bg-[#637256] text-[#f5ebdc] text-xs font-bold transition-all shadow-sm"
          >
            Închide Fișa
          </button>
        </div>
      </div>
    </div>
  );
};
