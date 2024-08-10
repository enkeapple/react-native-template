import React, { useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ViewStyleProps } from 'themes';
import { transformViewStyle } from './helpers';

interface BoxProps
  extends ViewStyleProps,
    Pick<ViewProps, 'style' | 'children' | 'testID'> {}

export const Box: React.FC<BoxProps> = ({
  style,
  children,
  testID,
  ...rest
}) => {
  const { styles } = useStyles(stylesheet);

  const memoizedStyles = useMemo(() => styles.layout(rest), [rest]);

  return (
    <View testID={testID} style={[memoizedStyles, style]}>
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  layout: (props: ViewStyleProps) => transformViewStyle(props, theme),
}));
