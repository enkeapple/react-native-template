/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components/native';
import { StyledProps, Text } from 'themes';
import {
  FontWeightType,
  constructFontFamily,
  constructFontWeight,
} from './helpers';

interface StyledCaptionProps {
  type: FontWeightType;
}

interface CaptionProps extends Omit<StyledProps, 'theme'> {
  value?: string | number;
  type: FontWeightType;
  withUpperCase?: boolean;
  numberOfLines?: number;
}

const StyledCaption = styled(Text)<StyledCaptionProps>`
  font-size: 12px;
  font-weight: ${({ type }) => constructFontWeight(type)};
  font-family: ${({ type, theme }) => constructFontFamily(type, theme)};
  line-height: 18px;
`;

export const Caption: React.FC<CaptionProps> = ({
  type,
  value = '',
  withUpperCase,
  numberOfLines = 1,
  ...rest
}) => (
  <StyledCaption {...rest} type={type} numberOfLines={numberOfLines}>
    {withUpperCase ? String(value).toUpperCase() : value}
  </StyledCaption>
);
