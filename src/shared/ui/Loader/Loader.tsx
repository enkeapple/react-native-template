import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Box } from 'ui';
import { TextStyleProps } from 'themes';
import { useStyles } from 'react-native-unistyles';

interface LoaderProps extends Pick<TextStyleProps, 'color'> {
  size?: 'small' | 'large';
}

export const Loader: React.FC<LoaderProps> = ({
  color = 'text_white',
  size = 'small',
}) => {
  const { theme } = useStyles();

  return (
    <Box ai="center" jc="center">
      <ActivityIndicator color={theme.colors[color]} size={size} />
    </Box>
  );
};
