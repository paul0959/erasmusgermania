/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, School, Sparkles, ChevronRight, BookOpen, Images, Award, Calendar } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

interface NavbarProps {
  onOpenDossier: () => void;
}

/**
 * MENIU ANTET ADAPTAT PENTRU MOBIL & DESKTOP
 * Conform cerinței exprese:
 * 1. "Adapteaza bara meniului din antent pentru versiunea mobila si intreaga structura a site-ului pentru varianta mobila"
 * 2. Cromatică: Albastru profund (#142232 / #172738), accente Sage Green (#758467) și Ivory (#f5ebdc), contrast optim.
 */
export const Navbar: React.FC<NavbarProps> = ({ onOpenDossier }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('acasa');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ['acasa', 'jurnal-hologram', 'shadowing', 'galerie', 'impact'];
      const scrollPosition = window.scrollY + 160;

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Închide meniul mobil dacă se redimensionează la desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevenire scroll pe fundal când meniul mobil este deschis pe telefoane
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Jurnal pe Zile', href: '#jurnal-hologram', id: 'jurnal-hologram', icon: Calendar },
    { label: 'Job Shadowing STEM', href: '#shadowing', id: 'shadowing', icon: BookOpen },
    { label: 'Galerie Foto', href: '#galerie', id: 'galerie', icon: Images },
    { label: 'Mărturii & Rezultate', href: '#impact', id: 'impact', icon: Award },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    audioSystem.playSelectSound();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'py-2 sm:py-2.5 bg-[#142232]/98 backdrop-blur-xl border-b border-[#25374d] shadow-2xl shadow-black/30'
            : 'py-2.5 sm:py-3.5 bg-[#172738]/95 backdrop-blur-lg border-b border-[#293d55] shadow-lg shadow-black/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo / Badge Ivory + Albastru Închis Adaptiv */}
            <a
              href="#acasa"
              onClick={() => {
                setMobileMenuOpen(false);
                audioSystem.playSelectSound();
              }}
              className="flex items-center gap-2 sm:gap-3 text-white group shrink-0 min-w-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#f5ebdc] text-[#142232] flex items-center justify-center font-display font-black text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform border border-[#c8b28a]/40 shrink-0">
                SH
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-display font-black text-sm sm:text-lg tracking-tight text-[#f5ebdc] group-hover:text-white transition-colors truncate">
                    Erasmus+ Aachen
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#758467] animate-pulse shrink-0 shadow-sm shadow-[#758467]/60" />
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-wide truncate max-w-[170px] xs:max-w-[240px] sm:max-w-none">
                  Liceul Teoretic „Solomon Haliță” · 19–23 Mai 2026
                </p>
              </div>
            </a>

            {/* Nav Links Desktop cu Contrast Înalt & Albastru Închis */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-[#0e1925]/75 p-1.5 rounded-2xl border border-[#273a4e]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => audioSystem.playSelectSound()}
                    className={`text-xs uppercase tracking-wider font-bold transition-all duration-200 px-3.5 py-2 rounded-xl flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#f5ebdc] text-[#142232] shadow-md font-black'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#758467]" />}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Acțiuni Antet: Buton Dosar + Hamburger Mobil */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Buton Dosar Oficial Adaptiv (compact pe telefoane, extins pe tablete/desktop) */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                  audioSystem.playSelectSound();
                }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#758467] hover:bg-[#667459] text-[#f5ebdc] text-xs font-bold shadow-md shadow-[#758467]/30 transition-all hover:scale-105 active:scale-95 border border-[#c8b28a]/40"
                title="Deschide dosarul tehnic al mobilității"
              >
                <FileText className="w-3.5 h-3.5 text-[#f5ebdc]" />
                <span className="hidden xs:inline">Dosar Oficial</span>
                <span className="xs:hidden">Dosar</span>
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  audioSystem.playSelectSound();
                }}
                className="p-2 sm:p-2.5 rounded-xl bg-[#0e1925] text-white hover:bg-white/15 border border-[#273a4e] lg:hidden transition-all active:scale-95"
                aria-label={mobileMenuOpen ? 'Închide meniul de navigare' : 'Deschide meniul de navigare'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#f5ebdc]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#f5ebdc]" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* 
          MENIU MOBIL ADAPTAT PROFESIONAL:
          - Dropdown fluid, ancorat sub bara de antet
          - Cu acces rapid la toate secțiunile, iconițe, stare activă și butonul de Dosar Oficial
        */}
        {mobileMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-3 duration-200">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-2 pb-4">
              <div className="p-4 rounded-3xl bg-[#142232] border border-[#2d435b] shadow-2xl shadow-black/60 flex flex-col gap-2.5 text-white">
                
                {/* Mini-antet informativ în interiorul meniului mobil */}
                <div className="flex items-center justify-between pb-3 border-b border-[#25394e] text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <School className="w-3.5 h-3.5 text-[#758467]" />
                    <span className="font-semibold">Liceul Teoretic „Solomon Haliță”</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1e3146] text-[#f5ebdc] border border-[#304863]">
                    19 – 23 Mai 2026
                  </span>
                </div>

                {/* Lista de Legături Mobile cu indicator vizual activ */}
                <nav className="flex flex-col gap-1.5 py-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.label}
                        onClick={() => handleLinkClick(link.href)}
                        className={`w-full px-4 py-3 rounded-2xl text-left text-sm font-bold transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-[#f5ebdc] text-[#142232] shadow-lg font-black'
                            : 'text-slate-200 hover:bg-white/10 hover:text-white bg-[#0e1724]/60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-[#758467]' : 'text-slate-400'}`} />
                          <span>{link.label}</span>
                        </div>
                        {isActive ? (
                          <Sparkles className="w-4 h-4 text-[#758467]" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Buton prominent de deschidere Dosar Oficial în meniul mobil */}
                <div className="pt-2 border-t border-[#25394e] flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDossier();
                      audioSystem.playSelectSound();
                    }}
                    className="w-full py-3 px-4 rounded-2xl bg-[#758467] hover:bg-[#667459] text-[#f5ebdc] font-display font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#758467]/30 transition-all border border-[#c8b28a]/40 active:scale-95"
                  >
                    <FileText className="w-4 h-4 text-[#f5ebdc]" />
                    <span>Deschide Dosarul Oficial al Mobilității</span>
                  </button>

                  <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-slate-400">
                    <span>Acreditare Erasmus+ 2021-2027</span>
                    <span className="font-mono text-[#f5ebdc]">Aachen · Stolberg</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay pentru meniul mobil */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
