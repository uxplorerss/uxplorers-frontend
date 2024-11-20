export interface ThemeType {
  colors: {
    primary: {
      whitened: string;
      lightest: string;
      lighter: string;
      light: string;
      base: string;
      primary: string;
      slight: string;
      dark: string;
      darker: string;
      darkest: string;
    };
    gray: {
      whitened: string;
      lightest: string;
      lighter: string;
      light: string;
      base: string;
      primary: string;
      slight: string;
      dark: string;
      darker: string;
      darkest: string;
      blackened: string;
    };
    accent: {
      success: string;
      info: string;
      warning: string;
      danger: string;
    };
  };
  fontSize: {
    small: string;
    normal: string;
    medium: string;
    large: string;
  };
  lineHeight: {
    small: string;
    normal: string;
    medium: string;
    large: string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    bold: number;
    extraBold: number;
  };
  spacing: {
    small: string;
    normal: string;
    medium: string;
    large: string;
  };
  radii: {
    small: string;
    normal: string;
    medium: string;
    large: string;
    full: string;
  };
  zIndex: {
    modal: number;
    dropdown: number;
    header: number;
    default: number;
    behind: number;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  heights: {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    full: string;
    screen: string;
  };
}

const theme: ThemeType = {
  colors: {
    primary: {
      whitened: 'e6f6eb',
      lightest: '#c4e8ce',
      lighter: '#9ed9af',
      light: '#75ca90',
      base: '#55bf78',
      primary: '#31b361',
      slight: '#28a457',
      dark: '#1e924b',
      darker: '#148140',
      darkest: '#00612c',
    },
    gray: {
      whitened: '#f9fafb',
      lightest: '#f3f4f6',
      lighter: '#e5e7eb',
      light: '#d1d5db',
      base: '#9ca3af',
      primary: '#6b7280',
      slight: '#4b5563',
      dark: '#374151',
      darker: '#1f2937',
      darkest: '#111827',
      blackened: '#030712',
    },
    accent: {
      success: '#28a745',
      info: '#17a2b8',
      warning: '#ffc107',
      danger: '#dc3545',
    },
  },
  fontSize: {
    small: '0.75rem',
    normal: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
  lineHeight: {
    small: '1.2',
    normal: '1.4',
    medium: '1.2',
    large: '1.2',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
  },
  spacing: {
    small: '0.75rem',
    normal: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
  radii: {
    small: '0.5rem',
    normal: '0.75rem',
    medium: '1rem',
    large: '2rem',
    full: '9999px',
  },
  zIndex: {
    modal: 1000,
    dropdown: 900,
    header: 800,
    default: 1,
    behind: -1,
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px',
  },
  heights: {
    small: '1rem',
    medium: '1.5rem',
    large: '2.25rem',
    extraLarge: '3.5rem',
    full: '100%',
    screen: '100vh',
  },
};

export default theme;
