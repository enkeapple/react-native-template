import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { Box, Spaces } from 'themes';
import { Icon } from 'ui';
import { AnyType } from 'helpers';
import { match, P } from 'ts-pattern';
import { Theme } from 'types';
import { Description, ErrorMessage, Label } from '../FormFragments';

interface InputProps extends TextInputProps {
  label?: string;
  leftIconName?: string;
  rightIconName?: string;
  leftIconSize?: number;
  rightIconSize?: number;
  leftIconColor?: string;
  rightIconColor?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  onFocusLost?: () => void;
  onFocusReceive?: () => void;
  isError?: boolean;
  error?: string;
  fullWidth?: boolean;
  withBottomOffset?: boolean;
  isWhite?: boolean;
  hasStar?: boolean;
  isImportant?: boolean;
  description?: string;
}

interface StyledInputProps {
  isLeftIconShown: boolean;
  isRightIconShown: boolean;
  isFocused: boolean;
  isError?: boolean;
  value?: string;
  disabled?: boolean;
  numberOfLines?: number;
}

const LeftIconBox = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
  z-index: 999;
`;

const RightIconBox = styled.TouchableOpacity`
  position: absolute;
  right: 17px;
  z-index: 999;
`;

const constructBorderColor = (
  theme: Theme,
  isFocused: boolean,
  isError?: boolean,
  disabled?: boolean,
  value?: string,
) =>
  match({
    isError,
    isFocused,
    disabled,
    value,
  })
    .with({ isError: true }, () => theme.colors.semantic_danger_100)
    .with(
      { isFocused: true, value: P.nullish },
      () => theme.colors.branding_primary,
    )
    .with(
      { isFocused: true, value: P.string },
      () => theme.colors.branding_primary_gradient_primary,
    )
    .otherwise(() => theme.colors.outline_input);

const StyledInput = styled.TextInput<StyledInputProps>`
  min-height: ${({ numberOfLines }) => (numberOfLines ? '95px' : '48px')};
  border-width: 1px;
  border-color: ${({ theme, isFocused, isError, disabled, value }) =>
    constructBorderColor(theme, isFocused, isError, disabled, value)};
  border-radius: 10px;
  padding-top: ${({ numberOfLines }) => (numberOfLines ? '12px' : 'auto')};
  padding-bottom: ${({ numberOfLines }) => (numberOfLines ? '12px' : 'auto')};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text_disabled : theme.colors.text_primary};
  padding-left: ${({ isLeftIconShown }) => (isLeftIconShown ? '48px' : '12px')};
  padding-right: ${({ isRightIconShown }) =>
    isRightIconShown ? '48px' : '12px'};
  background-color: ${({ theme }) => theme.colors.bg_input};
`;

const defaultIconSize = 24;

export const Input: React.FC<InputProps> = ({
  label,
  onFocusReceive,
  onFocusLost,
  isError,
  error,
  fullWidth,
  withBottomOffset,
  isImportant,
  leftIconColor,
  leftIconName,
  leftIconSize,
  rightIconColor,
  rightIconName,
  rightIconSize,
  onRightPress,
  onLeftPress,
  hasStar,
  autoCapitalize = 'none',
  editable = true,
  description = '',
  ...rest
}) => {
  const [isFocused, setFocused] = useState(false);

  const { colors } = useTheme();

  return (
    <Box mb={withBottomOffset ? Spaces.md : 0}>
      <Label
        label={label}
        hasStar={hasStar}
        isImportant={isImportant}
        isError={isError}
      />

      <Box w={fullWidth ? '100%' : 'auto'} jc="center">
        {!!leftIconName && (
          <LeftIconBox onPress={onLeftPress} disabled={!onLeftPress}>
            <Icon
              name={leftIconName}
              size={leftIconSize || defaultIconSize}
              color={leftIconColor || colors.text_tertiary}
            />
          </LeftIconBox>
        )}

        {!!rightIconName && (
          <RightIconBox onPress={onRightPress} disabled={!onRightPress}>
            <Icon
              name={rightIconName}
              size={rightIconSize || defaultIconSize}
              color={rightIconColor || colors.text_tertiary}
            />
          </RightIconBox>
        )}

        <StyledInput
          {...rest}
          onFocus={() => {
            onFocusReceive?.();
            setFocused(true);
          }}
          onBlur={(e: AnyType) => {
            onFocusLost?.();
            setFocused(false);
            rest.onBlur?.(e);
          }}
          editable={editable}
          value={rest.value}
          isFocused={isFocused}
          isError={isError}
          textAlignVertical={rest.multiline ? 'top' : 'center'}
          isLeftIconShown={!!leftIconName}
          isRightIconShown={!!rightIconName}
          disabled={!editable}
          placeholderTextColor={
            editable ? colors.text_tertiary : colors.text_disabled
          }
          autoCapitalize={autoCapitalize}
        />
      </Box>

      {!!description && <Description value={description} />}

      {isError && <ErrorMessage error={error} />}
    </Box>
  );
};
