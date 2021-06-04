import { PillPityProps } from '../pill-pity';
import { isEmpty } from '@chakra-ui/utils';

export const extractProps = (props: PillPityProps) => {
  const extractedProps = Object.entries(props)
    .filter(([prop]) => !pillPityProps.includes(prop))
    .reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {} as const);
  return extractedProps;
};

export const getOpacity = (props: PillPityProps) => {
  // get all opacity props
  const opacityProps = Object.entries(props)
    .filter(([prop]) => patternOpacityProps.includes(prop))
    //get the defined props
    .filter(isValidProp);
  return lastEntry(opacityProps);
};

export const getFill = (props: PillPityProps) => {
  // get all fill props
  const fillProps = Object.entries(props)
    .filter(([prop]) => patternFillProps.includes(prop))
    //filter the defined props
    .filter(isValidProp);
  return lastEntry(fillProps);
};

const isValidProp = ([_, value]: any) => !!value;

// get latest entry if multiple props are entered, e.g. `pill` and `patFill`
const lastEntry = (entries: any[]) =>
  isEmpty(entries) ? null : entries[entries.length - 1][1];

export const patternFillProps = ['patternFill', 'patFill', 'pill'];

export const patternOpacityProps = ['patternOpacity', 'patOpacity', 'pity'];

export const pillPityProps = [
  'pattern',
  ...patternFillProps,
  ...patternOpacityProps,
];
