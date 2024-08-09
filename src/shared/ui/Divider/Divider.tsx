import React from 'react';
import { Spaces } from 'themes';
import { Theme } from 'types';
import { Box } from 'ui';

type DividerType = 'horizontal' | 'vertical';

interface DividerProps {
  withSpace?: boolean;
  color?: keyof Theme['colors'];
  type?: DividerType;
}

export const Divider: React.FC<DividerProps> = ({
  withSpace = true,
  type = 'horizontal',
  color = 'outline_input',
}) => {
  const offset = withSpace ? Spaces.sm : 0;

  const isHorizontal = type === 'horizontal';

  return (
    <Box
      w={isHorizontal ? '100%' : 1}
      h={isHorizontal ? 1 : 20}
      bgc={color}
      mvl={isHorizontal ? offset : 0}
      mhl={!isHorizontal ? offset : 0}
    />
  );
};
