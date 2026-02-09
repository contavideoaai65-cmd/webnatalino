import { useCallback, useRef } from "react";

// Creates a "plu plu plu" notification sound using Web Audio API
export const useNotificationSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playNotificationSound = useCallback(() => {
    try {
      // Create or reuse AudioContext
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      
      // Resume context if suspended (browser autoplay policy)
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      
      // Create 3 "plu" sounds with slight delay between them
      const playPlu = (startTime: number, frequency: number) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        // Use sine wave for a soft, pleasant "plu" sound
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(frequency, startTime);
        oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.7, startTime + 0.08);
        
        // Volume envelope for "plu" effect
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.12);
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + 0.15);
      };

      // Play 3 "plu" sounds: plu plu plu
      playPlu(now, 800);        // First plu
      playPlu(now + 0.12, 900); // Second plu (slightly higher)
      playPlu(now + 0.24, 1000); // Third plu (highest)
      
    } catch (error) {
      console.log("Could not play notification sound:", error);
    }
  }, []);

  return { playNotificationSound };
};
