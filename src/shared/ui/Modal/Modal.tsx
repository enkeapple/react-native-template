import React, { ReactNode } from 'react';
import { Box, Icon, Pressable } from 'ui';
import RNModal from 'react-native-modal';
import { Dimensions } from 'react-native';
import { ViewStyleProps, Spaces } from 'themes';

const { width, height } = Dimensions.get('screen');

interface ModalProps
  extends Pick<ViewStyleProps, 'mvl' | 'mhl' | 'pvl' | 'phl' | 'bgc' | 'br'> {
  children: ReactNode | ReactNode[];
  isModalVisible: boolean;
  isHideCloseIcon?: boolean;
  hasKeyboardSpace?: boolean;
  onModalClose: () => void;
  onBackdropPress?: () => void;
  marginBottom?: number;
  onModalHide?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isModalVisible,
  onBackdropPress,
  onModalClose,
  isHideCloseIcon = false,
  bgc = 'bg_primary',
  br = 10,
  mvl = 0,
  mhl = Spaces.md,
  pvl = Spaces.sm,
  phl = Spaces.xs,
  ...rest
}) => (
  <RNModal
    {...rest}
    isVisible={isModalVisible}
    onBackdropPress={onBackdropPress}
    backdropTransitionOutTiming={0}
    backdropOpacity={0.6}
    animationIn="fadeIn"
    animationInTiming={250}
    animationOutTiming={100}
    animationOut="fadeOut"
    statusBarTranslucent
    deviceHeight={height}
    deviceWidth={width}>
    <Box bgc={bgc} mvl={mvl} mhl={mhl} pvl={pvl} phl={phl} br={br}>
      {!isHideCloseIcon && (
        <Pressable z={999} t={8} l={8} pos="absolute" onPress={onModalClose}>
          <Icon name="close" size={20} color="text_black" />
        </Pressable>
      )}

      {children}
    </Box>
  </RNModal>
);
