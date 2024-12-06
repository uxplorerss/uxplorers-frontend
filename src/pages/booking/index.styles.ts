import { css } from '@emotion/react';
import theme from '../../theme';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const topBarWrapper = css({
  position: 'sticky',
  top: 0,
  zIndex: 1000,
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

export const locationInputsWrapper = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const transferButtonWrapper = css({
  position: 'absolute',
  left: '95%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
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
  marginTop: '16px',
});

export const bottomBarWrapper = css({
  marginTop: 'auto', // 남은 공간을 위쪽에 배치
  position: 'sticky',
  bottom: 0,
  background: 'white',
});

export const customDatePicker = css({
  '.react-datepicker': {
    width: '100%',
    height: '100%',
    border: 'none',
    fontFamily: 'inherit',
  },

  '.react-datepicker__header': {
    backgroundColor: 'white',
    border: 'none',
  },

  '.react-datepicker__month-container': {
    float: 'none', // 기본 float 제거
    width: '100%', // 전체 너비 사용
    height: '100%',
  },

  '.react-datepicker__month': {
    margin: '0',
    padding: '0',
  },

  '.react-datepicker__week': {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 20px',
  },

  '.react-datepicker__day-names': {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 20px',
  },

  '.react-datepicker__day-name': {
    flex: '1',
    textAlign: 'center',
    margin: '0',
    width: 'auto',
  },

  '.react-datepicker__day': {
    flex: '1',
    margin: '0',
    width: 'auto',
    aspectRatio: '1/1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },

  '.react-datepicker__day--selected': {
    backgroundColor: theme.colors.primary.base,
    color: 'white',
    borderRadius: '50%',
  },
});

export const DatePickerWrapper = css([
  {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '48%',
    background: 'white',
    padding: '20px',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  customDatePicker,
]);
