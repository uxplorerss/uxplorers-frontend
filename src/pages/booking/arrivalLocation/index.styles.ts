import { css } from '@emotion/react';
import theme from '../../../theme';

export const Container = css({
  height: '100vh',
  background: 'white',
});

export const SearchBox = css({
  padding: '16px',
});

export const LocationList = css({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gap: '16px',
  padding: '16px',
});

export const RegionColumn = css({
  borderRight: `1px solid ${theme.colors.gray[3]}`,
});

export const TerminalColumn = css({
  overflowY: 'auto',
});

export const LocationItem = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 0',
  cursor: 'pointer',
});

export const LocationItemSelected = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 0',
  borderRight: `1px solid ${theme.colors.primary.base}`,
  color: theme.colors.primary.base,
});

export const LocationName = css({
  fontSize: '16px',
});
