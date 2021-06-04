import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ChakraProvider,
  extendTheme,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import PillPity, { Pattern } from '../.';

const App = () => {
  const patterns = [
    'jigsaw',
    'overcast',
    'formal-invitation',
    'topography',
    'texture',
    'jupiter',
    'architect',
    'cutout',
    'hideout',
    'graph-paper',
    'yyy',
    'squares',
    'falling-triangles',
    'piano-man',
    'pie-factory',
    'dominos',
    'hexagons',
    'charlie-brown',
    'autumn',
    'temple',
    'stamp-collection',
    'death-star',
    'church-on-sunday',
    'i-like-food',
    'overlapping-hexagons',
    'four-point-stars',
    'bamboo',
    'bathroom-floor',
    'cork-screw',
    'happy-intersection',
    'kiwi',
    'lips',
    'lisbon',
    'random-shapes',
    'steel-beams',
    'tiny-checkers',
    'x-equals',
    'anchors-away',
    'bevel-circle',
    'brick-wall',
    'fancy-rectangles',
    'heavy-rain',
    'overlapping-circles',
    'plus',
    'rounded-plus-connected',
    'volcano-lamp',
    'wiggle',
    'bubbles',
    'cage',
    'connections',
    'current',
    'diagonal-stripes',
    'flipped-diamonds',
    'floating-cogs',
    'glamorous',
    'houndstooth',
    'leaf',
    'lines-in-motion',
    'moroccan',
    'morphing-diamonds',
    'rails',
    'rain',
    'skulls',
    'squares-in-squares',
    'stripes',
    'tic-tac-toe',
    'zig-zag',
    'aztec',
    'bank-note',
    'boxes',
    'circles-squares',
    'circuit-board',
    'curtain',
    'diagonal-lines',
    'endless-clouds',
    'eyes',
    'floor-tile',
    'groovy',
    'intersecting-circles',
    'melt',
    'overlapping-diamonds',
    'parkay-floor',
    'pixel-dots',
    'polka-dots',
    'signal',
    'slanted-stars',
    'wallpaper',
  ];
  const theme = extendTheme({
    colors: {
      brand: {
        50: '#ecefff',
        100: '#cbceeb',
        200: '#a9aed6',
        300: '#888ec5',
        400: '#666db3',
        500: '#4d5499',
        600: '#3c4178',
        700: '#2a2f57',
        800: '#181c37',
        900: '#080819',
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing="40px" w="full">
        {patterns.map((pattern: Pattern) => (
          <PillPity
            pattern={pattern}
            as={Flex}
            align="center"
            justify="center"
            fontWeight="bold"
            boxSize="200px"
            patternFill={useColorModeValue('brand.200', 'brand.400')}
            color="brand.800"
            patternOpacity={0}
          >
            {pattern}
          </PillPity>
        ))}
      </SimpleGrid>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
