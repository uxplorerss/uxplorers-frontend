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
    title1: '1.625rem',
    title2: '1.5rem',
    title3: '1.25rem',
    title4: '1.125rem',
    body1: '1.25rem',
    body2: '1rem',
    body3: '1rem',
    body4: '0.9375rem',
    button1: '1.25rem',
    caption1: '0.625rem',
  },
  lineHeight: {
    title1: '1.2',
    title2: 'normal',
    title3: 'normal',
    title4: 'normal',
    title5: 'normal',
    body1: 'normal',
    body2: 'normal',
    body3: 'normal',
    body4: 'normal',
    button1: 'normal',
    caption1: 'normal',
  },
  fontWeight: {
    title1: 700,
    title2: 700,
    title3: 700,
    title4: 600,
    body1: 500,
    body2: 500,
    body3: 500,
    body4: 500,
    button1: 600,
    caption1: 500,
  },
  spacing: {
    normal: '20px',
  },
  radii: {
    normal: '17px',
    circle: '9999px',
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
