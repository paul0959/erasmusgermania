/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, School, Sparkles } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

interface NavbarProps {
  onOpenDossier: () => void;
}

/**
 * MENIU DIN ANTET: ALBASTRU MAI ÎNCHIS + ACCENTE SAGE GREEN & IVORY
 * Conform cerințelor:
 * 1. "Varianta de albastru sa fie mai inchisa."
 * 2. "pe alocuri mai adauga nunatele de sage green si ivory"
 */
export const Navbar: React.FC<NavbarProps> = ({ onOpenDossier }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('acasa');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['acasa', 'jurnal-hologram', 'shadowing', 'galerie', 'impact'];
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
    return () => window.removeEventListener('keydown', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Jurnal pe Zile', href: '#jurnal-hologram', id: 'jurnal-hologram' },
    { label: 'Job Shadowing STEM', href: '#shadowing', id: 'shadowing' },
    { label: 'Galerie Foto', href: '#galerie', id: 'galerie' },
    { label: 'Mărturii & Rezultate', href: '#impact', id: 'impact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#142232]/98 backdrop-blur-xl border-b border-[#25374d] shadow-2xl shadow-black/25'
          : 'py-3.5 bg-[#172738]/95 backdrop-blur-lg border-b border-[#293d55] shadow-lg shadow-black/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Badge Ivory + Albastru Închis */}
          <a
            href="#acasa"
            onClick={() => audioSystem.playSelectSound()}
            className="flex items-center gap-3 text-white group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#f5ebdc] text-[#142232] flex items-center justify-center font-display font-black text-sm shadow-md group-hover:scale-105 transition-transform border border-[#c8b28a]/40">
              SH
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base sm:text-lg tracking-tight text-[#f5ebdc] group-hover:text-white transition-colors drop-shadow-xs">
                  Erasmus+ Aachen 2026
                </span>
                <span className="w-2 h-2 rounded-full bg-[#758467] animate-pulse shadow-sm shadow-[#758467]/60" />
              </div>
              <p className="text-[11px] text-slate-300 font-medium tracking-wide">
                Liceul Tehnologic „Solomon Haliță” · 19 – 23 Mai 2026
              </p>
            </div>
          </a>

          {/* Nav Links cu Contrast Înalt & Albastru Închis */}
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

          {/* Acțiuni Rapide (Dossier Oficial cu accent Sage Green & Ivory) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onOpenDossier();
                audioSystem.playSelectSound();
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#758467] hover:bg-[#667459] text-[#f5ebdc] text-xs font-bold shadow-md shadow-[#758467]/30 transition-all hover:scale-105 active:scale-95 border border-[#c8b28a]/40"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Dossier Oficial</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0e1925] text-white hover:bg-white/15 border border-[#273a4e] lg:hidden"
              aria-label="Meniu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Meniu Mobil Albastru Închis cu accente Ivory */}
        {mobileMenuOpen && (
          <div className="mt-3 p-4 rounded-2xl bg-[#142232] border border-[#273a4e] shadow-2xl lg:hidden flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    audioSystem.playSelectSound();
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#f5ebdc] text-[#142232] shadow-md font-black'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#758467]" />}
                </a>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
};
