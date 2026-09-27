import React from 'react';
import { X, Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import { DayJournal } from '../data/projectData';

interface DayDetailModalProps {
  day: DayJournal | null;
  onClose: () => void;
  onSelectAnotherDay: (id: number) => void;
}

export const DayDetailModal: React.FC<DayDetailModalProps> = ({
  day,
  onClose,
  onSelectAnotherDay,
}) => {
  if (!day) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-[#0c1222] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] border border-slate-700/80 overflow-hidden my-8 text-slate-100 card-specular-edge"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Antet Modal */}
        <div className="relative p-6 sm:p-8 bg-slate-900/80 border-b border-slate-800 text-white backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs font-bold px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg">
              Ziua 0{day.dayNumber} · Jurnalul Mobilității
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
              aria-label="Închide fereastra"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2 leading-snug">
            {day.title}
          </h3>
          <p className="text-sm sm:text-base text-blue-300 font-light">
            {day.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-4 pt-4 border-t border-slate-800">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              {day.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              {day.location} ({day.country})
            </span>
          </div>
        </div>

        {/* Corpul Modalului */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-slate-200">
          {/* Rezumat & Narațiune Detaliată */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Context & Experiență Trăită
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-3">
              {day.description}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-950/70 p-4 rounded-xl border border-slate-800 font-light">
              {day.extendedText}
            </p>
          </div>

          {/* Orar Detaliat pe Ore */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
              Desfășurătorul Zilei
            </h4>
            <div className="space-y-2">
              {day.schedule.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 font-mono font-bold text-blue-400 shrink-0 w-16">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.time}</span>
                  </div>
                  <div className="text-slate-300 font-light">
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Concluzia Pedagogică */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/50 text-slate-200">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold block mb-1">
              Concluzia Zilei & Valoare Educațională
            </span>
            <p className="text-xs sm:text-sm font-medium">
              {day.takeaway}
            </p>
          </div>

          {/* Teme cheie fără pastile */}
          <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
            <span className="font-mono">Teme cheie:</span>
            <span>{day.tags.join(' · ')}</span>
          </div>
        </div>

        {/* Subsol Modal cu Comutator Rapid */}
        <div className="p-4 sm:p-5 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Comută Ziua:</span>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => onSelectAnotherDay(num)}
                className={`w-8 h-8 rounded-lg font-mono transition-all ${
                  day.dayNumber === num
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/50'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                0{num}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700"
          >
            Închide Fereastra
          </button>
        </div>

      </div>
    </div>
  );
};
