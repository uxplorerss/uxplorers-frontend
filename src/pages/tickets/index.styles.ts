import { css } from '@emotion/react';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

export const mainContent = css({
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
});

export const locationSelector = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '16px',
});

export const locationBox = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  
  '& span': {
    fontSize: '14px',
    color: '#666',
  },
  
  '& input': {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
});

export const dateSelector = css({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '8px',
});

export const dateBox = css({
  display: 'flex',
  width: '100%',
});

export const addDateButton = css({
    padding: '8px 16px',
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: 'white',
    color: '#666',
    fontSize: '14px',
    whiteSpace: 'nowrap',
});

export const searchButton = css({
  width: '100%',
  padding: '16px',
  backgroundColor: '#AAAAAA',
  color: '#BABABA',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
});