import React, { useMemo } from 'react';
import { Text as Typography, TextProps as TypographyProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TextStyleProps, FontSizes, Spaces } from 'themes';
import { transformTextStyle } from './helpers';

interface TextProps
  extends TextStyleProps,
    Pick<TypographyProps, 'style' | 'children' | 'testID'> {}

export const Text: React.FC<TextProps> = ({
  style,
  children,
  testID,
  ...rest
}) => {
  const { styles } = useStyles(stylesheet);

  const memoizedStyles = useMemo(() => styles.layout(rest), [rest]);

  return (
    <Typography testID={testID} style={[memoizedStyles, style]}>
      {children}
    </Typography>
  );
};

const stylesheet = createStyleSheet(theme => {
  const { colors, fonts } = theme;

  return {
    layout: (props: TextStyleProps) => {
      const { color, fontFamily, ...rest } = transformTextStyle(props, theme);

      return {
        fontSize: props?.fs ?? FontSizes.md,
        fontFamily: fontFamily ?? fonts.Regular,
        lineHeight: props?.lh ?? Spaces.xl,
        color: props?.color ? color : colors.text_primary,
        ...rest,
      };
    },
  };
});
