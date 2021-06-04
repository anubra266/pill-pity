import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import PillPity from '../.';

const App = () => {
  return (
    <ChakraProvider>
      <PillPity bg="red.400" h="150px" patFill="blue"></PillPity>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
