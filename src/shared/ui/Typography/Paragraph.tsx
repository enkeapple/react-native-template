/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components/native';
import { StyledProps, Text } from 'themes';
import { match } from 'ts-pattern';
import {
  FontWeightType,
  constructFontFamily,
  constructFontWeight,
} from './helpers';

type ParagraphSize = 'p1' | 'p2' | 'p3' | 'p4';

interface StyledParagraphProps extends Omit<StyledProps, 'theme'> {
  size?: ParagraphSize;
  type?: FontWeightType;
  numberOfLines?: number;
}

export interface ParagraphProps extends StyledParagraphProps {
  value?: string;
  withUpperCase?: boolean;
  onPress?: () => void;
}

const constructFontSize = (size?: ParagraphSize) =>
  match(size)
    .with('p1', () => '16px')
    .with('p2', () => '14px')
    .with('p3', () => '12px')
    .with('p4', () => '10px')
    .otherwise(() => '14px');

const constructLineHeight = (size?: ParagraphSize) =>
  match(size)
    .with('p1', () => '24px')
    .with('p2', () => '21px')
    .with('p3', () => '18px')
    .with('p4', () => '18px')
    .otherwise(() => '21px');

const StyledParagraph = styled(Text)<StyledParagraphProps>`
  font-size: ${({ size }) => constructFontSize(size)};
  font-weight: ${({ type }) => constructFontWeight(type)};
  font-family: ${({ type, theme }) =>
    constructFontFamily(type || 'bold', theme)};
  line-height: ${({ size }) => constructLineHeight(size)};
`;

export const Paragraph: React.FC<ParagraphProps> = ({
  size,
  type = 'bold',
  value = '',
  withUpperCase,
  numberOfLines,
  ...rest
}) => (
  <StyledParagraph
    {...rest}
    numberOfLines={numberOfLines}
    size={size || 'p1'}
    type={type}>
    {withUpperCase ? value.toUpperCase() : value}
  </StyledParagraph>
);
