import { css, Theme } from '@emotion/react';

export const buttonCSS = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.colors.gray.white};
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .charge-time__container {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;

    .tags {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
  }

  .busInfo {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
  }
`;
