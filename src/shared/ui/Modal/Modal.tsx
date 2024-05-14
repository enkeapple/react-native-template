import { Box } from 'themes';
import React, { ReactNode } from 'react';
import { Icon } from 'ui';
import RNModal from 'react-native-modal';
import styled, { useTheme } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

interface ModalProps {
  children: ReactNode | ReactNode[];
  isModalVisible: boolean;
  isHideCloseIcon?: boolean;
  hasKeyboardSpace?: boolean;
  onModalClose: () => void;
  onBackdropPress?: () => void;
  containerColor?: string;
  padding?: number | number[];
  radius?: number;
  marginBottom?: number;
  onModalHide?: () => void;
}

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 999;
`;

export const Modal: React.FC<ModalProps> = ({
  children,
  isModalVisible,
  onBackdropPress,
  onModalClose,
  hasKeyboardSpace,
  isHideCloseIcon = false,
  containerColor,
  padding,
  radius,
  marginBottom,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <RNModal
      {...rest}
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      backdropTransitionOutTiming={0}
      backdropOpacity={0.4}
      animationIn="fadeIn"
      animationInTiming={250}
      animationOutTiming={100}
      animationOut="fadeOut"
      statusBarTranslucent
      deviceHeight={height}
      deviceWidth={width}>
      <Box
        bgc={containerColor || colors.bg_card}
        mb={marginBottom || (hasKeyboardSpace ? 100 : 0)}
        p={padding ?? 16}
        br={`${radius || 20}px`}>
        {!isHideCloseIcon && (
          <CloseButton onPress={onModalClose}>
            <Icon name="close" size={24} color={colors.text_tertiary} />
          </CloseButton>
        )}

        {children}
      </Box>
    </RNModal>
  );
};
