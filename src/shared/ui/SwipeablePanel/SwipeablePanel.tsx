import BottomSheet, {
  BottomSheetProps,
  BottomSheetBackdrop,
  BottomSheetFooter,
} from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import React, { useCallback } from 'react';
import type { BottomSheetMethods } from '@gorhom/bottom-sheet/src/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnyType } from 'helpers';
import { Box } from 'themes';
import { useTheme } from 'styled-components/native';

interface SwipeablePanelProps extends BottomSheetProps {
  isShowHandleIndicator?: boolean;
  children: AnyType;
  Button?: React.ReactNode;
}

export const SwipeablePanel = React.forwardRef<
  BottomSheetMethods,
  SwipeablePanelProps
>(({ children, isShowHandleIndicator = false, Button, ...rest }, ref) => {
  const { top: topSafeArea, bottom: bottomSafeArea } = useSafeAreaInsets();

  const { colors } = useTheme();

  const footerComponent = (footer: AnyType) =>
    Button ? (
      <BottomSheetFooter {...footer}>
        <Box
          bgc={colors.text_white}
          p={[16, 0, bottomSafeArea || 16]}
          br="16px">
          {Button}
        </Box>
      </BottomSheetFooter>
    ) : null;

  const renderBackdrop = useCallback(
    (props: AnyType) => (
      <BottomSheetBackdrop {...props} pressBehavior="collapse" />
    ),
    [],
  );

  return (
    <Portal>
      <BottomSheet
        {...rest}
        ref={ref}
        snapPoints={rest.snapPoints}
        backgroundStyle={{
          backgroundColor: colors.text_white,
        }}
        topInset={topSafeArea}
        backdropComponent={renderBackdrop}
        handleHeight={isShowHandleIndicator ? 2 : 0}
        handleIndicatorStyle={undefined}
        footerComponent={footerComponent}
        animateOnMount>
        <Box f={1} p={[0, 0, 30]}>
          {children}
        </Box>
      </BottomSheet>
    </Portal>
  );
});
