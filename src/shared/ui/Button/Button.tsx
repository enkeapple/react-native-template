import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { match } from 'ts-pattern';
import { Theme } from 'types';
import { Loader } from 'ui';
import { Box } from 'themes';
import { Label } from './Label';
import { Icon } from '../Icon/Icon';

type ButtonSize = 'xl' | 'l' | 'm' | 's';

type ButtonType =
  | 'basic'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

type ButtonVariant = 'filled' | 'outline' | 'ghost';

type BorderType = 'solid' | 'dashed' | 'dotted';

interface ButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
  onPress?: () => void;
  title?: string;
  disabled?: boolean;
  isLoading?: boolean;
  leftIconName?: string;
  rightIconName?: string;
  leftIconSize?: number;
  rightIconSize?: number;
  border?: BorderType;
  borderRadius?: number;
  noUpperCase?: boolean;
  withoutPaddings?: boolean;
  opacity?: string;
}

const constructHeight = (size: ButtonSize) =>
  match(size)
    .with('xl', () => '56px')
    .with('l', () => '48px')
    .with('m', () => '40px')
    .with('s', () => '32px')
    .otherwise(() => '48px');

const constructFilledColor = (type: ButtonType, theme: Theme) =>
  match(type)
    .with('basic', () => theme.colors.bg_card)
    .with('primary', () => theme.colors.semantic_success_100)
    .with('success', () => theme.colors.semantic_success_100)
    .with('info', () => theme.colors.semantic_info_100)
    .with('warning', () => theme.colors.semantic_warning_100)
    .with('danger', () => theme.colors.semantic_danger_100)
    .otherwise(() => theme.colors.text_white);

const constructVariantColor = (
  variant: ButtonVariant,
  type: ButtonType,
  theme: Theme,
  disabled?: boolean,
) =>
  match(variant)
    .with('filled', () =>
      disabled ? theme.colors.text_tertiary : constructFilledColor(type, theme),
    )
    .with('ghost', () => 'transparent')
    .with('outline', () => 'transparent')
    .otherwise(() => constructFilledColor(type, theme));

const constructFilledBorderColor = (type: ButtonType, theme: Theme) =>
  match(type)
    .with('basic', () => theme.colors.outline_input)
    .with('primary', () => theme.colors.semantic_success_100)
    .with('success', () => theme.colors.semantic_success_100)
    .with('info', () => theme.colors.semantic_info_100)
    .with('warning', () => theme.colors.semantic_warning_100)
    .with('danger', () => theme.colors.semantic_danger_100)
    .otherwise(() => theme.colors.text_white);

const constructOutlineBorderColor = (type: ButtonType, theme: Theme) =>
  match(type)
    .with('basic', () => theme.colors.text_tertiary)
    .with('primary', () => theme.colors.semantic_success_100)
    .with('success', () => theme.colors.semantic_success_100)
    .with('info', () => theme.colors.semantic_info_100)
    .with('warning', () => theme.colors.semantic_warning_100)
    .with('danger', () => theme.colors.semantic_danger_100)
    .otherwise(() => theme.colors.text_tertiary);

const constructVariantBorderColor = (
  variant: ButtonVariant,
  type: ButtonType,
  theme: Theme,
  disabled?: boolean,
) =>
  match(variant)
    .with('filled', () =>
      disabled
        ? theme.colors.text_tertiary
        : constructFilledBorderColor(type, theme),
    )
    .with('outline', () => constructOutlineBorderColor(type, theme))
    .with('ghost', () => 'transparent')
    .otherwise(() => constructFilledBorderColor(type, theme));

const constructFilledIconColor = (type: ButtonType, theme: Theme) =>
  match(type)
    .with('basic', () => theme.colors.text_primary)
    .otherwise(() => theme.colors.text_white);

const constructOutlineIconColor = (type: ButtonType, theme: Theme) =>
  match(type)
    .with('basic', () => theme.colors.text_tertiary)
    .with('primary', () => theme.colors.branding_primary_gradient_primary)
    .with('success', () => theme.colors.branding_primary_gradient_primary)
    .with('info', () => theme.colors.semantic_info_100)
    .with('warning', () => theme.colors.semantic_warning_100)
    .with('danger', () => theme.colors.semantic_danger_100)
    .otherwise(() => theme.colors.text_tertiary);

const constructIconColor = (
  variant: ButtonVariant,
  type: ButtonType,
  theme: Theme,
) =>
  match(variant)
    .with('filled', () => constructFilledIconColor(type, theme))
    .with('ghost', () => constructOutlineIconColor(type, theme))
    .with('outline', () => constructOutlineIconColor(type, theme))
    .otherwise(() => constructFilledColor(type, theme));

const StyledButton = styled.TouchableOpacity<{
  size: ButtonSize;
  variant: ButtonVariant;
  type: ButtonType;
  isLeftIconShown: boolean;
  isRightIconShown: boolean;
  disabled?: boolean;
  border?: BorderType;
  borderRadius: number;
  withoutPaddings?: boolean;
  opacity: string;
}>`
  height: ${({ size }) => constructHeight(size)};
  min-height: ${({ size }) => constructHeight(size)};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ type, variant, theme, disabled }) =>
    constructVariantColor(variant, type, theme, disabled)};
  padding-left: ${({ isLeftIconShown, withoutPaddings }) => {
    if (withoutPaddings) {
      return '0px';
    }
    return isLeftIconShown ? '28px' : '12px';
  }};
  padding-right: ${({ isRightIconShown, withoutPaddings }) => {
    if (withoutPaddings) {
      return '0px';
    }

    return isRightIconShown ? '28px' : '12px';
  }};
  border-width: ${({ variant }) => (variant === 'ghost' ? '0px' : '1px')};
  border-color: ${({ variant, type, theme, disabled }) =>
    constructVariantBorderColor(variant, type, theme, disabled)};
  border-style: ${({ border }) => border || 'solid'};
  opacity: ${({ variant, disabled, opacity }) =>
    variant === 'ghost' && disabled ? opacity : '1'};
`;

const LeftIconBox = styled(Box)<{ size: ButtonSize }>`
  height: ${({ size }) => constructHeight(size)};
  align-items: center;
  justify-content: center;
`;

const RightIconBox = styled(Box)<{ size: ButtonSize }>`
  height: ${({ size }) => constructHeight(size)};
  align-items: center;
  justify-content: center;
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'l',
  type = 'primary',
  title = '',
  disabled,
  isLoading,
  onPress,
  leftIconName,
  leftIconSize = 24,
  rightIconName,
  rightIconSize = 24,
  border,
  noUpperCase,
  borderRadius = 10,
  withoutPaddings,
  opacity = '0.6',
}) => {
  const theme = useTheme();

  const isFilled = variant === 'filled';

  return (
    <StyledButton
      size={size}
      variant={variant}
      type={type}
      onPress={onPress}
      disabled={isLoading || disabled}
      isLeftIconShown={!!leftIconName}
      border={border}
      isRightIconShown={!!rightIconName}
      borderRadius={borderRadius}
      opacity={opacity}
      withoutPaddings={withoutPaddings}>
      {isLoading ? (
        <Loader
          color={
            isFilled
              ? theme.colors.text_white
              : constructIconColor(variant, type, theme)
          }
        />
      ) : (
        <>
          {leftIconName && (
            <LeftIconBox size={size} m={[0, 12, 0, -24]}>
              <Icon
                name={leftIconName}
                size={leftIconSize}
                color={constructIconColor(variant, type, theme)}
              />
            </LeftIconBox>
          )}

          <Label
            title={title}
            variant={variant}
            size={size}
            type={type}
            noUpperCase={noUpperCase}
          />

          {rightIconName && (
            <RightIconBox size={size} m={[0, -24, 0, 10]}>
              <Icon
                name={rightIconName}
                size={rightIconSize}
                color={constructIconColor(variant, type, theme)}
              />
            </RightIconBox>
          )}
        </>
      )}
    </StyledButton>
  );
};
