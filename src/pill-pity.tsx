import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { extractProps } from './utils/props';

export interface PillPityProps extends BoxProps {
  // fill
  patternFill?: string;
  patFill?: string;
  pill?: string;
  // opacity
  patternOpacity?: number;
  patOpacity?: number;
  pity?: number;
}

export const PillPity = (props: PillPityProps) => {
  const rest = extractProps(props);
  return <Box {...rest}>wow</Box>;
};
