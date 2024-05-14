import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const LoaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

interface LoaderProps {
  color?: string;
  size?: 'small' | 'large';
}

export const Loader: React.FC<LoaderProps> = ({ color, size = 'small' }) => {
  const { colors } = useTheme();

  return (
    <LoaderContainer>
      <ActivityIndicator color={color || colors.bg_card} size={size} />
    </LoaderContainer>
  );
};
