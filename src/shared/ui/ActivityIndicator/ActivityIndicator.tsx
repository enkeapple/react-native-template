import React from 'react';
import Modal from 'react-native-modal';
import { Dimensions, ActivityIndicator as Indicator } from 'react-native';
import { Box } from 'themes';
import { useTheme } from 'styled-components/native';

interface ActivityIndicatorProps {
  isVisible: boolean;
  color?: string;
  backgroundOpacity?: number;
}

const { width, height } = Dimensions.get('screen');

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  isVisible,
  color,
  backgroundOpacity,
}) => {
  const { colors } = useTheme();

  return (
    <Modal
      backdropOpacity={backgroundOpacity || 0.4}
      backdropColor="#000"
      isVisible={isVisible}
      animationIn="fadeIn"
      animationInTiming={250}
      animationOutTiming={100}
      animationOut="fadeOut"
      statusBarTranslucent
      deviceHeight={height}
      deviceWidth={width}>
      <Box f={1} jc="center" ai="center">
        <Indicator
          size="large"
          color={color || colors.branding_primary_gradient_primary}
        />
      </Box>
    </Modal>
  );
};
