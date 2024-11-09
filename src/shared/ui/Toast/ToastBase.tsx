import React, { FC } from 'react';
import { Dimensions } from 'react-native';
import { ToastService } from 'services';
import { Box, Icon, Text, Pressable } from 'ui';
import { Theme } from 'types';
import { FontSizes, Spaces } from 'themes';
import type { ToastTypes } from './ToastMessage';

interface ToastBaseProps {
  type: ToastTypes;
  title?: string;
  description?: string;
}

const { width } = Dimensions.get('window');

const iconNames = {
  success: 'checkmark',
  danger: 'alert-triangle',
  warning: 'info',
  info: 'info',
};

const colorNames: Record<ToastTypes, keyof Theme['colors']> = {
  success: 'semantic_success_100',
  danger: 'semantic_danger_100',
  warning: 'semantic_warning_100',
  info: 'semantic_info_100',
};

export const ToastBase: FC<ToastBaseProps> = ({ type, title, description }) => (
  <Box w={width - 24} br={4} ai="center" fd="row" bgc="text_white">
    <Box w={8} h="100%" btlr={8} btrr={8} mh={48} bgc={colorNames[type]} />

    <Box f={1} fd="row" ai="center">
      <Box f={1} fd="row" ai="center" pvl={Spaces['2xs']} pb={Spaces.sm}>
        <Box mr={Spaces.sm}>
          <Icon
            name={iconNames[type] as string}
            size={20}
            color={colorNames[type]}
          />
        </Box>

        <Box f={1}>
          {!!title && (
            <Text
              ff="Medium"
              fs={FontSizes.md}
              lh={FontSizes.xl}
              color="text_black">
              {title}
            </Text>
          )}

          {!!description && (
            <Text ff="Regular" fs={14} color="text_black">
              {description}
            </Text>
          )}
        </Box>
      </Box>

      <Pressable
        w={48}
        h={48}
        ai="center"
        jc="center"
        mr={12}
        onPress={ToastService.onHide}>
        <Icon name="close" size={20} color="text_black" />
      </Pressable>
    </Box>
  </Box>
);
