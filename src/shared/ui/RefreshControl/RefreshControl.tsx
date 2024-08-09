/* eslint-disable camelcase */
import React from 'react';
import { RefreshControl as Control, RefreshControlProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export const RefreshControl = React.forwardRef<Control, RefreshControlProps>(
  ({ tintColor, colors, ...rest }, ref) => {
    const { theme } = useStyles();

    return (
      <Control
        {...rest}
        ref={ref}
        tintColor={tintColor || theme.colors.branding_primary}
        colors={colors || [theme.colors.branding_primary]}
      />
    );
  },
);
