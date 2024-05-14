import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Box, Text } from 'themes';
import { Icon } from 'ui/Icon/Icon';

interface IconButtonProps {
  iconName: string;
  iconColor?: string;
  iconSize?: number;
  onPress?: () => void;
  isRounded?: boolean;
  badge?: number;
  isBorder?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.TouchableOpacity<{
  isRounded: boolean;
  isBorder: boolean;
  disabled: boolean;
}>`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.bg_card};
  border-width: ${({ isBorder }) => (isBorder ? '1px' : 0)};
  border-color: ${({ theme }) => theme.colors.outline_input};
  border-radius: ${({ isRounded }) => (isRounded ? '24px' : '10px')};
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Badges = styled(Box)`
  position: absolute;
  right: 2px;
  top: 2px;
`;

export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  iconColor,
  iconName,
  isRounded = false,
  iconSize = 22,
  badge,
  isBorder = true,
  disabled = false,
}) => {
  const { colors, fonts } = useTheme();

  return (
    <StyledButton
      isRounded={isRounded}
      onPress={onPress}
      isBorder={isBorder}
      disabled={disabled}>
      {!!badge && (
        <Badges
          br="7px"
          w="14px"
          h="14px"
          bgc={colors.branding_primary_gradient_primary}
          ai="center"
          jc="center">
          <Text
            fnw="700"
            ff={fonts.Bold}
            fs={8}
            lh={12}
            color={colors.text_white}>
            {badge}
          </Text>
        </Badges>
      )}

      <Icon
        name={iconName}
        color={iconColor || colors.text_secondary}
        size={iconSize}
      />
    </StyledButton>
  );
};
