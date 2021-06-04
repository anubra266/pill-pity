import { useTheme, useToken } from '@chakra-ui/react';

/**
 * transform the color token or css value
 * @param _color color to transform
 * @returns Hexadecimal color
 */
export const useParseColor = (_color: string) => {
  const theme = useTheme();

  const key = `colors.${_color}`;
  const isChakraToken = key in theme.__cssMap;
  const [tokenToHexColor] = useToken('colors', [_color]);
  if (isChakraToken) return tokenToHexColor;

  //   return _color;
};
