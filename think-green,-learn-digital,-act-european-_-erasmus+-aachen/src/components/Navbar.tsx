import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, School } from 'lucide-react';

interface NavbarProps {
  onOpenDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDossier }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('acasa');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['acasa', 'misiune', 'jurnal', 'job-shadowing', 'galerie', 'impact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Despre Misiune', href: '#misiune', id: 'misiune' },
    { label: 'Jurnal Zilnic', href: '#jurnal', id: 'jurnal' },
    { label: 'Job Shadowing', href: '#job-shadowing', id: 'job-shadowing' },
    { label: 'Galerie Foto', href: '#galerie', id: 'galerie' },
    { label: 'Mărturii & Impact', href: '#impact', id: 'impact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#080c17]/85 backdrop-blur-xl border-b border-slate-800 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark Oficial */}
          <a
            href="#acasa"
            className="flex items-center gap-3 text-white group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-400/30 flex items-center justify-center font-display font-extrabold text-sm tracking-tight text-white shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform">
              SH
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white leading-tight flex items-center gap-1.5">
                <span>Erasmus+ Aachen 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Liceul Teoretic „Solomon Haliță”
              </span>
            </div>
          </a>

          {/* Meniu Central Curat (Zero pills conform ghidului) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Acțiuni Dreapta */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDossier}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Fișă Tehnică</span>
            </button>

            <a
              href="#jurnal"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-900/40 hover:scale-[1.02]"
            >
              <span>Explorează Zilele 1–6</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Buton Meniu Mobil */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDossier}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 rounded-lg"
              aria-label="Fișă Tehnică"
            >
              <FileText className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg"
              aria-label={mobileMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Meniu Mobil Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#0c1222]/95 border border-slate-800 backdrop-blur-2xl shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800/80 rounded-lg border border-slate-700"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Vezi Fișa Tehnică a Proiectului</span>
              </button>
              <a
                href="#jurnal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg"
              >
                <span>Descoperă Zilele 1–6</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
