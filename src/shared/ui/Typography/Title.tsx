/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components/native';
import { StyledProps, Text } from 'themes';
import { match } from 'ts-pattern';

type TitleSize = 'h1' | 'h2' | 'h3' | 'h4';

interface StyledTitleProps extends Omit<StyledProps, 'theme'> {
  size?: TitleSize;
  color?: string;
}

interface TitleProps extends StyledTitleProps {
  value?: string;
  withUpperCase?: boolean;
  color?: string;
}

const constructFontSize = (size?: TitleSize) =>
  match(size)
    .with('h1', () => '32px')
    .with('h2', () => '30px')
    .with('h3', () => '20px')
    .with('h4', () => '16px')
    .otherwise(() => '20px');

const constructLineHeight = (size?: TitleSize) =>
  match(size)
    .with('h1', () => '40px')
    .with('h2', () => '40px')
    .with('h3', () => '26.6px')
    .with('h4', () => '24px')
    .otherwise(() => '26.6px');

const StyledTitle = styled(Text)<StyledTitleProps>`
  font-size: ${({ size }) => constructFontSize(size)};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Bold};
  color: ${({ theme, color }) => color || theme.colors.text_primary};
  line-height: ${({ size }) => constructLineHeight(size)};
`;

export const Title: React.FC<TitleProps> = ({
  size = 'h1',
  value = '',
  withUpperCase,
  ...rest
}) => (
  <StyledTitle {...rest} size={size}>
    {withUpperCase ? value.toUpperCase() : value}
  </StyledTitle>
);
