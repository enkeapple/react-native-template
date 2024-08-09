import React, { useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ViewStyleProps } from 'themes';
import { transformViewStyle } from './helpers';

interface BoxProps
  extends ViewStyleProps,
    Pick<ViewProps, 'style' | 'children'> {}

export const Box: React.FC<BoxProps> = ({ style, children, ...rest }) => {
  const { styles } = useStyles(stylesheet);

  const memoizedStyles = useMemo(() => styles.layout(rest), [rest]);

  return <View style={[memoizedStyles, style]}>{children}</View>;
};

const stylesheet = createStyleSheet(theme => ({
  layout: (props: ViewStyleProps) => transformViewStyle(props, theme),
}));
