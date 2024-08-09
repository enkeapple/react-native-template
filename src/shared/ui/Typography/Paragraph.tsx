/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { match } from 'ts-pattern';
import { Text } from 'ui';
import { Theme } from 'types';
import { TextStyle } from 'react-native';
import { FontFamily, FontSizes, LineHeights } from 'themes';
import {
  FontWeightType,
  constructFontFamily,
  constructFontWeight,
} from './helpers';

type ParagraphSize = 'p1' | 'p2' | 'p3' | 'p4';

interface StyledParagraphProps {
  size?: ParagraphSize;
  type?: FontWeightType;
  numberOfLines?: number;
  color: keyof Theme['colors'];
}

export interface ParagraphProps extends StyledParagraphProps {
  value?: string;
  withUpperCase?: boolean;
  onPress?: () => void;
}

const constructFontSize = (size?: ParagraphSize) =>
  match(size)
    .with('p1', () => FontSizes.md)
    .with('p2', () => FontSizes.sm)
    .with('p3', () => FontSizes.xs)
    .with('p4', () => FontSizes['2xs'])
    .otherwise(() => FontSizes.sm);

const constructLineHeight = (size?: ParagraphSize) =>
  match(size)
    .with('p1', () => LineHeights.xl)
    .with('p2', () => LineHeights.lg)
    .with('p3', () => LineHeights.md)
    .with('p4', () => LineHeights.md)
    .otherwise(() => LineHeights.lg);

export const Paragraph: React.FC<ParagraphProps> = ({
  size = 'p1',
  type = 'bold',
  value = '',
  withUpperCase,
  ...rest
}) => (
  <Text
    fs={constructFontSize(size)}
    ff={constructFontFamily(type) as unknown as keyof typeof FontFamily}
    fw={constructFontWeight(type) as TextStyle['fontWeight']}
    lh={constructLineHeight(size)}
    {...rest}>
    {withUpperCase ? value.toUpperCase() : value}
  </Text>
);
