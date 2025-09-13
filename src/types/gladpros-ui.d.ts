// Type declarations for @gladpros/ui module
declare module '@gladpros/ui' {
  import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

  // Card components
  export const Card: React.ForwardRefExoticComponent<any>;
  export const CardContent: React.ForwardRefExoticComponent<any>;
  export const CardHeader: React.ForwardRefExoticComponent<any>;
  export const CardTitle: React.ForwardRefExoticComponent<any>;
  
  // Button component
  export const Button: React.ForwardRefExoticComponent<any>;
  
  // Badge component
  export const Badge: React.ForwardRefExoticComponent<any>;
  
  // Export all other possible components
  export * from '@gladpros/ui/types';
}

// Fallback for any missing exports
declare module '@gladpros/ui/types' {
  export interface ComponentProps {
    children?: React.ReactNode;
    className?: string;
  }
}