import React from 'react';
import { X, CheckCircle2, Printer, School, MapPin, Users, Award, ShieldCheck } from 'lucide-react';
import { PROJECT_METADATA, PARTICIPATING_TEACHERS } from '../data/projectData';

interface ProjectDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-[#0c1222] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] border border-slate-700/80 overflow-hidden my-8 text-slate-100 card-specular-edge"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Antet */}
        <div className="p-6 sm:p-8 bg-slate-900/80 border-b border-slate-800 text-white flex items-center justify-between backdrop-blur-md">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-1 font-semibold">
              Specificații Oficiale de Proiect · Erasmus+
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Fișa Tehnică a Mobilității
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
            aria-label="Închide fereastra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conținut */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-sm text-slate-300">
          {/* Tabel Date Cheie */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 block">Titlul Proiectului</span>
              <span className="font-bold text-white text-base">{PROJECT_METADATA.title}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 block">Tipul Acțiunii</span>
              <span className="font-bold text-white text-base">{PROJECT_METADATA.subtitle}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 block">Școala Beneficiară</span>
              <span className="font-bold text-white">{PROJECT_METADATA.sendingSchool}</span>
              <span className="text-xs text-slate-400 block">{PROJECT_METADATA.sendingAddress}, {PROJECT_METADATA.sendingCity}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 block">Destinația Mobilității</span>
              <span className="font-bold text-white">{PROJECT_METADATA.hostCity}</span>
              <span className="text-xs text-slate-400 block">Germania ({PROJECT_METADATA.hostSchool})</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 block">Perioada Desfășurării</span>
              <span className="font-bold text-blue-400 text-base">{PROJECT_METADATA.dates}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-500 block">Participanți</span>
              <span className="font-bold text-white">14 Elevi & 4 Profesori Însoțitori</span>
            </div>
          </div>

          {/* Delegația Profesorilor */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
              Cadre Didactice Participante (Job Shadowing)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PARTICIPATING_TEACHERS.map((teacher, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold font-mono text-xs shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">{teacher.name}</div>
                    <div className="text-[11px] text-blue-400 font-medium">{teacher.role}</div>
                    <div className="text-[11px] text-slate-400 font-light mt-0.5">{teacher.jobShadowingFocus}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Obiective Strategice */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
              Obiective Strategice Cheie (KA122-SCH)
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-white">Think Green:</strong> Conștientizare ecologică și workshop practic cu materiale naturale (lână) la școala gazdă, alături de explorarea biodiversității la Dreiländereck și a apei termale din Aachen.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-white">Learn Digital:</strong> Job shadowing în matematică, informatică și fizică, integrând ecrane interactive în timp real, exerciții de geometrie dinamică și învățare hibridă (tablete + caiete).
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-white">Act European:</strong> Explorarea valorilor comune ale Uniunii Europene prin vizite culturale la Bruxelles, Domul din Aachen, granița triplă de la Dreiländereck și Kölner Dom.
                </div>
              </div>
            </div>
          </div>

          {/* Standarde Europene & Europass */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/50 text-slate-200">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold block mb-1">
              Certificare Oficială Europass
            </span>
            <p className="text-xs leading-relaxed font-light">
              Toți cei 18 participanți au finalizat cu succes activitățile proiectului, fiindu-le eliberat certificatul oficial
              <strong className="text-white font-semibold"> Europass Mobilitate</strong>, recunoscut în statele membre ale Uniunii Europene.
            </p>
          </div>
        </div>

        {/* Subsol Modal */}
        <div className="p-4 sm:p-5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-blue-400" />
            <span>Imprimă Fișa</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/40"
          >
            Închide Fereastra
          </button>
        </div>

      </div>
    </div>
  );
};
