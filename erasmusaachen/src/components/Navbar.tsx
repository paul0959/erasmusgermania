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

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
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
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'py-2 sm:py-2.5 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
            : 'py-2.5 sm:py-3.5 bg-white/80 backdrop-blur-lg border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            <a href="#acasa" onClick={() => { setMobileMenuOpen(false); audioSystem.playSelectSound(); }} className="flex items-center gap-2 sm:gap-3 text-slate-900 group shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-display font-black text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform shrink-0">
                SH
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-display font-black text-sm sm:text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    Erasmus+ Aachen
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-wide truncate max-w-[170px] xs:max-w-[240px] sm:max-w-none">
                  Liceul Teoretic „Solomon Haliță” · 19–23 Mai 2026
                </p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1.5 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200/80">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a key={link.label} href={link.href} onClick={() => audioSystem.playSelectSound()}
                    className={`text-xs uppercase tracking-wider font-bold transition-all duration-200 px-3.5 py-2 rounded-xl flex items-center gap-1.5 ${
                      isActive ? 'bg-blue-50 text-blue-700 shadow-sm font-black' : 'text-slate-500 hover:text-blue-600 hover:bg-slate-100/50'
                    }`}>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <button onClick={() => { setMobileMenuOpen(false); onOpenDossier(); audioSystem.playSelectSound(); }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 border border-transparent">
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Dosar Oficial</span>
                <span className="xs:hidden">Dosar</span>
              </button>

              <button onClick={() => { setMobileMenuOpen(!mobileMenuOpen); audioSystem.playSelectSound(); }}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 lg:hidden transition-all active:scale-95">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-3 duration-200">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-2 pb-4">
              <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col gap-2.5 text-slate-900">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <School className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-semibold">Liceul Teoretic „Solomon Haliță”</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">19 – 23 Mai 2026</span>
                </div>

                <nav className="flex flex-col gap-1.5 py-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    const Icon = link.icon;
                    return (
                      <button key={link.label} onClick={() => handleLinkClick(link.href)}
                        className={`w-full px-4 py-3 rounded-2xl text-left text-sm font-bold transition-all flex items-center justify-between ${
                          isActive ? 'bg-blue-50 text-blue-700 shadow-sm font-black' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                        }`}>
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                          <span>{link.label}</span>
                        </div>
                        {isActive ? <Sparkles className="w-4 h-4 text-blue-600" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                      </button>
                    );
                  })}
                </nav>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                  <button onClick={() => { setMobileMenuOpen(false); onOpenDossier(); audioSystem.playSelectSound(); }}
                    className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-display font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all active:scale-95">
                    <FileText className="w-4 h-4" />
                    <span>Deschide Dosarul Oficial</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden animate-in fade-in duration-200" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
};