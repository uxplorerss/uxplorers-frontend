import { css } from '@emotion/react'

export const inputStyle = css({
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  '::placeholder': {
    color: '#888', // Placeholder color
    fontStyle: 'italic', // Optional
  },
});