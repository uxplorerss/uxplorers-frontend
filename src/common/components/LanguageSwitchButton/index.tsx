import React from 'react';
import { LanguagePropsType } from './index.types';
import Button from '../Button';
import { buildLanguageSwitchButton } from './index.styles';
import { useTheme } from '@emotion/react';

export default function LanguageSwitchButton({ language }: LanguagePropsType) {
  const theme = useTheme();
  switch (language) {
    case 'English':
      return <Button css={buildLanguageSwitchButton(theme)}>한</Button>;
    case 'Korean':
      return <Button css={buildLanguageSwitchButton(theme)}>ENG</Button>;
    default:
      throw new Error('No language option');
  }
}
