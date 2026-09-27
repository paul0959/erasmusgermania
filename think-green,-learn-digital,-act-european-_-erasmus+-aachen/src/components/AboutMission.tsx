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
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { PROJECT_METADATA, PARTICIPATING_TEACHERS } from '../data/projectData';

export const AboutMission: React.FC = () => {
  const [activeGoal, setActiveGoal] = useState<'green' | 'digital' | 'european'>('green');

  const goals = {
    green: {
      title: "Think Green: Sustenabilitate & Educație Ecologică",
      icon: Leaf,
      badgeText: "Pilonul Ecologic",
      accentBorder: "border-emerald-500/40",
      accentBg: "from-emerald-950/40 to-slate-900/80",
      accentText: "text-emerald-400",
      description:
        "Workshop-ul de reutilizare a resurselor naturale (lucrul cu lână pentru obiecte hand-made) de la Geschwister-Scholl-Gymnasium și drumeția ecologică către cel mai înalt punct din Țările de Jos la Dreiländereck.",
      points: [
        "Workshop practic cu lână naturală: tehnici creative de realizare a obiectelor hand-made și conștientizare ecologică",
        "Analiza apei termale calde la pavilionul istoric Elisenbrunnen în cadrul raliului urban Aachen",
        "Drumeție în natură la „3 Country Point” (Vaalserberg) și explorarea Parcului de Sculpturi din Köln"
      ]
    },
    digital: {
      title: "Learn Digital: Pedagogie STEM & Job Shadowing",
      icon: Cpu,
      badgeText: "Pilonul Tehnologic",
      accentBorder: "border-cyan-500/40",
      accentBg: "from-cyan-950/40 to-slate-900/80",
      accentText: "text-cyan-400",
      description:
        "Modernizarea învățării la matematică și fizică prin asistență directă la ore în gimnaziul german: ecrane interactive, sisteme de ecuații prin metoda substituției, raportor virtual și tablete individuale.",
      points: [
        "Ecrane interactive ca instrument de lucru în timp real (geometrie, calculul ariei, derivate și funcții)",
        "Echilibru sănătos între digital (tablete) și rigoare tradițională (calcule pe caiete și fișe structurate)",
        "Ateliere interactive de realizare a modelelor geometrice și de origami din hârtie"
      ]
    },
    european: {
      title: "Act European: Cetățenie Europeană Fără Frontiere",
      icon: Globe2,
      badgeText: "Pilonul Cetățeniei",
      accentBorder: "border-blue-500/40",
      accentBg: "from-blue-950/40 to-slate-900/80",
      accentText: "text-blue-400",
      description:
        "Trăirea directă a unei Europe unite: traversarea fără controale a granițelor Germaniei, Belgiei și Olandei la Dreiländereck, vizitarea monumentelor UNESCO (Domul din Aachen, Kölner Dom) și obținerea certificatelor Europass.",
      points: [
        "Simbolul unității europene: stând cu un picior într-o țară și altul în vecina ei la cota maximă din Țările de Jos",
        "Coeziune și prietenie: vizionarea vlogurilor din România, celebrarea zilei de naștere și masa festivă de încheiere",
        "Certificarea oficială a competențelor europene dobândite de cei 14 elevi și 4 profesori prin Europass"
      ]
    }
  };

  const statItems = [
    {
      value: "14",
      label: "Elevi Participanți",
      detail: "Liceul „Solomon Haliță”",
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
      detail: "Belgia · Germania · Olanda",
      icon: Globe2
    }
  ];

  const currentGoal = goals[activeGoal];

  return (
    <section id="misiune" className="py-24 bg-[#080d1a] border-t border-slate-800/80 relative text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antet Secțiune Curat */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span>Obiective Strategice</span>
            <span aria-hidden="true">·</span>
            <span>Erasmus+ KA122-SCH</span>
            <span aria-hidden="true">·</span>
            <span>Educație Europeană</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
            Misiunea Mobilității: Trei Piloni Fundamentali
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed font-light">
            Mobilitatea la <strong className="text-slate-200">Geschwister-Scholl-Gymnasium</strong> din Aachen a fost concepută în jurul a 3 direcții europene prioritare: conștientizarea ecologică (*Think Green*), didactica digitală și job shadowing-ul la matematică/fizică (*Learn Digital*) și sentimentul de apartenență europeană (*Act European*).
          </p>
        </div>

        {/* Butoane Segmentate de Selecție Pilon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl mb-10 card-specular-edge">
          {(
            [
              { id: 'green', label: 'Think Green (Ecologie & Sustenabilitate)', icon: Leaf, activeColor: 'text-emerald-400' },
              { id: 'digital', label: 'Learn Digital (STEM & Job Shadowing)', icon: Cpu, activeColor: 'text-cyan-400' },
              { id: 'european', label: 'Act European (Cetățenie & Valori)', icon: Globe2, activeColor: 'text-blue-400' },
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
                    ? 'bg-slate-800 text-white shadow-lg border border-slate-700/80 scale-[1.01]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isCurrent ? tab.activeColor : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cardul Pilonului Selectat */}
        <div className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${currentGoal.accentBg} border ${currentGoal.accentBorder} backdrop-blur-xl shadow-2xl mb-16 relative overflow-hidden card-specular-edge`}>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <span className={`text-xs font-mono uppercase tracking-widest ${currentGoal.accentText} block font-semibold`}>
                {currentGoal.badgeText}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {currentGoal.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {currentGoal.description}
              </p>

              <div className="pt-4 space-y-3">
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
                  Activități concrete derulate:
                </span>
                {currentGoal.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className={`w-4 h-4 ${currentGoal.accentText} shrink-0 mt-0.5`} />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                Transfer Didactic în România
              </span>
              <h4 className="text-base font-bold text-white">
                Aplicabilitate la Liceul Teoretic „Solomon Haliță”
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Metodele experimentate în Germania vor fi integrate în orele de matematică, informatică, fizică și geografie din Sângeorz-Băi ({PROJECT_METADATA.sendingAddress}), prin ateliere demonstrative și proiecte ecologice destinate întregii comunități școlare.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Certificare Oficială</span>
                <span className="text-blue-400 font-medium">Europass Mobilitate</span>
              </div>
            </div>

          </div>
        </div>

        {/* 
          ======================================================================
          ECHIPA DE PROFESORI PARTICIPANȚI ÎN JOB SHADOWING
          ======================================================================
        */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
                Delegația Cadrelor Didactice · Job Shadowing
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Profesorii Participanți din Sângeorz-Băi
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-light max-w-sm">
              Echipa pedagogică ce a reprezentat Liceul Teoretic „Solomon Haliță” în activitățile de asistență și cooperare la Geschwister-Scholl-Gymnasium.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTICIPATING_TEACHERS.map((teacher, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 rounded-2xl border border-slate-800/90 p-6 flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-900/90 transition-all card-specular-edge group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-display font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {teacher.disciplines.split('&')[0].trim()}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-white group-hover:text-blue-300 transition-colors">
                    {teacher.name}
                  </h4>
                  <div className="text-xs text-blue-400 font-medium mb-3">
                    {teacher.role}
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {teacher.jobShadowingFocus}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                  <span>Job Shadowing</span>
                  <span className="text-slate-300 font-sans">Aachen 2026</span>
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
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all card-specular-edge group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
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
