import { touchableConfig } from 'helpers';
import React, { FC, useMemo } from 'react';
import { Dimensions } from 'react-native';
import { ToastService } from 'services';
import styled, { useTheme } from 'styled-components/native';
import { Box, Text, Spaces } from 'themes';
import { Icon } from 'ui';
import type { ToastTypes } from './ToastMessage';

interface ToastBaseProps {
  type: ToastTypes;
  title?: string;
}

const { width } = Dimensions.get('window');

const iconNames = {
  success: 'checkmark',
  danger: 'alert-triangle',
  warning: 'info',
  info: 'info',
};

const ToastLayout = styled(Box)`
  min-height: 48px;
`;

const StyledButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

const StyledLine = styled(Box)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ToastBase: FC<ToastBaseProps> = ({ type, title }) => {
  const { colors, fonts } = useTheme();

  const colorNames = useMemo(
    () => ({
      success: colors.semantic_success_100,
      danger: colors.semantic_danger_100,
      warning: colors.semantic_warning_100,
      info: colors.semantic_info_100,
    }),
    [colors],
  );

  return (
    <ToastLayout
      w={`${width - 24}px`}
      br="4px"
      ai="center"
      fd="row"
      bgc={colors.bg_card}
      shadowed>
      <StyledLine w="8px" h="100%" bgc={colorNames[type] as string} />

      <Box f={1} fd="row" ai="center" p={[Spaces['2xs'], 0, Spaces['2xs'], 12]}>
        <Box mr={14}>
          <Icon
            name={iconNames[type] as string}
            size={20}
            color={colorNames[type] as string}
          />
        </Box>

        <Box f={1}>
          {!!title && (
            <Text ff={fonts.Medium} fs={16} lh={24} color={colors.text_primary}>
              {title}
            </Text>
          )}
        </Box>

        <StyledButton {...touchableConfig} onPress={ToastService.onHide}>
          <Icon name="close" size={20} color={colors.text_primary} />
        </StyledButton>
      </Box>
    </ToastLayout>
  );
};
