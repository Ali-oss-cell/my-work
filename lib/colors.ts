/**
 * Portfolio Color Palette - Clean Dev + Product (Minimal)
 * Clear, readable, product-focused, recruiter-friendly
 */

export const colors = {
  primary: '#FFFFFF',          // Primary background (White)
  secondary: '#F1F5F9',        // Secondary background (Light Slate)
  accent: '#2563EB',           // Accent, CTAs, links (Blue)
  highlight: '#F59E0B',        // Warning, highlights (Amber)
  text: '#0F172A',             // Primary text (Dark Navy)
  mutedText: '#475569',        // Muted text, secondary (Slate Grey)
} as const;

// Tailwind class names (for reference)
export const colorClasses = {
  electricBlue: 'text-electric-blue bg-electric-blue border-electric-blue',
  limePunch: 'text-lime-punch bg-lime-punch border-lime-punch',
  goldenHour: 'text-golden-hour bg-golden-hour border-golden-hour',
  coralBurst: 'text-coral-burst bg-coral-burst border-coral-burst',
  slate: 'text-slate bg-slate border-slate',
} as const;

