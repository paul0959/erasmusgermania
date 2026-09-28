/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Camera, 
  Layers, 
  FileText,
  UserCheck
} from 'lucide-react';
import { DAILY_JOURNAL, DayJournal, DayPhoto } from '../data/projectData';
import { PhotoCardViewer } from './PhotoCardViewer';

interface DailyJournalProps {
  onSelectDay: (day: DayJournal) => void;
  onSelectPhoto?: (photo: DayPhoto) => void;
}

export const DailyJournal: React.FC<DailyJournalProps> = ({ 
  onSelectDay,
  onSelectPhoto 
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cultural' | 'green' | 'stem'>('all');
  const [activeDayTab, setActiveDayTab] = useState<number>(0); // 0 means all

  const filteredDays = DAILY_JOURNAL.filter((day) => {
    if (activeDayTab !== 0 && day.dayNumber !== activeDayTab) return false;
    if (selectedFilter === 'all') return true;
    return day.focus === selectedFilter;
  });

  return (
    <section id="jurnal" className="py-24 relative text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
              <span>Cronica Mobilității</span>
              <span aria-hidden="true">·</span>
              <span>17 – 23 Mai 2026</span>
              <span aria-hidden="true">·</span>
              <span>Jurnalul de Bord</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight">
              Prezentarea pe Zile: Jurnal & Fotografii
            </h2>
            <p className="text-slate-600 mt-4 text-base leading-relaxed">
              Fiecare zi a mobilității include orarul detaliat, observațiile de <strong>Job Shadowing</strong> consemnate de profesorii de științe și galeria dedicată de cadre foto documentare.
            </p>
          </div>

          {/* Quick Filter by Category */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Toate Zilele
            </button>
            <button
              onClick={() => setSelectedFilter('stem')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedFilter === 'stem'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Job Shadowing STEM
            </button>
            <button
              onClick={() => setSelectedFilter('green')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedFilter === 'green'
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Think Green
            </button>
            <button
              onClick={() => setSelectedFilter('cultural')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedFilter === 'cultural'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cultural & Oraș
            </button>
          </div>
        </div>

        {/* Segmented Day Selector Bar (Zilele 1 to 6) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveDayTab(0)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeDayTab === 0
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Vezi Toate Cele 6 Zile
          </button>
          {DAILY_JOURNAL.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDayTab(day.dayNumber)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeDayTab === day.dayNumber
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>Ziua {day.dayNumber}</span>
              <span className="text-[11px] opacity-75 hidden sm:inline">({day.location.split('&')[0].trim()})</span>
            </button>
          ))}
        </div>

        {/* 
          ======================================================================
          CARTONAȘE MARI HOLOGRAFICE PENTRU FIECARE ZI (DESCHIDERE & MĂRIRE)
          ======================================================================
        */}
        <div className="space-y-12">
          {filteredDays.map((day) => (
            <div
              key={day.id}
              className="hologram-card rounded-[32px] p-6 sm:p-10 transition-all duration-300 hover:shadow-xl hover:border-blue-300 relative overflow-hidden"
            >
              {/* Top Accent Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/80">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm">
                    Z{day.dayNumber}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl">
                      {day.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        {day.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {day.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {day.focus === 'stem' ? 'STEM & Digital' : day.focus === 'green' ? 'Think Green' : 'Cultural & Istoric'}
                  </span>
                </div>
              </div>

              {/* Subtitle & Narrative */}
              <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-blue-900">
                    {day.subtitle}
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {day.description}
                  </p>

                  {/* Hourly Schedule Snippet */}
                  <div className="pt-3">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                      Momente Cheie ale Programului:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {day.schedule.slice(0, 4).map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <span className="font-mono font-bold text-blue-700 shrink-0">{s.time}</span>
                          <span className="line-clamp-2">{s.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Takeaway */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-950 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Concluzia Zilei: </strong>
                      {day.takeaway}
                    </div>
                  </div>
                </div>

                {/* Job Shadowing Teachers' Specific Notes */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4" />
                      Raport de Job Shadowing
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Fișă de Asistență</span>
                  </div>

                  <p className="text-xs font-semibold text-slate-800">
                    {day.shadowingNotes?.focusArea || "Observații Didactice & Metodice"}
                  </p>

                  <p className="text-[11px] text-slate-500 italic">
                    Observatori: {day.shadowingNotes?.observers || "Prof. Frunză Paul-Adrian & Prof. Petrașcu Traian"}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {day.shadowingNotes?.keyObservations.map((obs, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold shrink-0">•</span>
                        <span>{obs}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-700">
                    <strong className="text-blue-900 font-semibold">Aplicare la Solomon Haliță: </strong>
                    {day.shadowingNotes?.pedagogicalApplication}
                  </div>
                </div>
              </div>

              {/* 
                ================================================================
                GALERIA FOTO PREVIZUALIZARE PENTRU ZIUA RESPECTIVĂ
                "sa apara poze si in prezentarile pe zile"
                ================================================================
              */}
              <div className="mt-6 pt-6 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Fotografii Documentare din Ziua {day.dayNumber} ({day.photos.length} Cadre)
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">
                    Faceți clic pe o fotografie pentru mărire la rezoluție maximă
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {day.photos.map((photo) => (
                    <PhotoCardViewer
                      key={photo.id}
                      photo={photo}
                      onClick={() => onSelectPhoto?.(photo)}
                      showCaption={true}
                      aspectRatio="video"
                    />
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {day.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectDay(day)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span>Deschide Prezentarea Completă a Zilei {day.dayNumber}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
