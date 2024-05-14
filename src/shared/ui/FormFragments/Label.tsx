import React from 'react';
import { useTheme } from 'styled-components/native';
import { Box, Text, FontSizes, Spaces } from 'themes';

interface LabelProps {
  label?: string;
  hasStar?: boolean;
  isImportant?: boolean;
  isError?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  label,
  hasStar,
  isImportant,
  isError,
}) => {
  const { fonts, colors } = useTheme();

  return (
    <Box fd="row" jc="space-between" w="100%">
      {!!label && (
        <Box fd="row">
          <Text
            ff={fonts.Regular}
            fs={FontSizes.xs}
            mb={Spaces['2xs']}
            fnw="500"
            color={isError ? colors.semantic_danger_100 : colors.text_primary}>
            {label}
          </Text>

          {hasStar && (
            <Text
              ff={fonts.Regular}
              fs={FontSizes.sm}
              mb={Spaces['2xs']}
              color={
                isImportant ? colors.semantic_danger_100 : colors.text_primary
              }>
              {' *'}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};
