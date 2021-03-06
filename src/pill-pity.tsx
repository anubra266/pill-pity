import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import React from 'react';
import { Pattern } from './utils/patterns';
import { extractProps } from './utils/props';
import { usePatternStyles } from './utils/styles';

export interface PillPityProps extends BoxProps {
  pattern?: Pattern;
  // fill
  patternFill?: string;
  patFill?: string;
  pill?: string;
  // opacity
  patternOpacity?: number;
  patOpacity?: number;
  pity?: number;
}

export const PillPity = forwardRef<PillPityProps, 'div'>((props, ref) => {
  const rest = extractProps(props);
  const patternStyles = usePatternStyles(props as any);
  return <Box {...patternStyles} {...rest} ref={ref} />;
});
