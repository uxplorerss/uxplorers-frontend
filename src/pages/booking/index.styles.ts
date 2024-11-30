import { css } from '@emotion/react';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const mainContent = css({
    flex: '0 1 auto',
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
    flexDirection: 'row',
    gap: '12px',
    marginTop: '8px',
});

export const dateBox = css({
  width: '50%',
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

export const DatePickerWrapper = css({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'white',
  padding: '20px',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  height: '70%',
});

export const bottomBarWrapper = css({
  marginTop: 'auto',  // 남은 공간을 위쪽에 배치
  position: 'sticky',
  bottom: 0,
  background: 'white',
});