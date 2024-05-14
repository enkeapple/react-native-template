import type { BottomSheetMethods } from '@gorhom/bottom-sheet/src/types';
import { createRef } from 'react';

class SwipeablePanelContext {
  ref = createRef<BottomSheetMethods>();

  expand = () => {
    this.ref?.current?.expand();
  };

  collapse = () => {
    this.ref?.current?.collapse();
  };

  close = () => {
    this.ref?.current?.close();
  };
}

export const SwipeablePanelService = {
  feedbackPanel: new SwipeablePanelContext(),
  challengeResultPanel: new SwipeablePanelContext(),
};
