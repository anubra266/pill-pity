import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import PillPity from '../.';

const App = () => {
  return (
    <ChakraProvider>
      <PillPity pattern="topography" p="48" color="blue" pill="green.800">
        I am a Box with Pattern
      </PillPity>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
