import React from 'react';
import styled from 'styled-components/native';
import { match } from 'ts-pattern';
import { Theme } from 'types';

type LabelSize = 'xxl' | 'xl' | 'l' | 'm' | 's';

type LabelType =
  | 'basic'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

type LabelVariant = 'filled' | 'outline' | 'ghost';

interface LabelProps {
  size: LabelSize;
  type: LabelType;
  variant: LabelVariant;
  title: string;
  noUpperCase?: boolean;
}

const constructFontSize = (size: LabelSize) =>
  match(size)
    .with('xxl', () => '16px')
    .with('xl', () => '16px')
    .with('l', () => '16px')
    .with('m', () => '14px')
    .with('s', () => '12px')
    .otherwise(() => '16px');

const constructLineHeight = (size: LabelSize) =>
  match(size)
    .with('xl', () => '24px')
    .with('l', () => '24px')
    .with('m', () => '20px')
    .with('s', () => '20px')
    .otherwise(() => '24px');

const constructFilledColor = (type: LabelType, theme: Theme) =>
  match(type)
    .with('basic', () => theme.colors.text_primary)
    .otherwise(() => theme.colors.text_white);

const constructOutlineColor = (type: LabelType, theme: Theme) =>
  match(type)
    .with('basic', () => theme.colors.text_secondary)
    .with('primary', () => theme.colors.branding_primary_gradient_primary)
    .with('success', () => theme.colors.branding_primary_gradient_primary)
    .with('info', () => theme.colors.semantic_info_100)
    .with('warning', () => theme.colors.semantic_warning_100)
    .with('danger', () => theme.colors.semantic_danger_100)
    .otherwise(() => theme.colors.text_tertiary);

const constructVariantColor = (
  variant: LabelVariant,
  type: LabelType,
  theme: Theme,
) =>
  match(variant)
    .with('filled', () => constructFilledColor(type, theme))
    .with('ghost', () => constructOutlineColor(type, theme))
    .with('outline', () => constructOutlineColor(type, theme))
    .otherwise(() => constructFilledColor(type, theme));

const StyledText = styled.Text<{
  size: LabelSize;
  type: LabelType;
  variant: LabelVariant;
}>`
  font-size: ${({ size }) => constructFontSize(size)};
  font-family: ${({ theme }) => theme.fonts.Bold};
  font-weight: 700;
  color: ${({ theme, variant, type }) =>
    constructVariantColor(variant, type, theme)};
  line-height: ${({ size }) => constructLineHeight(size)};
`;

export const Label: React.FC<LabelProps> = ({
  title,
  size,
  type,
  variant,
  noUpperCase,
}) => (
  <StyledText size={size} variant={variant} type={type}>
    {noUpperCase ? title : title.toUpperCase()}
  </StyledText>
);
