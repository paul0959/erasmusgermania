import React from 'react';
import { ArrowUp, School, MapPin, Globe2 } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-300 border-t border-slate-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Emblema Oficială a UE & Clauza de Declinare a Răspunderii */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Steagul UE cu cele 12 stele aurii */}
              <div className="w-12 h-8 rounded bg-[#003399] flex items-center justify-center relative shadow-md border border-blue-400/40">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x = 8.5 * Math.cos(angle);
                    const y = 8.5 * Math.sin(angle);
                    return (
                      <span
                        key={i}
                        className="absolute text-[6px] text-[#FFCC00] leading-none select-none font-bold"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                      >
                        ★
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  Co-finanțat de Uniunea Europeană
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Programul Erasmus+ al Uniunii Europene
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light pr-4">
              Finanțat de Uniunea Europeană. Punctele de vedere și opiniile exprimate aparțin însă exclusiv autorilor și nu reflectă neapărat punctele de vedere ale Uniunii Europene sau ale Agenției Naționale pentru Programe Comunitare în Domeniul Educației și Formării Profesionale (ANPCDEFP). Nici Uniunea Europeană și nici autoritatea finanțatoare nu pot fi considerate răspunzătoare pentru acestea.
            </p>
          </div>

          {/* Col 2: Liceul Teoretic „Solomon Haliță” */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block font-semibold">
              Instituția Beneficiară
            </span>
            <h4 className="text-base font-display font-bold text-white flex items-center gap-2">
              <School className="w-4 h-4 text-blue-400" />
              <span>{PROJECT_METADATA.sendingSchool}</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Strada Republicii nr. 40, Sângeorz-Băi, Județul Bistrița-Năsăud, România. <br />
              Instituție de învățământ liceal dedicată educației durabile, științei aplicate și parteneriatelor europene.
            </p>
            <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Școala gazdă: Geschwister-Scholl-Gymnasium Aachen, Germania</span>
            </div>
          </div>

          {/* Col 3: Navigație Rapidă */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-semibold">
              Secțiunile Proiectului
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#acasa" className="hover:text-white hover:underline transition-all">
                  Pagina Principală
                </a>
              </li>
              <li>
                <a href="#misiune" className="hover:text-white hover:underline transition-all">
                  Misiune & Obiective
                </a>
              </li>
              <li>
                <a href="#jurnal" className="hover:text-white hover:underline transition-all">
                  Jurnalul Zilnic (Zilele 1–6)
                </a>
              </li>
              <li>
                <a href="#job-shadowing" className="hover:text-white hover:underline transition-all">
                  Job Shadowing Matematică & Fizică
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-white hover:underline transition-all">
                  Galeria Foto Documentară
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white hover:underline transition-all">
                  Mărturii & Rezultate
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-all hover:bg-slate-800"
              >
                <span>Înapoi sus</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Subsol Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Liceul Teoretic „Solomon Haliță”. Toate drepturile rezervate.</span>
            <span aria-hidden="true">·</span>
            <span>Erasmus+ KA122-SCH</span>
          </div>

          <div className="flex items-center gap-3 font-semibold text-slate-400">
            <span>Think Green</span>
            <span aria-hidden="true">·</span>
            <span>Learn Digital</span>
            <span aria-hidden="true">·</span>
            <span>Act European</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
