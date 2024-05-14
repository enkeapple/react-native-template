import { Text } from 'themes';
import React from 'react';
import { useTheme } from 'styled-components/native';

interface ErrorMessageProps {
  error?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error = '' }) => {
  const { colors } = useTheme();

  return (
    <Text mt={5} fs={13} lh={20} color={colors.semantic_danger_100}>
      {error}
    </Text>
  );
};
