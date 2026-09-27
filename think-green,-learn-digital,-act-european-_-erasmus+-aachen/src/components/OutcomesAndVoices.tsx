import React from 'react';
import { Quote, Award, BookCheck, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/projectData';

export const OutcomesAndVoices: React.FC = () => {
  const outcomes = [
    {
      title: "100% Certificare Europass Mobilitate",
      description: "Document oficial emis de Comisia Europeană ce atestă competențele digitale, științifice și lingvistice dobândite de toți cei 18 participanți.",
      icon: Award
    },
    {
      title: "Ghid Didactic de Laborator STEM",
      description: "Metodologie deschisă integrând ecrane interactive și instrumente vizuale în predarea matematicii și fizicii la clasele liceale.",
      icon: BookCheck
    },
    {
      title: "Inițiative Eco în Liceul Solomon Haliță",
      description: "Transferul bunelor practici de sustenabilitate și reciclare observate la Aachen în cadrul liceului din Sângeorz-Băi.",
      icon: ShieldCheck
    },
    {
      title: "Punte Academică Bilaterală",
      description: "Colaborare durabilă între Liceul Teoretic „Solomon Haliță” și partenerii din Geschwister-Scholl-Gymnasium Aachen.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="impact" className="py-24 bg-[#080c17] border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 text-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Antet Secțiune */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Mărturiile Participanților</span>
            <span aria-hidden="true">·</span>
            <span>Impact Durabil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
            Vocile Mobilității & Rezultate Concrete
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base font-light leading-relaxed">
            Iată cum a transformat experiența din Aachen și Bruxelles perspectiva elevilor și a profesorilor de la Liceul Teoretic „Solomon Haliță” asupra științei, ecologiei și cetățeniei europene.
          </p>
        </div>

        {/* Grilă Mărturii */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/60 rounded-3xl border border-slate-800/90 p-8 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-2xl transition-all duration-300 card-specular-edge backdrop-blur-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 flex items-center justify-center">
                    <Quote className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                    {item.pillar}
                  </span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light italic">
                  „{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="font-display font-bold text-white text-base">
                  {item.author}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {item.role}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.institution}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Card Rezultate Concrete */}
        <div className="bg-slate-900/80 rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden card-specular-edge shadow-2xl">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-1 font-semibold">
                  Moștenirea Instituțională · Acțiunea Cheie 1
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  Livrabile Concrete pentru Liceul „Solomon Haliță”
                </h3>
              </div>
              <div className="text-xs text-slate-400 max-w-sm font-light">
                Asigurarea transferului direct al metodelor didactice și al conștientizării ecologice către întreaga comunitate școlară.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {outcomes.map((out, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition-all hover:scale-[1.01]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-3 text-blue-400">
                      <out.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-display font-bold text-white mb-2">
                      {out.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {out.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Realizat în Proiect</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
