import { PillPityProps } from '../pill-pity';
import { useParseColor } from './color';
import { patterns } from './patterns';
import { getFill, getOpacity } from './props';

const DEFAULT_OPACITY = 0.4;
const DEFAULT_FILL = '#9c92ac';
const DEFAULT_BACKGROUND = '#dfdbe5';

/**
 * Generate Hero Pattern Props
 * @param props props passed to be parsed
 * @returns HeroPattern Props
 */
export const usePatternStyles = (props: Required<PillPityProps>) => {
  const { pattern } = props;

  const template = patterns[pattern];
  const opacity = getOpacity(props) || DEFAULT_OPACITY;
  const _fill = getFill(props) || DEFAULT_FILL;
  // parse the provided `fillColor`
  const fill = useParseColor(_fill);

  const bgImage = template
    // set the patternFill
    .replace('PATFILL', fill.replace('#', '%23'))
    // set the patterb opacity
    .replace('PATOPACITY', opacity);

  const patternStyles = { bgImage, bgColor: DEFAULT_BACKGROUND };

  // return empty object if valid pattern is not provided
  return Object.keys(patterns).includes(pattern) ? patternStyles : {};
};
