/* eslint-disable camelcase */
import React from 'react';
import { RefreshControl as Control, RefreshControlProps } from 'react-native';
import { useTheme } from 'styled-components/native';

export const RefreshControl: React.FC<RefreshControlProps> = ({
  tintColor,
  colors,
  ...rest
}) => {
  const theme = useTheme();

  const { branding_primary } = theme.colors;

  return (
    <Control
      {...rest}
      tintColor={tintColor || branding_primary}
      colors={colors || [branding_primary]}
    />
  );
};
