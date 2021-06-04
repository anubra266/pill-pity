import { PillPityProps } from '../pill-pity';

export const pillPityProps = [
  'patternFill',
  'patFill',
  'pill',
  'patternOpacity',
  'patOpacity',
  'pity',
];

export const extractProps = (props: PillPityProps) => {
  const extractedProps = Object.entries(props)
    .filter(([prop]) => !pillPityProps.includes(prop))
    .reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {} as const);
  return extractedProps;
};
