/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * SISTEM AUDIO TACTIL CU SUNET IDENTIC ȘI ULTRA-PLĂCUT
 * Conform cerinței exprese:
 * "Sa fie acelasi sunet pentru fiecare sectiune (cel mai placut)"
 * 
 * Un acord cristalin delicat și cald de clopoței de sticlă / celestă (E5 + B5),
 * cu atac fin (15ms) și atenuare acustică catifelată, fără stridență.
 */
class AudioSystem {
  private ctx: AudioContext | null = null;
  private sfxGain: GainNode | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.sfxGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Sunetul semnătură: cel mai plăcut acord armonic cristalin
   */
  public playPleasantChime() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Note în armonie pură (E5 la 659.25Hz și B5 la 987.77Hz)
      const notes = [659.25, 987.77];

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.025);

        // Filtru cald la 2200Hz pentru a elimina orice asprime
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2200, now);

        // Plic acustic fin: atac 15ms, cădere exponențială fină
        const startTime = now + idx * 0.025;
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.linearRampToValueAtTime(0.075, startTime + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.38);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain!);

        osc.start(startTime);
        osc.stop(startTime + 0.4);
      });
    } catch {
      // Safe fallback
    }
  }

  // Toate acțiunile apelează exact același sunet (cel mai plăcut), conform cerinței
  public playSelectSound() {
    this.playPleasantChime();
  }

  public playSwipeSound() {
    this.playPleasantChime();
  }

  public playModalOpenSound() {
    this.playPleasantChime();
  }

  public playPhotoClickSound() {
    this.playPleasantChime();
  }

  public startMusic() {
    // Fără fundal continuu
  }

  public stopMusic() {
    // Fără fundal continuu
  }

  public toggleMusic() {
    // Fără fundal continuu
  }

  public getStatus() {
    return {
      isPlaying: false,
      volume: 0.7,
      isMuted: false
    };
  }

  public subscribe(listener: (isPlaying: boolean, volume: number) => void): () => void {
    listener(false, 0.7);
    return () => {};
  }
}

export const audioSystem = new AudioSystem();
