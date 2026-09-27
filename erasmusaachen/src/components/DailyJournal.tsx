import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  LayoutGrid, 
  ListOrdered, 
  Sparkles,
  Atom,
  School,
  Compass,
  Landmark,
  Award
} from 'lucide-react';
import { DAILY_JOURNAL, DayJournal } from '../data/projectData';

interface DailyJournalProps {
  onSelectDay: (day: DayJournal) => void;
}

export const DailyJournal: React.FC<DailyJournalProps> = ({ onSelectDay }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
  const [filterFocus, setFilterFocus] = useState<'all' | 'cultural' | 'stem' | 'green'>('all');

  const filteredDays = DAILY_JOURNAL.filter((day) => {
    if (filterFocus === 'all') return true;
    return day.focus === filterFocus;
  });

  const getDayIcon = (id: number) => {
    switch (id) {
      case 1:
        return Atom;
      case 2:
        return School;
      case 3:
        return Landmark;
      case 4:
        return Compass;
      case 5:
        return Landmark;
      case 6:
        return Award;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="jurnal" className="py-24 bg-[#0a0f1d] border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 text-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Antet Secțiune */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Jurnalul de Bord al Celor 6 Zile</span>
              <span aria-hidden="true">·</span>
              <span>Cronologie Autentică</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
              Jurnalul Zilnic al Mobilității
            </h2>
            <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base font-light">
              Descoperiți experiențele autentice ale celor 14 elevi și 4 profesori de la Liceul Teoretic „Solomon Haliță” la Bruxelles, Geschwister-Scholl-Gymnasium Aachen, Dreiländereck și Köln.
            </p>
          </div>

          {/* Filtre și Comutator Grid / Timeline */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs card-specular-edge">
              {(
                [
                  { id: 'all', label: 'Toate (6)' },
                  { id: 'stem', label: 'STEM & Școală' },
                  { id: 'green', label: 'Think Green' },
                  { id: 'cultural', label: 'Cultural & UE' },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilterFocus(f.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all text-xs font-medium ${
                    filterFocus === f.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Buton View Switcher */}
            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Vizualizare Carduri"
                aria-label="Vizualizare Carduri"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'timeline'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Vizualizare Cronologică"
                aria-label="Vizualizare Cronologică"
              >
                <ListOrdered className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 
          ======================================================================
          VIZUALIZARE GRILĂ CARDURI (Ultra-Professional Dark Glass)
          ======================================================================
        */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDays.map((day) => {
              const DayIcon = getDayIcon(day.id);
              return (
                <article
                  key={day.id}
                  onClick={() => onSelectDay(day)}
                  className="bg-slate-900/60 rounded-3xl border border-slate-800/80 hover:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl hover:bg-slate-900/90 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer card-specular-edge backdrop-blur-xl"
                >
                  {/* Antet Card cu Număr Zi și Locație */}
                  <div className="p-6 pb-4 border-b border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-display font-bold text-sm text-blue-400">
                        0{day.dayNumber}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 block">{day.date}</span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-300">
                          <MapPin className="w-3 h-3 text-blue-400" />
                          <span>{day.location.split(',')[0]} ({day.country})</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-transform">
                      <DayIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Conținutul Cardului */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-300 leading-snug transition-colors">
                        {day.title}
                      </h3>
                      <p className="text-xs text-blue-400/90 font-medium mt-1 mb-3">
                        {day.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed font-light">
                        {day.description}
                      </p>
                    </div>

                    {/* Subsol Card */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                        <span>{day.schedule.length} activități</span>
                        <span aria-hidden="true">·</span>
                        <span>{day.tags[0]}</span>
                      </div>

                      <span className="inline-flex items-center gap-1 font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                        <span>Citește tot</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* 
          ======================================================================
          VIZUALIZARE TIMELINE
          ======================================================================
        */}
        {viewMode === 'timeline' && (
          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-28 pl-6 sm:pl-10 space-y-10">
            {filteredDays.map((day) => {
              return (
                <div key={day.id} className="relative group">
                  {/* Punct Cronologic */}
                  <div className="absolute -left-[35px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold shadow-lg shadow-blue-900/50">
                    {day.dayNumber}
                  </div>

                  {/* Etichetă Dată în Stânga pe Desktop */}
                  <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                    <span className="text-xs font-mono text-slate-400 block font-semibold">{day.date.split(',')[0]}</span>
                    <span className="text-[11px] text-blue-400">{day.country}</span>
                  </div>

                  <div 
                    onClick={() => onSelectDay(day)}
                    className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all cursor-pointer card-specular-edge backdrop-blur-xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-300 transition-colors">
                        {day.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        {day.location}
                      </span>
                    </div>

                    <p className="text-xs text-blue-400 font-medium mb-3">
                      {day.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
                      {day.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <span>{day.schedule.length} etape de orar</span>
                        <span aria-hidden="true">·</span>
                        <span>{day.focus.toUpperCase()}</span>
                      </div>
                      <span className="text-blue-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Deschide orarul complet</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
