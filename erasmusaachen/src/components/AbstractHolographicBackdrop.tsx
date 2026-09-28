/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * FUNDAL VECTORIAL FĂRĂ AMESTEC DE CULORI
 * Conform cerinței exprese a utilizatorului:
 * "cromatica din fundal sa fie dusty blue si white separat, nu amestecat, iar dusty blue sa fie mai profund, mai inchis"
 * 
 * Fără gradiente blurate care să amestece dusty blue cu alb.
 * Doar rețea geometrică vectorială discretă, clară și transparentă.
 */
export const AbstractHolographicBackdrop: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Rețea fină de micro-puncte transparente */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cleanGridDots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#3b82f6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cleanGridDots)" />
      </svg>
    </div>
  );
};
