import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  MapPin, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Camera,
  Layers,
  Sparkles,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/projectData';

interface GallerySectionProps {
  onSelectDayById?: (id: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectDayById }) => {
  const [filter, setFilter] = useState<'all' | 'cultural' | 'stem' | 'green' | 'team'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  // Navigare tastatură în lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Helper pentru asocierea fiecărei fotografii cu ziua mobilității (1 - 6)
  const getDayNumberForItem = (id: number): number => {
    switch (id) {
      case 1: return 1; // Bruxelles Atomium
      case 2: return 2; // Geschwister Scholl
      case 3: return 2; // Think green lana
      case 4: return 3; // Aachen Dom
      case 5: return 3; // Gelaterie
      case 6: return 4; // Dreilandereck
      case 7: return 5; // Koln
      case 8: return 6; // Diplome
      default: return 1;
    }
  };

  // Randare vizuală tematică pentru fiecare reper fotografic
  const renderVisualArtwork = (item: GalleryItem) => {
    switch (item.id) {
      case 1: // Atomium & Bruxelles
        return (
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
            {/* Rețeaua cristalină a Atomiumului */}
            <svg viewBox="0 0 200 140" className="w-48 h-36 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
              {/* Linii de legătură tubulare */}
              <line x1="100" y1="70" x2="60" y2="40" stroke="#64748b" strokeWidth="3" />
              <line x1="100" y1="70" x2="140" y2="40" stroke="#64748b" strokeWidth="3" />
              <line x1="100" y1="70" x2="60" y2="100" stroke="#64748b" strokeWidth="3" />
              <line x1="100" y1="70" x2="140" y2="100" stroke="#64748b" strokeWidth="3" />
              <line x1="100" y1="70" x2="100" y2="20" stroke="#38bdf8" strokeWidth="3.5" />
              <line x1="100" y1="70" x2="100" y2="120" stroke="#64748b" strokeWidth="3" />
              {/* Bare diagonale exterioare */}
              <line x1="60" y1="40" x2="140" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="60" y1="100" x2="140" y2="100" stroke="#475569" strokeWidth="2" />
              <line x1="60" y1="40" x2="60" y2="100" stroke="#475569" strokeWidth="2" />
              <line x1="140" y1="40" x2="140" y2="100" stroke="#475569" strokeWidth="2" />
              {/* Sferele de fier ale cristalului Atomium */}
              {[[100,20], [60,40], [140,40], [100,70], [60,100], [140,100], [100,120]].map(([cx, cy], i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r={i === 3 ? 12 : 9} fill="#38bdf8" opacity="0.9" />
                  <circle cx={cx - 2} cy={cy - 2} r={i === 3 ? 5 : 3.5} fill="#ffffff" opacity="0.8" />
                </g>
              ))}
            </svg>
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-blue-300/80">Atomium · 102m</div>
          </div>
        );

      case 2: // Geschwister-Scholl-Gymnasium
        return (
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center">
            {/* Clasă STEM cu Ecran Interactiv */}
            <svg viewBox="0 0 200 140" className="w-48 h-36">
              {/* Cadrul ecranului tactil */}
              <rect x="35" y="20" width="130" height="75" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
              {/* Conținut ecran: ecuație și parabolă */}
              <line x1="45" y1="58" x2="155" y2="58" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="100" y1="28" x2="100" y2="88" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M 60 78 Q 100 32 140 78" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="50" y="36" fill="#93c5fd" fontSize="8" fontFamily="monospace">f(x) = ax² + bx + c</text>
              <text x="110" y="85" fill="#34d399" fontSize="7" fontFamily="monospace">x = y + 3</text>
              {/* Stand ecran */}
              <rect x="94" y="95" width="12" height="18" fill="#475569" />
              <rect x="75" y="113" width="50" height="5" rx="2" fill="#64748b" />
            </svg>
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-indigo-300/80">Laborator Matematică Aachen</div>
          </div>
        );

      case 3: // Think Green cu Lână
        return (
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex items-center justify-center">
            {/* Război de lână / Model ecologic */}
            <svg viewBox="0 0 200 140" className="w-48 h-36">
              {/* Cadru lemn */}
              <rect x="50" y="25" width="100" height="90" rx="4" fill="none" stroke="#92400e" strokeWidth="4" />
              {/* Fire de urzeală */}
              {[60, 72, 84, 96, 108, 120, 132, 140].map((x, i) => (
                <line key={i} x1={x} y1="28" x2={x} y2="112" stroke="#d97706" strokeWidth="1" opacity="0.6" />
              ))}
              {/* Țesătură din lână colorată */}
              <path d="M 52 50 Q 100 45 148 52" fill="none" stroke="#10b981" strokeWidth="6" />
              <path d="M 52 64 Q 100 70 148 64" fill="none" stroke="#34d399" strokeWidth="7" />
              <path d="M 52 78 Q 100 74 148 78" fill="none" stroke="#6ee7b7" strokeWidth="6" />
              <path d="M 52 92 Q 100 97 148 92" fill="none" stroke="#059669" strokeWidth="7" />
              {/* Frunză ecologică */}
              <circle cx="160" cy="35" r="10" fill="#10b981" opacity="0.2" />
            </svg>
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-300/80">Atelier Think Green · Lână Naturală</div>
          </div>
        );

      case 4: // Aachen City Rallye & Domul UNESCO
        return (
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center">
            {/* Silueta Domului Carolingian din Aachen */}
            <svg viewBox="0 0 200 140" className="w-48 h-36">
              {/* Octogonul carolingian central */}
              <polygon points="100,20 125,40 125,85 100,105 75,85 75,40" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              {/* Cupola octogonală */}
              <path d="M 75 40 Q 100 15 125 40" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" strokeWidth="1.5" />
              <line x1="100" y1="12" x2="100" y2="28" stroke="#fbbf24" strokeWidth="2" />
              <line x1="95" y1="18" x2="105" y2="18" stroke="#fbbf24" strokeWidth="2" />
              {/* Arcuri romane și gotice */}
              <path d="M 85 85 Q 100 65 115 85" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              <rect x="94" y="75" width="12" height="28" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
              {/* Turnul de vest */}
              <polygon points="55,45 65,30 75,45" fill="#334155" stroke="#f59e0b" strokeWidth="1" />
              <rect x="55" y="45" width="20" height="50" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
            </svg>
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-amber-300/80">Domul din Aachen · Patrimoniu UNESCO 1978</div>
          </div>
        );

      case 5: // Gelateria Absolventei din 1995
        return (
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 flex items-center justify-center">
            {/* Fațadă bistrot & cupă de înghețată */}
            <svg viewBox="0 0 200 140" className="w-48 h-36">
              {/* Copertină în dungi */}
              <path d="M 50 40 L 150 40 L 140 60 L 60 60 Z" fill="#e11d48" opacity="0.8" />
              {[60, 80, 100, 120, 140].map((x, i) => (
                <line key={i} x1={x} y1="40" x2={x - 2} y2="60" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
              ))}
              {/* Pahar de sticlă */}
              <path d="M 85 75 L 115 75 L 105 105 L 95 105 Z" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
              <line x1="100" y1="105" x2="100" y2="118" stroke="#f43f5e" strokeWidth="2" />
              <line x1="88" y1="118" x2="112" y2="118" stroke="#f43f5e" strokeWidth="2" />
              {/* Cupe de înghețată */}
              <circle cx="93" cy="70" r="10" fill="#fb7185" />
              <circle cx="107" cy="70" r="10" fill="#fbcfe8" />
              <circle cx="100" cy="62" r="9" fill="#f43f5e" />
              <text x="68" y="32" fill="#fda4af" fontSize="8" fontFamily="monospace">PROMOȚIA 1995</text>
            </svg>
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-rose-300/80">Comunitate Solomon Haliță în Aachen</div>
          </div>
        );

      case 6: // Dreiländereck: 3 Country Point
        return (
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 flex items-center justify-center">
            {/* Monumentul celor 3 țări și roza vânturilor */}
            <svg viewBox="0 0 200 140" className="w-48 h-36">
              {/* Cercuri concentrice ale punctului comun */}
              <circle cx="100" cy="70" r="45" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              {/* Linii tri-frontaliere */}
              <line x1="100" y1="70" x2="100" y2="20" stroke="#60a5fa" strokeWidth="2" />
              <line x1="100" y1="70" x2="55" y2="105" stroke="#f59e0b" strokeWidth="2" />
              <line x1="100" y1="70" x2="145" y2="105" stroke="#ef4444" strokeWidth="2" />
              {/* Borna centrală de piatră */}
              <polygon points="100,50 108,68 92,68" fill="#e2e8f0" stroke="#0284c7" strokeWidth="1.5" />
              <circle cx="100" cy="70" r="5" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
              {/* Etichete Țări */}
              <text x="92" y="35" fill="#93c5fd" fontSize="9" fontWeight="bold">DE</text>
              <text x="60" y="85" fill="#fcd34d" fontSize="9" fontWeight="bold">BE</text>
              <text x="125" y="85" fill="#fca5a5" fontSize="9" fontWeight="bold">NL</text>
            </svg>
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-sky-300/80">Vaalserberg 322.4m · DE-BE-NL</div>
          </div>
        );

      case 7: // Catedrala din Köln & Telegondola
        return (
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-center">
            {/* Turlele gemene ale Domului din Köln și cablul telegondolei peste Rin */}
            <svg viewBox="0 0 200 140" className="w-48 h-36">
              {/* Fluviul Rin */}
              <path d="M 0 115 Q 100 105 200 115" stroke="#0284c7" strokeWidth="6" fill="none" opacity="0.6" />
              {/* Două turle gotice gemene */}
              <polygon points="65,20 75,70 55,70" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
              <polygon points="95,20 105,70 85,70" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
              <rect x="55" y="70" width="50" height="40" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              {/* Rozasă gotică */}
              <circle cx="80" cy="85" r="9" fill="none" stroke="#38bdf8" strokeWidth="1" />
              {/* Cablu telegondolă peste Rin */}
              <line x1="20" y1="40" x2="180" y2="55" stroke="#94a3b8" strokeWidth="1.5" />
              {/* Cabina telegondolei */}
              <rect x="135" y="52" width="16" height="12" rx="3" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
              <line x1="143" y1="48" x2="143" y2="52" stroke="#ffffff" strokeWidth="1.5" />
            </svg>
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-cyan-300/80">Kölner Dom 157m & Kölner Seilbahn</div>
          </div>
        );

      case 8: // Festivitatea Europass
        return (
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
            {/* Certificat oficial Europass Mobilitate cu stele UE */}
            <svg viewBox="0 0 200 140" className="w-48 h-36">
              {/* Pagină diplomă */}
              <rect x="60" y="25" width="80" height="90" rx="3" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              {/* Antet steag UE */}
              <rect x="68" y="32" width="16" height="11" fill="#003399" />
              <circle cx="76" cy="37.5" r="3.5" fill="none" stroke="#ffcc00" strokeWidth="1" strokeDasharray="1 1" />
              {/* Linii de text diplomă */}
              <line x1="88" y1="36" x2="132" y2="36" stroke="#93c5fd" strokeWidth="2" />
              <line x1="88" y1="41" x2="120" y2="41" stroke="#60a5fa" strokeWidth="1" />
              <line x1="68" y1="52" x2="132" y2="52" stroke="#475569" strokeWidth="1" />
              <line x1="68" y1="60" x2="132" y2="60" stroke="#475569" strokeWidth="1" />
              <line x1="68" y1="68" x2="132" y2="68" stroke="#475569" strokeWidth="1" />
              {/* Sigiliu de ceară roșie/aurie cu panglici */}
              <circle cx="100" cy="85" r="10" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
              <polygon points="96,93 92,108 100,102 108,108 104,93" fill="#d97706" />
            </svg>
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-blue-300/80">Certificare Oficială Europass Mobilitate</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="galerie" className="py-24 bg-[#0a0f1d] border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 text-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Antet și Filtre Segmentate Ultra-Profesionale */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
              <Camera className="w-3.5 h-3.5 text-blue-400" />
              <span>Documentar Vizual de Arhivă</span>
              <span aria-hidden="true">·</span>
              <span>8 Momente Emblematice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
              Galeria Documentară a Mobilității
            </h2>
            <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base font-light">
              Bruxelles, Geschwister-Scholl-Gymnasium Aachen, raliul urban, punctul celor 3 țări și Köln — arhiva vizuală a experienței europene.
            </p>
          </div>

          {/* Filtre Segmentate de Categorie (Anti-slop zero pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl card-specular-edge">
            {(
              [
                { id: 'all', label: 'Toate (8)' },
                { id: 'cultural', label: 'Cultural & Oraș' },
                { id: 'stem', label: 'Școală & STEM' },
                { id: 'green', label: 'Think Green' },
                { id: 'team', label: 'Comunitate' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 
          ======================================================================
          GRILĂ PERFECT ORGANIZATĂ (4 COLOANE PE DESKTOP - 2 RÂNDURI DE CÂTE 4)
          Aspect 100% simetric, impecabil aliniat, ultra-profesional
          ======================================================================
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const dayNum = getDayNumberForItem(item.id);

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="group bg-slate-900/60 rounded-2xl border border-slate-800/90 hover:border-blue-500/60 hover:bg-slate-900/95 overflow-hidden transition-all duration-300 cursor-pointer flex flex-col card-specular-edge hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                {/* 1. Cadru Vizual cu Raport de Aspect Fix (16:10) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  {renderVisualArtwork(item)}

                  {/* Watermark Tehnic de Cameră */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                    FOTO 0{item.id} · RAW
                  </div>

                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-blue-400 border border-white/10">
                    {item.location.split(',')[0]}
                  </div>

                  {/* Hover Overlay cu efect de deschidere */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-2xs">
                    <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-blue-900/50">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Deschide HD</span>
                    </div>
                  </div>
                </div>

                {/* 2. Corpul Cardului Textual */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Metadate Fără Pastile (Zero-Pill Discipline conform ghidului) */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                      <span className="font-semibold text-blue-400">Ziua 0{dayNum}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-display font-bold text-base text-white group-hover:text-blue-300 leading-snug transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* 3. Subsol Card */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-slate-500">Erasmus+ KA122</span>
                    <span className="font-medium text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>Mărește</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 
        ========================================================================
        MODAL LIGHTBOX ULTRA-PROFESIONAL (REZOLUȚIE MARE + DETALII PEDAGOGICE)
        ========================================================================
      */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0c1222] rounded-3xl overflow-hidden border border-slate-700/80 shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col max-h-[92vh] card-specular-edge"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bara Superioară */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 text-slate-300 text-xs bg-slate-900/60">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-blue-400" />
                <span className="font-mono font-bold text-white">
                  Fotografia {activeLightboxIndex + 1} din {filteredItems.length}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{filteredItems[activeLightboxIndex].tag}</span>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Închide previzualizarea"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Corpul Lightbox: Vizual Mare */}
            <div className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
              <div className="w-full h-full max-w-2xl max-h-[420px]">
                {renderVisualArtwork(filteredItems[activeLightboxIndex])}
              </div>

              {/* Săgeți de Navigare */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 border border-slate-700 text-white transition-all shadow-lg"
                aria-label="Fotografia anterioară"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 border border-slate-700 text-white transition-all shadow-lg"
                aria-label="Fotografia următoare"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Panou Informativ Inferior */}
            <div className="p-6 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-blue-400 font-mono">
                  <span>Ziua 0{getDayNumberForItem(filteredItems[activeLightboxIndex].id)}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    {filteredItems[activeLightboxIndex].location}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                  {filteredItems[activeLightboxIndex].description}
                </p>
              </div>

              {/* Acțiune: Deschide Jurnalul Zilei */}
              <div className="shrink-0 flex items-center gap-2">
                {onSelectDayById && (
                  <button
                    onClick={() => {
                      const dayNum = getDayNumberForItem(filteredItems[activeLightboxIndex].id);
                      setActiveLightboxIndex(null);
                      onSelectDayById(dayNum);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all shadow-lg shadow-blue-900/40"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Vezi Jurnalul Zilei 0{getDayNumberForItem(filteredItems[activeLightboxIndex].id)}</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
