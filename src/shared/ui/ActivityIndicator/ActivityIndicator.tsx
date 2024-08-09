import React from 'react';
import Modal from 'react-native-modal';
import { Dimensions, ActivityIndicator as Indicator } from 'react-native';
import { Box } from 'ui';
import { useStyles } from 'react-native-unistyles';

interface ActivityIndicatorProps {
  isVisible: boolean;
  color?: string;
  backdropOpacity?: number;
}

const { width, height } = Dimensions.get('screen');

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  isVisible,
  color,
  backdropOpacity = 0.4,
}) => {
  const { theme } = useStyles();

  const { colors } = theme;

  return (
    <Modal
      backdropOpacity={backdropOpacity}
      backdropColor={colors.text_black}
      isVisible={isVisible}
      animationIn="fadeIn"
      animationInTiming={250}
      animationOutTiming={100}
      animationOut="fadeOut"
      statusBarTranslucent
      deviceHeight={height}
      deviceWidth={width}>
      <Box f={1} jc="center" ai="center">
        <Indicator size="large" color={color || colors.branding_primary} />
      </Box>
    </Modal>
  );
};
