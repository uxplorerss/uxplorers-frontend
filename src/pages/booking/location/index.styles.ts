import { css } from '@emotion/react';

export const Container = css({
  height: '100vh',
  background: 'white',
});

export const SearchBox = css({
  padding: '16px',
});

export const LocationList = css({
  padding: '0 16px',
});

export const LocationItem = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 0',
  borderBottom: '1px solid #eee',
});

export  const LocationName = css({
  fontSize: '16px',
});

export const InfoIcon = css({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: '1px solid #ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  color: '#666',
});
