/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, School, Sparkles, ChevronRight, BookOpen, Images, Award, Calendar } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

interface NavbarProps { onOpenDossier: () => void; }

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
          if (scrollPosition >= top && scrollPosition < top + height) { setActiveSection(section); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Jurnal pe Zile', href: '#jurnal-hologram', id: 'jurnal-hologram', icon: Calendar },
    { label: 'Job Shadowing STEM', href: '#shadowing', id: 'shadowing', icon: BookOpen },
    { label: 'Galerie Foto', href: '#galerie', id: 'galerie', icon: Images },
    { label: 'Mărturii & Rezultate', href: '#impact', id: 'impact', icon: Award },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false); audioSystem.playSelectSound();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'py-2 sm:py-2.5 bg-[#142232]/98 backdrop-blur-xl border-b border-[#25374d] shadow-2xl' : 'py-2.5 sm:py-3.5 bg-[#172738]/95 backdrop-blur-lg border-b border-[#293d55] shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            <a href="#acasa" className="flex items-center gap-2 sm:gap-3 text-white group shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#f5ebdc] text-[#142232] flex items-center justify-center font-display font-black text-xs sm:text-sm shadow-md border border-[#c8b28a]/40 shrink-0">SH</div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2"><span className="font-display font-black text-sm sm:text-lg tracking-tight text-[#f5ebdc] truncate">Erasmus+ Aachen</span></div>
                <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium truncate">Liceul Teoretic „Solomon Haliță” · 19–23 Mai 2026</p>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-1.5 bg-[#0e1925]/75 p-1.5 rounded-2xl border border-[#273a4e]">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => audioSystem.playSelectSound()} className={`text-xs uppercase tracking-wider font-bold transition-all px-3.5 py-2 rounded-xl flex items-center gap-1.5 ${activeSection === link.id ? 'bg-[#f5ebdc] text-[#142232] shadow-md' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}>
                  {activeSection === link.id && <span className="w-1.5 h-1.5 rounded-full bg-[#758467]" />}<span>{link.label}</span>
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <button onClick={() => { setMobileMenuOpen(false); onOpenDossier(); audioSystem.playSelectSound(); }} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#758467] hover:bg-[#667459] text-[#f5ebdc] text-xs font-bold shadow-md transition-all active:scale-95 border border-[#c8b28a]/40">
                <FileText className="w-3.5 h-3.5" /><span className="hidden xs:inline">Dosar Oficial</span><span className="xs:hidden">Dosar</span>
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 sm:p-2.5 rounded-xl bg-[#0e1925] text-white border border-[#273a4e] lg:hidden">
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#f5ebdc]" /> : <Menu className="w-5 h-5 text-[#f5ebdc]" />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-3 duration-200">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-2 pb-4">
              <div className="p-4 rounded-3xl bg-[#142232] border border-[#2d435b] shadow-2xl flex flex-col gap-2.5 text-white">
                <nav className="flex flex-col gap-1.5 py-1">
                  {navLinks.map((link) => (
                    <button key={link.label} onClick={() => handleLinkClick(link.href)} className={`w-full px-4 py-3 rounded-2xl text-left text-sm font-bold transition-all flex items-center justify-between ${activeSection === link.id ? 'bg-[#f5ebdc] text-[#142232]' : 'text-slate-200 bg-[#0e1724]/60'}`}>
                      <div className="flex items-center gap-3"><link.icon className="w-4 h-4" /><span>{link.label}</span></div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};