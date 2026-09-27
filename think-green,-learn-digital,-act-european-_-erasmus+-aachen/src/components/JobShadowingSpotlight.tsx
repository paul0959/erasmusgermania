import React, { useState } from 'react';
import { 
  Variable, 
  TabletSmartphone, 
  Users2, 
  Check, 
  Sliders, 
  GraduationCap,
  Sparkles,
  School,
  ArrowRight
} from 'lucide-react';
import { PEDAGOGICAL_PILLARS } from '../data/projectData';

export const JobShadowingSpotlight: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('interactive-tech');
  
  // Stare pentru Simulatorul Didactic Interactiv
  const [paramA, setParamA] = useState<number>(1);
  const [paramH, setParamH] = useState<number>(0);
  const [paramK, setParamK] = useState<number>(0);

  const activePillar = PEDAGOGICAL_PILLARS.find((p) => p.id === selectedPillarId) || PEDAGOGICAL_PILLARS[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Variable':
        return Variable;
      case 'TabletSmartphone':
        return TabletSmartphone;
      case 'Users2':
        return Users2;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="job-shadowing" className="py-24 bg-[#080c17] border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 text-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Antet Secțiune */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <School className="w-4 h-4 text-blue-400" />
            <span>Geschwister-Scholl-Gymnasium Aachen</span>
            <span aria-hidden="true">·</span>
            <span>Job Shadowing Profesori</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
            Didactica Matematicii & Învățarea Hibridă
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base font-light leading-relaxed">
            Profesorii de la Liceul Teoretic „Solomon Haliță” (Director Prof. Sîngerozan Varvara, Prof. Frunză Paul-Adrian – matematică și informatică, Prof. Petrașcu Traian – fizică, Prof. Hodoroga Florin – geografie) au analizat direct metodele de lucru din școala parteneră: ecrane interactive pentru rezolvarea sistemelor de ecuații pas cu pas, didactica științelor de laborator, echilibrul cu scrierea pe caiete și cooperarea în echipe româno-germane.
          </p>
        </div>

        {/* 
          ======================================================================
          3 CARDURI DE METODĂ DIDACTICĂ
          ======================================================================
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {PEDAGOGICAL_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            const isSelected = pillar.id === selectedPillarId;

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`rounded-3xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border backdrop-blur-xl card-specular-edge ${
                  isSelected
                    ? 'bg-slate-850/90 border-blue-500/80 ring-2 ring-blue-500/40 shadow-2xl scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900/90 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-blue-900/50 scale-105'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Metoda 0{PEDAGOGICAL_PILLARS.indexOf(pillar) + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">
                    {pillar.techStack[0]}
                  </span>
                  <span className={`font-semibold transition-colors ${
                    isSelected ? 'text-blue-400' : 'text-slate-400'
                  }`}>
                    {isSelected ? 'Selectat' : 'Analizează'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
          ======================================================================
          ZONĂ DETALIATĂ: OBSERVAȚIE DE CLASĂ & SIMULATOR INTERACTIV GEOGEBRA
          ======================================================================
        */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 card-specular-edge shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stânga: Observație de clasă și transfer în România */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block font-semibold mb-1">
                  Practică Pedagogică Observată la Aachen
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {activePillar.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {activePillar.subtitle}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Puncte Cheie Observate:
                </span>
                {activePillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-900/50 space-y-2">
                <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider block">
                  Transfer la Liceul Teoretic „Solomon Haliță”:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {activePillar.transferToRomania}
                </p>
              </div>
            </div>

            {/* Dreapta: Simulator Interactiv de Grafic / Ecrane Interactive */}
            <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Simulator Ecran Interactiv · Didactica Funcțiilor
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    f(x) = {paramA}·(x - {paramH})² + {paramK}
                  </span>
                </div>

                {/* Zona Canvas SVG pentru graficul parabolic */}
                <div className="relative h-56 bg-slate-900/90 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center p-2 mb-4">
                  {/* Grilă carteziană */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                  {/* Axe X și Y */}
                  <div className="absolute inset-x-0 top-1/2 h-px bg-slate-700" />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-slate-700" />

                  {/* Curba funcției interactive */}
                  <svg viewBox="-100 -60 200 120" className="w-full h-full relative z-10 overflow-visible">
                    {/* Parabola: y = a(x-h)^2 + k. SVG coord: y pozitiv în jos => -y */}
                    <path
                      d={`M ${Array.from({ length: 41 }, (_, i) => {
                        const x = (i - 20) * 4;
                        const mathX = x / 10;
                        const mathY = paramA * Math.pow(mathX - paramH, 2) + paramK;
                        const svgY = -mathY * 10;
                        return `${i === 0 ? '' : 'L'} ${x} ${svgY}`;
                      }).join(' ')}`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      className="drop-shadow-[0_0_8px_rgba(56,189,248,0.7)] transition-all duration-150"
                    />
                    {/* Vârful parabolei */}
                    <circle
                      cx={paramH * 10}
                      cy={-paramK * 10}
                      r="4"
                      fill="#ffffff"
                      stroke="#0284c7"
                      strokeWidth="2"
                    />
                  </svg>

                  <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded">
                    V({paramH}, {paramK})
                  </div>
                </div>

                {/* Controale Glisante Parametri */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Curbură (a): <strong className="text-white">{paramA}</strong></span>
                    <input
                      type="range"
                      min="-2"
                      max="3"
                      step="0.5"
                      value={paramA}
                      onChange={(e) => setParamA(parseFloat(e.target.value))}
                      className="w-36 accent-blue-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Translație Orizontală (h): <strong className="text-white">{paramH}</strong></span>
                    <input
                      type="range"
                      min="-4"
                      max="4"
                      step="1"
                      value={paramH}
                      onChange={(e) => setParamH(parseFloat(e.target.value))}
                      className="w-36 accent-blue-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Translație Verticală (k): <strong className="text-white">{paramK}</strong></span>
                    <input
                      type="range"
                      min="-3"
                      max="3"
                      step="1"
                      value={paramK}
                      onChange={(e) => setParamK(parseFloat(e.target.value))}
                      className="w-36 accent-blue-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Model inspirat de didactica digitală din Aachen</span>
                <button
                  onClick={() => {
                    setParamA(1);
                    setParamH(0);
                    setParamK(0);
                  }}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Resetează parametrii
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
