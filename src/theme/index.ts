const theme = {
  colors: {
    primary: {
      sub: '#fff8fe',
      base: '#ba00a6',
    },
    gray: {
      black: '#272727',
      0: '#555555',
      1: '#a5a5a5',
      2: '#eaeaea',
      3: '#f5f5f5',
      4: '#858585',
      white: '#ffffff',
    },
  },
  fontSize: {
    1: '0.937rem',
    2: '0.687rem',
    3: '1rem',
    4: '1.5rem',
    5: '0.875rem',
    6: '0.937rem',
    title: '1.625rem',
    body: '1.25rem',
  },
  lineHeight: {
    1: 'normal',
    2: 'normal',
    3: 'normal',
    4: 'normal',
    5: 'normal',
    6: 'normal',
    title: '1.2',
    body: 'normal',
  },
  fontWeight: {
    1: 600,
    2: 600,
    3: 600,
    4: 600,
    5: 600,
    6: 400,
    title: 700,
    body: 500,
  },
  spacing: {
    normal: '1.25rem',
  },
  radii: {
    normal: '1.06rem',
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
} as const;

export type ThemeType = typeof theme;

export default theme;
