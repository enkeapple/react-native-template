import React from 'react';
import { useTheme } from 'styled-components/native';
import { Caption } from 'ui';

interface DescriptionProps {
  value: string;
}

export const Description: React.FC<DescriptionProps> = ({ value = '' }) => {
  const { colors } = useTheme();

  return (
    <Caption mt={5} color={colors.text_hint} value={value} type="regular" />
  );
};
