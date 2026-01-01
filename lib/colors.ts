/**
 * Portfolio Color Palette
 * Use these colors throughout the project for consistency
 */

export const colors = {
  electricBlue: '#2F52E0',    // Primary buttons, links, highlights
  limePunch: '#BCED09',        // Accents, hover states, badges
  goldenHour: '#F9CB40',       // Secondary accents, icons
  coralBurst: '#FF715B',       // CTAs, important elements
  slate: '#4C5B5C',            // Text, borders, subtle elements
} as const;

// Tailwind class names (for reference)
export const colorClasses = {
  electricBlue: 'text-electric-blue bg-electric-blue border-electric-blue',
  limePunch: 'text-lime-punch bg-lime-punch border-lime-punch',
  goldenHour: 'text-golden-hour bg-golden-hour border-golden-hour',
  coralBurst: 'text-coral-burst bg-coral-burst border-coral-burst',
  slate: 'text-slate bg-slate border-slate',
} as const;

