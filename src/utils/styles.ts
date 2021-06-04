import { PillPityProps } from '../pill-pity';
import { useParseColor } from './color';
import { patterns } from './patterns';
import { getFill, getOpacity } from './props';
import { isNumber } from '@chakra-ui/utils';

const DEFAULT_OPACITY = 0.4;
const DEFAULT_FILL = 'gray.600';
const DEFAULT_BACKGROUND = 'gray.100';

/**
 * Generate Hero Pattern Props
 * @param props props passed to be parsed
 * @returns HeroPattern Props
 */
export const usePatternStyles = (props: Required<PillPityProps>) => {
  const { pattern } = props;
  const template = patterns[pattern];
  const _opacity = getOpacity(props);
  const opacity =
    isNumber(_opacity) && _opacity >= 0 ? _opacity : DEFAULT_OPACITY;

  const _fill = getFill(props) || DEFAULT_FILL;
  // parse the provided `fillColor`
  const fill = useParseColor(_fill);

  const bgImage = template
    // set the patternFill
    .replace('PATFILL', fill.replace('#', '%23'))
    // set the pattern opacity
    .replace('PATOPACITY', opacity.toString());

  const patternStyles = { bgImage, bgColor: DEFAULT_BACKGROUND };

  // return empty object if valid pattern is not provided
  return Object.keys(patterns).includes(pattern) ? patternStyles : {};
};
