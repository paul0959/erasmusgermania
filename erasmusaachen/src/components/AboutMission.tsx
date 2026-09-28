/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Leaf, 
  Cpu, 
  Globe2, 
  Users, 
  CalendarDays, 
  GraduationCap, 
  CheckCircle2, 
  School, 
  Award,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PROJECT_METADATA, PARTICIPATING_TEACHERS } from '../data/projectData';

export const AboutMission: React.FC = () => {
  const [activeGoal, setActiveGoal] = useState<'green' | 'digital' | 'european'>('green');

  const goals = {
    green: {
      title: "Think Green: Sustenabilitate & Conștientizare Ecologică",
      icon: Leaf,
      badgeText: "Pilonul Ecologic",
      accentBorder: "border-emerald-200",
      accentBg: "from-emerald-50/80 via-white to-teal-50/60",
      accentText: "text-emerald-700",
      description:
        "Atelierul de reutilizare a resurselor naturale (lucrul cu lână naturală pentru obiecte hand-made) de la Geschwister-Scholl-Gymnasium și drumeția ecologică către cel mai înalt punct din Țările de Jos la Dreiländereck.",
      points: [
        "Workshop aplicat cu lână naturală: tehnici creative de realizare a obiectelor hand-made și conștientizare ecologică",
        "Analiza apei termale calde (52°C) la pavilionul istoric Elisenbrunnen în cadrul raliului urban Aachen",
        "Drumeție în natură la „3 Country Point” (Vaalserberg) și explorarea Parcului de Sculpturi din Köln"
      ]
    },
    digital: {
      title: "Learn Digital: Pedagogie STEM & Job Shadowing",
      icon: Cpu,
      badgeText: "Pilonul Tehnologic",
      accentBorder: "border-blue-200",
      accentBg: "from-blue-50/80 via-white to-sky-50/60",
      accentText: "text-blue-700",
      description:
        "Modernizarea învățării la matematică și fizică prin asistență directă la ore în gimnaziul german: ecrane interactive, rezolvarea ecuațiilor prin metoda substituției, raportor virtual și experimente de laborator.",
      points: [
        "Ecrane interactive ca instrument de lucru dinamic în timp real (geometrie, calculul ariei, derivate și funcții)",
        "Echilibru sănătos între digital (tablete) și rigoare tradițională (calcule pe caiete și fișe structurate)",
        "Ateliere interactive de realizare a modelelor geometrice și de origami matematic din hârtie"
      ]
    },
    european: {
      title: "Act European: Cetățenie Europeană Fără Frontiere",
      icon: Globe2,
      badgeText: "Pilonul Cetățeniei",
      accentBorder: "border-indigo-200",
      accentBg: "from-indigo-50/80 via-white to-blue-50/60",
      accentText: "text-indigo-700",
      description:
        "Trăirea directă a unei Europe unite: traversarea fără bariere a granițelor Germaniei, Belgiei și Olandei la Dreiländereck, vizitarea monumentelor UNESCO (Domul din Aachen, Kölner Dom) și acordarea oficială a certificatelor Europass Mobilitate.",
      points: [
        "Simbolul unității europene: stând concomitent cu picioarele în trei țări partenere (DE-BE-NL)",
        "Coeziune și prietenie: vizionarea vlogurilor din România, celebrarea zilei de naștere și masa festivă finală",
        "Certificarea oficială a competențelor europene dobândite de cei 14 elevi și 4 profesori prin Europass"
      ]
    }
  };

  const statItems = [
    {
      value: "14",
      label: "Elevi Participanți",
      detail: "Liceul Teoretic „Solomon Haliță”",
      icon: Users
    },
    {
      value: "04",
      label: "Profesori Însoțitori",
      detail: "Director & Profesori de specialitate",
      icon: GraduationCap
    },
    {
      value: "06",
      label: "Zile Intensive",
      detail: "17 – 23 Mai 2026",
      icon: CalendarDays
    },
    {
      value: "03",
      label: "Țări Străbătute",
      detail: "Germania · Belgia · Olanda",
      icon: Globe2
    }
  ];

  const currentGoal = goals[activeGoal];

  return (
    <section id="misiune" className="py-24 relative text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antet Secțiune */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-3">
            <span>Obiective Strategice</span>
            <span aria-hidden="true">·</span>
            <span>Erasmus+ KA122-SCH</span>
            <span aria-hidden="true">·</span>
            <span>Educație Europeană</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight">
            Misiunea Mobilității: Trei Piloni Fundamentali
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Mobilitatea la <strong className="text-slate-900">Geschwister-Scholl-Gymnasium</strong> din Aachen a fost concepută în jurul a 3 direcții europene prioritare: conștientizarea ecologică (<em>Think Green</em>), didactica digitală și job shadowing-ul la matematică și fizică (<em>Learn Digital</em>) și sentimentul viu de apartenență europeană (<em>Act European</em>).
          </p>
        </div>

        {/* Butoane Segmentate de Selecție Pilon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-slate-100/90 border border-slate-200 rounded-2xl mb-8">
          {(
            [
              { id: 'green', label: 'Think Green (Ecologie & Mediu)', icon: Leaf, activeColor: 'text-emerald-600' },
              { id: 'digital', label: 'Learn Digital (STEM & Shadowing)', icon: Cpu, activeColor: 'text-blue-600' },
              { id: 'european', label: 'Act European (Cetățenie & Valori)', icon: Globe2, activeColor: 'text-indigo-600' },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeGoal === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveGoal(tab.id)}
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isCurrent
                    ? 'bg-white text-slate-900 shadow-md border border-slate-200/80 scale-[1.01]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isCurrent ? tab.activeColor : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cardul Pilonului Selectat (Holographic Light Glass) */}
        <div className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${currentGoal.accentBg} border ${currentGoal.accentBorder} backdrop-blur-xl shadow-xl mb-16 relative overflow-hidden`}>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <span className={`text-xs font-bold uppercase tracking-wider ${currentGoal.accentText} block`}>
                {currentGoal.badgeText}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                {currentGoal.title}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {currentGoal.description}
              </p>

              <div className="pt-4 space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Activități concrete derulate:
                </span>
                {currentGoal.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className={`w-4 h-4 ${currentGoal.accentText} shrink-0 mt-0.5`} />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/90 border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Transfer Didactic în România
              </span>
              <h4 className="text-base font-bold text-slate-900">
                Aplicabilitate la Liceul Teoretic „Solomon Haliță”
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Metodele experimentate în Germania vor fi integrate în orele de matematică, informatică, fizică și geografie din Sângeorz-Băi ({PROJECT_METADATA.sendingAddress}), prin ateliere demonstrative și proiecte ecologice destinate întregii comunități școlare.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Certificare Oficială</span>
                <span className="text-blue-700 font-semibold">Europass Mobilitate</span>
              </div>
            </div>

          </div>
        </div>

        {/* 
          ======================================================================
          ECHIPA DE PROFESORI PARTICIPANȚI
          ======================================================================
        */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                Delegația Cadrelor Didactice · Roluri & Responsabilități
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                Profesorii Participanți din Sângeorz-Băi
              </h3>
            </div>
            <div className="text-xs text-slate-500 max-w-sm">
              Echipa pedagogică ce a asigurat succesul mobilității, asistența la ore și parteneriatul de lungă durată cu Geschwister-Scholl-Gymnasium.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARTICIPATING_TEACHERS.map((teacher, idx) => (
              <div
                key={idx}
                className="hologram-card rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-display font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      teacher.roleType === 'shadowing'
                        ? 'bg-blue-100 text-blue-800'
                        : teacher.roleType === 'coordinator'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {teacher.roleType === 'shadowing' ? 'Job Shadowing' : teacher.roleType === 'coordinator' ? 'Coordonator' : 'Însoțitor Elevi'}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    {teacher.name}
                  </h4>
                  <div className="text-xs text-blue-700 font-semibold mb-2">
                    {teacher.role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {teacher.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Specialitate</span>
                  <span className="font-medium text-slate-800 truncate max-w-[130px]">{teacher.disciplines.split('&')[0].trim()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cifre Cheie ale Proiectului */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
